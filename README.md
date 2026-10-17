# LearnWeb · The HTML workshop

A colorful, local-first HTML course for first-time web developers. Students follow **Learn → Build → Check** and keep improving one website: **Campus Clubhouse**, a home for their club, events, and community.

## Start the classroom

### One-time preparation

1. Install **Node.js LTS, version 22 or newer**, from [nodejs.org](https://nodejs.org/). The installer includes npm. Reopen your terminal or VS Code afterward.
2. Download this project folder and unzip it. Keep its files together.
3. Open the unzipped **LearnWeb** folder in VS Code, then choose **Terminal → New Terminal**. The folder should contain `package.json`.

### Every class: one command

```sh
npm start
```

The same command works on Windows, Linux, and macOS. **No `npm install`, build step, account, or database is needed.** The browser opens automatically when the operating system supports it. Otherwise open:

**http://127.0.0.1:4173**

Keep the terminal open during class. Press **Ctrl+C** to stop the classroom.

If Windows PowerShell blocks `npm.ps1`, run `npm.cmd start`, or switch the VS Code terminal to Command Prompt. Do not lower the system execution policy.

## The student project is a separate folder

The first three lessons cover these steps before the HTML curriculum:

1. **Browser inspection:** Elements/Inspector, temporary text and style edits, the box model, Console, Network, and responsive tools. Includes Windows/Linux/macOS shortcuts and Safari setup.
2. **VS Code:** create `Documents/campus-clubhouse`, open the folder, create and save `index.html`, and understand file extensions.
3. **Live Server:** install **Live Server by Ritwick Dey**, open `index.html`, and practice the edit → save → browser loop. Includes common setup problems.

Keep two browser tabs open:

- **LearnWeb classroom**, usually port **4173**: instructions, examples, tasks, and progress.
- **Your student website**, usually port **5500** through VS Code Live Server: the actual `campus-clubhouse/index.html` you are building.

The course guides students to change their existing project rather than start a new website in every lesson. Later tasks add welcome content, member bios, colors, navigation, a gallery, an event timetable, responsive sections, a demonstration membership form, graphics, and media.

## What is included

- **56 guided lessons** across setup, essentials, appearance, structure, forms, graphics/media, and final review.
- One focused lesson at a time, with explanations, an original example, exact project steps, and a knowledge check.
- Completion requires confirming the practical task and answering the question correctly. Revisited lessons do not inflate progress.
- Sidebar navigation and searchable **Course guide → Course map** for following the teacher’s pace without artificial lesson locks.
- A local reference shelf, final project review, study guidance, and a visible W3Schools source-topic coverage map.
- A browser-saved practice workspace with HTML editing, a sandboxed preview, additive snippets, and an `index.html` download.
- Responsive layout, keyboard-operated tabs, native dialogs, visible focus, labeled controls, live feedback, and reduced-motion support.

### W3Schools coverage

The course uses the [W3Schools HTML tutorial](https://www.w3schools.com/html/) as a **topic checklist**, not copied lesson text or styling. Explanations, examples, exercises, and the class project are independently written.

`public/content/source-topics.json` records **106 sidebar entries**, including nested color, link, image, table, and list chapters. The in-app coverage map identifies where each is addressed. Reference indexes, optional online practice tools, and paid certification are distinguished from locally taught lessons. The certificate link is an optional external service; LearnWeb does not issue a W3Schools certificate.

**All seven Web API topics are explicitly scheduled after JavaScript:** Web API basics, Geolocation, Drag and Drop, Popover, Web Storage, Web Workers, and Server-Sent Events. They have explanations and project ideas in **Course guide → After JavaScript**, but are excluded from HTML completion. Canvas markup is taught now; canvas drawing and audio/video scripting are also left until JavaScript. The HTML script/noscript lesson explains embedding scripts without pretending to teach JavaScript programming.

### Offline use and honest boundaries

After downloading the project and installing Node, all course content, UI assets, and fonts/fallbacks work locally without internet. External references, installation links, YouTube, and remote embeds require internet. Student images, audio, video, captions, and PDFs must be added to the student project with the paths given in each task; the course does not ship pretend media files.

The practice preview intentionally blocks scripts, form submissions, remote resources, and nested embeds. Use **VS Code + Live Server** for the full student project and media. Forms are teaching demonstrations: **no signup data is received or stored**. A real form needs a backend or form service and server-side validation.

## Progress and practice work

Progress and the in-course practice HTML save to local storage in the **same browser at the same address**. No progress or source code is uploaded.

- The workspace is a practice copy, not a live editor for files on disk. Download `index.html` to transfer it to VS Code. Back up any external assets separately.
- Clearing browser data removes saved progress and practice work. Switching browser, port, or between `127.0.0.1` and `localhost` uses a separate storage area.
- A second stale tab cannot overwrite newer work saved by another tab. It keeps its in-memory edits downloadable and asks you to reload before saving again.
- If storage is unavailable or full, a visible warning asks students to download their work. Corrupt/incompatible saved data is left untouched until an explicit reset.
- **Course guide → Run locally → Reset this browser’s course** starts fresh after confirmation. Download your project first; resetting does not affect VS Code files.

## Suggested classroom rhythm

1. Demo the current lesson briefly. Use Inspect to connect the visible page to its HTML.
2. Let students read **Learn** and then do only that lesson’s **Build** task in their existing project.
3. Ask them to save and observe the result in Live Server before ticking the task confirmation.
4. Use **Check** for discussion, not a race. Wrong answers can be retried without penalties.
5. Pause at a milestone to compare projects and fix one issue together. Use Course map to jump to the lesson being taught.
6. Finish with the final review, keyboard/narrow-screen checks, and a backup of the whole student folder.

## Troubleshooting

- **`npm` or `node` not found:** install Node.js LTS and reopen VS Code.
- **Cannot find `package.json`:** your terminal is in the wrong folder. Open LearnWeb, not `campus-clubhouse` or its parent folder.
- **Port already in use:** stop the earlier classroom terminal with Ctrl+C, then start again. For a different port, set `PORT` in your shell before running; that port has separate browser storage.
- **Browser didn’t open:** enter the printed local URL manually.
- **My page did not update:** edit the student file, save it, and inspect the Live Server tab—not the classroom or an old `file://` tab.
- **My media isn’t visible in the practice preview:** this is an intentional safety limit. Add the files in the student project and use Live Server.
- **My form doesn’t register people:** this is a static teaching site, not a working membership service.

## Development and verification

This is plain browser HTML/CSS/JavaScript with a built-in Node HTTP server. There are no runtime or development package dependencies.

```sh
npm test
npm run test:coverage
```

The Node tests cover progress/restoration, build/check completion rules, preserving project edits, singleton head titles, form snippet targeting, quoted/commented closing-tag boundaries, traversal protection, read-only serving, and real launcher startup/error paths. Browser UI behavior is checked separately in a running browser; Node coverage numbers do not measure browser UI coverage.

### Project layout

- `server.js`: loopback-only static server and cross-platform browser opener.
- `public/index.html`, `styles.css`, `assets/`: accessible shell, visual system, and local illustrations.
- `public/app.js`, `state.js`: lesson flow and immutable progress/project updates.
- `public/lesson-view.js`, `guide.js`, `project.js`: lesson rendering, syllabus/reference guide, and practice workspace.
- `public/content/`: original curriculum and source-topic manifest. Larger files are declarative lesson data, not large control-flow modules.
- `tests/`: Node behavioral and launcher integration tests.

To add or revise a lesson, preserve the content schema used by adjacent lessons, keep its stable `id`, include its source-topic paths, and write a real project task plus a concept check. A `patch` is optional: use it only for additive snippets. `target: "head"` replaces an existing HTML page title if the snippet supplies one; `target: "body"` adds new page content; `target: "form", formId: "club-form"` extends the same form without duplicating it. Lessons that ask students to edit existing attributes should usually omit automatic snippets.
