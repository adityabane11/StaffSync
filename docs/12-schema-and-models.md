# Task 14 — Create Schema and Models

Mongoose models define the shape of records and provide an interface for database operations. In this project, the model definitions are in `server/src/models.js`.

## Expected domain entities
- **User:** identity, email, role and employee-related information.
- **Leave request:** employee, dates, reason, status and reviewer information where applicable.
- **Attendance:** employee, date and attendance/check-in details where implemented.
- **Announcement:** title, content, author and creation time where implemented.
- **Training:** training information or assignment fields where implemented.

The ER diagram in `02-er-diagram.md` is conceptual. Before your mentor review, compare each entity and field against the actual schemas and update the diagram if the implementation differs.

## Good schema practices
- Require important fields and validate their formats.
- Enforce unique email addresses where appropriate.
- Store password hashes, never plaintext passwords.
- Use consistent timestamps and status values.
- Validate referenced IDs and enforce authorization in route handlers.
