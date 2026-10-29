# Task 13 — Create Database Connection

The backend uses Mongoose to connect to MongoDB. The database URI is read from the server environment configuration instead of being hard-coded into the source.

## Verification
- Ensure `server/.env` exists locally.
- Check that `MONGO_URI` is set and valid.
- Run the backend start script.
- Confirm the terminal reports a successful connection (or inspect the relevant connection code and logs).
- If the connection fails, check network access, database credentials, URI encoding, and whether the database service is running.

For a public GitHub repository, commit `.env.example`, not `.env`.
