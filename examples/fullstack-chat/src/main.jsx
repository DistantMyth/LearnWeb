import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { mergeMessage } from './messages.js';

function useMessages() {
  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState('Connecting…');
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const stream = new EventSource('/api/events');
    stream.onopen = () => { setConnected(true); setConnection('Connected · one shared room'); };
    stream.onerror = () => { setConnected(false); setConnection('Disconnected. Reconnecting…'); };
    stream.onmessage = event => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'history') setMessages(data.messages);
        if (data.type === 'message') setMessages(current => mergeMessage(current, data.message));
      } catch { setConnection('Could not read a server message. Reload to reconnect.'); }
    };
    return () => stream.close();
  }, []);
  return { messages, connected, connection };
}
function ConversationSidebar({ search, onSearch }) {
  const match = 'general room'.includes(search.trim().toLowerCase());
  return <aside id="conversation-sidebar" className="conversation-sidebar" aria-label="Conversations">
    <header className="sidebar-header"><h1>Campus Chat</h1><span className="local-tag">MERN</span></header>
    <label className="search-label" htmlFor="conversation-search">Find a conversation</label>
    <input id="conversation-search" type="search" placeholder="Search conversations" value={search} onChange={event => onSearch(event.target.value)} />
    <h2 className="list-heading">Conversations</h2>
    {match ? <ul className="conversation-list"><li><a className="conversation active" href="#message" aria-current="true"><span className="avatar" aria-hidden="true">CC</span><span><strong>General room</strong><small>Everyone on this server</small></span><span className="live-dot" aria-label="Shared room" /></a></li></ul> : <p>No matching conversations.</p>}
    <div className="sidebar-note"><strong>React → Express → MongoDB</strong><p>One shared local room. Messages persist after server restart.</p><p>Names are display labels. This exercise has no authenticated accounts or private conversations.</p></div>
  </aside>;
}
function MessageThread({ messages, name }) {
  const list = useRef(null);
  const followLatest = useRef(true);
  useEffect(() => { if (list.current && followLatest.current) list.current.scrollTop = list.current.scrollHeight; }, [messages]);
  return <section className="thread" aria-label="Conversation thread"><p className="thread-notice" id="room-info">This shared room stores messages in MongoDB. The view shows the most recent 100.</p>
    <ol id="messages" ref={list} onScroll={event => { const node = event.currentTarget; followLatest.current = node.scrollHeight - node.scrollTop - node.clientHeight < 60; }} role="log" aria-label="Messages" aria-live="polite" aria-relevant="additions" tabIndex="0">{messages.map(message => <li key={message.id} className={message.name === name.trim() ? 'own-message' : ''}><strong>{message.name}: </strong>{message.text}<small className="message-time">{new Date(message.createdAt).toLocaleTimeString()}</small></li>)}</ol>
  </section>;
}
function Composer({ connected, name, onName }) {
  const [text, setText] = useState('');
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState('');
  async function submit(event) {
    event.preventDefault();
    if (!connected || pending || !name.trim() || !text.trim()) return;
    setPending(true); setNotice('Sending…');
    const submitted = text;
    try {
      const response = await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, text: submitted }) });
      if (!response.ok) throw new Error((await response.json()).error || 'Request failed');
      setText(current => current === submitted ? '' : current);
      setNotice('Message saved.');
    } catch (error) { setNotice(`Could not confirm delivery: ${error.message}. Check the room before retrying.`); }
    finally { setPending(false); }
  }
  return <div className="composer-area"><form className="composer" onSubmit={submit}>
    <div className="name-field"><label htmlFor="name">Your name</label><input id="name" name="name" required maxLength="30" value={name} onChange={event => onName(event.target.value)} autoComplete="nickname" placeholder="Name" /></div>
    <div className="message-field"><label htmlFor="message">Message</label><input id="message" name="message" required maxLength="500" value={text} onChange={event => setText(event.target.value)} autoComplete="off" placeholder="Type a message" /></div>
    <button id="send" disabled={!connected || pending}>Send ↗</button>
  </form><p className="delivery-notice" role="status">{notice}</p></div>;
}
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const { messages, connected, connection } = useMessages();
  return <div className="app-shell">
    <nav className="navigation-rail" aria-label="Main navigation"><strong className="brand-mark" aria-label="Campus Chat">C</strong><button type="button" aria-controls="conversation-sidebar" aria-expanded={sidebarOpen} aria-label={sidebarOpen ? 'Hide conversations' : 'Show conversations'} onClick={() => setSidebarOpen(open => !open)}>☰</button><a href="#messages" aria-label="Jump to messages">✉</a><span className="rail-spacer" /><span className="avatar" aria-label="Your profile">You</span></nav>
    <div hidden={!sidebarOpen} className="sidebar-wrapper"><ConversationSidebar search={search} onSearch={setSearch} /></div>
    <main className="chat-pane"><header className="chat-header"><span className="avatar" aria-hidden="true">CC</span><div><h2>General room</h2><p id="status" role="status">{connection}</p></div><a className="room-info" href="#room-info">Room info</a></header><MessageThread messages={messages} name={name} /><Composer connected={connected} name={name} onName={setName} /></main>
  </div>;
}
createRoot(document.querySelector('#root')).render(<React.StrictMode><App /></React.StrictMode>);
