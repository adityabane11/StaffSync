import React from "react";
import { createPortal } from "react-dom"; 
import{useEffect,useState}from'react';import{api}from'./api';import{Activity,Users,CalendarCheck,CalendarDays,FileCheck2,Megaphone,GraduationCap,LogOut,Plus,Clock3,Check,X,LayoutDashboard,Search}from'lucide-react';
const initials=n=>(n||'U').split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();const date=d=>d?new Date(d).toLocaleDateString():'—';
export default function App(){const[token,setToken]=useState(localStorage.getItem('staffsync_token')), [user,setUser]=useState(JSON.parse(localStorage.getItem('staffsync_user')||'null')),[page,setPage]=useState('Overview'),[stats,setStats]=useState({}),[employees,setEmployees]=useState([]),[leaves,setLeaves]=useState([]),[attendance,setAttendance]=useState([]),[announcements,setAnnouncements]=useState([]),[trainings,setTrainings]=useState([]),[err,setErr]=useState(''),[login,setLogin]=useState({email:'hr@staffsync.demo',password:'StaffSync123!'}),[modal,setModal]=useState(''),[form,setForm]=useState({});
const load=async()=>{if(!token)return;try{const [s,l,a,n,t]=await Promise.all(['/dashboard','/leaves','/attendance','/announcements','/trainings'].map(p=>api(p)));setStats(s);setLeaves(l);setAttendance(a);setAnnouncements(n);setTrainings(t);if(user?.role!=='employee')setEmployees(await api('/employees'));setErr('')}catch(e){setErr(e.message)}};useEffect(()=>{load()},[token]);
const signout=()=>{localStorage.clear();setToken(null);setUser(null)};const loginNow=async e=>{e.preventDefault();try{const d=await api('/auth/login',{method:'POST',body:JSON.stringify(login)});localStorage.setItem('staffsync_token',d.token);localStorage.setItem('staffsync_user',JSON.stringify(d.user));setToken(d.token);setUser(d.user);setErr('')}catch(e){setErr(e.message)}};
const action=async(path,method='POST',body={})=>{try{await api(path,{method,body:JSON.stringify(body)});setModal('');setForm({});await load()}catch(e){setErr(e.message)}};
const nav=[['Overview',LayoutDashboard],['Employees',Users],['Attendance',Clock3],['Leave requests',FileCheck2],['Announcements',Megaphone],['Training',GraduationCap]].filter(([n])=>n!=='Employees'||user?.role!=='employee');
if(!token||!user)return <div className="login"><div className="login-card"><div className="logo"><span><Activity/></span> StaffSync</div><p className="eyebrow">PEOPLE OPERATIONS PLATFORM</p><h1>Great teams start with <i>great people.</i></h1><p className="muted">Sign in to your people workspace.</p>{err&&<div className="error">{err}</div>}<form onSubmit={loginNow}><label>Work email</label><input type="email" value={login.email} onChange={e=>setLogin({...login,email:e.target.value})} required/><label>Password</label><input type="password" value={login.password} onChange={e=>setLogin({...login,password:e.target.value})} required/><button className="primary wide">Sign in →</button></form><div className="demo"><b>Demo accounts</b><p>Password for all: <code>StaffSync123!</code></p><div>{[['HR','hr@staffsync.demo'],['Manager','manager@staffsync.demo'],['Employee','employee@staffsync.demo']].map(([n,email])=><button key={n} onClick={()=>setLogin({email,password:'StaffSync123!'})}>{n}</button>)}</div></div></div></div>;
return <div className="shell"><aside><div className="logo"><span><Activity/></span> StaffSync</div><p className="side-label">WORKSPACE</p><div className="workspace">▦　 StaffSync Inc.<small>People & Culture</small></div><p className="side-label">MENU</p>{nav.map(([n,I])=><button className={'nav '+(page===n?'selected':'')} onClick={()=>setPage(n)} key={n}><I size={17}/>{n}</button>)}<div className="profile"><div className="avatar">{initials(user.name)}</div><div><b>{user.name}</b><small>{user.role}</small></div><button className="logout" onClick={signout}><LogOut size={16}/></button></div></aside><main><header><span>Workspace　/　<b>{page}</b></span><span>{new Date().toLocaleDateString()}　 <span className="avatar">{initials(user.name)}</span></span></header><section className="content">{err&&<div className="error">{err}</div>}
{page==='Overview'&&<><p className="eyebrow">YOUR WORKSPACE AT A GLANCE</p><h1>Good day, {user.name.split(' ')[0]} ✳</h1><p className="muted">Here's what's happening with your people today.</p><div className="stats">{[['Total employees',stats.employees,Users],['Pending requests',user.role==='employee'?leaves.filter(l=>l.status==='Pending').length:stats.pendingLeaves,FileCheck2],['Announcements',stats.announcements,Megaphone],['Training programs',stats.trainings,GraduationCap]].map(([n,v,I])=><div className="stat" key={n}><span>{n}</span><I/><strong>{v??'—'}</strong><small>Updated workspace data</small></div>)}</div><div className="columns"><div className="panel"><div className="panel-head"><div><b>Recent leave requests</b><small>Time-off plans and approval status</small></div><button className="text-btn" onClick={()=>setPage('Leave requests')}>View all →</button></div>{leaves.slice(0,5).map(l=><div className="line" key={l._id}><div className="avatar">{initials(l.employee?.name||user.name)}</div><div className="grow"><b>{l.employee?.name||'My request'}</b><small>{l.type} · {date(l.startDate)} – {date(l.endDate)}</small></div><span className={'pill '+l.status.toLowerCase()}>{l.status}</span></div>)}{!leaves.length&&<p className="empty">No leave requests yet.</p>}</div><div className="panel"><div className="panel-head"><div><b>Company updates</b><small>Latest announcements</small></div><button className="text-btn" onClick={()=>setPage('Announcements')}>See all →</button></div>{announcements.slice(0,4).map(a=><div className="update" key={a._id}><span className="bubble"><Megaphone size={17}/></span><div><b>{a.title}</b><p>{a.message}</p><small>{date(a.createdAt)}</small></div></div>)}</div></div><div className="quick"><button onClick={()=>{setModal('leave');setForm({type:'Annual'})}}><CalendarDays/> Request leave</button><button onClick={()=>setPage('Attendance')}><Clock3/> View attendance</button><button onClick={()=>setPage('Training')}><GraduationCap/> Explore training</button></div></>}
{page==='Employees'&&<><div className="heading"><div><p className="eyebrow">YOUR PEOPLE</p><h1>Employee directory</h1><p className="muted">Manage the people behind your organization.</p></div>{user.role==='hr'&&<button className="primary"onClick={() => {
  console.log("Add Employee clicked");
  setModal("employee");
}}><Plus size={16}/> Add employee</button>}</div><div className="panel table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>DEPARTMENT</th><th>ROLE</th><th>JOB TITLE</th></tr></thead><tbody>{employees.map(e=><tr key={e._id}><td><b>{e.name}</b><small>{e.email}</small></td><td>{e.department}</td><td><span className="pill">{e.role}</span></td><td>{e.jobTitle}</td></tr>)}</tbody></table></div></>}
{page==='Leave requests'&&<><div className="heading"><div><p className="eyebrow">TIME AWAY</p><h1>Leave requests</h1><p className="muted">Apply for leave or review your team's requests.</p></div><button className="primary" onClick={()=>{setModal('leave');setForm({type:'Annual'})}}><Plus size={16}/> Request leave</button></div><div className="panel table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>TYPE</th><th>DATES</th><th>REASON</th><th>STATUS</th>{user.role!=='employee'&&<th>REVIEW</th>}</tr></thead><tbody>{leaves.map(l=><tr key={l._id}><td>{l.employee?.name||user.name}</td><td>{l.type}</td><td>{date(l.startDate)} – {date(l.endDate)}</td><td>{l.reason}</td><td><span className={'pill '+l.status.toLowerCase()}>{l.status}</span></td>{user.role!=='employee'&&<td>{l.status==='Pending'&&<><button className="icon-btn" onClick={()=>action('/leaves/'+l._id,'PATCH',{status:'Approved'})}><Check size={16}/></button><button className="icon-btn red" onClick={()=>action('/leaves/'+l._id,'PATCH',{status:'Rejected'})}><X size={16}/></button></>}</td>}</tr>)}</tbody></table></div></>}
{page==='Attendance'&&<><div className="heading"><div><p className="eyebrow">TIME & PRESENCE</p><h1>Attendance</h1><p className="muted">Track daily check-ins.</p></div><button className="primary" onClick={()=>action('/attendance/check-in')}>Check in today</button></div><div className="panel table-wrap"><table><thead><tr><th>EMPLOYEE</th><th>DATE</th><th>CHECK-IN</th><th>STATUS</th></tr></thead><tbody>{attendance.map(a=><tr key={a._id}><td>{a.employee?.name||user.name}</td><td>{date(a.date)}</td><td>{a.checkIn?new Date(a.checkIn).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}):'—'}</td><td><span className="pill approved">Present</span></td></tr>)}</tbody></table></div></>}
{page==='Announcements'&&<><div className="heading"><div><p className="eyebrow">THE LATEST</p><h1>Announcements</h1><p className="muted">Company updates in one place.</p></div>{user.role==='hr'&&<button className="primary" onClick={()=>setModal('announcement')}><Plus size={16}/> New announcement</button>}</div><div className="cards">{announcements.map(a=><article className="panel announcement" key={a._id}><span className="bubble"><Megaphone/></span><small>{date(a.createdAt)}</small><h3>{a.title}</h3><p>{a.message}</p></article>)}</div></>}
{page==='Training'&&<><div className="heading"><div><p className="eyebrow">GROW TOGETHER</p><h1>Training & development</h1><p className="muted">Build skills and help your team grow.</p></div>{['hr','manager'].includes(user.role)&&<button className="primary" onClick={()=>setModal('training')}><Plus size={16}/> Add training</button>}</div><div className="cards">{trainings.map(t=><article className="panel announcement" key={t._id}><span className="bubble"><GraduationCap/></span><small>{date(t.date)}</small><h3>{t.title}</h3><p>{t.description}</p></article>)}</div></>}
</section></main>
{modal && createPortal(
  <div
    role="presentation"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) setModal('');
    }}
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2147483647,
      background: 'rgba(15, 23, 42, 0.72)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}
  >
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const route = {
          leave: '/leaves',
          employee: '/employees',
          announcement: '/announcements',
          training: '/trainings'
        }[modal];
        if (route) action(route, 'POST', form);
      }}
      style={{
        background: '#ffffff',
        color: '#172033',
        borderRadius: '16px',
        padding: '24px',
        width: 'min(100%, 480px)',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: '#172033' }}>
          {{ leave: 'Request leave', employee: 'Add employee', announcement: 'New announcement', training: 'Add training' }[modal] || 'Add details'}
        </h2>
        <button type="button" onClick={() => setModal('')} aria-label="Close form" style={{ border: 0, background: '#eef2f7', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer', color: '#172033' }}>✕</button>
      </div>
      {(modal === 'leave'
        ? [['type', 'Leave type', 'select'], ['startDate', 'Start date', 'date'], ['endDate', 'End date', 'date'], ['reason', 'Reason', 'textarea']]
        : modal === 'employee'
          ? [['name', 'Full name', 'text'], ['email', 'Work email', 'email'], ['password', 'Temporary password (8+ chars)', 'password'], ['role', 'Role', 'select'], ['department', 'Department', 'text'], ['jobTitle', 'Job title', 'text']]
          : modal === 'announcement'
            ? [['title', 'Title', 'text'], ['message', 'Message', 'textarea']]
            : [['title', 'Training title', 'text'], ['date', 'Date', 'date'], ['description', 'Description', 'textarea']]
      ).map(([key, label, type]) => (
        <label key={key} style={{ display: 'block', marginBottom: '14px', color: '#344054', fontSize: '14px', fontWeight: 600 }}>
          <span style={{ display: 'block', marginBottom: '6px' }}>{label}</span>
          {type === 'textarea' ? (
            <textarea required value={form[key] || ''} onChange={(event) => setForm({ ...form, [key]: event.target.value })} style={{ width: '100%', minHeight: '90px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px', color: '#172033', background: '#fff', font: 'inherit' }} />
          ) : type === 'select' ? (
            <select required value={form[key] || (key === 'type' ? 'Annual' : 'employee')} onChange={(event) => setForm({ ...form, [key]: event.target.value })} style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px', color: '#172033', background: '#fff', font: 'inherit' }}>
              {(key === 'type' ? ['Annual', 'Sick', 'Personal', 'Other'] : ['employee', 'manager', 'hr']).map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          ) : (
            <input required type={type} value={form[key] || ''} onChange={(event) => setForm({ ...form, [key]: event.target.value })} style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px', color: '#172033', background: '#fff', font: 'inherit' }} />
          )}
        </label>
      ))}
      <button type="submit" style={{ width: '100%', border: 0, borderRadius: '9px', padding: '12px 16px', background: '#4f46e5', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>Save</button>
    </form>
  </div>,
  document.body
)}
</div>}
