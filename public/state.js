export const STARTER = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Campus Chat</title>
</head>
<body>
  <!-- Chat content -->
</body>
</html>
`;

export function createState(lessons) {
  return { version: 1, currentLesson: lessons[0].id, phase: 0, completed: [], built: [], draft: STARTER, applied: [] };
}

export function restoreState(raw, lessons) {
  const initial = createState(lessons);
  if (raw === null) return initial;
  const saved = JSON.parse(raw);
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) throw new Error('Invalid saved progress.');
  if (saved.version !== 1) throw new Error('This saved progress uses an unsupported version.');
  if (typeof saved.draft === 'string' && saved.draft.length > 200000) throw new Error('The saved project is too large. Download it before continuing.');
  const ids = new Set(lessons.map(lesson => lesson.id));
  const known = values => Array.isArray(values) ? [...new Set(values.filter(id => ids.has(id)))] : [];
  return {
    ...initial,
    currentLesson: ids.has(saved.currentLesson) ? saved.currentLesson : initial.currentLesson,
    phase: [0, 1, 2].includes(saved.phase) ? saved.phase : 0,
    completed: known(saved.completed), built: known(saved.built), applied: known(saved.applied),
    draft: typeof saved.draft === 'string' ? saved.draft : initial.draft,
  };
}

export function markBuilt(state, id) {
  return { ...state, built: [...new Set([...state.built, id])] };
}

export function completeLesson(state, id, correct) {
  if (!state.built.includes(id)) throw new Error('Finish the project task first.');
  if (!correct) throw new Error('Choose the correct answer before continuing.');
  return { ...state, completed: [...new Set([...state.completed, id])] };
}

function sourceTokens(html) {
  // Consume comments, quoted attributes, and raw-text elements as whole tokens.
  // This keeps tag-like example text out of document-boundary matching.
  return [...html.matchAll(/<!--[\s\S]*?(?:-->|$)|<(script|style|textarea|title|xmp|iframe|noembed|noframes)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>[\s\S]*?(?:<\/\1\s*>|$)|<plaintext\b[^>]*>[\s\S]*|<\/?[a-z][a-z0-9:-]*\b(?:[^"'<>]|"[^"]*"|'[^']*')*>|<![^>]*>/gi)];
}

function insertionBoundary(tokens, patch) {
  if (patch.target !== 'form') return tokens.find(token => new RegExp(`^</${patch.target}\\s*>$`, 'i').test(token[0]));
  const opening = tokens.find(token => {
    if (!/^<form\b/i.test(token[0])) return false;
    const attributes = [...token[0].matchAll(/\s+([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)];
    const id = attributes.find(attribute => attribute[1].toLowerCase() === 'id');
    return id && (id[2] ?? id[3] ?? id[4]) === patch.formId;
  });
  const closing = opening && tokens.find(token => token.index > opening.index && /^<\/form\s*>$/i.test(token[0]));
  if (!closing) throw new Error('Add the initial form from the first Forms lesson, with its matching form ID, before adding these controls.');
  return closing;
}

export function applyPatch(state, lesson) {
  if (!lesson.patch || state.applied.includes(lesson.id)) return state;
  const closing = `</${lesson.patch.target}>`;
  const existingTokens = sourceTokens(state.draft);
  const headEnd = existingTokens.find(token => /^<\/head\s*>$/i.test(token[0]))?.index ?? 0;
  const hasNewTitle = lesson.patch.target === 'head' && sourceTokens(lesson.patch.html).some(token => /^<title\b/i.test(token[0]));
  const source = hasNewTitle
    ? existingTokens.filter(token => token.index < headEnd && /^<title\b/i.test(token[0])).reduceRight((html, token) => html.slice(0, token.index) + html.slice(token.index + token[0].length), state.draft)
    : state.draft;
  const boundary = insertionBoundary(sourceTokens(source), lesson.patch);
  if (!boundary) throw new Error(`Add a closing ${closing} tag to your project first, then try again.`);
  const draft = source.slice(0, boundary.index) + lesson.patch.html + '\n' + source.slice(boundary.index);
  if (draft.length > 200000) throw new Error('Your project reached the 200,000-character workshop limit. Download it to continue in VS Code.');
  return { ...state, draft, applied: [...state.applied, lesson.id] };
}
