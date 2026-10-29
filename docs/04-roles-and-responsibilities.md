# Task 4 — Roles and Responsibilities

| Role | Responsibilities | Expected access |
|---|---|---|
| HR | Maintain employee records, coordinate leave processes, publish announcements and oversee HR information. | HR administration functions permitted by backend role checks. |
| Manager | Review relevant leave requests, monitor team activities and communicate training expectations. | Manager functions permitted by backend role checks. |
| Employee | View personal information, submit leave requests, view attendance and read announcements/training information. | Self-service features; no HR-wide administration unless explicitly authorized. |

## Authorization principles
- Authentication answers **who is signed in**.
- Authorization answers **what that user is allowed to do**.
- The backend must enforce access restrictions for every protected endpoint.
- Do not rely solely on hiding controls in React.
- A production system should also validate ownership, for example ensuring an employee can only read or update their own records unless the role permits broader access.

**Verification required:** inspect `server/src/auth.js` and the route handlers, then test requests using each role. Do not claim full permission coverage until tested.
