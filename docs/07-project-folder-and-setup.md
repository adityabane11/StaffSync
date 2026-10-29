# Tasks 7–9 — Project Folder, Client Setup, Server Setup

## Task 7: Create the project folder
1. Extract the ZIP file.
2. Open the `StaffSync` folder in VS Code.
3. Confirm that `client`, `server`, `docs`, `screenshots`, and `demo` are present.

## Task 8: Client setup
The client uses React and Vite. From the repository root:
```powershell
cd client
Copy-Item .env.example .env
npm install
npm run dev
```
Use the exact local address printed by Vite. Keep the client API base URL consistent with the backend port.

## Task 9: Server setup
From the repository root in another terminal:
```powershell
cd server
Copy-Item .env.example .env
npm install
```
Edit `server/.env` with the database URI and a strong JWT secret. Then run:
```powershell
npm run seed
npm run dev
```

## Evidence to collect
- Screenshot of the extracted project tree in VS Code.
- Screenshot of successful backend startup.
- Screenshot of Vite's local development URL.
- Do not include terminal output containing passwords, tokens, or secrets.
