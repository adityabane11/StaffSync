# Task 17 — Steps for Project Execution

## One-time setup
- Install Node.js and npm.
- Configure MongoDB local/Atlas access.
- Create `server/.env` from `.env.example` and add a valid `MONGO_URI` and `JWT_SECRET`.
- Create `client/.env` from `.env.example` and confirm the API base URL.
- Install dependencies in both `server` and `client` folders.

## Every run
1. Start MongoDB / verify Atlas is reachable.
2. Start the API in the `server` folder using `npm run dev`.
3. Start Vite in a separate terminal from the `client` folder using `npm run dev`.
4. Open the frontend URL shown by Vite.
5. Sign in and test each required feature.

## Troubleshooting
- **Cannot connect to MongoDB:** check the URI, network access and credentials.
- **Frontend cannot reach API:** check the API base URL and server port.
- **Login fails:** verify the seed script ran and the server is connected to the intended database.
- **Port already in use:** stop the other process or configure a different port consistently.
- **PowerShell blocks npm:** try `npm.cmd` or use Command Prompt.

Follow the scripts in each `package.json` as the source of truth if commands change.
