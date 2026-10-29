import jwt from 'jsonwebtoken';
export function auth(req,res,next){const token=req.headers.authorization?.startsWith('Bearer ')?req.headers.authorization.slice(7):null;if(!token)return res.status(401).json({message:'Please sign in first.'});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next()}catch{return res.status(401).json({message:'Session expired. Sign in again.'})}}
export function allowRoles(...roles){return(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'You do not have permission for this action.'})}
