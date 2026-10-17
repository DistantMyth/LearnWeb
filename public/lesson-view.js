import { sourceUrl } from './content/course.js';

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function exampleBlock(lesson, open = false) {
  return `<details class="example-details" ${open ? 'open' : ''}><summary>A little code to explore</summary><pre><code>${escapeHtml(lesson.example)}</code></pre><div class="example-actions"><span>Use this in your existing project</span><button class="text-button" data-action="copy-example">Copy example ↗</button></div></details>`;
}

function sourcesBlock(lesson) {
  if (!lesson.sources.length) return '';
  return `<details class="lesson-sources"><summary>Topic references · optional, online</summary>${lesson.sources.map(path => `<a href="${escapeHtml(sourceUrl(path))}" target="_blank" rel="noopener noreferrer">W3Schools / ${escapeHtml(path)} ↗</a>`).join('')}</details>`;
}

export function learnPanel(lesson, state) {
  return `<p class="lesson-intro">${escapeHtml(lesson.intro)}</p>${lesson.concepts.map((concept, index) => `<section class="concept"><span class="concept-number" aria-hidden="true">${index + 1}</span><div><h3>${escapeHtml(concept.term)}</h3><p>${escapeHtml(concept.description)}</p></div></section>`).join('')}${exampleBlock(lesson)}${sourcesBlock(lesson)}${state.completed.includes(lesson.id) ? '<span class="completed-label">✓ You’ve completed this lesson. Revisit any time.</span>' : ''}<div class="panel-footer"><span>No rush. Try things as you go.</span><button class="primary-button" data-action="to-build">Let’s try it <span aria-hidden="true">→</span></button></div>`;
}

export function buildPanel(lesson, state) {
  return `<div class="build-goal"><h3>Your next little build</h3><p>${escapeHtml(lesson.task)}</p></div><ol class="build-steps">${lesson.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>${exampleBlock(lesson, true)}<div class="build-tools">${lesson.patch ? `<button class="outline-button" data-action="apply-example">${state.applied.includes(lesson.id) ? '✓ Added to practice copy' : '+ Add snippet to practice copy'}</button>` : ''}<button class="outline-button" data-action="open-project">Open project workspace ↗</button></div><label class="task-check"><input type="checkbox" id="task-done" ${state.built.includes(lesson.id) ? 'checked' : ''}><span>I tried the task and checked the result in my browser.</span></label><div class="panel-footer"><button class="text-button" data-action="to-learn">← Back to learning</button><button class="primary-button" data-action="to-check" ${state.built.includes(lesson.id) ? '' : 'disabled'}>Check my understanding <span aria-hidden="true">→</span></button></div>`;
}

export function checkPanel(lesson, state, quiz) {
  const passed = quiz.correct === true;
  return `<p class="question-label">A QUICK CHECK, NOT A TEST</p><h3 class="quiz-question" id="quiz-question">${escapeHtml(lesson.check.question)}</h3><fieldset class="quiz-options" aria-labelledby="quiz-question">${lesson.check.options.map((option, index) => `<label class="quiz-option"><input type="radio" name="answer" value="${index}" ${quiz.selected === index ? 'checked' : ''}><span>${escapeHtml(option)}</span></label>`).join('')}</fieldset><div id="quiz-feedback" aria-live="polite">${quiz.correct !== null ? `<p class="quiz-feedback ${passed ? 'correct' : 'incorrect'}"><strong>${passed ? 'That’s it! ' : 'Not quite — give it another go. '}</strong>${escapeHtml(passed ? lesson.check.explanation : 'Think about what you tried in the project. You can revisit Learn or choose another answer.')}</p>` : ''}</div>${!state.built.includes(lesson.id) ? '<p class="quiz-feedback incorrect">Try the Build task and tick its confirmation before completing this lesson.</p>' : ''}<div class="panel-footer"><button class="text-button" data-action="to-build">← Back to building</button>${passed ? `<button class="primary-button" data-action="complete" ${state.built.includes(lesson.id) ? '' : 'disabled'}>Complete & continue <span aria-hidden="true">→</span></button>` : `<button class="primary-button" data-action="check-answer" ${quiz.selected === null ? 'disabled' : ''}>Check my answer <span aria-hidden="true">↗</span></button>`}</div>`;
}

export function navigationHtml(modules, lessons, state, expanded) {
  return modules.map((module, index) => {
    const children = lessons.filter(lesson => lesson.module === module.id);
    const current = children.some(lesson => lesson.id === state.currentLesson);
    const open = expanded.has(module.id);
    return `<div class="module ${current ? 'active' : ''}"><button class="module-button" data-module="${module.id}" aria-expanded="${open}" aria-controls="module-${module.id}"><span class="module-icon ${module.color}" aria-hidden="true">${module.icon}</span><span class="module-text"><strong>${String(index + 1).padStart(2, '0')} &nbsp; ${escapeHtml(module.title)}</strong><small>${children.length} lessons · ${escapeHtml(module.subtitle)}</small></span><span class="module-arrow" aria-hidden="true">${open ? '⌄' : '›'}</span></button><ol class="lesson-list" id="module-${module.id}" ${open ? '' : 'hidden'}>${children.map(lesson => `<li><button class="lesson-link ${state.completed.includes(lesson.id) ? 'is-complete' : ''}" data-lesson="${lesson.id}" ${lesson.id === state.currentLesson ? 'aria-current="step"' : ''}><span class="lesson-dot" aria-hidden="true">${state.completed.includes(lesson.id) ? '✓' : ''}</span>${escapeHtml(lesson.title)}${state.completed.includes(lesson.id) ? '<span class="sr-only"> — Completed</span>' : ''}</button></li>`).join('')}</ol></div>`;
  }).join('') + '<div class="api-nav"><button data-action="apis"><span aria-hidden="true">⌁</span><span>Web APIs<small>A new adventure after JavaScript</small></span><span class="api-lock" aria-hidden="true">↗</span></button></div>';
}
