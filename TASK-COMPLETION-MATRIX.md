# StaffSync — 19-Task Review Matrix

This matrix maps the mentor's 19 tasks to repository evidence. **Documentation/source files are included; runtime verification and genuine media must be completed by the project owner.**

| # | Task | Evidence in repository | Final action before review |
|---:|---|---|---|
| 1 | Technical Architecture | `docs/01-technical-architecture.md` | Compare diagram with code. |
| 2 | ER-Diagram | `docs/02-er-diagram.md` | Match entities/fields to actual models. |
| 3 | Features | `docs/03-features.md` | Verify each listed feature in the running app. |
| 4 | Roles and Responsibilities | `docs/04-roles-and-responsibilities.md` | Test access using all roles. |
| 5 | User Flow | `docs/05-user-flow.md` | Confirm it matches actual UI navigation. |
| 6 | MVC Pattern | `docs/06-mvc-pattern.md` | Explain accurately as MVC-inspired if handlers are colocated. |
| 7 | Creating Project Folder | Repository root and `docs/07-project-folder-and-setup.md` | Capture folder-tree screenshot if required. |
| 8 | Client Setup | `client/`, setup guide | Install dependencies and start Vite. |
| 9 | Server Setup | `server/`, setup guide | Configure environment and start API. |
| 10 | Backend Structure | `docs/08-backend-structure.md` | Check file list remains current. |
| 11 | Backend Development and Explanation | `docs/09-backend-development.md`, `server/src/` | Test endpoints, auth and role restrictions. |
| 12 | Configure MongoDB | `docs/10-mongodb-configuration.md` | Configure local/Atlas database privately. |
| 13 | Create Database Connection | `docs/11-database-connection.md`, backend code | Verify connection succeeds. |
| 14 | Create Schema and Models | `docs/12-schema-and-models.md`, `server/src/models.js` | Align diagram and explanation with actual schemas. |
| 15 | Frontend Structure | `docs/13-frontend-structure.md`, `client/src/` | Check files and imports. |
| 16 | Frontend Development and Explanation | `docs/14-frontend-development.md`, `client/src/` | Test each screen and action. |
| 17 | Steps for Project Execution | `docs/15-project-execution.md`, README | Follow instructions from a clean setup. |
| 18 | Output Screenshots | `screenshots/README.md` | Capture and add real screenshots. |
| 19 | Demo Video | `demo/DEMO-VIDEO-SCRIPT.md` | Record and link a real video. |

## Do not mark the submission complete until
- [ ] Frontend and backend install and run without errors.
- [ ] MongoDB connection is successful.
- [ ] Each demo role has been tested.
- [ ] Core workflows have been tested and limitations recorded.
- [ ] No `.env` or credentials are committed.
- [ ] Real screenshots are added.
- [ ] Demo video is recorded and linked.
- [ ] GitHub repository README and links have been checked in a logged-out/private browser window.
