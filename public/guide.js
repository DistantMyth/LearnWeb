import { fullstackFiles } from './content/fullstack-downloads.js';
import { modules, lessons, resources, sourceUrl, sourceKey } from './content/course.js';
import { escapeHtml } from './lesson-view.js';

export function createGuide({ getState, navigate, reset, notify }) {
  const dialog = document.querySelector('#guide-dialog');
  const body = document.querySelector('#guide-body');
  const tabs = [...document.querySelectorAll('[data-guide]')];
  let section = 'map';
  let sourceTopics;

  function courseMap(query = '') {
    const state = getState();
    const needle = query.toLowerCase().trim();
    const matches = lessons.filter(lesson => `${lesson.title} ${lesson.intro} ${lesson.sources.join(' ')}`.toLowerCase().includes(needle));
    const list = modules.map(module => {
      const children = matches.filter(lesson => lesson.module === module.id);
      return children.length ? `<section class="map-module"><h3>${escapeHtml(module.title)} <span class="tiny-label">${children.length} lessons</span></h3><div class="map-lessons">${children.map(lesson => `<button data-open-lesson="${lesson.id}"><span>${escapeHtml(lesson.title)}</span><small>${state.completed.includes(lesson.id) ? '✓ Complete' : `${lesson.minutes} min`}</small></button>`).join('')}</div></section>` : '';
    }).join('');
    return list || '<p class="guide-intro">No lessons match. Try a topic such as tables, images, forms, or UTF-8.</p>';
  }

  function referenceShelf() {
    return `<p class="guide-intro">A field guide, not a memorization list. These explanations are available offline. “Open reference” links go to W3Schools and need internet. All lessons here are independently written.</p>${resources.map(([title, path, description]) => `<section class="resource"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="${escapeHtml(sourceUrl(path))}" target="_blank" rel="noopener noreferrer">Open reference ↗</a></section>`).join('')}`;
  }

  function apiRoadmap() {
    return `<p class="guide-intro">One project, with prerequisites before each new behavior. All API lessons now count toward course completion.</p><ol><li>HTML: a static chat prototype, rooms, sample messages, and labeled controls.</li><li>CSS: style that same prototype and make it responsive.</li><li>JavaScript: data, functions, DOM and events before sending local messages; async and browser APIs afterward.</li><li>Real-time: learn Node, HTTP, validation, and Server-Sent Events before connecting browsers.</li></ol><h3>Final reference files</h3><p>Use these only in the final real-time module, after learning their concepts. Save all four into your campus-chat folder, then run <code>node server.mjs</code>. Open <code>http://127.0.0.1:4180</code> in two tabs.</p>${['index.html', 'styles.css', 'chat.js', 'server.mjs'].map(file => `<p><a href="/chat-final/${file}?download=1" download="${file}">Download ${file}</a></p>`).join('')}<p>This reference is a working local shared-room chat. Recent messages live in server memory and disappear on restart. Keep earlier topic experiments in your project’s labs folder.</p>`;
  }

  function fullstackGuide() {
    return `<p class="guide-intro">Continue the same chat through React → Node → Express → MongoDB. Transition lessons connect each boundary after its prerequisites. The earlier vanilla chat remains a working baseline.</p><h3>Run the integrated reference</h3><p>Open <code>examples/fullstack-chat</code> from the downloaded repository. Run <code>npm ci</code>, copy <code>.env.example</code> to <code>.env</code>, start MongoDB, then run <code>npm run api</code> and <code>npm run dev</code> in separate terminals. Open <code>http://127.0.0.1:5173</code>.</p><p>React renders the WhatsApp-style interface; Express receives HTTP/SSE requests; the MongoDB driver persists messages. The final local example has one shared room and self-reported display names. It has no authenticated accounts or private messaging.</p><h3>Reference source downloads</h3><p>If downloading files individually, preserve the subfolders shown below. These are final-stage reference files, used after their concepts are taught. Keep the server-only .env outside any public/client folder.</p>${fullstackFiles.map(file => `<p><a href="/fullstack-files/${file}" download="${file.split('/').at(-1)}">Download ${escapeHtml(file)}</a></p>`).join('')}<h3>Checks</h3><p><code>npm run lint</code>, <code>npm test</code>, and <code>npm run build</code> verify the example. Setting <code>MONGO_TEST_URI</code> enables its real-database persistence test in a uniquely named scratch database.</p><h3>Source retrieval</h3><p>Source chapters were fetched as well as sidebar links. Some linked React pages and a few retired or moved pages could not be retrieved; the coverage map marks them explicitly and their topics have original supplementary lessons. Paid certification remains optional.</p>`;
  }

  function setupGuide() {
    return `<div class="setup-guide"><p class="guide-intro">This course runs on your laptop. No account, database, package install, or cloud service is needed.</p><h3>One-time preparation</h3><ol><li>Install Node.js LTS (22 or newer) from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>. Restart your terminal after installing.</li><li>Download this project folder and unzip it. Keep the files together.</li><li>Open the folder in VS Code. Choose Terminal → New Terminal. Make sure you see package.json in the Explorer.</li></ol><h3>One command, every class</h3><pre><code>npm start</code></pre><p>Same command in Windows PowerShell or Command Prompt, Linux, and macOS. Your browser opens at http://127.0.0.1:4173. If it doesn’t open, type that address yourself. Keep the terminal open; Ctrl+C stops the classroom.</p><h3>If something gets in the way</h3><ul><li>“npm not found”: install Node.js LTS, then reopen VS Code.</li><li>“package.json not found”: open the unzipped LearnWeb folder, not your campus-chat student folder.</li><li>PowerShell blocks npm.ps1: type <code>npm.cmd start</code>, or switch the VS Code terminal to Command Prompt. Don’t weaken system execution policy.</li><li>Port already in use: close the earlier classroom terminal with Ctrl+C.</li></ul><h3>Two local sites, two jobs</h3><p>The classroom runs at port 4173. Your own campus-chat/index.html initially runs through VS Code Live Server, usually on port 5500. In the final module, your Node chat server replaces Live Server at port 4180. The in-course practice copy is separate from both files on disk; download it to move work to VS Code.</p><h3>Your saved place</h3><p>Progress and the practice draft stay in this browser’s local storage at this exact address. Changing browser, port, or 127.0.0.1 to localhost creates a separate storage area. No files or student data are uploaded. Clearing browser data removes progress; download your project regularly.</p><h3>Teaching with the course</h3><p>Follow the same Learn → Build → Check cycle with the class. The module list and Course map let you jump to the topic your teacher chooses. Every Build task extends the same chat project; examples are focused snippets, not replacements for earlier work. API lessons are included after their JavaScript prerequisites.</p><h3>Starting fresh</h3><p>This erases only this browser’s course progress and practice copy, not your VS Code project. Download your project first.</p><button class="outline-button" id="reset-course">Reset this browser’s course</button></div>`;
  }

  async function loadCoverage() {
    const target = document.querySelector('#coverage-list');
    if (!target) return;
    try {
      if (!sourceTopics) {
        const responses = await Promise.all(['/content/source-topics.json', '/content/fullstack-source-topics.json'].map(path => fetch(path)));
        for (const response of responses) if (!response.ok) throw new Error(`HTTP ${response.status}`);
        sourceTopics = (await Promise.all(responses.map(response => response.json()))).flat();
      }
      if (!target.isConnected) return;
      target.innerHTML = sourceTopics.map(topic => {
        const lesson = lessons.find(item => item.sources.some(path => sourceKey(path) === sourceKey(topic.path)));
        const reference = resources.find(item => sourceKey(item[1]) === sourceKey(topic.path));
        const label = (lesson ? lesson.title : reference ? 'Reference / practice shelf' : 'No matching lesson') + (topic.status === 'unavailable' ? ' · source unavailable; original supplementary lesson' : '');
        return `<div class="coverage-row"><a href="${escapeHtml(sourceUrl(topic.path))}" target="_blank" rel="noopener noreferrer">${escapeHtml(topic.title)} ↗</a><span>${escapeHtml(label)}</span></div>`;
      }).join('');
    } catch (error) {
      console.error('Coverage map could not be loaded:', error);
      target.textContent = 'Could not load the source map. Close and reopen the guide to retry; the lessons are still available.';
    }
  }

  function render() {
    tabs.forEach(tab => {
      const active = tab.dataset.guide === section;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      tab.id = `guide-tab-${tab.dataset.guide}`;
      tab.setAttribute('aria-controls', 'guide-body');
    });
    body.setAttribute('aria-labelledby', `guide-tab-${section}`);
    if (section === 'map') {
      body.innerHTML = `<p class="guide-intro">${lessons.length} small lessons. One website that grows with you. Jump to any lesson to follow your class. Each lesson has a Learn, Build, and Check step. The full path includes HTML, CSS, JavaScript, live chat, React, Node, Express, MongoDB, and integration bridges.</p><label class="guide-search-label" for="lesson-search">Find a topic</label><input class="guide-search" id="lesson-search" type="search" placeholder="Try images, tables, or forms…"><div id="map-results">${courseMap()}</div><details class="coverage-details"><summary>Complete W3Schools source-topic coverage</summary><p>Coverage maps HTML, CSS, JavaScript, React, Node.js and MongoDB tutorial chapters plus the Express documentation checklist. Source fetch status is recorded; unavailable source pages receive original supplementary lessons.</p><div id="coverage-list">Loading source map…</div></details>`;
      document.querySelector('#lesson-search').addEventListener('input', event => { document.querySelector('#map-results').innerHTML = courseMap(event.target.value); });
      loadCoverage();
    } else body.innerHTML = section === 'references' ? referenceShelf() : section === 'apis' ? apiRoadmap() : section === 'fullstack' ? fullstackGuide() : setupGuide();
  }

  function open(next = 'map') {
    section = next;
    render();
    if (!dialog.open) dialog.showModal();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { section = tab.dataset.guide; render(); });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      section = tabs[next].dataset.guide;
      render();
      tabs[next].focus();
    });
  });
  body.addEventListener('click', event => {
    const lesson = event.target.closest('[data-open-lesson]');
    if (lesson) { dialog.close(); navigate(lesson.dataset.openLesson); }
    if (event.target.closest('#reset-course') && window.confirm('Erase this browser’s course progress and practice draft? Download your HTML first. Your VS Code files will not change.')) {
      reset();
      dialog.close();
      notify('A fresh start. Your first lesson is ready.');
    }
  });
  return { open };
}
