// Original lessons; source checklist and chapter audit 2026-10-26.
export const nodeLessons = [
  {
    "id": "node-runtime",
    "module": "node",
    "title": "Move from browser JavaScript to a server",
    "minutes": 25,
    "intro": "Create the server workspace while keeping the existing chat interface visible. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Runtime boundary",
        "description": "Node runs JavaScript outside the browser. There is no document or localStorage; use the browser for rendering and Node for shared state. Install an active Node LTS from nodejs.org, verify node --version and npm --version, create a server directory, and run files with node."
      },
      {
        "term": "Prerequisite review",
        "description": "Functions, objects, destructuring, imports, promises, JSON, fetch and events were taught before this track. Browser fetch sends HTTP; a server listens for those requests."
      }
    ],
    "example": "// server/hello.mjs\nconsole.log(\"Chat server starting\", process.version);\n// Terminal: node hello.mjs",
    "task": "Create the server workspace while keeping the existing chat interface visible.",
    "steps": [
      "Create the server workspace while keeping the existing chat interface visible.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Which code belongs in the browser?",
      "options": [
        "document.querySelector(\"form\")",
        "process.version",
        "An HTTP listener"
      ],
      "answer": 0,
      "explanation": "document.querySelector(\"form\")"
    },
    "sources": [
      "/nodejs/default.asp",
      "/nodejs/nodejs_intro.asp",
      "/nodejs/nodejs_get_started.asp",
      "/nodejs/nodejs_js_requirements.asp",
      "/nodejs/nodejs_vs_browser.asp",
      "/nodejs/nodejs_command_line.asp"
    ]
  },
  {
    "id": "node-engine",
    "module": "node",
    "title": "Understand V8, architecture and the event loop",
    "minutes": 25,
    "intro": "Predict scheduling before using callbacks to receive chat traffic. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "V8 and execution",
        "description": "V8 compiles JavaScript. Node adds filesystem and networking APIs; libuv coordinates asynchronous I/O. A JavaScript callback still runs to completion and can block all other chat users."
      },
      {
        "term": "Scheduling",
        "description": "Promise microtasks run before the next timer callback. Timers specify a minimum delay, not an exact delivery time. Move expensive work out of request callbacks."
      }
    ],
    "example": "console.log(\"receive\");\nsetTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"microtask\"));\nconsole.log(\"respond\");",
    "task": "Predict scheduling before using callbacks to receive chat traffic.",
    "steps": [
      "Predict scheduling before using callbacks to receive chat traffic.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What blocks other requests?",
      "options": [
        "A long synchronous loop in a request callback",
        "Waiting for network I/O asynchronously",
        "Registering a timer"
      ],
      "answer": 0,
      "explanation": "A long synchronous loop in a request callback"
    },
    "sources": [
      "/nodejs/nodejs_v8_engine.asp",
      "/nodejs/nodejs_architecture.asp",
      "/nodejs/nodejs_event_loop.asp"
    ]
  },
  {
    "id": "node-async",
    "module": "node",
    "title": "Callbacks, promises, async/await and failures",
    "minutes": 25,
    "intro": "Build an asynchronous history loader whose rejection stays observable. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Three asynchronous forms",
        "description": "Error-first callbacks receive error before result. Promises resolve or reject; await pauses only its async function. Promise.all joins independent operations and rejects when one fails."
      },
      {
        "term": "Handle failures at boundaries",
        "description": "try/catch catches awaited rejections, but not a later un-awaited callback throw. Return a useful HTTP error and log diagnostic details server-side."
      }
    ],
    "example": "async function loadHistory() {\n  try {\n    const value = await Promise.resolve([]);\n    return value;\n  } catch (error) {\n    console.error(error.message);\n    throw error;\n  }\n}\nconsole.log(await loadHistory());",
    "task": "Build an asynchronous history loader whose rejection stays observable.",
    "steps": [
      "Build an asynchronous history loader whose rejection stays observable.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What catches a rejected promise here?",
      "options": [
        "await inside try/catch",
        "A try around an unrelated timer",
        "Ignoring the promise"
      ],
      "answer": 0,
      "explanation": "await inside try/catch"
    },
    "sources": [
      "/nodejs/nodejs_async.asp",
      "/nodejs/nodejs_promises.asp",
      "/nodejs/nodejs_async_await.asp",
      "/nodejs/nodejs_error_handling.asp"
    ]
  },
  {
    "id": "node-modules",
    "module": "node",
    "title": "Organize core and ES modules",
    "minutes": 25,
    "intro": "Extract the in-memory message store into a module. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Module systems",
        "description": "Use .mjs for ES modules so import/export works without hidden package settings. CommonJS .cjs uses require and module.exports. Do not mix their syntax in one file."
      },
      {
        "term": "Exports and modern JavaScript",
        "description": "Named exports expose selected values; imports use explicit relative extensions. Destructuring, spread, template strings and optional chaining make message transformations clearer but do not validate input."
      }
    ],
    "example": "// messages.mjs\nexport const messages = [];\nexport function listMessages() { return [...messages]; }\n// server.mjs\nimport { listMessages } from \"./messages.mjs\";\nconsole.log(listMessages());",
    "task": "Extract the in-memory message store into a module.",
    "steps": [
      "Extract the in-memory message store into a module.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why use .mjs here?",
      "options": [
        "It explicitly selects ES modules",
        "It encrypts the file",
        "It installs packages"
      ],
      "answer": 0,
      "explanation": "It explicitly selects ES modules"
    },
    "sources": [
      "/nodejs/nodejs_modules.asp",
      "/nodejs/nodejs_modules_esm.asp",
      "/nodejs/nodejs_es6.asp"
    ]
  },
  {
    "id": "node-npm",
    "module": "node",
    "title": "Use npm, package.json, scripts and dependencies",
    "minutes": 25,
    "intro": "Make the server start through a documented npm script. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Project metadata",
        "description": "Run npm init -y in server/. package.json records scripts and dependency ranges; package-lock.json records resolved versions. npm install adds packages; npm ci reproduces the lockfile in CI."
      },
      {
        "term": "Dependency roles",
        "description": "Runtime dependencies are required by the running app. Development dependencies support linting or compilation. Commit the lockfile, ignore node_modules, and review updates before installing them."
      }
    ],
    "example": "// Commands in server/:\n// npm init -y\n// npm pkg set scripts.start=\"node server.mjs\"\n// npm start\n// Later: npm install express@5",
    "task": "Make the server start through a documented npm script.",
    "steps": [
      "Make the server start through a documented npm script.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Which file records resolved dependency versions?",
      "options": [
        "package-lock.json",
        "index.html",
        "node_modules/.env"
      ],
      "answer": 0,
      "explanation": "package-lock.json"
    },
    "sources": [
      "/nodejs/nodejs_npm.asp",
      "/nodejs/nodejs_package_json.asp",
      "/nodejs/nodejs_scripts.asp",
      "/nodejs/nodejs_dependencies.asp"
    ]
  },
  {
    "id": "node-environment",
    "module": "node",
    "title": "Process, environment and graceful shutdown",
    "minutes": 25,
    "intro": "Configure the server without hardcoding deployment values. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Configuration",
        "description": "process.env contains strings supplied by the shell or deployment environment. Convert and validate PORT; keep secrets in server environment variables, never React source."
      },
      {
        "term": "Lifecycle",
        "description": "process.argv contains CLI arguments. SIGINT and SIGTERM request shutdown; stop accepting traffic and close resources. process.exit can terminate before pending writes finish."
      },
      {
        "term": "Server-only .env files",
        "description": "A .env file contains KEY=value strings, not JavaScript. Node does not load it automatically: on Node 22+ use node --env-file=.env server.mjs. Keep .env in the server package and ignore it in Git; commit only .env.example with placeholders. Vite loads client environment differently and exposes VITE_ fields to the browser."
      }
    ],
    "example": "const port = Number(process.env.PORT ?? 4181);\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error(\"Invalid PORT\");\n}\nconsole.log({ port, mode: process.env.NODE_ENV ?? \"development\" });",
    "task": "Configure the server without hardcoding deployment values.",
    "steps": [
      "Configure the server without hardcoding deployment values.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson.",
      "Create a server-only .env containing PORT=4181, add .env to .gitignore, and launch with node --env-file=.env server.mjs. Never put a database credential in a VITE_ variable."
    ],
    "check": {
      "question": "Where should a database password live?",
      "options": [
        "In the server environment",
        "In a React component",
        "In a public HTML attribute"
      ],
      "answer": 0,
      "explanation": "In the server environment"
    },
    "sources": [
      "/nodejs/nodejs_process_management.asp",
      "/nodejs/nodejs_environment.asp"
    ]
  },
  {
    "id": "node-http",
    "module": "node",
    "title": "Serve the message contract with HTTP",
    "minutes": 25,
    "intro": "Replace the starter greeting with a read-only message endpoint. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Request and response",
        "description": "createServer receives an IncomingMessage and ServerResponse. Inspect method and URL; set a status and Content-Type before ending each ordinary response. A URL object separates pathname from query parameters."
      },
      {
        "term": "Stable contract",
        "description": "GET /api/messages returns an array of {id,name,text,createdAt}. JSON is data, not markup. The initial in-memory history resets on restart."
      }
    ],
    "example": "import { createServer } from \"node:http\";\nconst messages = [];\ncreateServer(async (req, res) => {\n  const url = new URL(req.url, \"http://localhost\");\n  if (req.method === \"GET\" && url.pathname === \"/api/messages\") {\n    res.writeHead(200, { \"Content-Type\": \"application/json\" });\n    return res.end(JSON.stringify(messages));\n  }\n  res.writeHead(404); res.end(\"Not found\");\n}).listen(4181, \"127.0.0.1\");",
    "task": "Replace the starter greeting with a read-only message endpoint.",
    "steps": [
      "Replace the starter greeting with a read-only message endpoint.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why inspect pathname rather than the entire URL?",
      "options": [
        "Query strings are separate from route paths",
        "It removes all input validation needs",
        "It hides the endpoint"
      ],
      "answer": 0,
      "explanation": "Query strings are separate from route paths"
    },
    "sources": [
      "/nodejs/nodejs_http.asp",
      "/nodejs/nodejs_url.asp",
      "/nodejs/ref_request.asp",
      "/nodejs/ref_response.asp",
      "/nodejs/ref_message.asp"
    ]
  },
  {
    "id": "node-files",
    "module": "node",
    "title": "Read files safely with fs and path",
    "minutes": 25,
    "intro": "Create a local draft-file lab before discussing durable database storage. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Asynchronous files",
        "description": "node:fs/promises provides readFile, writeFile, appendFile, rename and unlink as promises. Handle missing files explicitly; do not use synchronous disk operations in busy request handlers."
      },
      {
        "term": "Paths and platform",
        "description": "node:path joins filesystem paths; file URLs resolve paths relative to ES modules. os supplies platform and memory diagnostics. Never concatenate an untrusted attachment name into a writable path."
      }
    ],
    "example": "import { readFile, writeFile } from \"node:fs/promises\";\nconst file = new URL(\"./draft.json\", import.meta.url);\ntry {\n  await writeFile(file, JSON.stringify({ text: \"Hello\" }));\n  const draft = JSON.parse(await readFile(file, \"utf8\"));\n  console.log(draft.text);\n} catch (error) {\n  console.error(\"Could not write/read the draft or parse its JSON:\", error.message);\n}",
    "task": "Create a local draft-file lab before discussing durable database storage.",
    "steps": [
      "Create a local draft-file lab before discussing durable database storage.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why is this draft file not a multiuser database?",
      "options": [
        "Concurrent read/write operations can overwrite one another",
        "JSON cannot represent messages",
        "Node cannot read text"
      ],
      "answer": 0,
      "explanation": "Concurrent read/write operations can overwrite one another"
    },
    "sources": [
      "/nodejs/nodejs_filesystem.asp",
      "/nodejs/nodejs_path.asp",
      "/nodejs/nodejs_os.asp",
      "/nodejs/ref_readstream.asp",
      "/nodejs/ref_writestream.asp"
    ]
  },
  {
    "id": "node-events",
    "module": "node",
    "title": "Model chat activity with EventEmitter and timers",
    "minutes": 25,
    "intro": "Add an internal message-created event without changing the UI. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Local events",
        "description": "An EventEmitter invokes registered listeners in the current process. on subscribes, emit publishes, once subscribes once, off removes a listener. It is not a network connection or a persistent queue."
      },
      {
        "term": "Cleanup",
        "description": "Remove listeners and clear intervals when a connection closes. Timers can send keepalives but must not accumulate for disconnected users."
      }
    ],
    "example": "import { EventEmitter } from \"node:events\";\nconst bus = new EventEmitter();\nconst log = message => console.log(message.text);\nbus.on(\"message\", log);\nbus.emit(\"message\", { text: \"Server event\" });\nbus.off(\"message\", log);",
    "task": "Add an internal message-created event without changing the UI.",
    "steps": [
      "Add an internal message-created event without changing the UI.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Does EventEmitter deliver to another server process automatically?",
      "options": [
        "No, it is local to one process",
        "Yes, through MongoDB",
        "Yes, through CSS"
      ],
      "answer": 0,
      "explanation": "No, it is local to one process"
    },
    "sources": [
      "/nodejs/nodejs_events.asp",
      "/nodejs/nodejs_timers.asp",
      "/nodejs/ref_eventemitter.asp"
    ]
  },
  {
    "id": "node-streams",
    "module": "node",
    "title": "Streams, buffers and backpressure",
    "minutes": 25,
    "intro": "Experiment with message-export chunks before accepting large uploads. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Binary chunks",
        "description": "A Buffer stores bytes; decoding individual chunks can split multibyte characters. Streams process chunks without loading an entire file into memory."
      },
      {
        "term": "Backpressure",
        "description": "A writable write returning false means pause production until drain. pipeline connects streams and forwards errors; it is useful for attachments and exports."
      }
    ],
    "example": "import { Readable } from \"node:stream\";\nimport { pipeline } from \"node:stream/promises\";\nconst bytes = Buffer.from(\"Chat ✓\", \"utf8\");\nconsole.log(bytes.length, bytes.toString(\"utf8\"));\nawait pipeline(Readable.from([\"one\\n\", \"two\\n\"]), process.stdout);",
    "task": "Experiment with message-export chunks before accepting large uploads.",
    "steps": [
      "Experiment with message-export chunks before accepting large uploads.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What does Buffer.length count?",
      "options": [
        "Bytes",
        "Visible characters in every encoding",
        "Chat participants"
      ],
      "answer": 0,
      "explanation": "Bytes"
    },
    "sources": [
      "/nodejs/nodejs_streams.asp",
      "/nodejs/nodejs_buffer.asp"
    ]
  },
  {
    "id": "node-post",
    "module": "node",
    "title": "Read and validate incoming message JSON",
    "minutes": 25,
    "intro": "Add a bounded body parser before allowing writes to shared chat state. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Request body stream",
        "description": "IncomingMessage is an async iterable of chunks. Bound the accumulated byte count before Buffer.concat and JSON.parse to avoid unlimited memory use."
      },
      {
        "term": "Validation before storage",
        "description": "Require strings, trim them, check length, then construct the server-owned id and createdAt. Never accept client-supplied trusted identity or timestamps."
      }
    ],
    "example": "// Insert before the final 404 in the async HTTP request callback.\n// The callback must be async before using for await...of.\nif (req.method === \"POST\" && url.pathname === \"/api/messages\") {\n  if (req.headers[\"content-type\"]?.split(\";\")[0] !== \"application/json\") { res.writeHead(415).end(); return; }\n  try {\n    let size = 0; const chunks = [];\n    for await (const chunk of req) {\n      size += chunk.length;\n      if (size > 4096) { res.writeHead(413).end(); return; }\n      chunks.push(chunk);\n    }\n    const body = JSON.parse(Buffer.concat(chunks).toString(\"utf8\"));\n    if (typeof body?.name !== \"string\" || typeof body?.text !== \"string\" || !body.name.trim() || !body.text.trim() || body.name.length > 30 || body.text.length > 500) {\n      res.writeHead(400).end(\"Invalid message\"); return;\n    }\n    // Parsing lab only; IDs and storage are connected in the next lessons.\n    res.writeHead(204).end();\n  } catch {\n    if (!res.headersSent && !res.destroyed) res.writeHead(400).end(\"Unreadable or invalid JSON body\");\n  }\n  return;\n}",
    "task": "Add a bounded body parser before allowing writes to shared chat state.",
    "steps": [
      "Make the createServer request callback async, then insert this POST branch before its final 404. Keep request iteration and JSON parsing inside the same try/catch.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "When should the size limit be enforced?",
      "options": [
        "While reading chunks",
        "Only after rendering the message",
        "After saving it to the database"
      ],
      "answer": 0,
      "explanation": "While reading chunks"
    },
    "sources": [
      "/nodejs/nodejs_http.asp",
      "/nodejs/nodejs_error_handling.asp"
    ]
  },
  {
    "id": "node-crypto",
    "module": "node",
    "title": "Identifiers, hashes and cryptographic reference",
    "minutes": 25,
    "intro": "Give each accepted message an independent server-generated identifier. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Identifiers and hashing",
        "description": "randomUUID creates message ids. createHash computes a digest; createHmac authenticates data with a secret. A plain hash is not encryption or a safe password storage scheme."
      },
      {
        "term": "Cryptographic roles",
        "description": "Cipher/Decipher encrypt and decrypt with keys and authenticated modes; Sign/Verify use private/public keys; DiffieHellman and ECDH agree shared secrets. Study the APIs in an isolated lab; use vetted authentication libraries rather than inventing chat encryption."
      }
    ],
    "example": "import { randomUUID, createHash } from \"node:crypto\";\nconst message = { id: randomUUID(), name: \"Ada\", text: \"Hello\", createdAt: new Date().toISOString() };\nconsole.log(message);\nconsole.log(createHash(\"sha256\").update(message.text).digest(\"hex\"));",
    "task": "Give each accepted message an independent server-generated identifier.",
    "steps": [
      "Give each accepted message an independent server-generated identifier.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Does hashing a message make it confidential?",
      "options": [
        "No; hashing is not encryption",
        "Yes, hashes can be decrypted",
        "Only in React"
      ],
      "answer": 0,
      "explanation": "No; hashing is not encryption"
    },
    "sources": [
      "/nodejs/nodejs_crypto.asp",
      "/nodejs/ref_hash.asp",
      "/nodejs/ref_hmac.asp",
      "/nodejs/ref_cipher.asp",
      "/nodejs/ref_decipher.asp",
      "/nodejs/ref_diffiehellman.asp",
      "/nodejs/ref_ecdh.asp",
      "/nodejs/ref_sign.asp",
      "/nodejs/ref_verify.asp"
    ]
  },
  {
    "id": "node-sse",
    "module": "node",
    "title": "Push message events through Server-Sent Events",
    "minutes": 25,
    "intro": "Preserve /api/messages and add /api/events so the React chat receives live messages. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "SSE framing",
        "description": "GET /api/events keeps an HTTP response open with text/event-stream. Each data line ends with two newlines; the browser EventSource decodes it. POST still sends messages in the other direction."
      },
      {
        "term": "Connection ownership",
        "description": "Track connected responses in a Set, remove each on close, clear heartbeat timers, and bound history. A production implementation also bounds slow-client queues and handles reconnect resynchronization."
      },
      {
        "term": "Contract and snapshot",
        "description": "A joining browser receives {type:\"history\",messages}; each accepted message broadcasts {type:\"message\",message}. The in-memory snapshot is synchronous. Register close cleanup on the response; do not end a live stream. The later database bridge teaches buffering during asynchronous history reads."
      }
    ],
    "example": "// Replace the earlier HTTP lab server with this cumulative version.\nimport { createServer } from 'node:http';\nimport { randomUUID } from 'node:crypto';\nconst messages = [];\nconst clients = new Set();\nfunction broadcast(message) {\n  for (const client of clients) {\n    if (!client.write(`data: ${JSON.stringify({ type: 'message', message })}\\n\\n`)) client.end();\n  }\n}\nconst server = createServer(async (req, res) => {\n  const url = new URL(req.url, 'http://localhost');\n  if (req.method === 'GET' && url.pathname === '/api/messages') {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify(messages)); return;\n  }\n  if (req.method === 'GET' && url.pathname === '/api/events') {\n    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' });\n    res.write(`data: ${JSON.stringify({ type: 'history', messages })}\\n\\n`);\n    clients.add(res);\n    const timer = setInterval(() => res.write(': ping\\n\\n'), 15000);\n    res.on('close', () => { clients.delete(res); clearInterval(timer); });\n    return;\n  }\n  if (req.method === 'POST' && url.pathname === '/api/messages') {\n    if (req.headers['content-type']?.split(';')[0] !== 'application/json') { res.writeHead(415).end(); return; }\n    try {\n      let bytes = 0; const chunks = [];\n      for await (const chunk of req) {\n        bytes += chunk.length;\n        if (bytes > 4096) { res.writeHead(413).end(); return; }\n        chunks.push(chunk);\n      }\n      const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));\n      if (typeof body?.name !== 'string' || typeof body?.text !== 'string' || !body.name.trim() || !body.text.trim() || body.name.length > 30 || body.text.length > 500) {\n        res.writeHead(400).end('Invalid message'); return;\n      }\n      const message = { id: randomUUID(), name: body.name.trim(), text: body.text.trim(), createdAt: new Date().toISOString() };\n      messages.push(message); if (messages.length > 100) messages.shift();\n      broadcast(message);\n      res.writeHead(201, { 'Content-Type': 'application/json' }).end(JSON.stringify(message));\n    } catch {\n      if (!res.headersSent && !res.destroyed) res.writeHead(400).end('Unreadable or invalid JSON body');\n    }\n    return;\n  }\n  res.writeHead(404).end('Not found');\n});\nserver.on('error', error => console.error(error.message));\nserver.listen(4181, '127.0.0.1');\n",
    "task": "Preserve /api/messages and add /api/events so the React chat receives live messages.",
    "steps": [
      "Replace the earlier core-HTTP lab server with the complete example, keeping one listener. Stop any earlier process using 4181 first.",
      "Test GET and POST /api/messages with the 30/500-character contract, then open two EventSource clients for /api/events. Verify both receive the same envelopes and stable ids.",
      "Reconnect one stream and verify it receives a bounded history snapshot before new messages. This is memory-only; a restart erases it."
    ],
    "check": {
      "question": "Why leave the SSE response open?",
      "options": [
        "Future messages arrive on that connection",
        "It makes JSON persistent",
        "POST requests require it"
      ],
      "answer": 0,
      "explanation": "Future messages arrive on that connection"
    },
    "sources": [
      "/nodejs/nodejs_http.asp",
      "/nodejs/nodejs_events.asp",
      "/nodejs/nodejs_timers.asp"
    ]
  },
  {
    "id": "node-network",
    "module": "node",
    "title": "HTTPS, DNS, TLS and raw sockets",
    "minutes": 25,
    "intro": "Trace the network layers a deployed chat connection uses. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Transport layers",
        "description": "DNS resolves hostnames. net supplies raw TCP sockets, tls wraps encrypted TCP, and https supplies HTTP over TLS. An Agent reuses outbound HTTP connections; it is not an incoming server."
      },
      {
        "term": "Certificates",
        "description": "Use a trusted certificate and secure termination in deployment. Never disable certificate verification to make a failing HTTPS request appear successful. TCP chunks do not preserve message boundaries."
      }
    ],
    "example": "import { lookup } from \"node:dns/promises\";\nimport https from \"node:https\";\nconsole.log(await lookup(\"example.com\"));\nhttps.get(\"https://example.com\", response => {\n  console.log(response.statusCode); response.resume();\n}).on(\"error\", error => console.error(error.message));",
    "task": "Trace the network layers a deployed chat connection uses.",
    "steps": [
      "Trace the network layers a deployed chat connection uses.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Which layer supplies encrypted transport?",
      "options": [
        "TLS",
        "DNS",
        "JSON"
      ],
      "answer": 0,
      "explanation": "TLS"
    },
    "sources": [
      "/nodejs/nodejs_https.asp",
      "/nodejs/nodejs_dns.asp",
      "/nodejs/nodejs_tls.asp",
      "/nodejs/nodejs_net.asp",
      "/nodejs/ref_socket.asp",
      "/nodejs/ref_server.asp",
      "/nodejs/ref_agent.asp"
    ]
  },
  {
    "id": "node-tools",
    "module": "node",
    "title": "Assert, util, readline and module references",
    "minutes": 25,
    "intro": "Create a command-line room-name experiment using core modules. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Diagnostics",
        "description": "assert throws when an invariant fails. util.inspect formats structures for diagnostics; promisify adapts compatible error-first callback APIs. Avoid logging secrets or private message content."
      },
      {
        "term": "Terminal input",
        "description": "readline creates an interface over stdin/stdout. The promises variant allows await question; always close the interface so the process can exit."
      }
    ],
    "example": "import assert from \"node:assert/strict\";\nimport { inspect } from \"node:util\";\nimport { createInterface } from \"node:readline/promises\";\nconst input = createInterface({ input: process.stdin, output: process.stdout });\ntry {\n  const room = (await input.question(\"Room name: \")).trim();\n  assert.ok(room.length > 0);\n  console.log(inspect({ room }));\n} finally { input.close(); }",
    "task": "Create a command-line room-name experiment using core modules.",
    "steps": [
      "Create a command-line room-name experiment using core modules.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why close readline?",
      "options": [
        "It otherwise keeps waiting for input",
        "It stores messages automatically",
        "It restarts the server"
      ],
      "answer": 0,
      "explanation": "It otherwise keeps waiting for input"
    },
    "sources": [
      "/nodejs/nodejs_assert.asp",
      "/nodejs/nodejs_util.asp",
      "/nodejs/nodejs_readline.asp",
      "/nodejs/ref_interface.asp",
      "/nodejs/ref_modules.asp"
    ]
  },
  {
    "id": "node-typescript",
    "module": "node",
    "title": "Introduce TypeScript before advanced types",
    "minutes": 25,
    "intro": "Type-check an isolated copy of the message contract without converting the app prematurely. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Compilation",
        "description": "TypeScript adds static checking, not runtime validation. In an isolated server/typed-lab directory run npm init -y and npm install -D typescript @types/node, save lab.ts, then npx tsc lab.ts --target ES2022 --module nodenext and node lab.js."
      },
      {
        "term": "Types that preserve contracts",
        "description": "An interface describes a message; generics preserve element types. Unions and discriminated unions model success/failure; utility types Pick, Partial and Readonly derive shapes. unknown requires narrowing before use, unlike any."
      }
    ],
    "example": "interface Message { id: string; name: string; text: string; createdAt: string; }\ntype MessageDraft = Pick<Message, \"name\" | \"text\">;\ntype Result<T> = { ok: true; value: T } | { ok: false; error: string };\nfunction accepted<T>(value: T): Result<T> { return { ok: true, value }; }\nconst result = accepted<MessageDraft>({ name: \"Ada\", text: \"Hello\" });\nif (result.ok) console.log(result.value.text);",
    "task": "Type-check an isolated copy of the message contract without converting the app prematurely.",
    "steps": [
      "Type-check an isolated copy of the message contract without converting the app prematurely.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Does an interface reject invalid network JSON at runtime?",
      "options": [
        "No, runtime validation is still required",
        "Yes, automatically",
        "Only when using MongoDB"
      ],
      "answer": 0,
      "explanation": "No, runtime validation is still required"
    },
    "sources": [
      "/nodejs/nodejs_typescript.asp",
      "/nodejs/nodejs_typescript_advanced.asp"
    ]
  },
  {
    "id": "node-quality",
    "module": "node",
    "title": "Lint, format, debug and test the server",
    "minutes": 25,
    "intro": "Protect blank-message rejection with a repeatable server test. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Debugging and tooling",
        "description": "node --inspect-brk lab.mjs exposes the inspector; connect developer tools locally, set a breakpoint, inspect scope and step through validation. Never expose the inspector on a public interface. ESLint checks patterns and Prettier formats; install them as dev dependencies and follow their current configuration guides."
      },
      {
        "term": "Tests and frameworks",
        "description": "node:test is built in; assert checks outcomes. Unit tests isolate validation, integration tests exercise HTTP, and end-to-end tests exercise the visible UI. Jest and Mocha are alternative frameworks requiring their own installation and configuration."
      }
    ],
    "example": "// validation.test.mjs — run: node --test\nimport test from \"node:test\";\nimport assert from \"node:assert/strict\";\nfunction validText(value) { return typeof value === \"string\" && value.trim().length > 0; }\ntest(\"blank messages are rejected\", () => {\n  assert.equal(validText(\"   \"), false);\n  assert.equal(validText(\"hello\"), true);\n});",
    "task": "Protect blank-message rejection with a repeatable server test.",
    "steps": [
      "Protect blank-message rejection with a repeatable server test.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What should an integration test exercise?",
      "options": [
        "The HTTP boundary and its responses",
        "Only indentation",
        "Only a mock function name"
      ],
      "answer": 0,
      "explanation": "The HTTP boundary and its responses"
    },
    "sources": [
      "/nodejs/nodejs_linting_formatting.asp",
      "/nodejs/nodejs_debugging_advanced.asp",
      "/nodejs/nodejs_testing.asp",
      "/nodejs/nodejs_testing_frameworks.asp",
      "/nodejs/nodejs_test_runner.asp"
    ]
  },
  {
    "id": "node-deploy",
    "module": "node",
    "title": "Development, production, security and CI/CD",
    "minutes": 25,
    "intro": "Write and rehearse a deployment checklist that includes live-message delivery. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Deployment sequence",
        "description": "Run tests from the lockfile with npm ci, build the frontend, supply server environment values, start the server, and verify health and SSE through the hosting proxy. HTTPS proxies must allow streaming without response buffering."
      },
      {
        "term": "Production controls",
        "description": "Validate inputs, bound bodies and history, restrict origins, rate-limit writes, keep dependencies updated, and use authentication before private rooms. Distinguish liveness from database readiness. CI runs checks; CD deploys a passing revision with rollback."
      }
    ],
    "example": "// Example CI command sequence in server/:\n// npm ci\n// node --test\n// npm start\n// Configure NODE_ENV=production and PORT through your host.\n// Verify GET /api/messages and a long-lived GET /api/events after deployment.",
    "task": "Write and rehearse a deployment checklist that includes live-message delivery.",
    "steps": [
      "Write and rehearse a deployment checklist that includes live-message delivery.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why test SSE through the deployed proxy?",
      "options": [
        "Proxy buffering can delay events even when HTTP works",
        "SSE is a CSS feature",
        "Node disables timers in production"
      ],
      "answer": 0,
      "explanation": "Proxy buffering can delay events even when HTTP works"
    },
    "sources": [
      "/nodejs/nodejs_dev_vs_prod.asp",
      "/nodejs/nodejs_ci_cd.asp",
      "/nodejs/nodejs_security.asp",
      "/nodejs/nodejs_deployment_modern.asp"
    ]
  },
  {
    "id": "node-observability",
    "module": "node",
    "title": "Logs, monitoring and performance measurements",
    "minutes": 25,
    "intro": "Add timing metadata without logging private chat content. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Observable operations",
        "description": "Log structured events with request ids, status and duration. Monitor error rate, latency, event-loop delay, memory, connections and reconnects. Redact credentials and message bodies."
      },
      {
        "term": "Measure before scaling",
        "description": "performance.now measures elapsed time; monitorEventLoopDelay reports scheduling delay. Averages hide slow tails, so inspect percentile latency and load-test representative workloads."
      }
    ],
    "example": "import { performance, monitorEventLoopDelay } from \"node:perf_hooks\";\nconst delay = monitorEventLoopDelay({ resolution: 20 });\ndelay.enable();\nconst start = performance.now();\nawait new Promise(resolve => setTimeout(resolve, 50));\nconsole.log({ event: \"lab\", durationMs: performance.now() - start });\ndelay.disable();",
    "task": "Add timing metadata without logging private chat content.",
    "steps": [
      "Add timing metadata without logging private chat content.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Which metric exposes blocked JavaScript scheduling?",
      "options": [
        "Event-loop delay",
        "CSS specificity",
        "Message text length alone"
      ],
      "answer": 0,
      "explanation": "Event-loop delay"
    },
    "sources": [
      "/nodejs/nodejs_logging.asp",
      "/nodejs/nodejs_monitoring_observability.asp",
      "/nodejs/nodejs_performance.asp",
      "/nodejs/nodejs_perf_hooks.asp"
    ]
  },
  {
    "id": "node-parallel",
    "module": "node",
    "title": "Child processes, workers and cluster",
    "minutes": 25,
    "intro": "Identify which chat work could be moved off the request thread. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Choose the boundary",
        "description": "child_process launches separate programs, worker_threads run CPU-heavy JavaScript in parallel, and cluster runs multiple server processes sharing a port. Each has separate state: the in-memory message list is not shared between cluster workers."
      },
      {
        "term": "Safe execution",
        "description": "Use spawn or execFile with an argument array for known programs; avoid shell interpolation of user input. Workers exchange cloneable messages; collect results and handle error/exit before releasing resources."
      }
    ],
    "example": "// worker-lab.mjs\nimport { Worker, isMainThread, parentPort } from \"node:worker_threads\";\nif (isMainThread) {\n  const worker = new Worker(new URL(import.meta.url));\n  worker.on(\"message\", result => console.log(result));\n  worker.on(\"error\", error => console.error(error));\n} else {\n  parentPort.postMessage({ count: 1000 });\n}",
    "task": "Identify which chat work could be moved off the request thread.",
    "steps": [
      "Identify which chat work could be moved off the request thread.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What breaks if clustered workers each own separate chat history?",
      "options": [
        "Users can receive inconsistent histories",
        "All buffers become strings",
        "CSS stops loading"
      ],
      "answer": 0,
      "explanation": "Users can receive inconsistent histories"
    },
    "sources": [
      "/nodejs/nodejs_child_process.asp",
      "/nodejs/nodejs_worker_threads.asp",
      "/nodejs/nodejs_cluster.asp",
      "/nodejs/ref_worker.asp"
    ]
  },
  {
    "id": "node-protocols",
    "module": "node",
    "title": "GraphQL, WebSockets and Socket.IO alternatives",
    "minutes": 25,
    "intro": "Compare alternative protocols using the same message shape before changing transport. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "GraphQL",
        "description": "A schema defines object types, queries read data, mutations change it, and resolvers supply values. GraphQL is an alternative API contract; subscriptions need a separate transport. An isolated lab needs npm install graphql before importing graphql and buildSchema."
      },
      {
        "term": "Bidirectional transports",
        "description": "WebSocket provides a persistent two-way channel. Socket.IO adds its own protocol, event names, reconnection and rooms; it requires npm install socket.io on the server and socket.io-client in a frontend lab. A raw WebSocket client cannot speak Socket.IO. Keep the taught SSE implementation until deliberately migrating both endpoints."
      }
    ],
    "example": "// Isolated GraphQL lab after: npm install graphql\nimport { graphql, buildSchema } from \"graphql\";\nconst schema = buildSchema(\"type Query { room: String! }\");\nconsole.log(await graphql({ schema, source: \"{ room }\", rootValue: { room: () => \"General\" } }));\n// Transport design exercise: send-message -> validate -> persist -> message-created.",
    "task": "Compare alternative protocols using the same message shape before changing transport.",
    "steps": [
      "Compare alternative protocols using the same message shape before changing transport.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Can a native WebSocket client directly use a Socket.IO server?",
      "options": [
        "No, their protocols differ",
        "Yes, they are identical",
        "Only with a different CSS file"
      ],
      "answer": 0,
      "explanation": "No, their protocols differ"
    },
    "sources": [
      "/nodejs/nodejs_graphql.asp",
      "/nodejs/nodejs_websockets.asp",
      "/nodejs/nodejs_socketio.asp"
    ]
  },
  {
    "id": "node-websocket-lab",
    "module": "node",
    "title": "Build a separate bidirectional WebSocket lab",
    "minutes": 25,
    "intro": "Send a text frame between two browser tabs in the isolated WebSocket lab. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Explicit dependency",
        "description": "Create a separate ws-lab directory, run npm init -y and npm install ws, and save server.mjs. The ws package implements a WebSocket server; the browser already has a WebSocket client API."
      },
      {
        "term": "Lifecycle and frames",
        "description": "A connection emits message, close and error events. Validate decoded data, limit payload sizes and broadcast only to OPEN sockets. Production reconnects, authentication, backpressure and shared fan-out need deliberate design. This lab does not silently replace the cumulative SSE channel."
      }
    ],
    "example": "// ws-lab/server.mjs after npm install ws\nimport { WebSocketServer, WebSocket } from \"ws\";\nconst server = new WebSocketServer({ port: 3002, maxPayload: 4096 });\nserver.on(\"connection\", socket => {\n  socket.on(\"error\", error => console.error(error.message));\n  socket.on(\"message\", bytes => {\n    const text = bytes.toString().trim();\n    if (!text || text.length > 500) return;\n    for (const client of server.clients) {\n      if (client.readyState === WebSocket.OPEN) client.send(text);\n    }\n  });\n});\n// Browser console: const socket = new WebSocket(\"ws://localhost:3002\");\n// socket.onmessage = event => console.log(event.data);\n// After open: socket.send(\"Hello from a separate lab\");",
    "task": "Send a text frame between two browser tabs in the isolated WebSocket lab.",
    "steps": [
      "Send a text frame between two browser tabs in the isolated WebSocket lab.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "When may a server send on a WebSocket?",
      "options": [
        "When its readyState is OPEN",
        "Only after closing it",
        "Before any connection exists"
      ],
      "answer": 0,
      "explanation": "When its readyState is OPEN"
    },
    "sources": [
      "/nodejs/nodejs_websockets.asp"
    ]
  },
  {
    "id": "node-socketio-lab",
    "module": "node",
    "title": "Explore Socket.IO events and rooms in isolation",
    "minutes": 25,
    "intro": "Compare named Socket.IO events with SSE data frames using a separate lab. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Two compatible ends",
        "description": "In a separate socket-lab run npm init -y and npm install socket.io. The server exposes its browser client at /socket.io/socket.io.js; use that script in the lab page before calling io. Do not use native WebSocket as its client."
      },
      {
        "term": "Rooms and acknowledgments",
        "description": "Socket.IO names events and groups sockets in rooms. Rooms are delivery groups, not access control. Validate room membership before join, validate payloads before emission, and use acknowledgments for accepted/rejected actions."
      }
    ],
    "example": "import { createServer } from \"node:http\";\nimport { Server } from \"socket.io\";\nconst http = createServer((req, res) => {\n  res.setHeader(\"Content-Type\", \"text/html\");\n  res.end(`<script src=\"/socket.io/socket.io.js\"></script><script>const socket=io(); socket.on(\"chat-message\", console.log); socket.emit(\"send-message\", \"Hello\");</script>`);\n});\nconst io = new Server(http, { maxHttpBufferSize: 4096 });\nio.on(\"connection\", socket => {\n  socket.on(\"send-message\", text => {\n    if (typeof text === \"string\" && text.trim() && text.length <= 2000) io.emit(\"chat-message\", text.trim());\n  });\n});\nhttp.listen(3003);",
    "task": "Compare named Socket.IO events with SSE data frames using a separate lab.",
    "steps": [
      "Compare named Socket.IO events with SSE data frames using a separate lab.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Does joining a Socket.IO room establish authorization?",
      "options": [
        "No, permission checks are separate",
        "Yes, automatically",
        "Only with an RGB LED"
      ],
      "answer": 0,
      "explanation": "No, permission checks are separate"
    },
    "sources": [
      "/nodejs/nodejs_socketio.asp"
    ]
  },
  {
    "id": "node-advanced",
    "module": "node",
    "title": "Microservices, WebAssembly, HTTP/2, VM and compression",
    "minutes": 25,
    "intro": "Create a compressed export lab and draw the boundaries of a possible future notification service. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Architecture and execution",
        "description": "Microservices separate independently deployed responsibilities and add network failures, consistency and tracing work. WebAssembly runs compiled binary modules and can accelerate suitable computation after profiling. node:vm executes code in a V8 context but is not a security boundary for untrusted code."
      },
      {
        "term": "Protocols and compression",
        "description": "HTTP/2 multiplexes streams over a connection. zlib compresses bytes; compression saves transfer size but costs CPU and buffering can harm small SSE events. Keep ordinary message streaming unbuffered and compress file exports separately."
      }
    ],
    "example": "import { gzip, gunzip } from \"node:zlib\";\nimport { promisify } from \"node:util\";\nconst zipped = await promisify(gzip)(Buffer.from(\"chat export\"));\nconst plain = await promisify(gunzip)(zipped);\nconsole.log(plain.toString());",
    "task": "Create a compressed export lab and draw the boundaries of a possible future notification service.",
    "steps": [
      "Create a compressed export lab and draw the boundaries of a possible future notification service.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Is node:vm a safe sandbox for arbitrary stranger code?",
      "options": [
        "No",
        "Yes, by default",
        "Only with gzip"
      ],
      "answer": 0,
      "explanation": "No"
    },
    "sources": [
      "/nodejs/nodejs_microservices.asp",
      "/nodejs/nodejs_webassembly.asp",
      "/nodejs/nodejs_http2.asp",
      "/nodejs/nodejs_vm.asp",
      "/nodejs/nodejs_zlib.asp",
      "/nodejs/nodejs_real_world_examples.asp"
    ]
  },
  {
    "id": "node-iot",
    "module": "node",
    "title": "Raspberry Pi, GPIO and live hardware labs",
    "minutes": 25,
    "intro": "Simulate a new-message indicator, flowing LEDs and RGB control before attempting hardware. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Hardware prerequisites",
        "description": "These are optional hardware labs, not required to run the chat. Learn GPIO numbering, input/output direction, 3.3V logic, ground, current-limiting resistors, breadboard rails, LEDs, RGB LED channels and pushbutton pull-ups before wiring. Shut down and disconnect power before changing a circuit; never connect GPIO directly to a load."
      },
      {
        "term": "Progressive experiments",
        "description": "Blink one output, read a debounced pushbutton, sequence several LEDs, then map a validated WebSocket command to RGB channel values. W3Schools uses onoff; compatibility depends on Pi model and OS. Use a supported GPIO adapter for your board and install its documented driver only in the separate Pi project. First simulate these transitions in JavaScript."
      }
    ],
    "example": "// Hardware-free simulation using already taught EventEmitter:\nimport { EventEmitter } from \"node:events\";\nconst gpio = new EventEmitter();\nconst leds = [false, false, false];\ngpio.on(\"button\", () => { leds[0] = !leds[0]; console.log(leds); });\ngpio.emit(\"button\");\nconst rgb = { red: 120, green: 40, blue: 0 };\nconsole.log(Object.values(rgb).every(value => Number.isInteger(value) && value >= 0 && value <= 255));",
    "task": "Simulate a new-message indicator, flowing LEDs and RGB control before attempting hardware.",
    "steps": [
      "Simulate a new-message indicator, flowing LEDs and RGB control before attempting hardware.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What must precede physical GPIO wiring?",
      "options": [
        "Board-compatible electrical and driver setup",
        "Installing React alone",
        "Using a random power supply"
      ],
      "answer": 0,
      "explanation": "Board-compatible electrical and driver setup"
    },
    "sources": [
      "/nodejs/nodejs_raspberrypi.asp",
      "/nodejs/nodejs_raspberrypi_gpio_intro.asp",
      "/nodejs/nodejs_raspberrypi_blinking_led.asp",
      "/nodejs/nodejs_raspberrypi_led_pushbutton.asp",
      "/nodejs/nodejs_raspberrypi_flowing_leds.asp",
      "/nodejs/nodejs_raspberrypi_webserver_websocket.asp",
      "/nodejs/nodejs_raspberrypi_rgb_led_websocket.asp",
      "/nodejs/nodejs_raspberrypi_components.asp"
    ]
  },
  {
    "id": "node-publish",
    "module": "node",
    "title": "Publish packages and complete reference practice",
    "minutes": 25,
    "intro": "Audit a potential reusable package without publishing it. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Package release workflow",
        "description": "Extract a reusable validation helper into its own package, declare exports and supported Node versions, add tests and documentation, choose semantic versions, and inspect npm pack --dry-run. Publishing needs an npm account and deliberately makes included files public; it is not required for this chat."
      },
      {
        "term": "Review and reference navigation",
        "description": "Use the compiler for isolated syntax experiments, the server tutorial to revisit hosting, quizzes and exercises to diagnose gaps, and the syllabus/study plan to schedule review. Certification is optional and separate from mastering the app."
      }
    ],
    "example": "// In an isolated package folder:\n// npm init -y\n// npm pkg set name=\"chat-validation-lab\" version=\"0.1.0\"\n// npm pack --dry-run\n// Inspect the file list; do not include .env, logs, credentials or private exports.",
    "task": "Audit a potential reusable package without publishing it.",
    "steps": [
      "Audit a potential reusable package without publishing it.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What should you inspect before any package publication?",
      "options": [
        "The packed file list and metadata",
        "Only the folder color",
        "Only the README title"
      ],
      "answer": 0,
      "explanation": "The packed file list and metadata"
    },
    "sources": [
      "/nodejs/nodejs_publish_package.asp",
      "/nodejs/nodejs_exam.asp",
      "/nodejs/nodejs_compiler.asp",
      "/nodejs/nodejs_server.asp",
      "/nodejs/nodejs_quiz.asp",
      "/nodejs/nodejs_exercises.asp",
      "/nodejs/nodejs_practice.php",
      "/nodejs/nodejs_syllabus.asp",
      "/nodejs/nodejs_study_plan.asp"
    ]
  }
];
export const nodeDatabaseLessons = [
  {
    "id": "node-data-mongo-connect",
    "module": "node-data",
    "title": "Connect Node to MongoDB with the official driver",
    "minutes": 25,
    "intro": "Verify a real database connection in an isolated script before replacing the in-memory store. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Driver prerequisite",
        "description": "After the MongoDB track, run npm install mongodb in server/. Supply MONGODB_URI privately. MongoClient manages a connection pool; connect once at startup, select a database and collection, and close on shutdown."
      },
      {
        "term": "Creation semantics",
        "description": "Selecting a database or collection does not necessarily materialize it until the first write. createCollection explicitly creates one. Keep the connection out of browser bundles."
      }
    ],
    "example": "import { MongoClient } from \"mongodb\";\nif (!process.env.MONGODB_URI) throw new Error(\"Set MONGODB_URI\");\nconst client = new MongoClient(process.env.MONGODB_URI);\nawait client.connect();\nconst database = client.db(\"learnweb_chat\");\nconst messagesCollection = database.collection(\"messages\");\nconsole.log(await database.command({ ping: 1 }));\nawait client.close();",
    "task": "Verify a real database connection in an isolated script before replacing the in-memory store.",
    "steps": [
      "Verify a real database connection in an isolated script before replacing the in-memory store.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Where does MongoClient belong?",
      "options": [
        "In the Node server",
        "In a public React bundle",
        "In CSS"
      ],
      "answer": 0,
      "explanation": "In the Node server"
    },
    "sources": [
      "/nodejs/nodejs_mongodb.asp",
      "/nodejs/nodejs_mongodb_create_db.asp",
      "/nodejs/nodejs_mongodb_createcollection.asp"
    ]
  },
  {
    "id": "node-data-mongo-crud",
    "module": "node-data",
    "title": "Insert, find, query, sort and limit durable messages",
    "minutes": 25,
    "intro": "Load a bounded history from MongoDB while preserving chronological bubble order. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Driver CRUD",
        "description": "insertOne inserts a document; findOne returns one match; find returns a cursor. Chain sort and limit before toArray. Filters are objects supplied by trusted server code, not arbitrary operators copied from request JSON."
      },
      {
        "term": "Stable API boundary",
        "description": "Keep a public string id separately from MongoDB _id. Exclude _id from API results and retain name, text and ISO createdAt so the existing React/SSE contract survives persistence."
      }
    ],
    "example": "// With connected messagesCollection from previous lesson:\nawait messagesCollection.insertOne({ id: \"lab-1\", name: \"Ada\", text: \"Durable hello\", createdAt: new Date().toISOString() });\nconst recent = await messagesCollection.find({ name: \"Ada\" }, { projection: { _id: 0 } })\n  .sort({ createdAt: -1, id: -1 }).limit(50).toArray();\nconsole.log(recent.reverse());",
    "task": "Load a bounded history from MongoDB while preserving chronological bubble order.",
    "steps": [
      "Load a bounded history from MongoDB while preserving chronological bubble order.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why call toArray after limit?",
      "options": [
        "Bound the result set before loading it into memory",
        "It changes CSS order",
        "It authenticates users"
      ],
      "answer": 0,
      "explanation": "Bound the result set before loading it into memory"
    },
    "sources": [
      "/nodejs/nodejs_mongodb_insert.asp",
      "/nodejs/nodejs_mongodb_find.asp",
      "/nodejs/nodejs_mongodb_query.asp",
      "/nodejs/nodejs_mongodb_sort.asp",
      "/nodejs/nodejs_mongodb_limit.asp"
    ]
  },
  {
    "id": "node-data-mongo-mutations",
    "module": "node-data",
    "title": "Update, delete, drop and join in Node MongoDB",
    "minutes": 25,
    "intro": "Practice mutations and destructive cleanup on a disposable collection. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Targeted changes",
        "description": "updateOne uses $set for chosen fields; deleteOne removes one match. Check matchedCount/deletedCount to distinguish absent records. Authorization must precede edits and deletes in a private app."
      },
      {
        "term": "Join and destructive operations",
        "description": "aggregate with $lookup joins collection data, such as sender profiles, using localField/foreignField/as. drop removes an entire collection and its indexes. Explore it only on a disposable lab collection, never the cumulative message history."
      }
    ],
    "example": "// Isolated lab collection, after the connection lesson:\nconst lab = database.collection(\"message_lab\");\nawait lab.insertOne({ id: \"sample\", text: \"draft\" });\nconsole.log(await lab.updateOne({ id: \"sample\" }, { $set: { text: \"edited\" } }));\nconsole.log(await lab.deleteOne({ id: \"sample\" }));\nawait lab.drop();",
    "task": "Practice mutations and destructive cleanup on a disposable collection.",
    "steps": [
      "Practice mutations and destructive cleanup on a disposable collection.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Which operation deletes a whole collection?",
      "options": [
        "drop()",
        "deleteOne({ id: \"sample\" })",
        "findOne()"
      ],
      "answer": 0,
      "explanation": "drop()"
    },
    "sources": [
      "/nodejs/nodejs_mongodb_update.asp",
      "/nodejs/nodejs_mongodb_delete.asp",
      "/nodejs/nodejs_mongodb_drop.asp",
      "/nodejs/nodejs_mongodb_join.asp"
    ]
  },
  {
    "id": "node-data-sql-start",
    "module": "node-data",
    "title": "Understand the MySQL alternative and connect safely",
    "minutes": 25,
    "intro": "Create an isolated relational schema to compare with MongoDB documents. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "SQL prerequisite",
        "description": "A relational database stores rows in named tables with typed columns. SQL CREATE DATABASE creates a database; CREATE TABLE defines columns and constraints. MySQL is an alternative persistence lab, not an extra requirement for the MERN chat."
      },
      {
        "term": "Driver setup",
        "description": "Install and run a local MySQL server using its official setup guide, create a dedicated lab user, then npm install mysql2. The W3Schools pages use the older mysql driver; this lab uses mysql2/promise for async/await. Keep host/user/password/database in server environment variables."
      }
    ],
    "example": "// After npm install mysql2 and local MySQL setup:\nimport mysql from \"mysql2/promise\";\nconst pool = mysql.createPool({ host: process.env.MYSQL_HOST ?? \"localhost\", user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, database: process.env.MYSQL_DATABASE });\nawait pool.execute(\"CREATE TABLE IF NOT EXISTS message_lab (id VARCHAR(64) PRIMARY KEY, name VARCHAR(40) NOT NULL, text VARCHAR(2000) NOT NULL, created_at VARCHAR(30) NOT NULL)\");\nawait pool.end();",
    "task": "Create an isolated relational schema to compare with MongoDB documents.",
    "steps": [
      "Create an isolated relational schema to compare with MongoDB documents.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Should the browser receive MySQL credentials?",
      "options": [
        "No, credentials remain on the server",
        "Yes, in localStorage",
        "Yes, in a query string"
      ],
      "answer": 0,
      "explanation": "No, credentials remain on the server"
    },
    "sources": [
      "/nodejs/nodejs_mysql.asp",
      "/nodejs/nodejs_mysql_create_db.asp",
      "/nodejs/nodejs_mysql_create_table.asp"
    ]
  },
  {
    "id": "node-data-sql-query",
    "module": "node-data",
    "title": "Insert, select, filter, order and limit SQL rows",
    "minutes": 25,
    "intro": "Compare a parameterized SQL history query with the MongoDB cursor equivalent. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "SQL clauses",
        "description": "INSERT adds rows; SELECT chooses columns; WHERE filters; ORDER BY sorts; LIMIT bounds rows and OFFSET skips. SQL string values must be bound as parameters, not concatenated into statements."
      },
      {
        "term": "Identifiers differ from values",
        "description": "Placeholders bind values, not table names or ASC/DESC keywords. Choose sort columns and direction from a fixed server-owned allowlist. Inspect affectedRows and select only the public message fields."
      }
    ],
    "example": "// Reuse an open pool from the preceding MySQL lab:\nawait pool.execute(\"INSERT INTO message_lab (id, name, text, created_at) VALUES (?, ?, ?, ?)\", [\"sql-1\", \"Ada\", \"Hello\", new Date().toISOString()]);\nconst [rows] = await pool.execute(\"SELECT id, name, text, created_at AS createdAt FROM message_lab WHERE name = ? ORDER BY created_at DESC LIMIT 50\", [\"Ada\"]);\nconsole.log(rows);",
    "task": "Compare a parameterized SQL history query with the MongoDB cursor equivalent.",
    "steps": [
      "Compare a parameterized SQL history query with the MongoDB cursor equivalent.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why bind the name through a placeholder?",
      "options": [
        "It keeps user data separate from SQL syntax",
        "It creates an index automatically",
        "It enables SSE"
      ],
      "answer": 0,
      "explanation": "It keeps user data separate from SQL syntax"
    },
    "sources": [
      "/nodejs/nodejs_mysql_insert.asp",
      "/nodejs/nodejs_mysql_select.asp",
      "/nodejs/nodejs_mysql_where.asp",
      "/nodejs/nodejs_mysql_orderby.asp",
      "/nodejs/nodejs_mysql_limit.asp"
    ]
  },
  {
    "id": "node-data-sql-change",
    "module": "node-data",
    "title": "SQL updates, deletes, joins and table removal",
    "minutes": 25,
    "intro": "Rehearse scoped SQL mutations and explain how a sender-profile join would work. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed.",
    "concepts": [
      {
        "term": "Mutation scope",
        "description": "UPDATE changes columns; DELETE removes rows. A missing WHERE can affect the whole table, so use a stable identifier and inspect affectedRows. DROP TABLE destroys the schema and its contents; use a disposable lab table."
      },
      {
        "term": "Relational joins",
        "description": "JOIN combines rows using a matching key. INNER JOIN keeps matching pairs; LEFT JOIN retains left rows with nulls for missing right rows. A users table could provide sender profile data without duplicating it into each row."
      }
    ],
    "example": "// Reuse pool; operate on message_lab only:\nconst [result] = await pool.execute(\"UPDATE message_lab SET text = ? WHERE id = ?\", [\"edited\", \"sql-1\"]);\nconsole.log(result.affectedRows);\nawait pool.execute(\"DELETE FROM message_lab WHERE id = ?\", [\"sql-1\"]);\n// After inspecting this disposable table only:\n// await pool.execute(\"DROP TABLE message_lab\");",
    "task": "Rehearse scoped SQL mutations and explain how a sender-profile join would work.",
    "steps": [
      "Rehearse scoped SQL mutations and explain how a sender-profile join would work.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What is dangerous about UPDATE without WHERE?",
      "options": [
        "It can change every row",
        "It only changes CSS",
        "It always throws before executing"
      ],
      "answer": 0,
      "explanation": "It can change every row"
    },
    "sources": [
      "/nodejs/nodejs_mysql_delete.asp",
      "/nodejs/nodejs_mysql_drop_table.asp",
      "/nodejs/nodejs_mysql_update.asp",
      "/nodejs/nodejs_mysql_join.asp"
    ]
  }
];
