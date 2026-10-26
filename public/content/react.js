// Original Campus Chat lessons; source inventory scraped from W3Schools on 2026-10-26.
export const reactLessons = [
  {
    "id": "react-toolchain",
    "module": "react",
    "title": "Bridge from browser JavaScript to React tooling",
    "minutes": 25,
    "intro": "Create an isolated React workspace and identify which process serves it. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Node, npm, and Vite",
        "description": "Node runs JavaScript outside the browser. npm installs packages and runs named scripts from package.json. Vite transforms JSX and serves development files; it is not the chat API server. Use the current supported Node LTS satisfying Vite’s engine requirement."
      },
      {
        "term": "Preserve your previous work",
        "description": "Create react-chat beside the existing vanilla project, not inside its source folder. The earlier HTML/CSS/JS and working server remain your reference. Install dependencies in react-chat and keep its lockfile."
      },
      {
        "term": "Development and production",
        "description": "npm run dev starts a local development server. npm run build creates static dist assets and npm run preview checks that build. Stop a server with Ctrl+C. React components still execute in the browser."
      }
    ],
    "example": "node --version\nnpm --version\nnpm create vite@latest react-chat -- --template react\ncd react-chat\nnpm install\nnpm run dev",
    "task": "Create an isolated React workspace and identify which process serves it.",
    "steps": [
      "Run the commands from your project parent directory.",
      "Open the printed local URL.",
      "Inspect package.json scripts and src/main.jsx, then locate index.html and its root element.",
      "Keep the existing chat backend running separately only when a later lesson connects to it."
    ],
    "check": {
      "question": "Does Vite replace the chat API server?",
      "options": [
        "No. It serves and builds the React client; the API remains a separate responsibility.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. It serves and builds the React client; the API remains a separate responsibility."
    },
    "sources": [
      "/react/default.asp",
      "/react/react_intro.asp",
      "/react/react_getstarted.asp",
      "/react/react_first_app.asp"
    ]
  },
  {
    "id": "react-es6",
    "module": "react",
    "title": "Revisit ES6 through chat data",
    "minutes": 25,
    "intro": "Create rooms.js with room data and import it into a temporary console experiment. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Functions and classes",
        "description": "Arrow functions preserve lexical this; classes define constructors and methods. React function components need no class. const prevents rebinding, not object mutation; let is block scoped."
      },
      {
        "term": "Data transformations",
        "description": "map creates a new array, destructuring extracts fields, spread copies one level, and a ternary chooses an expression. Template strings interpolate values. Modules export and import explicit bindings."
      }
    ],
    "example": "export const rooms = [{ id: \"general\", name: \"General\" }];\nconst labels = rooms.map(({ id, name }) => ({ ...{ id }, label: `${name} chat` }));\nconst selected = labels.length ? labels[0].label : \"No rooms\";",
    "task": "Create rooms.js with room data and import it into a temporary console experiment.",
    "steps": [
      "Explain each expression using JavaScript learned earlier.",
      "Create a tiny class with a constructor and compare its method this to an arrow callback.",
      "Demonstrate that a shallow spread does not clone nested messages."
    ],
    "check": {
      "question": "How deep does object spread copy?",
      "options": [
        "It copies one level; nested objects retain their references.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "It copies one level; nested objects retain their references."
    },
    "sources": [
      "/react/react_es6.asp",
      "/react/react_es6_classes.asp",
      "/react/react_es6_arrow.asp",
      "/react/react_es6_variables.asp",
      "/react/react_es6_array_map.asp",
      "/react/react_es6_destructuring.asp",
      "/react/react_es6_spread.asp",
      "/react/react_es6_modules.asp",
      "/react/react_es6_ternary.asp",
      "/react/react_es6_template_strings.asp"
    ]
  },
  {
    "id": "react-jsx",
    "module": "react",
    "title": "Render the existing static shell with JSX",
    "minutes": 25,
    "intro": "Move every currently buildable piece of the WhatsApp-style shell into static JSX. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "JSX and root rendering",
        "description": "JSX describes elements; the build tool converts it into JavaScript. createRoot mounts into the existing root element. A component returns one root or a fragment. Self-close void elements."
      },
      {
        "term": "Expressions and attributes",
        "description": "Use braces for JavaScript expressions and quoted strings for literal attributes. Write className and htmlFor, camelCase DOM properties, and style objects. JSX if decisions happen before return, through a ternary, or with &&."
      },
      {
        "term": "Upgrade deliberately",
        "description": "Read migration guidance before changing React versions, update react and react-dom together, and check the installed version in package.json. Never mix legacy render with createRoot."
      }
    ],
    "example": "import { createRoot } from \"react-dom/client\";\nconst roomName = \"General\";\ncreateRoot(document.getElementById(\"root\")).render(\n  <main className=\"chat-shell\">\n    <nav aria-label=\"Workspace\">Campus Chat</nav>\n    <aside className=\"sidebar\">Chats</aside>\n    <section aria-label={roomName}><h1>{roomName}</h1><p>Hello campus!</p></section>\n  </main>\n);",
    "task": "Move every currently buildable piece of the WhatsApp-style shell into static JSX.",
    "steps": [
      "Replace starter JSX with the navigation rail, sidebar, header, bubbles, and composer markup already built in HTML.",
      "Replace class with className and associate labels with htmlFor.",
      "Use expressions for the heading and a ternary for a static connection label.",
      "Keep controls visually present even when they have no handlers yet."
    ],
    "check": {
      "question": "What belongs inside JSX braces?",
      "options": [
        "A JavaScript expression, such as a variable or ternary result.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "A JavaScript expression, such as a variable or ternary result."
    },
    "sources": [
      "/react/react_render.asp",
      "/react/react_upgrade.asp",
      "/react/react_jsx.asp",
      "/react/react_jsx_expressions.asp",
      "/react/react_jsx_attributes.asp",
      "/react/react_jsx_if_statements.asp"
    ]
  },
  {
    "id": "react-components",
    "module": "react",
    "title": "Split the shell into reusable components",
    "minutes": 25,
    "intro": "Build Rail, Sidebar, ChatPanel and App while preserving the complete static layout. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Function components",
        "description": "Name components with an uppercase initial and call them with JSX. Keep definitions outside other components to preserve identity. Components compose; they do not require inheritance."
      },
      {
        "term": "CSS continuity",
        "description": "Import the earlier stylesheet in main.jsx. Retain its grid, responsive rules, rail, sidebar and bubble classes. React does not replace CSS or require a styling library."
      }
    ],
    "example": "import \"./chat.css\";\nfunction Rail() { return <nav aria-label=\"Workspace\"><button>Chats</button></nav>; }\nfunction Sidebar() { return <aside className=\"sidebar\"><h2>Chats</h2><input aria-label=\"Search chats\" /></aside>; }\nfunction ChatPanel() { return <section><h1>General</h1><p className=\"bubble\">Hello campus!</p><form><input aria-label=\"Message\" /><button>Send</button></form></section>; }\nfunction App() { return <main className=\"chat-shell\"><Rail /><Sidebar /><ChatPanel /></main>; }\nexport default App;",
    "task": "Build Rail, Sidebar, ChatPanel and App while preserving the complete static layout.",
    "steps": [
      "Copy the earlier chat CSS into src/chat.css and import it.",
      "Move each visible region into its own component.",
      "Render App from main.jsx with createRoot.",
      "Compare narrow and wide screens with the earlier interface."
    ],
    "check": {
      "question": "Why define Sidebar outside App?",
      "options": [
        "A stable component definition preserves its identity across App renders.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "A stable component definition preserves its identity across App renders."
    },
    "sources": [
      "/react/react_components.asp",
      "/react/react_css_styling.asp"
    ]
  },
  {
    "id": "react-props",
    "module": "react",
    "title": "Pass room data and compose message bubbles",
    "minutes": 25,
    "intro": "Render the existing bubbles and sidebar room rows from read-only data. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Props and destructuring",
        "description": "Props are read-only inputs from a parent. Destructure names and defaults in the function parameter. Pass objects or callbacks inside braces; never change a prop object."
      },
      {
        "term": "Children and lists",
        "description": "children represents nested JSX. map renders repeated elements; key is a stable sibling identity such as the server message id, not an array position when items can change. key is not passed as a normal prop."
      }
    ],
    "example": "function Bubble({ author, children }) { return <article className=\"bubble\"><strong>{author}</strong><p>{children}</p></article>; }\nfunction MessageList({ messages }) { return <section aria-label=\"Messages\">{messages.map(message => <Bubble key={message.id} author={message.author}>{message.text}</Bubble>)}</section>; }\n// In App: <MessageList messages={[{id: \"welcome\", author: \"Campus\", text: \"Welcome\"}]} />",
    "task": "Render the existing bubbles and sidebar room rows from read-only data.",
    "steps": [
      "Add RoomRow and Bubble components with destructured props.",
      "Use children for bubble content and explicit props for metadata.",
      "Map room and message arrays with stable ids.",
      "Show a conditional empty room placeholder when no messages exist."
    ],
    "check": {
      "question": "Which key survives sorting correctly?",
      "options": [
        "A stable room or message id, rather than its array index.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "A stable room or message id, rather than its array index."
    },
    "sources": [
      "/react/react_props.asp",
      "/react/react_props_destructuring.asp",
      "/react/react_props_children.asp",
      "/react/react_lists.asp",
      "/react/react_conditional_rendering.asp"
    ]
  },
  {
    "id": "react-state",
    "module": "react",
    "title": "Teach hooks and activate sidebar collapse",
    "minutes": 25,
    "intro": "Make the previously static sidebar collapse and expand using state. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Hook rules",
        "description": "Hooks let function components use React features. Call hooks at the top level of components or custom hooks, never in loops, conditionals, or regular event handlers."
      },
      {
        "term": "State and events",
        "description": "useState returns the current value and a setter. A setter schedules a render. Pass a function as an event handler; passing onClick={toggle()} calls it during render. Use a functional update when next state depends on previous state."
      },
      {
        "term": "Immutable updates",
        "description": "Create new arrays and objects rather than modifying state. State is a snapshot for one render; a setter does not immediately change the current variable."
      }
    ],
    "example": "import { useState } from \"react\";\nexport default function SidebarToggle() {\n  const [collapsed, setCollapsed] = useState(false);\n  return <><button type=\"button\" aria-controls=\"react-conversation-sidebar\" aria-expanded={!collapsed} onClick={() => setCollapsed(value => !value)}>Chats</button><aside id=\"react-conversation-sidebar\" hidden={collapsed}>Chat rooms</aside></>;\n}",
    "task": "Make the previously static sidebar collapse and expand using state.",
    "steps": [
      "Place collapsed state in App so the rail button and sidebar share it.",
      "Pass the callback to Rail and the value to Sidebar.",
      "Apply the earlier collapsed layout class conditionally and set aria-expanded.",
      "Add selectedRoom state and let a room button select it."
    ],
    "check": {
      "question": "Where can useState be called?",
      "options": [
        "At the top level of a function component or custom hook.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "At the top level of a function component or custom hook."
    },
    "sources": [
      "/react/react_hooks.asp",
      "/react/react_usestate.asp",
      "/react/react_events.asp"
    ]
  },
  {
    "id": "react-forms",
    "module": "react",
    "title": "Control the composer and append local messages",
    "minutes": 25,
    "intro": "Make the message composer functional locally before connecting a network. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Controlled fields",
        "description": "Bind value to state and update it with onChange. A textarea uses value rather than nested text; a select uses its own value rather than selected on options."
      },
      {
        "term": "Submission",
        "description": "Handle the form onSubmit and call preventDefault to keep the page. Validate trimmed text and append an immutable message. Local messages are not yet sent to other browsers."
      }
    ],
    "example": "import { useState } from \"react\";\nfunction LocalComposer() {\n const [draft, setDraft] = useState(\"\");\n const [messages, setMessages] = useState([]);\n function send(event) {\n  event.preventDefault();\n  const text = draft.trim();\n  if (!text) return;\n  setMessages(previous => [...previous, { id: crypto.randomUUID(), text }]);\n  setDraft(\"\");\n }\n return <><ul>{messages.map(m => <li key={m.id}>{m.text}</li>)}</ul><form onSubmit={send}><textarea aria-label=\"Message\" value={draft} onChange={event => setDraft(event.target.value)} /><button>Send</button></form></>;\n}",
    "task": "Make the message composer functional locally before connecting a network.",
    "steps": [
      "Move messages state to App and pass a send callback into Composer.",
      "Add a controlled search input and derive filtered rooms during render.",
      "Add a select to choose the active room and compare it with sidebar buttons.",
      "Keep an empty-message guard and preserve focus after sending."
    ],
    "check": {
      "question": "What prevents a form from reloading the page?",
      "options": [
        "Calling event.preventDefault() in its submit handler.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "Calling event.preventDefault() in its submit handler."
    },
    "sources": [
      "/react/react_forms.asp",
      "/react/react_forms_submit.asp",
      "/react/react_forms_textarea.asp",
      "/react/react_forms_select.asp"
    ]
  },
  {
    "id": "react-preferences",
    "module": "react",
    "title": "Build notification and profile controls",
    "minutes": 25,
    "intro": "Add a settings panel with controlled display name, notifications and theme controls. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Multiple inputs",
        "description": "Store related form fields in an object. Give each field a name, read event.target.name, and copy previous values with spread before changing one key."
      },
      {
        "term": "Checkbox and radio",
        "description": "Checkbox state comes from checked, not value. Radio inputs share a name and each compares its value with the selected state. Labels make controls usable by keyboard and pointer."
      }
    ],
    "example": "const [settings, setSettings] = useState({ name: \"Student\", alerts: true, theme: \"dark\" });\nfunction change(event) {\n const { name, type, checked, value } = event.target;\n setSettings(previous => ({ ...previous, [name]: type === \"checkbox\" ? checked : value }));\n}\n// Inside the component return:\n// <input name=\"name\" value={settings.name} onChange={change} />\n// <input type=\"checkbox\" name=\"alerts\" checked={settings.alerts} onChange={change} />\n// <input type=\"radio\" name=\"theme\" value=\"dark\" checked={settings.theme === \"dark\"} onChange={change} />",
    "task": "Add a settings panel with controlled display name, notifications and theme controls.",
    "steps": [
      "Import useState in the settings component.",
      "Associate each input with a visible label and group radio choices in a fieldset.",
      "Apply the chosen theme through an existing CSS class.",
      "Verify editing one field preserves the others."
    ],
    "check": {
      "question": "Which checkbox property contains its on/off state?",
      "options": [
        "event.target.checked is the boolean state.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "event.target.checked is the boolean state."
    },
    "sources": [
      "/react/react_forms_multiple_inputs.asp",
      "/react/react_forms_checkbox.asp",
      "/react/react_forms_radio.asp"
    ]
  },
  {
    "id": "react-effects",
    "module": "react",
    "title": "Reconnect the existing real-time server safely",
    "minutes": 25,
    "intro": "Port the already-taught fetch and EventSource integration into effects using the existing API contract. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Effects synchronize external systems",
        "description": "useEffect runs after commit. Its dependencies list every reactive value used by the effect. A return function cleans up before a dependency changes and on unmount. Development Strict Mode deliberately checks setup and cleanup."
      },
      {
        "term": "Network contract first",
        "description": "Reuse the earlier /events and POST /messages contract. It sends {type:\"history\", messages:[{name,text,time}]} and {type:\"message\", message:{name,text,time}}. It has no room filter, history GET route or stable message id. EventSource receives; fetch sends. Keep room selection as client UI only until the server course adds server-backed rooms."
      },
      {
        "term": "Error and loading state",
        "description": "Track connection and error state visibly. Close the stream on unmount. Replace messages on a history snapshot rather than appending it after reconnect. Assign a local UUID when adapting each wire message to React data; a snapshot may rebuild local ids. A later backend migration introduces durable server ids."
      }
    ],
    "example": "import { useEffect, useState } from \"react\";\nfunction useLegacyChat() {\n const [messages, setMessages] = useState([]);\n const [status, setStatus] = useState(\"connecting\");\n useEffect(() => {\n  const adapt = message => ({ ...message, id: crypto.randomUUID() });\n  const stream = new EventSource(\"/events\");\n  stream.onopen = () => setStatus(\"connected\");\n  stream.onerror = () => setStatus(\"reconnecting\");\n  stream.onmessage = event => {\n   try {\n    const data = JSON.parse(event.data);\n    if (data.type === \"history\" && Array.isArray(data.messages)) {\n     setMessages(data.messages.map(adapt));\n    } else if (data.type === \"message\" && data.message) {\n     setMessages(previous => [...previous, adapt(data.message)]);\n    }\n   } catch { setStatus(\"Invalid server event\"); }\n  };\n  return () => stream.close();\n }, []);\n return { messages, status };\n}\n// Vite development config: merge into the existing config, retaining react().\n// server: { proxy: { \"/events\": \"http://127.0.0.1:4180\",\n//                    \"/messages\": \"http://127.0.0.1:4180\" } }\n// Restart Vite after changing vite.config.js. Keep the earlier Node server running.\n// POST /messages still sends JSON {name, text}; adapt wire name/time to your renderer.",
    "task": "Port the already-taught fetch and EventSource integration into effects using the existing API contract.",
    "steps": [
      "Run the earlier public/chat-final/server.mjs on port 4180 and the Vite client on its printed development port.",
      "Merge the two proxy entries into vite.config.js under server.proxy, retain the React plugin, and restart Vite. A development proxy forwards same-origin browser paths to the existing backend; it does not provide production hosting.",
      "Move the shown hook above App, call it unconditionally at App’s top level, and pass messages/status to the interface. Validate name/text/time types when adapting events.",
      "Port POST /messages into Composer’s async submit handler with {name,text}, response.ok checks and a visible error; wait for the stream rather than optimistically adding another message.",
      "Open two Vite tabs, send from both, reconnect one and verify the history is replaced. Document that all sidebar rooms currently display the same shared server feed."
    ],
    "check": {
      "question": "Why close EventSource in effect cleanup?",
      "options": [
        "It prevents abandoned connections and duplicate listeners after unmount or dependency changes.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "It prevents abandoned connections and duplicate listeners after unmount or dependency changes."
    },
    "sources": [
      "/react/react_useeffect.asp"
    ]
  },
  {
    "id": "react-context",
    "module": "react",
    "title": "Share theme and identity through context",
    "minutes": 25,
    "intro": "Provide profile and theme to distant shell components without passing them through every intermediate component. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Context boundaries",
        "description": "createContext defines a channel. A provider supplies a value to descendants; useContext reads the closest provider. Context is suitable for theme and identity, while local draft state can stay in Composer."
      },
      {
        "term": "Provider syntax",
        "description": "Use Context.Provider for compatibility with React 18 and 19. A new value object triggers consumers, so avoid combining unrelated frequently changing state into one provider."
      }
    ],
    "example": "import { createContext, useContext } from \"react\";\nconst ProfileContext = createContext({ name: \"Student\" });\nfunction ProfileBadge() { const profile = useContext(ProfileContext); return <span>{profile.name}</span>; }\nfunction App() { return <ProfileContext.Provider value={{ name: \"Asha\" }}><ProfileBadge /></ProfileContext.Provider>; }",
    "task": "Provide profile and theme to distant shell components without passing them through every intermediate component.",
    "steps": [
      "Create contexts in a separate module.",
      "Wrap the relevant shell subtree in providers.",
      "Read identity in the composer and theme in the navigation.",
      "Keep message arrays out of the theme context."
    ],
    "check": {
      "question": "Which provider supplies a context value?",
      "options": [
        "The nearest matching provider above the consuming component.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "The nearest matching provider above the consuming component."
    },
    "sources": [
      "/react/react_usecontext.asp",
      "/react/react_context.asp"
    ]
  },
  {
    "id": "react-refs",
    "module": "react",
    "title": "Focus the composer without rerendering",
    "minutes": 25,
    "intro": "Add a rail shortcut that focuses the composer and understand legacy forwarded refs. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Refs",
        "description": "useRef holds a mutable current value across renders. Attach a ref to a DOM element to focus or measure it. Changing current does not rerender; use state for visible values."
      },
      {
        "term": "Ref forwarding",
        "description": "In older React code, forwardRef exposes a child DOM node to its parent. React 19 can receive ref as a prop; understand the installed version before choosing. Do not use refs to edit React-owned text manually."
      }
    ],
    "example": "import { useRef, forwardRef } from \"react\";\nconst DraftInput = forwardRef(function DraftInput(props, ref) { return <textarea {...props} ref={ref} />; });\nfunction FocusLab() {\n const input = useRef(null);\n return <><DraftInput ref={input} aria-label=\"Message\" /><button onClick={() => input.current?.focus()}>Write message</button></>;\n}",
    "task": "Add a rail shortcut that focuses the composer and understand legacy forwarded refs.",
    "steps": [
      "Start with a ref attached directly inside Composer.",
      "Expose it through forwardRef in an isolated compatibility lab.",
      "Test focus with the keyboard.",
      "Keep unread counts in state rather than in a ref."
    ],
    "check": {
      "question": "Does changing ref.current update displayed JSX?",
      "options": [
        "No. A state update is needed for values that affect rendered output.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. A state update is needed for values that affect rendered output."
    },
    "sources": [
      "/react/react_useref.asp",
      "/react/react_forward_ref.asp",
      "/react/react_forwardref.asp"
    ]
  },
  {
    "id": "react-reducer",
    "module": "react",
    "title": "Centralize message state transitions",
    "minutes": 25,
    "intro": "Replace scattered message setters with a pure reducer. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Reducers",
        "description": "useReducer separates transition logic from event handlers. A reducer receives state and an action and returns next state without mutation or network calls. dispatch schedules the transition."
      },
      {
        "term": "Actions as events",
        "description": "Use action types such as received, history and cleared. For the legacy server, assign local ids in the adapter before dispatch and replace state for a history action. A later server with stable ids permits robust deduplication across reconnects. Keep stream setup in effects."
      }
    ],
    "example": "import { useReducer } from \"react\";\nfunction reducer(state, action) {\n switch (action.type) {\n  case \"received\": return state.some(m => m.id === action.message.id) ? state : [...state, action.message];\n  case \"history\": return action.messages;\n  case \"cleared\": return [];\n  default: return state;\n }\n}\n// In App: const [messages, dispatch] = useReducer(reducer, []);\n// In the existing stream listener: dispatch({ type: \"received\", message });",
    "task": "Replace scattered message setters with a pure reducer.",
    "steps": [
      "Write the reducer outside App.",
      "Dispatch received for new adapted wire messages and history with a replacement array for a history snapshot.",
      "Exercise duplicate, new-message and clear actions with small data arrays.",
      "Retain selectedRoom and draft as separate state unless their transitions truly belong together."
    ],
    "check": {
      "question": "Where should a reducer perform fetch?",
      "options": [
        "Nowhere: reducers stay pure; effects and event handlers perform network requests.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "Nowhere: reducers stay pure; effects and event handlers perform network requests."
    },
    "sources": [
      "/react/react_usereducer.asp"
    ]
  },
  {
    "id": "react-memo",
    "module": "react",
    "title": "Measure before caching room filtering",
    "minutes": 25,
    "intro": "Profile a large room list, then memoize only a measured expensive calculation. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Memoized values",
        "description": "useMemo caches a calculation until dependencies change. It is an optimization, not a guarantee required for correctness. Avoid storing derived filtered arrays in state."
      },
      {
        "term": "Stable callbacks",
        "description": "useCallback caches a function identity. It helps when a memoized child depends on that identity; it does not make the function run faster. Include all reactive dependencies."
      }
    ],
    "example": "import { useMemo, useCallback } from \"react\";\n// Inside App, after rooms and query exist:\nconst visibleRooms = useMemo(() => rooms.filter(room => room.name.toLowerCase().includes(query.toLowerCase())), [rooms, query]);\nconst selectRoom = useCallback(id => setSelectedRoom(id), []);",
    "task": "Profile a large room list, then memoize only a measured expensive calculation.",
    "steps": [
      "Create a temporary large fixture in a lab, not production messages.",
      "Compare renders and filtering time before adding memoization.",
      "Keep useMemo pure and provide complete dependencies.",
      "Compare the stable callback only if a child actually benefits from it."
    ],
    "check": {
      "question": "May correctness depend on useMemo retaining its cache?",
      "options": [
        "No. The calculation must remain correct when React recomputes it.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. The calculation must remain correct when React recomputes it."
    },
    "sources": [
      "/react/react_usememo.asp",
      "/react/react_usecallback.asp"
    ]
  },
  {
    "id": "react-custom-hooks",
    "module": "react",
    "title": "Extract the stream lifecycle into a custom hook",
    "minutes": 25,
    "intro": "Extract useChatStream from the already-working effect and preserve its message and cleanup behavior. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Custom hooks",
        "description": "A custom hook is a function beginning with use that composes hooks. The previous useLegacyChat example already demonstrates this pattern. Each call has independent state: avoid mounting separate stream hooks in every message bubble."
      },
      {
        "term": "Inputs and cleanup",
        "description": "Make endpoint or room explicit inputs. The hook owns setup, connection state and cleanup; the component owns layout. Return meaningful values without hiding failures."
      }
    ],
    "example": "import { useEffect, useState } from \"react\";\nfunction useConnection(url) {\n const [status, setStatus] = useState(\"connecting\");\n useEffect(() => {\n  setStatus(\"connecting\");\n  const stream = new EventSource(url);\n  stream.onopen = () => setStatus(\"connected\");\n  stream.onerror = () => setStatus(\"reconnecting\");\n  return () => stream.close();\n }, [url]);\n return status;\n}",
    "task": "Refine the already-working useLegacyChat hook into reusable transport behavior without changing its contract.",
    "steps": [
      "Start by extracting connection status as shown.",
      "Move the existing validated message listener and streamed history subscription only after preserving their contracts.",
      "Return messages, status and error explicitly.",
      "Mount and unmount a room panel and verify connection cleanup."
    ],
    "check": {
      "question": "Do two calls to one custom hook automatically share state?",
      "options": [
        "No. Each call has its own hook state unless external shared state is explicitly used.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Each call has its own hook state unless external shared state is explicitly used."
    },
    "sources": [
      "/react/react_customhooks.asp"
    ]
  },
  {
    "id": "react-style-strategies",
    "module": "react",
    "title": "Compare scoped styles without losing the chat design",
    "minutes": 25,
    "intro": "Rebuild one bubble in CSS Modules, Sass and styled-components comparison labs, then retain one coherent strategy. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "CSS modules and Sass",
        "description": "A .module.css import exposes a mapping of local class names, reducing collisions. Sass compiles variables, nesting and mixins into CSS; install sass before importing .scss. Neither changes the DOM component model."
      },
      {
        "term": "CSS-in-JS",
        "description": "Inline style objects use camelCase properties and JavaScript values; they do not support selector rules like a stylesheet. styled-components creates styled components with template literals. Install that library only in its comparison lab."
      }
    ],
    "example": "// Bubble.module.css: .bubble { padding: 1rem; border-radius: 1rem; }\nimport styles from \"./Bubble.module.css\";\nfunction Bubble({ children }) { return <p className={styles.bubble} style={{ maxWidth: \"30rem\" }}>{children}</p>; }",
    "task": "Rebuild one bubble in CSS Modules, Sass and styled-components comparison labs, then retain one coherent strategy.",
    "steps": [
      "Install sass for the Sass lab and create a variable plus nested hover selector.",
      "Install styled-components for its separate lab and create a styled paragraph with a color prop.",
      "Compare emitted class names and responsive styling.",
      "Keep the cumulative chat using its existing CSS unless a migration is intentional."
    ],
    "check": {
      "question": "What does a CSS Module import provide?",
      "options": [
        "A mapping from local class names to generated scoped class names.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "A mapping from local class names to generated scoped class names."
    },
    "sources": [
      "/react/react_css_modules.asp",
      "/react/react_css_js.asp",
      "/react/react_sass_styling.asp",
      "/react/react_styled.asp"
    ]
  },
  {
    "id": "react-portals",
    "module": "react",
    "title": "Add an accessible settings dialog through a portal",
    "minutes": 25,
    "intro": "Move the existing settings panel into a keyboard-usable modal. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Portals",
        "description": "createPortal renders children in a different DOM container while preserving their React parent relationship. React events still follow the component tree. A portal solves stacking context problems, not accessibility by itself."
      },
      {
        "term": "Dialog interaction",
        "description": "A modal needs a visible label, focus entry and restoration, Escape handling, and keyboard focus containment. A native dialog opened with showModal provides modal behavior; pair portal placement with the native dialog rather than a generic div."
      }
    ],
    "example": "import { createPortal } from \"react-dom\";\nimport { useEffect, useRef } from \"react\";\nfunction SettingsDialog({ onClose }) {\n const dialog = useRef(null);\n useEffect(() => {\n  const previous = document.activeElement;\n  dialog.current.showModal();\n  return () => { dialog.current?.close(); previous?.focus(); };\n }, []);\n return createPortal(<dialog ref={dialog} aria-labelledby=\"settings-title\" onCancel={event => { event.preventDefault(); onClose(); }}><h2 id=\"settings-title\">Settings</h2><button onClick={onClose}>Close</button></dialog>, document.body);\n}",
    "task": "Move the existing settings panel into a keyboard-usable modal.",
    "steps": [
      "Conditionally mount SettingsDialog when the rail settings button is selected.",
      "Use the learned state, events, effects and refs to control its lifetime.",
      "Verify Escape, initial focus and focus restoration.",
      "Check the modal is not clipped by the sidebar overflow."
    ],
    "check": {
      "question": "Does a portal provide focus management automatically?",
      "options": [
        "No. Modal interaction must be implemented or supplied by a suitable native element or library.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Modal interaction must be implemented or supplied by a suitable native element or library."
    },
    "sources": [
      "/react/react_portals.asp",
      "/react/react_portal.asp"
    ]
  },
  {
    "id": "react-router",
    "module": "react",
    "title": "Give chat and settings stable client routes",
    "minutes": 25,
    "intro": "Connect sidebar room links and settings navigation to browser history. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Client routing",
        "description": "A router maps browser paths to components without requesting a new document on every internal navigation. BrowserRouter owns history, Routes chooses a Route and Link provides accessible navigation."
      },
      {
        "term": "Parameters and deployment",
        "description": "A dynamic :roomId path is read with useParams. Treat unknown ids as missing rooms. Production hosting must return index.html for client routes; API routes must still reach the API."
      }
    ],
    "example": "// Isolated lab: npm install react-router-dom\nimport { BrowserRouter, Routes, Route, Link, useParams } from \"react-router-dom\";\nfunction RoomPage() { const { roomId } = useParams(); return <h1>Room {roomId}</h1>; }\nfunction App() { return <BrowserRouter><nav><Link to=\"/rooms/general\">General</Link><Link to=\"/settings\">Settings</Link></nav><Routes><Route path=\"/rooms/:roomId\" element={<RoomPage />} /><Route path=\"/settings\" element={<h1>Settings</h1>} /><Route path=\"*\" element={<h1>Page not found</h1>} /></Routes></BrowserRouter>; }",
    "task": "Connect sidebar room links and settings navigation to browser history.",
    "steps": [
      "Install react-router-dom and inspect its installed major version before applying examples.",
      "Keep the shell outside the routed panel so navigation remains visible.",
      "Read and validate room ids with useParams and replace local selected-room state as the route source.",
      "Check Back, Forward and a direct reload on a room URL."
    ],
    "check": {
      "question": "Why test a direct reload on a client route?",
      "options": [
        "The host needs a fallback to index.html so the browser can start the router.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "The host needs a fallback to index.html so the browser can start the router."
    },
    "sources": [
      "/react/react_router.asp"
    ]
  },
  {
    "id": "react-lazy",
    "module": "react",
    "title": "Split infrequent panels and handle rendering failures",
    "minutes": 25,
    "intro": "Lazy-load settings and add a render failure boundary around optional panels. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Lazy and Suspense",
        "description": "lazy loads a module on demand and expects its default component export. Suspense shows fallback UI while that lazy component loads. Ordinary fetch in an effect does not automatically activate Suspense."
      },
      {
        "term": "Class components and error boundaries",
        "description": "Legacy classes extend Component, use render and setState, and use lifecycle methods. A class error boundary uses getDerivedStateFromError and componentDidCatch to catch descendant render errors. It does not catch event handler or arbitrary asynchronous errors."
      }
    ],
    "example": "import { lazy, Suspense, Component } from \"react\";\nconst Settings = lazy(() => import(\"./Settings.jsx\"));\nclass PanelBoundary extends Component {\n state = { failed: false };\n static getDerivedStateFromError() { return { failed: true }; }\n componentDidCatch(error, info) { console.error(error, info.componentStack); }\n render() { return this.state.failed ? <p role=\"alert\">Panel failed. Reload to retry.</p> : this.props.children; }\n}\nfunction SettingsRoute() { return <PanelBoundary><Suspense fallback={<p role=\"status\">Loading settings…</p>}><Settings /></Suspense></PanelBoundary>; }",
    "task": "Lazy-load settings and add a render failure boundary around optional panels.",
    "steps": [
      "Export Settings as default from its own file.",
      "Inspect network requests to see its chunk load.",
      "In an isolated lab, throw during child render and check the fallback.",
      "Keep submit/network errors in explicit state because the boundary cannot catch them."
    ],
    "check": {
      "question": "Will Suspense show a fallback for every useEffect fetch?",
      "options": [
        "No. Ordinary effect fetching requires explicit loading state.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Ordinary effect fetching requires explicit loading state."
    },
    "sources": [
      "/react/react_suspense.asp",
      "/react/react_lazy.asp",
      "/react/react_class.asp",
      "/react/react_errorboundary.asp"
    ]
  },
  {
    "id": "react-transitions",
    "module": "react",
    "title": "Keep search input responsive during costly rendering",
    "minutes": 25,
    "intro": "Compare deferred room results, a transition-driven panel switch and memoized rows in isolated performance labs. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Transitions and deferred values",
        "description": "useTransition marks non-urgent state updates and exposes isPending. The controlled input value must update immediately. useDeferredValue provides a delayed version for expensive downstream rendering; it does not debounce network traffic."
      },
      {
        "term": "Memo and wrappers",
        "description": "memo can skip a child render when props are unchanged. A higher-order component accepts a component and returns an enhanced component; preserve props and define wrappers outside rendering. Measure before adding either abstraction."
      }
    ],
    "example": "import { useState, useTransition, useDeferredValue, memo } from \"react\";\nconst RoomResults = memo(function RoomResults({ query, rooms }) { return <ul>{rooms.filter(r => r.name.includes(query)).map(r => <li key={r.id}>{r.name}</li>)}</ul>; });\nfunction SearchLab({ rooms }) {\n const [query, setQuery] = useState(\"\");\n const deferredQuery = useDeferredValue(query);\n return <><input aria-label=\"Search\" value={query} onChange={e => setQuery(e.target.value)} /><RoomResults rooms={rooms} query={deferredQuery} /></>;\n}\n// Alternative: const [isPending, startTransition] = useTransition();\n// Update input state immediately; wrap a separate costly selection update in startTransition.",
    "task": "Compare deferred room results, a transition-driven panel switch and memoized rows in isolated performance labs.",
    "steps": [
      "Keep the current search input responsive using immediate query state.",
      "Render expensive results from the deferred query.",
      "Add a visible updating indicator when query differs from deferredQuery.",
      "Write a withPanelTitle wrapper in a lab and explain its prop forwarding; keep the simpler direct composition in the app."
    ],
    "check": {
      "question": "Should the controlled input state update be placed in a transition?",
      "options": [
        "No. Keep typing updates immediate; defer the expensive dependent work.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Keep typing updates immediate; defer the expensive dependent work."
    },
    "sources": [
      "/react/react_transitions.asp",
      "/react/react_usetransition.asp",
      "/react/react_usedeferredvalue.asp",
      "/react/react_memo.asp",
      "/react/react_hoc.asp"
    ]
  },
  {
    "id": "react-advanced-hooks",
    "module": "react",
    "title": "Apply specialized hooks to focused chat labs",
    "minutes": 25,
    "intro": "Build focused labs for generated labels, network status, composer ref APIs and layout measurement. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Imperative handles and layout measurement",
        "description": "useImperativeHandle exposes a narrow ref API such as focusDraft rather than the entire DOM node. useLayoutEffect runs before repaint for a necessary layout measurement; ordinary subscriptions belong in useEffect."
      },
      {
        "term": "Identity and inspection",
        "description": "useId generates stable label/control ids and is not a list key. useDebugValue annotates custom hooks in React DevTools."
      },
      {
        "term": "External stores and style injection",
        "description": "useSyncExternalStore connects React to a mutable external store through subscribe and getSnapshot, which must return stable snapshots until data changes. useInsertionEffect is designed for style library insertion; application data subscriptions do not belong there."
      }
    ],
    "example": "import { useId, useDebugValue, useSyncExternalStore } from \"react\";\nfunction NameField() { const id = useId(); return <><label htmlFor={id}>Display name</label><input id={id} /></>; }\nconst subscribe = listener => { window.addEventListener(\"online\", listener); window.addEventListener(\"offline\", listener); return () => { window.removeEventListener(\"online\", listener); window.removeEventListener(\"offline\", listener); }; };\nfunction useOnline() { const online = useSyncExternalStore(subscribe, () => navigator.onLine, () => false); useDebugValue(online ? \"online\" : \"offline\"); return online; }",
    "task": "Build focused labs for generated labels, network status, composer ref APIs and layout measurement.",
    "steps": [
      "Use useId in a reusable profile field rendered twice and confirm distinct associations.",
      "Use useOnline to display browser network status; this is not proof the server is reachable.",
      "Extend the learned forwarded ref lab with useImperativeHandle(ref, () => ({ focusDraft: () => input.current.focus() }), []).",
      "Measure a bubble with getBoundingClientRect inside useLayoutEffect and compare repaint behavior.",
      "Read the insertion-effect reference and explain why the existing CSS import needs no insertion hook."
    ],
    "check": {
      "question": "Can useId replace database ids as list keys?",
      "options": [
        "No. List identity comes from stable data ids.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. List identity comes from stable data ids."
    },
    "sources": [
      "/react/react_useimperativehandle.asp",
      "/react/react_uselayouteffect.asp",
      "/react/react_usedebugvalue.asp",
      "/react/react_useid.asp",
      "/react/react_usesyncexternalsource.asp",
      "/react/react_useinsertioneffect.asp"
    ]
  },
  {
    "id": "react-diagnostics",
    "module": "react",
    "title": "Use fragments, Strict Mode and the Profiler",
    "minutes": 25,
    "intro": "Inspect the complete shell for unnecessary wrappers, effect leaks and measurable rendering costs. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Fragments",
        "description": "Fragment groups siblings without adding a DOM wrapper. The short syntax cannot receive a key; an explicit Fragment can group keyed multi-element list entries."
      },
      {
        "term": "Development checks",
        "description": "StrictMode checks render purity and effect cleanup in development. Profiler reports commit timings through onRender; it helps compare actual changes instead of guessing at performance."
      },
      {
        "term": "Compiler terminology",
        "description": "The W3Schools compiler page is an online execution environment. React Compiler also names an optional build-time optimizer; neither removes the requirement for pure rendering or correct hook dependencies."
      }
    ],
    "example": "import { Fragment, StrictMode, Profiler } from \"react\";\nfunction RoomFacts({ rooms }) { return <dl>{rooms.map(room => <Fragment key={room.id}><dt>{room.name}</dt><dd>{room.id}</dd></Fragment>)}</dl>; }\nfunction logRender(id, phase, duration) { console.log({ id, phase, duration }); }\n// At the root: <StrictMode><Profiler id=\"chat\" onRender={logRender}><App /></Profiler></StrictMode>",
    "task": "Inspect the complete shell for unnecessary wrappers, effect leaks and measurable rendering costs.",
    "steps": [
      "Use an explicit keyed Fragment for a two-element room entry lab.",
      "Keep StrictMode on and correct duplicate connection behavior with cleanup.",
      "Record timings before and after a measured optimization.",
      "Run an isolated component in the online compiler and compare its environment with local Vite."
    ],
    "check": {
      "question": "Should disabling StrictMode be the fix for duplicate subscriptions?",
      "options": [
        "No. Correct setup and cleanup so the component tolerates repeated lifecycle checks.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Correct setup and cleanup so the component tolerates repeated lifecycle checks."
    },
    "sources": [
      "/react/react_fragment.asp",
      "/react/react_strictmode.asp",
      "/react/react_profiler.asp",
      "/react/react_compiler.asp"
    ]
  },
  {
    "id": "react-store-libraries",
    "module": "react",
    "title": "Compare Redux Toolkit and Zustand stores",
    "minutes": 25,
    "intro": "Recreate the sidebar toggle in two isolated store labs and compare their setup with context plus reducer. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Redux Toolkit",
        "description": "A store holds shared state, a slice defines reducers and action creators, and Provider exposes the store. useSelector reads selected state and useDispatch sends actions. Toolkit’s Immer-backed reducers allow draft-style assignments; plain reducers earlier still require immutable returns."
      },
      {
        "term": "Zustand",
        "description": "create builds a hook-based store with set and get. Select a narrow value through a selector. Keep server history ownership explicit so a second store does not silently duplicate message state."
      }
    ],
    "example": "// Isolated lab: npm install zustand\nimport { create } from \"zustand\";\nconst usePreferences = create(set => ({ collapsed: false, toggle: () => set(state => ({ collapsed: !state.collapsed })) }));\nfunction RailToggle() { const toggle = usePreferences(s => s.toggle); return <button onClick={toggle}>Toggle chats</button>; }\n// Separate Redux lab: npm install @reduxjs/toolkit react-redux\n// Define createSlice({name:\"preferences\", initialState:{collapsed:false},\n// reducers:{toggle(state){state.collapsed = !state.collapsed;}}});\n// Configure a store, wrap Provider, read with useSelector and dispatch slice.actions.toggle().",
    "task": "Recreate the sidebar toggle in two isolated store labs and compare their setup with context plus reducer.",
    "steps": [
      "Install only the library used by the current lab.",
      "Build the Zustand toggle, then separately build the Toolkit slice/store/Provider wiring described above.",
      "Verify a distant sidebar reads the same collapsed state.",
      "Record which state actually needs global ownership before changing the cumulative app."
    ],
    "check": {
      "question": "Why may a Toolkit slice use draft-style assignments?",
      "options": [
        "Its reducers run through Immer; that permission does not apply to ordinary React state.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "Its reducers run through Immer; that permission does not apply to ordinary React state."
    },
    "sources": [
      "/react/react_redux.asp",
      "/react/react_zustand.asp"
    ]
  },
  {
    "id": "react-ui-libraries",
    "module": "react",
    "title": "Compare component systems and utility CSS",
    "minutes": 25,
    "intro": "Rebuild a composer button in MUI, Chakra and Tailwind comparison labs while retaining the WhatsApp-style layout. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Material UI and Chakra",
        "description": "MUI supplies styled components such as Button and a ThemeProvider; Chakra supplies accessible primitives and a version-specific provider setup. Both still require meaningful labels and keyboard checks. Install their documented peer dependencies for the selected major version."
      },
      {
        "term": "Tailwind",
        "description": "Tailwind generates utility CSS from detected class names. Its current Vite integration uses the Tailwind Vite plugin and an import in CSS; keep utility names statically discoverable. A library installation does not automatically migrate existing markup."
      }
    ],
    "example": "// Separate MUI lab: npm install @mui/material @emotion/react @emotion/styled\nimport Button from \"@mui/material/Button\";\nfunction SendButton() { return <Button type=\"submit\" variant=\"contained\">Send</Button>; }\n// Separate Tailwind lab: npm install tailwindcss @tailwindcss/vite\n// Add the Tailwind plugin alongside react() in vite.config.js.\n// CSS: @import \"tailwindcss\";\n// JSX: <button className=\"rounded-xl bg-emerald-700 px-4 py-2 text-white\">Send</button>",
    "task": "Rebuild a composer button in MUI, Chakra and Tailwind comparison labs while retaining the WhatsApp-style layout.",
    "steps": [
      "Try the MUI button in a temporary composer.",
      "For Chakra, install @chakra-ui/react and its documented peers, use its matching provider recipe and render Button.",
      "In a separate Tailwind lab, add its Vite plugin and CSS import before trying utility classes.",
      "Compare visible focus, disabled states, contrast and resulting CSS."
    ],
    "check": {
      "question": "Does installing a UI library make an unlabeled input accessible?",
      "options": [
        "No. The application must still supply a meaningful label and verify interaction.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. The application must still supply a meaningful label and verify interaction."
    },
    "sources": [
      "/react/react_mui.asp",
      "/react/react_chakra.asp",
      "/react/react_tailwind.asp"
    ]
  },
  {
    "id": "react-form-libraries",
    "module": "react",
    "title": "Compare form libraries and schema validation",
    "minutes": 25,
    "intro": "Build the same validated profile form in React Hook Form and Formik/Yup labs. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "React Hook Form",
        "description": "useForm registers controls, collects values with handleSubmit and exposes errors. Its field registration differs from the controlled useState inputs already learned. Do not attach two owners to the same input."
      },
      {
        "term": "Formik and Yup",
        "description": "Formik manages values, touched fields and submission through its components or useFormik. Yup describes schemas and reports validation errors. Client checks improve feedback; a future server must independently validate inputs."
      }
    ],
    "example": "// Isolated lab: npm install react-hook-form\nimport { useForm } from \"react-hook-form\";\nfunction ProfileForm() {\n const { register, handleSubmit, formState: { errors } } = useForm();\n return <form onSubmit={handleSubmit(values => console.log(values))}><label>Name<input {...register(\"name\", { required: \"Enter your name\", maxLength: { value: 40, message: \"Use 40 characters or fewer\" } })} /></label><p role=\"alert\">{errors.name?.message}</p><button>Save</button></form>;\n}\n// Separate schema lab: npm install formik yup\n// const schema = Yup.object({name: Yup.string().trim().required().max(40)});\n// await schema.validate({name: \"Asha\"});",
    "task": "Build the same validated profile form in React Hook Form and Formik/Yup labs.",
    "steps": [
      "Run the Hook Form example and test empty and overlong names.",
      "Import * as Yup in the schema lab and test validate inside try/catch.",
      "Build Formik with initialValues, validationSchema and onSubmit; use Field and ErrorMessage for name.",
      "Compare when errors appear, then retain one form ownership approach."
    ],
    "check": {
      "question": "Can client schema validation replace API validation?",
      "options": [
        "No. The server must validate its own untrusted input.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. The server must validate its own untrusted input."
    },
    "sources": [
      "/react/react_hookform.asp",
      "/react/react_formik.asp",
      "/react/react_yup.asp"
    ]
  },
  {
    "id": "react-query",
    "module": "react",
    "title": "Separate server state from local interface state",
    "minutes": 25,
    "intro": "Compare a cached history lab with the previously written manual effect. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "TanStack Query",
        "description": "A QueryClientProvider exposes a query cache. useQuery uses a stable queryKey and a queryFn returning data; loading and error are explicit. Modern React Query is installed as @tanstack/react-query."
      },
      {
        "term": "Mutations and streaming",
        "description": "useMutation represents writes and invalidateQueries refreshes cached history after success. SSE may update the cache with setQueryData, but deduplicate ids and choose one owner instead of retaining a second independent messages array."
      }
    ],
    "example": "// Isolated lab: npm install @tanstack/react-query\nimport { QueryClient, QueryClientProvider, useQuery } from \"@tanstack/react-query\";\nconst client = new QueryClient();\nconst fixture = [{ id: \"welcome\", name: \"Campus\", text: \"Welcome\" }];\nfunction HistoryLab() {\n const history = useQuery({ queryKey: [\"messages\", \"fixture\"], queryFn: async () => fixture });\n if (history.isPending) return <p>Loading…</p>;\n if (history.isError) return <p role=\"alert\">{history.error.message}</p>;\n return <p>{history.data.length} messages</p>;\n}\nfunction QueryLab() { return <QueryClientProvider client={client}><HistoryLab /></QueryClientProvider>; }\n// Use a fixture now: the legacy server supplies history through SSE rather than GET.\n// After the later integration bridge adds GET /api/messages, replace queryFn with\n// fetch('/api/messages', { signal }) plus response.ok checks and response.json().",
    "task": "Compare a cached history lab with the previously written manual effect.",
    "steps": [
      "Run QueryLab against its local async fixture; the old server has no GET history endpoint.",
      "Temporarily reject the query function to check error presentation, then restore the fixture.",
      "Model useMutation with a fixture promise and call invalidateQueries on success.",
      "Write down how future GET /api/messages and SSE setQueryData will share one cache; perform that API connection only after the backend integration lesson."
    ],
    "check": {
      "question": "What belongs in the query key when history depends on roomId?",
      "options": [
        "The room id, so each room has a distinct cached history.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "The room id, so each room has a distinct cached history."
    },
    "sources": [
      "/react/react_reactquery.asp"
    ]
  },
  {
    "id": "react-testing",
    "module": "react",
    "title": "Test chat behavior through public controls",
    "minutes": 25,
    "intro": "Add meaningful behavior tests for sidebar collapse, blank submissions and message rendering. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Jest and Testing Library",
        "description": "Jest runs tests and assertions; React Testing Library renders components and queries them as a user would, preferably by role and accessible name. Configure JSX transformation and a jsdom environment for Jest before running component tests."
      },
      {
        "term": "Cypress",
        "description": "Cypress drives the app in a browser, useful for sidebar collapse, composing and checking messages across a running client/server. Use deterministic fixtures for ordinary UI checks and reserve a dedicated test server for real network integration."
      }
    ],
    "example": "// After configuring Jest + jsdom + JSX transformation in an isolated test lab:\nimport { render, screen } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport SidebarToggle from \"./SidebarToggle.jsx\";\ntest(\"opens and closes the sidebar\", async () => {\n const user = userEvent.setup();\n render(<SidebarToggle />);\n const button = screen.getByRole(\"button\", { name: \"Chats\" });\n await user.click(button);\n expect(button.getAttribute(\"aria-expanded\")).toBe(\"false\");\n});\n// Cypress lab: cy.visit(\"/\"); cy.findByRole requires a separate plugin;\n// without that plugin use cy.get(\"button[aria-expanded]\").click().",
    "task": "Add meaningful behavior tests for sidebar collapse, blank submissions and message rendering.",
    "steps": [
      "Install Jest, jest-environment-jsdom, a JSX transform, Testing Library and user-event in the isolated test lab.",
      "Configure Jest to use jsdom and transform JSX with the chosen Babel setup.",
      "Test visible behavior rather than component private state.",
      "Install and open Cypress in a separate browser lab, configure baseUrl and check collapse and sending against a controlled server."
    ],
    "check": {
      "question": "Which assertion best describes a user-facing contract?",
      "options": [
        "After activating the Chats button, its expanded state and sidebar visibility change correctly.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "After activating the Chats button, its expanded state and sidebar visibility change correctly."
    },
    "sources": [
      "/react/react_jest.asp",
      "/react/react_testinglibrary.asp",
      "/react/react_cypress.asp"
    ]
  },
  {
    "id": "react-tooling",
    "module": "react",
    "title": "Build, lint and format the React client",
    "minutes": 25,
    "intro": "Verify the React chat build, hook linting and consistent formatting before the server transition. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Vite and output",
        "description": "Vite transforms JSX in development and bundles production assets. npm run build should succeed before previewing dist. Client-exposed environment variables are public build-time values, not secret database credentials."
      },
      {
        "term": "ESLint and Prettier",
        "description": "ESLint catches code and hook mistakes; Prettier formats code. Keep hook dependency rules enabled, use the current flat ESLint configuration for new setups, and avoid overlapping formatter rules."
      }
    ],
    "example": "npm run build\nnpm run preview\nnpm run lint\nnpm install --save-dev prettier\nnpx prettier --check src\n# Apply intentional formatting after reviewing the check:\nnpx prettier --write src",
    "task": "Verify the React chat build, hook linting and consistent formatting before the server transition.",
    "steps": [
      "Inspect existing Vite scripts and run build.",
      "Fix hook dependency errors rather than suppressing them.",
      "Add a .prettierignore excluding dist and generated files.",
      "Check the production preview at narrow and wide widths and make sure the client bundle contains no secrets."
    ],
    "check": {
      "question": "Are Vite client environment values suitable for a database password?",
      "options": [
        "No. Client bundles are public and database credentials must stay on the server.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Client bundles are public and database credentials must stay on the server."
    },
    "sources": [
      "/react/react_vite.asp",
      "/react/react_eslint.asp",
      "/react/react_prettier.asp"
    ]
  },
  {
    "id": "react-animation",
    "module": "react",
    "title": "Animate panels while respecting reduced motion",
    "minutes": 25,
    "intro": "Compare subtle sidebar transitions in separate Motion and React Spring labs. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Framer Motion and React Spring",
        "description": "Framer Motion, now also distributed through Motion, animates declarative motion elements; React Spring interpolates values through spring physics and animated elements. Follow the chosen package’s documented imports rather than mixing them."
      },
      {
        "term": "Motion as enhancement",
        "description": "Keep buttons and panel state accessible without animation. Honor prefers-reduced-motion. Do not animate each received message in a way that continually displaces a reader or hides focus."
      }
    ],
    "example": "// Isolated lab: npm install framer-motion\nimport { motion, useReducedMotion } from \"framer-motion\";\nfunction AnimatedPanel({ children }) {\n const reduce = useReducedMotion();\n return <motion.aside initial={false} animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : 0.15 }}>{children}</motion.aside>;\n}\n// Separate spring lab: npm install @react-spring/web\n// const styles = useSpring({opacity: open ? 1 : 0});\n// return <animated.aside style={styles}>...</animated.aside>;",
    "task": "Compare subtle sidebar transitions in separate Motion and React Spring labs.",
    "steps": [
      "Install one animation package in each isolated lab.",
      "Add opacity or a short panel movement while retaining layout and focus behavior.",
      "Set duration to zero for reduced motion or disable movement explicitly.",
      "Measure before adopting an animation in the cumulative interface."
    ],
    "check": {
      "question": "What should happen for a reduced-motion preference?",
      "options": [
        "Provide the same usable interaction with movement reduced or disabled.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "Provide the same usable interaction with movement reduced or disabled."
    },
    "sources": [
      "/react/react_framermotion.asp",
      "/react/react_reactspring.asp"
    ]
  },
  {
    "id": "react-utilities",
    "module": "react",
    "title": "Use date, collection and class utilities deliberately",
    "minutes": 25,
    "intro": "Format bubble timestamps and compare native filtering with library utilities in a lab. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Date libraries",
        "description": "date-fns provides focused functions such as formatDistanceToNow; Moment is widely encountered in legacy projects but is in maintenance mode. Preserve ISO timestamps in data and format only for display. The legacy adapter uses time; use message.time in that stage. The later API bridge introduces createdAt and explicitly migrates consumers."
      },
      {
        "term": "Lodash and classnames",
        "description": "Lodash offers collection helpers and debounce; a debounced callback needs cancellation on cleanup. classnames composes conditional class names without changing CSS rules. Native JavaScript is sufficient for many simple transformations."
      }
    ],
    "example": "// Isolated lab: npm install date-fns classnames lodash\nimport { formatDistanceToNow } from \"date-fns\";\nimport classNames from \"classnames\";\nfunction TimestampedBubble({ message, outgoing }) {\n const time = new Date(message.time);\n return <article className={classNames(\"bubble\", { \"bubble--outgoing\": outgoing })}><p>{message.text}</p><time dateTime={message.time}>{Number.isNaN(time.getTime()) ? \"Unknown time\" : formatDistanceToNow(time, { addSuffix: true })}</time></article>;\n}",
    "task": "Format bubble timestamps and compare native filtering with library utilities in a lab.",
    "steps": [
      "Keep the legacy time field as ISO data and handle invalid timestamps; migrate to createdAt only at the Express API bridge.",
      "Compare classnames output with the earlier conditional class expression.",
      "Build a Lodash debounce lab, then cancel its pending callback in effect cleanup.",
      "Compare a native map/filter solution with the library version before adding a dependency."
    ],
    "check": {
      "question": "Where should timestamp display formatting happen?",
      "options": [
        "At the presentation boundary while preserving the original ISO timestamp in data.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "At the presentation boundary while preserving the original ISO timestamp in data."
    },
    "sources": [
      "/react/react_datefns.asp",
      "/react/react_lodash.asp",
      "/react/react_classnames.asp"
    ]
  },
  {
    "id": "react-typescript-reading",
    "module": "react",
    "title": "Read TypeScript examples without changing the JSX course",
    "minutes": 25,
    "intro": "Translate a typed props example into plain JSX and explain which guarantees disappear at runtime. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Types are a separate language layer",
        "description": "TypeScript adds compile-time annotations and interfaces, which are removed before execution. It cannot validate network JSON at runtime. .tsx supports JSX with types; .jsx remains the cumulative project format."
      },
      {
        "term": "Translate intentionally",
        "description": "A props interface describes the same fields already passed in JSX. Read string, boolean, optional properties, unions and event types; remove annotations when adapting an example to this JavaScript course. Runtime guards remain necessary."
      }
    ],
    "example": "// Plain JSX equivalent of a typed Bubble props interface:\nfunction Bubble({ text, outgoing = false }) {\n if (typeof text !== \"string\") return <p role=\"alert\">Invalid message</p>;\n return <p className={outgoing ? \"bubble bubble--outgoing\" : \"bubble\"}>{text}</p>;\n}\n// TypeScript reading exercise (do not paste annotations into .jsx):\n// An interface would describe text as string and outgoing as optional boolean.",
    "task": "Translate a typed props example into plain JSX and explain which guarantees disappear at runtime.",
    "steps": [
      "Read the TypeScript chapter’s prop and event examples.",
      "Identify each annotation without adding it to .jsx.",
      "Keep runtime JSON validation for messages received from the network.",
      "Create a separate TypeScript template only as an optional exploration, after explicitly learning its syntax."
    ],
    "check": {
      "question": "Does a TypeScript type validate a server JSON response at runtime?",
      "options": [
        "No. Runtime checks or a validation library must inspect the received data.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "No. Runtime checks or a validation library must inspect the received data."
    },
    "sources": [
      "/react/react_typescript.asp"
    ]
  },
  {
    "id": "react-practice",
    "module": "react",
    "title": "Audit the React milestone and prepare for the server course",
    "minutes": 25,
    "intro": "Complete the React checkpoint using only taught features and document the API contract for the next transition. Continue Campus Chat in react-chat/ while retaining your earlier vanilla project for comparison. Examples marked as isolated labs belong in a temporary component; cumulative examples replace the named component.",
    "concepts": [
      {
        "term": "Practice and assessment",
        "description": "Use the quiz and exercises as recall checks, the syllabus as an inventory and a study plan to schedule weak topics. A certificate is optional and not a dependency of the project. Interview preparation should explain observed behavior, not memorize labels."
      },
      {
        "term": "Client/server boundary",
        "description": "The React development server hosts the client; a chat API accepts and distributes messages. The W3Schools server chapter discusses running React environments; it does not make browser code a trusted backend. The next course teaches Node’s server responsibilities before Express and MongoDB integration."
      }
    ],
    "example": "// React checkpoint inventory:\nconst checkpoint = {\n shell: [\"navigation rail\", \"collapsible sidebar\", \"room list\", \"header\", \"bubbles\", \"composer\"],\n behavior: [\"search\", \"selection\", \"validated submit\", \"loading/errors\", \"effect cleanup\"],\n next: \"Learn Node request handling before replacing the existing backend\"\n};\nconsole.table(checkpoint);",
    "task": "Complete the React checkpoint using only taught features and document the API contract for the next transition.",
    "steps": [
      "Use the W3Schools quiz/exercises and revisit any failed topic in your own implementation.",
      "Compare your lesson checklist with the syllabus and study plan; mark each topic with a working experiment.",
      "Demonstrate two-browser chat against the earlier server and explain the full event lifecycle.",
      "Write down endpoint paths, methods, event names and fields; preserve that contract until a later explicit migration lesson.",
      "Explain component props, state snapshots, immutable updates, keys and cleanup as interview-style prompts."
    ],
    "check": {
      "question": "What must be taught before replacing the chat API with Express and MongoDB?",
      "options": [
        "Node server request handling, Express routing and MongoDB persistence, with explicit connection lessons.",
        "Change the DOM directly during render.",
        "Add an unrelated dependency before understanding the feature."
      ],
      "answer": 0,
      "explanation": "Node server request handling, Express routing and MongoDB persistence, with explicit connection lessons."
    },
    "sources": [
      "/react/react_exam.asp",
      "/react/react_quiz.asp",
      "/react/react_exercises.asp",
      "/react/react_syllabus.asp",
      "/react/react_study_plan.asp",
      "/react/react_server.asp",
      "/react/react_interview_prep.asp"
    ]
  }
];
