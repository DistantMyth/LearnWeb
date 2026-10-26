const form = document.querySelector('#composer');
const name = document.querySelector('#name');
const text = document.querySelector('#message');
const messages = document.querySelector('#messages');
const status = document.querySelector('#status');
const send = document.querySelector('#send');
let connected = false;
let pending = false;
function updateButton() { send.disabled = !connected || pending; }
function render(message) {
  const item = document.createElement('li');
  item.classList.toggle('own-message', message.name === name.value.trim());
  item.textContent = `${message.name}: ${message.text}`;
  messages.append(item);
  while (messages.children.length > 100) messages.firstElementChild.remove();
  messages.scrollTop = messages.scrollHeight;
}
const stream = new EventSource('/events');
stream.onopen = () => { connected = true; status.textContent = 'Connected to the shared room.'; updateButton(); };
stream.onerror = () => { connected = false; status.textContent = 'Connection lost. Reconnecting…'; updateButton(); };
stream.onmessage = event => {
  try {
    const data = JSON.parse(event.data);
    if (data.type === 'history') { messages.replaceChildren(); data.messages.forEach(render); }
    if (data.type === 'message') render(data.message);
  } catch { status.textContent = 'Could not read a server message. Reload to reconnect.'; }
};
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!connected || pending || !form.reportValidity()) return;
  pending = true; updateButton();
  const submitted = text.value;
  try {
    const response = await fetch('/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.value, text: submitted }) });
    if (!response.ok) throw new Error(await response.text());
    if (text.value === submitted) text.value = '';
    status.textContent = 'Message sent.';
    text.focus();
  } catch (error) { status.textContent = `Could not confirm delivery: ${error.message}. Check the room before retrying.`; }
  finally { pending = false; updateButton(); }
});

// These controls become functional only after the DOM/events lessons.
const sidebar = document.querySelector('#conversation-sidebar');
const toggleSidebar = document.querySelector('#toggle-sidebar');
toggleSidebar.addEventListener('click', () => {
  sidebar.hidden = !sidebar.hidden;
  toggleSidebar.setAttribute('aria-expanded', String(!sidebar.hidden));
  toggleSidebar.setAttribute('aria-label', sidebar.hidden ? 'Show conversations' : 'Hide conversations');
});
document.querySelector('#conversation-search').addEventListener('input', event => {
  const matches = 'general room'.includes(event.target.value.trim().toLowerCase());
  document.querySelector('#general-conversation').hidden = !matches;
  document.querySelector('#search-empty').hidden = matches;
});
