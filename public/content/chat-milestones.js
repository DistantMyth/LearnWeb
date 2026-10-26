export const htmlShell = {
  "id": "chat-interface-shell",
  "module": "structure",
  "title": "Build the WhatsApp-style chat structure",
  "minutes": 25,
  "intro": "Refactor your existing chat page into the familiar desktop messenger structure: a narrow navigation rail, a conversation sidebar, and a main chat pane. HTML creates these regions now; CSS will arrange them later. Keep your earlier topic experiments in labs.html in the same project.",
  "concepts": [
    {
      "term": "Three regions",
      "description": "nav identifies the main navigation; aside contains the conversation list; main contains the selected chat. Use class labels for later styles and unique IDs for links and later JavaScript."
    },
    {
      "term": "A visible thread",
      "description": "header identifies the room, ol contains the ordered sample messages, and footer reserves a composer area. These are static samples; no network connection or script is needed."
    },
    {
      "term": "Build before behavior",
      "description": "The sidebar and navigation already exist even though they are not arranged into columns yet. A Conversations text placeholder becomes a real button after forms. Collapse behavior waits until events are taught."
    },
    {
      "term": "Preserve your learning",
      "description": "Move tables, media, room rules, and reference experiments into a linked labs.html page or supporting sections. Keep the main messenger focused. Each file stays in campus-chat; you are growing the same application."
    }
  ],
  "example": "<div class=\"app-shell\">\n  <nav class=\"navigation-rail\" aria-label=\"Main navigation\">\n    <strong class=\"brand-mark\">C</strong>\n    <span>Conversations</span>\n    <a href=\"#messages\">Messages</a>\n  </nav>\n  <aside id=\"conversation-sidebar\" class=\"conversation-sidebar\" aria-label=\"Conversations\">\n    <header class=\"sidebar-header\"><h1>Campus Chat</h1></header>\n    <h2 class=\"list-heading\">Conversations</h2>\n    <ul class=\"conversation-list\">\n      <li id=\"general-conversation\"><a class=\"conversation active\" href=\"#messages\"><span class=\"avatar\">CC</span><span><strong>General room</strong><small>Everyone on this server</small></span></a></li>\n    </ul>\n    <p class=\"sidebar-note\">A shared room for our community.</p>\n  </aside>\n  <main class=\"chat-pane\">\n    <header class=\"chat-header\"><span class=\"avatar\">CC</span><div><h2>General room</h2><p id=\"status\">Static prototype</p></div></header>\n    <section class=\"thread\" aria-label=\"Conversation thread\">\n      <p class=\"thread-notice\">A shared local room.</p>\n      <ol id=\"messages\">\n        <li>Alex: Welcome to Campus Chat!</li>\n        <li class=\"own-message\">Sam: Hello! This is our static chat prototype.</li>\n      </ol>\n    </section>\n    <footer>Message composer goes here after the forms lessons.</footer>\n  </main>\n</div>",
  "task": "Build the complete static messenger shell in your existing campus-chat project.",
  "steps": [
    "Back up index.html. Move your earlier topic experiments into labs.html and keep a link to them. Preserve your existing head, metadata, and document boilerplate.",
    "Refactor the body into the three regions in the example. Reuse existing headings and messages; avoid duplicate IDs and a second main element.",
    "Add two sample messages and the composer placeholder. Follow the Messages link and verify it reaches the thread.",
    "Save and check the unstyled HTML. All regions should exist in document order; columns, colors, and collapse behavior will come later."
  ],
  "check": {
    "question": "Should the conversation sidebar exist before JavaScript is taught?",
    "options": [
      "Yes. Build its HTML now; teach styling and toggle behavior later.",
      "No. HTML cannot describe a sidebar.",
      "Only if it can already receive live messages."
    ],
    "answer": 0,
    "explanation": "Yes. Build its HTML now; teach styling and toggle behavior later."
  },
  "sources": []
};
export const htmlControls = {
  "id": "chat-interface-controls",
  "module": "forms",
  "title": "Add the composer and sidebar controls",
  "minutes": 25,
  "intro": "Now that labels, input types, validation, and button attributes have been taught, replace the shell placeholders with real labeled inputs and buttons. Keep behavior-dependent controls disabled until the relevant JavaScript lesson.",
  "concepts": [
    {
      "term": "Composer form",
      "description": "Use id=composer for one form, with separate name and message inputs. required and maxlength describe browser constraints; the server will also validate data later."
    },
    {
      "term": "Control relationships",
      "description": "aria-controls names the sidebar element controlled by the toggle; aria-expanded describes its current expanded state. The static sidebar is visible, so true is accurate. JavaScript will update both together later."
    },
    {
      "term": "Disabled, not pretend",
      "description": "disabled makes a button or input visibly and behaviorally unavailable. The static Send button cannot deliver messages, the search input cannot filter yet, and the toggle cannot collapse yet. Keep each present so CSS can style the real interface."
    },
    {
      "term": "Separate forms",
      "description": "The profile/preferences form from earlier labs is separate from the composer. Never nest forms. Replace the existing footer placeholder rather than creating a second thread or composer."
    }
  ],
  "example": "<!-- Replace the rail's Conversations span with this button. -->\n<button id=\"toggle-sidebar\" type=\"button\" aria-controls=\"conversation-sidebar\" aria-expanded=\"true\" disabled>\u2630 Conversations</button>\n<!-- Add this in the conversation sidebar. -->\n<label for=\"conversation-search\">Find a conversation</label>\n<input id=\"conversation-search\" type=\"search\" placeholder=\"Search conversations\" disabled>\n<p id=\"search-empty\" hidden>No matching conversations.</p>\n<!-- Replace the chat-pane footer placeholder with this form. -->\n<form id=\"composer\" class=\"composer\" action=\"index.html\" method=\"get\">\n  <div class=\"name-field\"><label for=\"name\">Your name</label><input id=\"name\" name=\"name\" maxlength=\"30\" required placeholder=\"Name\"></div>\n  <div class=\"message-field\"><label for=\"message\">Message</label><input id=\"message\" name=\"message\" maxlength=\"500\" required placeholder=\"Type a message\"></div>\n  <button id=\"send\" type=\"submit\" disabled>Send \u2197</button>\n</form>",
  "task": "Complete all HTML controls for the WhatsApp-style interface without requiring JavaScript.",
  "steps": [
    "Find the conversation sidebar and chat-pane created in the structure lesson. Replace the rail placeholder and add the search field using the first two parts of the example.",
    "Replace only the composer footer placeholder with the composer form. Keep your thread and earlier messages.",
    "Keep all three behavior-dependent controls disabled. Verify every label matches a unique input ID and no form is nested in another.",
    "Save and inspect the result: the sidebar, search, header, sample messages, composer, and toggle now exist. The CSS track will arrange them before JavaScript adds their behaviors."
  ],
  "check": {
    "question": "Why build disabled controls at the HTML stage?",
    "options": [
      "They establish the real interface structure before its behavior is taught.",
      "They secretly send messages through HTML.",
      "They replace the need for labels."
    ],
    "answer": 0,
    "explanation": "They establish the real interface structure before its behavior is taught."
  },
  "sources": []
};
export const cssShell = {
  "id": "css-messenger-layout",
  "module": "css",
  "title": "Arrange the complete messenger interface",
  "minutes": 25,
  "intro": "Use the Flexbox and responsive CSS you have now learned to arrange the existing HTML into a WhatsApp Web-style workspace. The rail, sidebar, header, thread, and composer should all be visible before you add behavior.",
  "concepts": [
    {
      "term": "Application frame",
      "description": "A flex row lays out the rail, conversation sidebar, and chat pane. The rail and sidebar have fixed widths and flex-shrink: 0; the chat pane uses flex: 1 and min-width: 0 to fill the remaining space without forcing overflow."
    },
    {
      "term": "Nested flexible panes",
      "description": "The chat pane is a flex column: header, thread, composer. min-height: 0 allows the thread to shrink; the message list uses overflow: auto so only messages scroll. height: 100vh fills the viewport."
    },
    {
      "term": "Message bubbles",
      "description": "fit-content lets a bubble size to its contents within max-width. The .own-message class, already placed on a sample message, uses margin-left: auto and a different background. This is visual alignment, not message delivery."
    },
    {
      "term": "Responsive and hidden states",
      "description": "Media queries narrow the sidebar and wrap the composer on small screens. The [hidden] rule ensures later JavaScript can hide a region even when other rules set display. Outline focus states keep keyboard navigation visible."
    }
  ],
  "example": ":root { font-family: system-ui, sans-serif; color: #162d28; background: #dce5e0; }\n* { box-sizing: border-box; }\nbody { margin: 0; }\nbutton, input { font: inherit; }\na { color: inherit; }\nbutton, .navigation-rail a { cursor: pointer; border: 0; border-radius: .75rem; padding: .8rem; background: #d9e8e1; color: #173b30; text-decoration: none; }\nbutton:disabled { opacity: .5; cursor: default; }\n:focus-visible { outline: 3px solid #006f54; outline-offset: 3px; }\n[hidden] { display: none !important; }\n.app-shell { display: flex; height: 100vh; max-width: 100rem; margin: auto; background: white; }\n.navigation-rail { width: 4.5rem; flex-shrink: 0; background: #edf2ef; border-right: 1px solid #d7e1db; padding: 1rem .6rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }\n.brand-mark { display: block; color: #08785a; font-size: 1.8rem; }\n.rail-spacer { flex: 1; }\n.avatar { width: 2.5rem; height: 2.5rem; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #cce7da; color: #126347; font-size: .75rem; font-weight: 700; }\n.conversation-sidebar { width: 21rem; flex-shrink: 0; padding: 1.3rem 1rem; border-right: 1px solid #d7e1db; overflow: auto; }\n.sidebar-header { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }\nh1 { font-size: 1.3rem; margin: 0 0 1rem; }\n.local-tag { font-size: .65rem; background: #ddf4e8; color: #126347; border-radius: 1rem; padding: .3rem .5rem; }\n.search-label, .composer label { display: block; font-size: .75rem; color: #48645b; margin-bottom: .3rem; }\ninput { width: 100%; min-width: 0; border: 1px solid #c9d8cf; background: #f5f8f6; color: #162d28; border-radius: .65rem; padding: .8rem; }\n.list-heading { font-size: .75rem; margin-top: 1.5rem; color: #48645b; }\n.conversation-list { list-style: none; padding: 0; }\n.conversation { display: flex; align-items: center; gap: .6rem; padding: 1rem .6rem; border-radius: .75rem; text-decoration: none; }\n.conversation.active { background: #e5f3eb; }\n.conversation small { display: block; font-size: .72rem; margin-top: .3rem; color: #48645b; }\n.live-dot { width: .5rem; height: .5rem; border-radius: 50%; background: #08785a; margin-left: auto; }\n.sidebar-note { font-size: .78rem; color: #48645b; margin-top: 3rem; line-height: 1.6; }\n.chat-pane { display: flex; flex-direction: column; flex: 1; min-width: 0; }\n.chat-header { display: flex; align-items: center; gap: .8rem; padding: 1rem 1.4rem; border-bottom: 1px solid #d7e1db; }\n.chat-header h2 { font-size: 1rem; margin: 0; }\n#status { margin: .3rem 0 0; font-size: .75rem; color: #48645b; }\n.room-info { font-size: .75rem; margin-left: auto; }\n.thread { display: flex; flex-direction: column; flex: 1; min-height: 0; background: #e7e4db; padding: 1rem 1.5rem; }\n.thread-notice { align-self: center; background: #fff7d4; border-radius: .6rem; padding: .6rem 1rem; font-size: .72rem; text-align: center; }\n#messages { list-style: none; padding: .5rem 0; margin: 0; overflow: auto; flex: 1; }\n#messages li { width: fit-content; max-width: 85%; margin: .6rem 0; padding: .8rem 1rem; border-radius: .8rem; background: white; box-shadow: 0 1px 2px #0001; white-space: pre-wrap; overflow-wrap: anywhere; line-height: 1.5; }\n#messages li.own-message { margin-left: auto; background: #d7f5c7; }\n.composer { display: flex; align-items: flex-end; gap: .7rem; padding: 1rem 1.3rem; background: #f5f8f6; }\n.name-field { width: 8rem; }\n.message-field { flex: 1; min-width: 0; }\n#send { background: #08785a; color: white; padding: .85rem 1rem; }\n@media (max-width: 55rem) { .conversation-sidebar { width: 16rem; } .thread { padding: 1rem; } }\n@media (max-width: 40rem) {\n  .navigation-rail { width: 3.5rem; padding: 1rem .3rem; }\n  .conversation-sidebar { width: 40%; padding: 1rem .5rem; }\n  h1 { font-size: 1rem; }\n  .local-tag, .conversation .avatar, .room-info { display: none; }\n  .chat-header { padding: .8rem; }\n  .composer { flex-wrap: wrap; padding: .75rem; }\n  .name-field { width: 100%; }\n  .thread { padding: .5rem; }\n  #messages li { max-width: 95%; }\n}\n",
  "task": "Style every part of your messenger shell using only the CSS learned so far.",
  "steps": [
    "Keep index.html from the HTML shell lessons. Apply these rules in styles.css, retaining your own color choices and earlier useful styles. The example contains only CSS.",
    "Check the desktop three-column layout, chat header, left/right sample bubbles, and bottom composer. Add enough static messages to check that the message list scrolls without pushing the composer offscreen.",
    "Resize below 55rem and 40rem. In DevTools temporarily add hidden to the sidebar and verify the chat expands into the freed space. This is a CSS test; permanent button behavior comes in JavaScript.",
    "Test links and input labels using the keyboard. Keep the unavailable buttons/search disabled until the JavaScript track implements them."
  ],
  "check": {
    "question": "Which CSS allows the main chat pane to use space released by a hidden sidebar?",
    "options": [
      "flex: 1 on the chat pane inside the flex row.",
      "A message POST request.",
      "Removing the input labels."
    ],
    "answer": 0,
    "explanation": "flex: 1 on the chat pane inside the flex row."
  },
  "sources": []
};
