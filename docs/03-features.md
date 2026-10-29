# Task 3 — Features

## Functional features
1. **Role-based sign-in:** users access the application with an account and role.
2. **Dashboard:** summary view of relevant HR activities.
3. **Employee directory:** view and manage employee information according to permissions.
4. **Leave management:** employees submit leave requests; authorized HR/manager roles can review requests.
5. **Attendance:** view or record attendance entries, depending on the available screen and API behavior.
6. **Announcements:** publish and read organization updates.
7. **Training:** view training information or assignments.
8. **REST API:** frontend and backend communicate through JSON endpoints.

## Non-functional goals
- Maintainable separation between frontend, API, and database.
- Role-based access to reduce unauthorized actions.
- Responsive layout for common desktop and mobile widths.
- Clear setup steps for a local development environment.

## Acceptance checks
- Login succeeds for each seeded demo role.
- Unauthenticated requests to protected endpoints are rejected.
- Role restrictions are enforced by the backend, not only by hiding frontend buttons.
- Core lists load and expected create/update actions persist to MongoDB.
- Invalid form values produce understandable feedback.
- No secrets are committed to GitHub.

Mark a feature as working only after running and testing it locally.
