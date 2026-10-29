# Task 11 — Backend Development and Explanation

## Backend responsibilities
- Start the Express HTTP server.
- Parse JSON request bodies and configure middleware.
- Connect to MongoDB through Mongoose.
- Provide API endpoints for login, dashboard data, employee records, leave requests, attendance, announcements and training.
- Verify JWTs for protected routes and enforce role permissions where configured.
- Return JSON responses and meaningful HTTP status codes.

## How to explain a request
For example, when an authorized user requests a list of employees:
1. The frontend sends an HTTP request to the API.
2. Authentication middleware checks the bearer token.
3. The route handler checks whether the role is permitted.
4. The handler queries the employee model.
5. The API sends the result as JSON.
6. The frontend renders the returned records.

## Validation checklist
- Server starts without an error.
- Database connection succeeds.
- Login works with each seed account.
- Protected endpoints reject requests without a valid token.
- Disallowed roles cannot access restricted endpoints.
- Invalid IDs or malformed data are handled safely.
- Errors do not expose stack traces or secrets to users.

This document explains the code's intended responsibilities. Record actual test outcomes only after testing.
