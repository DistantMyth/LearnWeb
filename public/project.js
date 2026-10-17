export function createWorkspace({ getState, updateDraft, notify, isPersistent }) {
  const dialog = document.querySelector('#project-dialog');
  const editor = document.querySelector('#project-editor');
  const frame = document.querySelector('#project-preview');
  const saveStatus = document.querySelector('#save-status');
  let saveTimer;
  let returnTarget;

  function renderPreview() {
    const policy = "default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src 'none'; form-action 'none'; base-uri 'none'; script-src 'none'; object-src 'none'; frame-src 'none'";
    frame.srcdoc = `<!DOCTYPE html><html><head><meta http-equiv="Content-Security-Policy" content="${policy}"></head><body>${getState().draft}</body></html>`;
  }

  function save() {
    clearTimeout(saveTimer);
    updateDraft(editor.value);
    saveStatus.textContent = isPersistent() ? 'Saved on this browser' : 'Not saved — download a copy before closing';
  }

  function open(returnSelector) {
    returnTarget = typeof returnSelector === 'string' ? returnSelector : document.activeElement;
    editor.value = getState().draft;
    saveStatus.textContent = isPersistent() ? 'Saved on this browser' : 'Not saved — download a copy before closing';
    renderPreview();
    if (!dialog.open) dialog.showModal();
  }

  function download(text, filename) {
    const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  editor.addEventListener('input', () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 250);
  });
  editor.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
      event.preventDefault();
      save();
      renderPreview();
    }
  });
  document.querySelector('#run-preview').addEventListener('click', () => { save(); renderPreview(); });
  document.querySelector('#download-project').addEventListener('click', () => {
    save();
    download(getState().draft, 'index.html');
    notify('Downloaded index.html. Open it in your campus-clubhouse folder with VS Code.');
  });
  dialog.addEventListener('close', () => {
    save();
    const target = typeof returnTarget === 'string' ? document.querySelector(returnTarget) : returnTarget;
    if (target?.isConnected) target.focus({ preventScroll: true });
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && dialog.open) save(); });
  return { open };
}
