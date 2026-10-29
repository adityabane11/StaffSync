# Task 10 — Backend Structure

The backend is located in `server/`.

| File | Purpose |
|---|---|
| `package.json` | Backend dependencies and npm scripts. |
| `.env.example` | Names of required environment variables without private values. |
| `src/index.js` | Express app, middleware, API routes and server startup. |
| `src/auth.js` | JWT authentication and role-related middleware. |
| `src/models.js` | Mongoose schemas/models. |
| `src/seed.js` | Creates demo users/sample records for local testing. |

## Backend request path
Client request → Express middleware → token/role verification → route handler → Mongoose model → MongoDB → JSON response.

Review the actual source files before presenting. If you reorganize routes/controllers later, update this table to match.
