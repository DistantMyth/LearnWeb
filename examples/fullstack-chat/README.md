# Campus Chat · full-stack reference

Use this after the React, Node.js, Express, MongoDB, and integration lessons. The interface continues the same WhatsApp-style project: navigation rail, collapsible conversation list, search, room header, message thread and composer.

The browser runs React. Express validates HTTP requests and streams live events. The official MongoDB Node driver stores messages. This local classroom example has **one shared room**, self-reported display names, and no authentication or private messaging. It displays the latest 100 messages; the database retains earlier messages too.

## Requirements

- Node.js **22.12 or newer** and npm.
- MongoDB Community Server running locally, or an Atlas database reachable with a server-only connection string. Installing the `mongodb` npm package installs a driver, **not** the database service.
- Internet for the first dependency installation. The local app works offline afterward when using local MongoDB.

Follow the official [Community installation guide](https://www.mongodb.com/docs/manual/installation/) for your OS. Keep local MongoDB bound to loopback. The default reference URI is `mongodb://127.0.0.1:27017`; choose the port your own database actually uses.

## Run from this folder

```sh
npm ci
```

Using your editor or file manager, copy **.env.example** to **.env**. Set `MONGODB_URI`, `MONGODB_DB` and `PORT` there. This server-only file stays outside the frontend source and is ignored by Git. Never put a database credential in a `VITE_` variable or in React code.

Start MongoDB if needed. Then run:

```sh
npm run api
```

In a second terminal, in this same folder:

```sh
npm run dev
```

Open **http://127.0.0.1:5173** in two browsers. The Vite dev server forwards `/api` to Express on **4181**, preserving the browser-facing origin. The proxy config must match your API port if you change it. The API startup command explicitly loads `.env` using Node's `--env-file` flag; Node does not load that file automatically.

Keep both terminals open. Ctrl+C stops each process. A database connection/startup failure is reported clearly; the app never silently falls back to in-memory storage.

## Contract and storage

- `GET /api/messages`: recent chronological JSON records.
- `POST /api/messages`: JSON `{name,text}`; name is 1–30 characters and text 1–500, both nonblank. The server generates IDs/timestamps and validates independently of the form.
- `GET /api/events`: SSE `history` and `message` envelopes. React cleans up its subscription, reconciles history on reconnect and ignores duplicate IDs.
- Wire records: `{id,name,text,createdAt}`. MongoDB ObjectIds and BSON dates are converted explicitly.

The store creates a validated messages collection only when it is absent, then creates a room/date/ID index. It does not automatically migrate or replace validators on an existing collection. Use a fresh database for the exercise, or inspect and migrate existing documents deliberately.

Only successfully persisted messages are broadcast. Messages arriving while an initial history query is pending are buffered and reconciled after the snapshot. The client sorts live messages to match persisted history order. SSE delivery here is local to a single application process; multiple replicas would require a shared event bus/change-stream design taught separately. Display-name bubble alignment is cosmetic and does not prove identity.

## Checks

```sh
npm run lint
npm test
npm run build
```

The default tests cover API validation, live delivery, storage failures, snapshot/stream handoff and client ordering. The real-database test is skipped unless **MONGO_TEST_URI** is set in your test terminal. Set it to a reachable local or dedicated test deployment, then run `npm test` again. The test creates a uniquely named `campus_chat_test_*` database, verifies persistence across connection restart, schema rejection, index creation and bounded reads, and drops only that scratch database afterward. It does not use `MONGODB_DB` for cleanup.

To test the built frontend, run `npm run build`, keep `npm run api` running, and open **http://127.0.0.1:4181**. Express serves only `dist` as static files. It never serves source files, `.env`, or `node_modules`.

Manual checks: exchange messages both ways, reload, restart Express and verify history persists, send HTML-looking text, test sidebar collapse/search, use only the keyboard, resize narrowly, and stop the database to observe explicit failure feedback. A failed POST may have reached storage before its response was interrupted; inspect the room before retrying.

## Files

`src/main.jsx` owns React components and effects; `src/messages.js` merges/de-duplicates/sorts live data; `src/styles.css` keeps the interface styling. `server.mjs` defines Express routes; `store.mjs` encapsulates the MongoDB driver and BSON/JSON conversion. `vite.config.js` configures development proxying; `eslint.config.js` enforces hook rules. Tests use injected memory stores for HTTP behavior and an opt-in real MongoDB connection for persistence.

The classroom's Full stack guide offers source downloads. If downloading individually, preserve `src/` and `tests/` directories and save the `.env.example` filename exactly. Downloading the repository folder is easier than reconstructing it file by file.
