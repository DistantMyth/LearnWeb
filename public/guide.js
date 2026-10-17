import { modules, lessons, resources, deferredApis, sourceUrl } from './content/course.js';
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
    return `<p class="guide-intro">Not part of your HTML completion. <strong>Complete JavaScript first:</strong> variables, functions, DOM, events, promises, and async code. Then return to these topics with your teacher. Canvas drawing and audio/video scripting also belong after JavaScript.</p>${deferredApis.map(api => `<section class="resource"><h3>${escapeHtml(api.title)} <span class="later-label">AFTER JAVASCRIPT</span></h3><p>${escapeHtml(api.intro)}</p><p class="api-project"><strong>Later in your clubhouse:</strong> ${escapeHtml(api.projectIdea)}</p>${api.sources.map(path => `<a href="${escapeHtml(sourceUrl(path))}" target="_blank" rel="noopener noreferrer">Topic reference ↗</a>`).join('')}</section>`).join('')}`;
  }

  function setupGuide() {
    return `<div class="setup-guide"><p class="guide-intro">This course runs on your laptop. No account, database, package install, or cloud service is needed.</p><h3>One-time preparation</h3><ol><li>Install Node.js LTS (22 or newer) from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>. Restart your terminal after installing.</li><li>Download this project folder and unzip it. Keep the files together.</li><li>Open the folder in VS Code. Choose Terminal → New Terminal. Make sure you see package.json in the Explorer.</li></ol><h3>One command, every class</h3><pre><code>npm start</code></pre><p>Same command in Windows PowerShell or Command Prompt, Linux, and macOS. Your browser opens at http://127.0.0.1:4173. If it doesn’t open, type that address yourself. Keep the terminal open; Ctrl+C stops the classroom.</p><h3>If something gets in the way</h3><ul><li>“npm not found”: install Node.js LTS, then reopen VS Code.</li><li>“package.json not found”: open the unzipped LearnWeb folder, not your campus-clubhouse student folder.</li><li>PowerShell blocks npm.ps1: type <code>npm.cmd start</code>, or switch the VS Code terminal to Command Prompt. Don’t weaken system execution policy.</li><li>Port already in use: close the earlier classroom terminal with Ctrl+C.</li></ul><h3>Two local sites, two jobs</h3><p>The classroom runs at port 4173. Your own campus-clubhouse/index.html runs through VS Code Live Server, usually on port 5500. The in-course practice copy is separate from both files on disk; download it to move work to VS Code.</p><h3>Your saved place</h3><p>Progress and the practice draft stay in this browser’s local storage at this exact address. Changing browser, port, or 127.0.0.1 to localhost creates a separate storage area. No files or student data are uploaded. Clearing browser data removes progress; download your project regularly.</p><h3>Teaching with the course</h3><p>Follow the same Learn → Build → Check cycle with the class. The module list and Course map let you jump to the topic your teacher chooses. Every Build task changes the same club website; examples are focused snippets, not replacements for earlier work. API topics stay in the separate later track.</p><h3>Starting fresh</h3><p>This erases only this browser’s course progress and practice copy, not your VS Code project. Download your project first.</p><button class="outline-button" id="reset-course">Reset this browser’s course</button></div>`;
  }

  async function loadCoverage() {
    const target = document.querySelector('#coverage-list');
    if (!target) return;
    try {
      if (!sourceTopics) {
        const response = await fetch('/content/source-topics.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        sourceTopics = await response.json();
      }
      if (!target.isConnected) return;
      target.innerHTML = sourceTopics.map(topic => {
        const lesson = lessons.find(item => item.sources.includes(topic.path));
        const api = deferredApis.find(item => item.sources.includes(topic.path));
        const reference = resources.find(item => item[1] === topic.path);
        const laterReference = reference && /after JavaScript/i.test(reference[0]);
        const label = api || laterReference ? 'After JavaScript' : reference ? 'Reference / practice shelf' : lesson ? lesson.title : 'No matching lesson';
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
      body.innerHTML = `<p class="guide-intro">${lessons.length} small lessons. One website that grows with you. Jump to any lesson to follow your class. Each lesson has a Learn, Build, and Check step. APIs wait until after JavaScript.</p><label class="guide-search-label" for="lesson-search">Find a topic</label><input class="guide-search" id="lesson-search" type="search" placeholder="Try images, tables, or forms…"><div id="map-results">${courseMap()}</div><details class="coverage-details"><summary>Complete W3Schools source-topic coverage</summary><p>Coverage maps tutorial chapters and nested subtopics to original lessons; practice, certification, and reference tools are identified separately.</p><div id="coverage-list">Loading source map…</div></details>`;
      document.querySelector('#lesson-search').addEventListener('input', event => { document.querySelector('#map-results').innerHTML = courseMap(event.target.value); });
      loadCoverage();
    } else body.innerHTML = section === 'references' ? referenceShelf() : section === 'apis' ? apiRoadmap() : setupGuide();
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
