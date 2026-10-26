import { lessons, modules } from './content/course.js';
import { createState, restoreState, markBuilt, completeLesson, applyPatch } from './state.js';
import { learnPanel, buildPanel, checkPanel, navigationHtml } from './lesson-view.js';
import { createWorkspace } from './project.js';
import { createGuide } from './guide.js';

const STORAGE_KEY = 'learnweb-classroom-v1';
const $ = selector => document.querySelector(selector);
let persistent = true;
let recoveryRequired = false;
let externalChange = false;
let lastStoredValue;
let initialError;
let state;
try {
  lastStoredValue = localStorage.getItem(STORAGE_KEY);
  state = restoreState(lastStoredValue, lessons);
} catch (error) {
  state = createState(lessons);
  persistent = false;
  recoveryRequired = true;
  initialError = `Saved progress could not be read: ${error.message} Your old data is untouched. Download any work, then use Course guide → Run locally → Reset to save a fresh session.`;
}
let quiz = { selected: null, correct: null };
let expanded = new Set([lessons.find(lesson => lesson.id === state.currentLesson).module]);
let toastTimer;

function notify(message, lasting = false) {
  clearTimeout(toastTimer);
  const region = $('#project-dialog').open ? $('#workspace-status') : $('#status');
  region.textContent = message;
  region.hidden = false;
  if (!lasting) toastTimer = setTimeout(() => { region.hidden = true; }, 6500);
}

function saveState(next, force = false) {
  state = next;
  if (recoveryRequired) return;
  try {
    if (!force && (externalChange || localStorage.getItem(STORAGE_KEY) !== lastStoredValue)) {
      externalChange = true;
      persistent = false;
      notify('Another tab saved newer work. This tab will not overwrite it. Download any local edits, then reload this tab to continue saving.', true);
      return;
    }
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
    lastStoredValue = serialized;
    persistent = true;
  } catch (error) {
    console.error('Course progress could not be saved:', error);
    persistent = false;
    notify('This browser could not save your progress. Keep this tab open and download your project before leaving.', true);
  }
}

function currentLesson() {
  return lessons.find(lesson => lesson.id === state.currentLesson);
}

function renderPanel() {
  const lesson = currentLesson();
  const phase = state.phase;
  const tabs = [...document.querySelectorAll('[data-phase]')];
  tabs.forEach((tab, index) => {
    tab.setAttribute('aria-selected', String(index === phase));
    tab.tabIndex = index === phase ? 0 : -1;
  });
  $('#lesson-panel').setAttribute('aria-labelledby', `step-${phase}`);
  $('#lesson-panel').innerHTML = phase === 0 ? learnPanel(lesson, state) : phase === 1 ? buildPanel(lesson, state) : checkPanel(lesson, state, quiz);
}

function renderNavigation() {
  $('#course-nav').innerHTML = navigationHtml(modules, lessons, state, expanded);
  const count = state.completed.length;
  const percent = Math.round(count / lessons.length * 100);
  $('#progress-text').textContent = `${percent}%`;
  $('#course-progress').value = percent;
  $('#progress-count').textContent = `${count} of ${lessons.length} lessons completed`;
}

function render() {
  const lesson = currentLesson();
  const module = modules.find(item => item.id === lesson.module);
  const index = lessons.indexOf(lesson);
  const position = lessons.filter(item => item.module === lesson.module).indexOf(lesson) + 1;
  const total = lessons.filter(item => item.module === lesson.module).length;
  document.title = `${lesson.title} — LearnWeb`;
  $('#breadcrumb-module').textContent = module.title;
  $('#module-label').textContent = module.title;
  $('#lesson-duration').textContent = `${lesson.minutes} min`;
  $('#lesson-heading').textContent = lesson.title;
  $('#lesson-icon').textContent = module.icon;
  $('#lesson-icon').className = `lesson-icon ${module.color}`;
  $('#lesson-eyebrow').textContent = lesson.module === 'setup' ? 'FIRST, GET COMFORTABLE' : module.subtitle.toUpperCase();
  $('#lesson-position').textContent = `Lesson ${position} of ${total}`;
  $('#previous-button').disabled = index === 0;
  renderNavigation();
  renderPanel();
}

function setPhase(phase, focus = true) {
  saveState({ ...state, phase });
  renderPanel();
  if (focus) $('#lesson-panel').focus({ preventScroll: true });
}

function navigate(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return;
  saveState({ ...state, currentLesson: id, phase: 0 });
  quiz = { selected: null, correct: null };
  expanded = new Set([lesson.module]);
  $('#sidebar').classList.remove('is-open');
  $('#menu-button').setAttribute('aria-expanded', 'false');
  render();
  $('#lesson-heading').focus({ preventScroll: true });
  $('#lesson-card').scrollIntoView({ block: 'start', behavior: 'instant' });
}

const workspace = createWorkspace({
  getState: () => state,
  updateDraft: draft => saveState({ ...state, draft }),
  notify,
  isPersistent: () => persistent,
});

const guide = createGuide({
  getState: () => state,
  navigate,
  notify,
  reset: () => {
    recoveryRequired = false;
    externalChange = false;
    quiz = { selected: null, correct: null };
    expanded = new Set(['setup']);
    saveState(createState(lessons), true);
    render();
  },
});

async function copyExample() {
  try {
    await navigator.clipboard.writeText(currentLesson().example);
    notify('Example copied. Keep your existing project and add only the part this lesson asks for.');
  } catch (error) {
    console.error('Could not copy example:', error);
    notify('Clipboard unavailable. Select the example text and use Ctrl+C (Windows/Linux) or Cmd+C (macOS).');
  }
}

function finishLesson() {
  try {
    const lesson = currentLesson();
    saveState(completeLesson(state, lesson.id, quiz.correct === true));
    const next = lessons[lessons.indexOf(lesson) + 1];
    if (next) { navigate(next.id); notify('One more step in your journey. Nice work.'); }
    else {
      render();
      const remaining = lessons.length - state.completed.length;
      notify(remaining ? `${remaining} earlier lessons still to explore. Open Course map to find your next step.` : 'You did it — your web development journey is complete. Download your project and show someone what you built.', true);
    }
  } catch (error) { notify(error.message); }
}

$('#lesson-panel').addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  const actions = {
    'to-learn': () => setPhase(0),
    'to-build': () => setPhase(1),
    'to-check': () => setPhase(2),
    'open-project': () => workspace.open(),
    'copy-example': copyExample,
    'check-answer': () => {
      if (quiz.selected === null) return;
      quiz = { ...quiz, correct: quiz.selected === currentLesson().check.answer };
      renderPanel();
      const feedback = $('#quiz-feedback');
      feedback.tabIndex = -1;
      feedback.focus({ preventScroll: true });
    },
    complete: finishLesson,
    'apply-example': () => {
      try {
        saveState(applyPatch(state, currentLesson()));
        renderPanel();
        workspace.open('[data-action="apply-example"]');
        notify('Snippet added to your practice copy. Your earlier edits are preserved. Adapt it to your own club.');
      } catch (error) { notify(error.message); }
    },
  };
  actions[button.dataset.action]?.();
});

$('#lesson-panel').addEventListener('change', event => {
  if (event.target.id === 'task-done') {
    saveState(event.target.checked ? markBuilt(state, state.currentLesson) : { ...state, built: state.built.filter(id => id !== state.currentLesson) });
    const nextButton = document.querySelector('[data-action="to-check"]');
    if (nextButton) nextButton.disabled = !event.target.checked;
  }
  if (event.target.name === 'answer') {
    const selected = Number(event.target.value);
    if (selected < 0 || selected >= currentLesson().check.options.length) return;
    quiz = { selected, correct: null };
    const scroll = window.scrollY;
    renderPanel();
    document.querySelector(`input[name="answer"][value="${selected}"]`).focus({ preventScroll: true });
    window.scrollTo({ top: scroll, behavior: 'instant' });
  }
});

const stepTabs = [...document.querySelectorAll('[data-phase]')];
stepTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setPhase(index, false));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % stepTabs.length;
    if (event.key === 'ArrowLeft') next = (index + stepTabs.length - 1) % stepTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = stepTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setPhase(next, false);
    stepTabs[next].focus();
  });
});

$('#course-nav').addEventListener('click', event => {
  const lessonButton = event.target.closest('[data-lesson]');
  if (lessonButton) navigate(lessonButton.dataset.lesson);
  const moduleButton = event.target.closest('[data-module]');
  if (moduleButton) {
    const id = moduleButton.dataset.module;
    expanded = expanded.has(id) ? new Set([...expanded].filter(item => item !== id)) : new Set([...expanded, id]);
    renderNavigation();
    document.querySelector(`[data-module="${id}"]`).focus();
  }
  if (event.target.closest('[data-action="apis"]')) guide.open('apis');
});
$('#previous-button').addEventListener('click', () => {
  const index = lessons.indexOf(currentLesson());
  if (index > 0) navigate(lessons[index - 1].id);
});
$('#menu-button').addEventListener('click', () => {
  const open = $('#sidebar').classList.toggle('is-open');
  $('#menu-button').setAttribute('aria-expanded', String(open));
});
$('#guide-button').addEventListener('click', () => guide.open());
$('#source-button').addEventListener('click', () => guide.open('map'));
$('#project-button').addEventListener('click', workspace.open);
$('#project-preview-button').addEventListener('click', workspace.open);
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.close).close()));

window.addEventListener('storage', event => {
  if (event.key === STORAGE_KEY || event.key === null) {
    externalChange = true;
    persistent = false;
    notify('Another tab changed your course. Saving here is paused to protect newer work. Download local edits if needed, then reload this tab.', true);
  }
});
render();
if (initialError) notify(initialError, true);
