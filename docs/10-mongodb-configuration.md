# Task 12 — Configure MongoDB

StaffSync uses MongoDB. You can use a local MongoDB service or MongoDB Atlas.

## Configuration steps
1. Start a local MongoDB service or create an Atlas cluster.
2. For Atlas, create a database user and restrict network access to your current development IP where possible.
3. Copy `server/.env.example` to `server/.env`.
4. Set `MONGO_URI` to your database connection string.
5. Set `JWT_SECRET` to a long, random secret.
6. Confirm `.env` is ignored by Git.
7. Start the server and verify that the connection succeeds.

Do not paste real database URIs or passwords into README files, screenshots, chat, or public repositories.
