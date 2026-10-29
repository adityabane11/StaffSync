# Task 15 — Frontend Structure

The frontend lives in `client/` and uses React with Vite.

| File | Purpose |
|---|---|
| `index.html` | HTML entry document used by Vite. |
| `src/main.jsx` | React application entry point. |
| `src/App.jsx` | Main app layout, navigation and page-level UI. |
| `src/api.js` | API request helper and authentication header handling. |
| `src/styles.css` | Application layout, responsive styling and visual design. |
| `package.json` | Client dependencies and development/build scripts. |

The user interface is expected to call the backend rather than access MongoDB directly. Never put database credentials or the JWT signing secret in client-side code.
