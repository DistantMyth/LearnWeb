# LearnWeb · Build Campus Chat

Build a **WhatsApp Web–style interface** with a navigation rail, collapsible conversation sidebar, room header, message bubbles, and composer. Add each static region as soon as its HTML/CSS is taught; activate its behavior later.

A local HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB classroom for first-time web developers. Follow **Learn → Build → Check** while growing one project into a working real-time chat application.

## Start

Install Node.js **22 or newer**, open this LearnWeb folder in VS Code, and run:

```sh
npm start
```

Open **http://127.0.0.1:4173** if the browser does not open automatically. No package installation, account, database, or build step is required. Keep the terminal open; Ctrl+C stops the classroom. On Windows, use `npm.cmd start` if PowerShell blocks `npm.ps1`.

## One project, in order

Keep your student project in a separate **campus-chat** folder. The classroom teaches each capability before asking you to use it:

1. **Setup and HTML:** inspect pages, save files, and use Live Server. Build a static chat prototype with sample messages, room information, profiles, forms, graphics, and media. The composer cannot send messages yet. Isolated styling examples explain the CSS they introduce.
2. **CSS:** style that prototype through selectors, cascade, typography, spacing, layout, responsive design, Grid, Flexbox, animation, and advanced features. Topic experiments belong in a `labs` section or separate lab files within the same project rather than making every feature part of the chat interface.
3. **JavaScript:** learn language fundamentals before data processing and functions; learn DOM and events before local message interactions; then learn deeper language features, async code, browser APIs, and error handling. Browser-local messages are explicitly distinguished from network chat.
4. **Real-time baseline:** learn enough Node/HTTP/SSE to connect the existing composer to other browsers.
5. **React:** migrate the same static layout, then activate state, forms, effects, routing, and advanced ecosystem labs; keep the baseline service until its replacement is taught.
6. **Node and Express:** study the full runtime/package/core-module tracks, then migrate the API to Express with memory storage. A React-to-Express bridge teaches the dev proxy and record/endpoint contract.
7. **MongoDB and integration:** learn documents, queries, updates, aggregation, indexes, schema validation and the driver before replacing memory with persistence. Database adapter comparison labs follow these prerequisites. The final bridge connects and tests the whole stack.

The Course map allows teacher-led navigation. Follow the lesson sequence for prerequisites. The course has **257 lessons**. Every lesson has original explanations, an example, a concrete chat-project task, and a knowledge check. Completion requires the practical task confirmation and a correct answer. Existing progress IDs are preserved; adding the new lessons expands the completion denominator.

## Run the vanilla chat baseline

The first real-time module teaches the server/client implementation before the reference is used. **Course guide → Chat roadmap** offers downloads of all four reference files. Save them together in your student project:

```text
campus-chat/
  index.html
  styles.css
  chat.js
  server.mjs
```

Run `node server.mjs` inside that folder and open **http://127.0.0.1:4180** in two tabs or browsers. Messages sent from either appear in both without reload. The complete reference can also be run from this repository:

```sh
node public/chat-final/server.mjs
```

The app uses `fetch` POST requests to send messages and Server-Sent Events to receive live updates. It includes connection feedback, reconnect/history synchronization, server-side validation, safe text rendering, bounded history, sidebar collapse, and conversation search. It is a working local shared room: no accounts, private rooms, database, or public deployment. The last 100 messages are held in server memory and cleared on restart. The listener binds to loopback, so the finished exercise works between browsers on this computer. The later MongoDB and integration tracks add persistence. Public hosting and authenticated/private messaging require further implementation beyond this shared-room reference.

## Run the integrated React + Express + MongoDB chat

See [examples/fullstack-chat/README.md](examples/fullstack-chat/README.md) or **Course guide → Full stack**. This separate student reference requires Node **22.12+**, its own dependency installation, and a running local MongoDB server or Atlas deployment. The classroom itself still needs no dependency installation or database.

In `examples/fullstack-chat`, run `npm ci`, copy `.env.example` to `.env` with server-only database settings, then run `npm run api` and `npm run dev` in separate terminals. Open **http://127.0.0.1:5173**. React uses a Vite proxy to Express on 4181. The working app preserves the WhatsApp-style interface and now retains history across server restarts. It remains one shared room with self-reported names.

## Source coverage and scraping

The [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/), [JavaScript](https://www.w3schools.com/js/), [React](https://www.w3schools.com/react/), [Node.js](https://www.w3schools.com/nodejs/) and [MongoDB](https://www.w3schools.com/mongodb/) tutorials supply the source-topic checklist. Express uses W3Schools’ Node framework chapters plus the official [Express 5 starter, guide, advanced topics and API documentation](https://expressjs.com/en/starter/installing/).

`public/content/source-topics.json` records the earlier **801** HTML/CSS/JavaScript entries. `public/content/fullstack-source-topics.json` adds **290** entries with retrieval date, status, page title and chapter headings: **251 pages retrieved, 39 unavailable**. The combined **1,091-entry** coverage map identifies an included lesson for every entry. Some expanded React sidebar links are unavailable, as are a moved Express page and MongoDB quiz; their topics receive original supplementary lessons and remain visibly marked as unavailable sources. This is not a claim that those page bodies were fetched.

The new scraper retrieves chapter bodies as well as sidebars for author review, keeps raw HTML only in a temporary directory, and saves short structural metadata in the repository. Refresh it with `node scripts/scrape-curriculum.mjs` (requires curl and internet); review source/lesson coverage afterward. Explanations and examples are independently authored rather than republished tutorial text. Reference indexes, practice tools, and optional paid certification are identified separately. Unrelated W3Schools subjects are outside the checklist; SQL concepts appear where needed for the Node database comparison labs.

The source MongoDB Data API chapter is taught as historical: MongoDB retired that service in September 2025. The working app uses a server-side driver instead. Emerging APIs and hardware/cloud-specific chapters have explicit support/configuration boundaries and local alternatives where practical.

## Workspace and saved progress

The in-course workspace is an **HTML practice copy**, separate from your VS Code files. Its sandbox blocks scripts, remote resources, form submissions, and embeds. Download `index.html` to transfer it to disk. Use VS Code and Live Server for CSS/JavaScript labs and the Node server for final live chat. Save external CSS, JavaScript, assets, workers, and server files in VS Code; the workspace does not pretend to save multiple files.

Course progress and the practice draft stay in local storage at the same browser address. Changing browser, host, or port uses different storage. Clearing browser data erases saved progress. Stale-tab changes cannot overwrite newer saved work; download edits before reloading. A visible warning reports unavailable/full storage. Reset through **Course guide → Run locally** after downloading your work; reset does not alter VS Code files.

All course lesson text and the vanilla chat reference work locally after downloading. The full-stack reference needs its dependencies installed and a configured database; local MongoDB avoids a cloud account. External source links, installers, media embeds, and remote lab endpoints need internet. Add your own licensed images/media at the paths used in lessons. Browser permissions and feature support may affect optional API experiments.

## Verification

```sh
npm test
```

Tests cover saved state, completion rules, snippet preservation, static server boundaries, startup errors, curriculum structure/source coverage, and live chat delivery to independent connections, reconnect history, validation, bounded history, and restricted asset serving. Browser checks complement these tests.

The full-stack reference has separate `npm run lint`, `npm test`, and `npm run build` commands. Its opt-in real MongoDB test verifies persistence, schema validation and indexed bounded reads using a uniquely named scratch database.

The classroom remains a read-only static server. The separate final chat server receives messages. Download links deliberately serve the final source files as attachments through the classroom.
