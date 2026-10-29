# StaffSync — Modern Human Resource Management Solution

StaffSync is a MERN-stack HR management application starter designed to demonstrate employee administration, leave requests, attendance, announcements, and training management through role-based access for HR, managers, and employees.

> **Review note:** This repository includes the application source and documentation for all 19 project tasks. Before submitting it as a completed implementation, install dependencies, configure MongoDB, run and test the application, replace the screenshot checklist with genuine screenshots, and record the demo video. The source has not been independently executed in your environment, so do not claim testing or deployment until you have verified it.

## Technology stack
- **Frontend:** React, Vite, JavaScript, CSS, Bootstrap (where used)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT) and role-based access

## Main modules
- Authentication and role-specific access
- Employee directory / employee records
- Leave requests and management
- Attendance records
- Announcements
- Training information
- Dashboard summaries

## Repository structure
```text
StaffSync/
├── client/                 # React/Vite user interface
├── server/                 # Express API, models, authentication and seed script
├── docs/                   # Tasks 1–6 and implementation explanations
├── screenshots/             # Add genuine screenshots after running the app
├── demo/                    # Demo-video plan and recording checklist
├── TASK-COMPLETION-MATRIX.md
└── README.md
```

## Prerequisites
Install a current Node.js LTS release and npm. Use either a local MongoDB instance or a MongoDB Atlas database. Use VS Code or another editor.

## Run locally
### 1. Configure the backend
Open a terminal in the repository root:
```powershell
cd server
Copy-Item .env.example .env
npm install
```
Edit `server/.env` and set a valid MongoDB URI and a long random JWT secret. Never commit `.env`.

### 2. Seed demo data and start the API
In the `server` terminal:
```powershell
npm run seed
npm run dev
```
The API is configured to run on `http://localhost:5000` unless the environment specifies another port.

### 3. Start the frontend
Open a **second** terminal from the repository root:
```powershell
cd client
Copy-Item .env.example .env
npm install
npm run dev
```
Open the local URL printed by Vite (commonly `http://localhost:5173`). The client API base URL is configured in `client/.env`.

> If PowerShell blocks `npm.ps1`, use `npm.cmd install` / `npm.cmd run dev`, or use Command Prompt. Do not change machine execution policy just for this project unless you understand the implications.

## Demo accounts
The seed script defines demo accounts with the password `StaffSync123!`:
- `hr@staffsync.demo` — HR role
- `manager@staffsync.demo` — manager role
- `employee@staffsync.demo` — employee role

Use these only for local demonstration. Do not use these credentials in a public production deployment. Confirm the seed script and login flow work before using them in a presentation.

## Documentation for the 19 tasks
See [`TASK-COMPLETION-MATRIX.md`](TASK-COMPLETION-MATRIX.md) for a task-by-task map and the `docs/` folder for architecture, ER diagram, feature list, roles, user flow, MVC, backend, database, frontend and execution documentation.

## Screenshots and demo video
The `screenshots/` folder includes a capture checklist, not fabricated application output. Capture your own screenshots after the app runs. The `demo/DEMO-VIDEO-SCRIPT.md` gives a suggested recording sequence. Link the final video in this README after recording it.

## Security notes
- Keep `.env` files and real credentials out of Git.
- Replace the demo JWT secret and demo passwords before any public deployment.
- Use HTTPS, input validation, appropriate authorization checks, and production database access rules before production use.
- This is an educational project, not a certified HR/payroll product.
