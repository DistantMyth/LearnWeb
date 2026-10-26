// Original Express 5 lessons; W3Schools and official documentation.
export const expressLessons = [
  {
    "id": "express-start",
    "module": "express",
    "title": "Install Express 5 and preserve the existing contract",
    "minutes": 25,
    "intro": "Move the read-only endpoint to Express while keeping the chat UI intact. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Framework role",
        "description": "Express wraps Node HTTP routing and middleware; it does not supply a database or render React automatically. Use Node 18 or newer for Express 5, preferably an active LTS."
      },
      {
        "term": "Controlled migration",
        "description": "In the server directory run npm install express@5. Replace the HTTP listener with app.listen once. Keep /api/messages and /api/events and the existing message shape so the React view needs no redesign."
      }
    ],
    "example": "import express from \"express\";\nconst app = express();\napp.get(\"/api/messages\", (req, res) => res.json([]));\napp.listen(Number(process.env.PORT ?? 4181), \"127.0.0.1\", () => console.log(\"Chat API ready\"));",
    "task": "Move the read-only endpoint to Express while keeping the chat UI intact.",
    "steps": [
      "Move the read-only endpoint to Express while keeping the chat UI intact.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What does Express replace here?",
      "options": [
        "Manual HTTP routing boilerplate",
        "The browser DOM",
        "MongoDB storage"
      ],
      "answer": 0,
      "explanation": "Manual HTTP routing boilerplate"
    },
    "sources": [
      "/nodejs/nodejs_frameworks.asp",
      "/nodejs/nodejs_express.asp",
      "https://expressjs.com/en/starter/installing/",
      "https://expressjs.com/en/starter/hello-world/"
    ]
  },
  {
    "id": "express-middleware",
    "module": "express",
    "title": "Order middleware and parse bounded JSON",
    "minutes": 25,
    "intro": "Add bounded parsing and request metadata before implementing message creation. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Pipeline",
        "description": "Middleware receives req, res, next; it must end the response or call next. Register express.json before routes needing req.body. Order is observable: an earlier response prevents later handlers from running."
      },
      {
        "term": "Scope and errors",
        "description": "app.use applies broadly or to a prefix. Route middleware applies to a route. Pass errors to next(error); a four-argument error handler belongs after routes."
      }
    ],
    "example": "// After creating app, before message routes:\napp.use(express.json({ limit: \"4kb\" }));\napp.use((req, res, next) => {\n  console.log({ method: req.method, path: req.path });\n  next();\n});",
    "task": "Add bounded parsing and request metadata before implementing message creation.",
    "steps": [
      "Add bounded parsing and request metadata before implementing message creation.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What happens if middleware neither responds nor calls next?",
      "options": [
        "The request remains pending",
        "The next route runs automatically",
        "The browser receives MongoDB data"
      ],
      "answer": 0,
      "explanation": "The request remains pending"
    },
    "sources": [
      "/nodejs/nodejs_middleware.asp",
      "https://expressjs.com/en/guide/using-middleware/",
      "https://expressjs.com/en/guide/writing-middleware/"
    ]
  },
  {
    "id": "express-routes",
    "module": "express",
    "title": "Design routes, parameters and REST responses",
    "minutes": 25,
    "intro": "Create messages in memory and verify the composer receives the canonical record. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Route semantics",
        "description": "GET reads, POST creates, PATCH partially updates, and DELETE removes. req.params contains named route segments, req.query contains query input, and req.body contains parsed input. Validate each boundary independently."
      },
      {
        "term": "Status codes",
        "description": "201 means created, 400 invalid input, 404 absent resource, 409 conflict, and 500 unexpected server failure. Never send two responses. Server-generated identifiers remain authoritative."
      }
    ],
    "example": "// Reuse app and express.json from previous lessons.\nimport { randomUUID } from \"node:crypto\";\nconst messages = [];\napp.post(\"/api/messages\", (req, res) => {\n  const { name, text } = req.body ?? {};\n  if (typeof name !== \"string\" || typeof text !== \"string\" || !name.trim() || !text.trim() || name.length > 30 || text.length > 500) {\n    return res.status(400).json({ error: \"Provide a name and a message\" });\n  }\n  const message = { id: randomUUID(), name: name.trim(), text: text.trim(), createdAt: new Date().toISOString() };\n  messages.push(message);\n  if (messages.length > 100) messages.shift();\n  res.status(201).json(message);\n});\n// Replace the earlier GET handler with res.json(messages).",
    "task": "Create messages in memory and verify the composer receives the canonical record.",
    "steps": [
      "Create messages in memory and verify the composer receives the canonical record.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Where should a new message id be generated?",
      "options": [
        "On the server",
        "In a CSS pseudo-element",
        "By accepting arbitrary req.body.id"
      ],
      "answer": 0,
      "explanation": "On the server"
    },
    "sources": [
      "/nodejs/nodejs_rest_api.asp",
      "https://expressjs.com/en/guide/routing/"
    ]
  },
  {
    "id": "express-live",
    "module": "express",
    "title": "Keep Express chat live with SSE",
    "minutes": 25,
    "intro": "Move the existing live-message channel into Express without changing endpoint names. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Reuse Node response APIs",
        "description": "Express responses inherit Node response methods. flushHeaders sends headers promptly. SSE sends one JSON record per data frame; the browser still posts new messages through the REST route."
      },
      {
        "term": "Reconciliation",
        "description": "Send the synchronous in-memory history snapshot first, then subscribe for message envelopes; React replaces state on history and de-duplicates by id. Close EventSource during React effect cleanup. Async database reads later require the explicit buffered handoff taught in the integration bridge."
      }
    ],
    "example": "// Declare clients once beside the existing messages array.\nconst clients = new Set();\napp.get(\"/api/events\", (req, res) => {\n  res.set({ \"Content-Type\": \"text/event-stream\", \"Cache-Control\": \"no-cache\", Connection: \"keep-alive\" });\n  res.flushHeaders();\n  res.write(`data: ${JSON.stringify({type:\"history\",messages})}\\n\\n`);\n  clients.add(res);\n  const heartbeat = setInterval(() => res.write(\": ping\\n\\n\"), 15000);\n  res.on(\"close\", () => { clearInterval(heartbeat); clients.delete(res); });\n});\nfunction broadcast(message) {\n  for (const client of clients) {\n    if (!client.write(`data: ${JSON.stringify({type:\"message\",message})}\\n\\n`)) client.end();\n  }\n}\n// In the existing POST route, call broadcast(message) after messages.push\n// and before returning 201. Keep one POST handler and one app.listen.",
    "task": "Move the existing live-message channel into Express without changing endpoint names.",
    "steps": [
      "Move the existing live-message channel into Express without changing endpoint names.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "How should React reconcile a record arriving in both history and SSE?",
      "options": [
        "Deduplicate by its stable id",
        "Append both copies",
        "Compare bubble colors"
      ],
      "answer": 0,
      "explanation": "Deduplicate by its stable id"
    },
    "sources": [
      "/nodejs/nodejs_frontend.asp",
      "https://expressjs.com/en/5x/api/#res.flushHeaders"
    ]
  },
  {
    "id": "express-router",
    "module": "express",
    "title": "Split routers, serve static files and understand templates",
    "minutes": 25,
    "intro": "Organize the message routes and plan one-origin frontend hosting. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Routers and static assets",
        "description": "express.Router groups handlers and mounts beneath a prefix. express.static serves a known frontend build directory. Resolve the directory relative to import.meta.url, not a user-provided path. During development the React dev server may proxy /api to the backend; deployment can serve both from one origin."
      },
      {
        "term": "Server templates",
        "description": "A template engine renders HTML on the server with res.render; React renders components in its own build/runtime. An isolated EJS lab requires npm install ejs, app.set(\"view engine\", \"ejs\"), and a views/*.ejs file. Do not replace the cumulative React UI merely to demonstrate templates."
      }
    ],
    "example": "// messages-router.mjs\nimport { Router } from \"express\";\nexport const messagesRouter = Router();\nmessagesRouter.get(\"/\", (req, res) => res.json([]));\n// server.mjs alternative to the earlier GET route:\n// app.use(\"/api/messages\", messagesRouter);\n// Production-only after building frontend:\n// import { fileURLToPath } from \"node:url\";\n// app.use(express.static(fileURLToPath(new URL(\"../client/dist/\", import.meta.url))));",
    "task": "Organize the message routes and plan one-origin frontend hosting.",
    "steps": [
      "Organize the message routes and plan one-origin frontend hosting.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What path does a router mounted at /api/messages see for its root?",
      "options": [
        "/ inside the router",
        "/api/events",
        "The filesystem root"
      ],
      "answer": 0,
      "explanation": "/ inside the router"
    },
    "sources": [
      "https://expressjs.com/en/guide/routing/",
      "https://expressjs.com/en/starter/static-files/",
      "https://expressjs.com/en/guide/using-template-engines/"
    ]
  },
  {
    "id": "express-errors",
    "module": "express",
    "title": "Handle missing routes and asynchronous errors",
    "minutes": 25,
    "intro": "Make malformed JSON, oversized bodies, absent routes and server failures visible to the chat UI. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Express 5 promise behavior",
        "description": "A rejected promise returned by an async route reaches error middleware automatically. Detached timers and event callbacks still need explicit error forwarding or their own error handling."
      },
      {
        "term": "Final handlers",
        "description": "A 404 is an unmatched route, not automatically an exception. Place a JSON 404 after API routes and a four-argument error handler last. If headers were already sent, delegate with next(error) instead of attempting another JSON response."
      }
    ],
    "example": "// Register after API routes:\napp.use(\"/api\", (req, res) => res.status(404).json({ error: \"API route not found\" }));\napp.use((error, req, res, next) => {\n  if (res.headersSent) return next(error);\n  const status = error.type === \"entity.too.large\" ? 413 : error.type === \"entity.parse.failed\" ? 400 : 500;\n  console.error({ event: \"request-failed\", status });\n  res.status(status).json({ error: status === 500 ? \"Request failed\" : \"Invalid request body\" });\n});",
    "task": "Make malformed JSON, oversized bodies, absent routes and server failures visible to the chat UI.",
    "steps": [
      "Make malformed JSON, oversized bodies, absent routes and server failures visible to the chat UI.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What is the Express error-handler signature?",
      "options": [
        "(error, req, res, next)",
        "(req, res)",
        "(message, bubble)"
      ],
      "answer": 0,
      "explanation": "(error, req, res, next)"
    },
    "sources": [
      "https://expressjs.com/en/guide/error-handling/",
      "https://expressjs.com/en/guide/migrating-5/"
    ]
  },
  {
    "id": "express-auth",
    "module": "express",
    "title": "Authentication, origins and private chat boundaries",
    "minutes": 25,
    "intro": "Label the current shared room as public and design the identity boundary before private rooms. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Authentication and authorization",
        "description": "Authentication establishes identity; authorization checks permission for the requested room. A typed display name is not proof of identity. Keep the classroom chat explicitly public until a real identity provider/session layer is configured."
      },
      {
        "term": "Prerequisites before protected rooms",
        "description": "Sessions require an unpredictable server-issued credential, secure HttpOnly SameSite cookies, expiry, CSRF protection for cookie-authenticated writes, HTTPS and server-side authorization. JWT needs signature and claim verification; decoding alone proves nothing. W3Schools demonstrates API authentication, but copied hardcoded secrets are unsuitable for deployment."
      },
      {
        "term": "Origins",
        "description": "Same-origin hosting avoids development CORS complexity. For separate origins configure an explicit trusted-origin allowlist and credentials intentionally; CORS is a browser policy, not an authentication system. Native EventSource cannot set arbitrary Authorization headers, so choose same-origin cookie sessions or an explicitly taught alternative."
      }
    ],
    "example": "// Public-demo response, not authentication:\napp.get(\"/api/session\", (req, res) => {\n  res.json({ authenticated: false, mode: \"public-classroom-demo\" });\n});\n// Future protected-room route must obtain identity from verified session middleware,\n// then check that identity is allowed to read/write the requested room.",
    "task": "Label the current shared room as public and design the identity boundary before private rooms.",
    "steps": [
      "Label the current shared room as public and design the identity boundary before private rooms.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Does a client-supplied name authenticate the sender?",
      "options": [
        "No",
        "Yes, if trimmed",
        "Yes, with CORS enabled"
      ],
      "answer": 0,
      "explanation": "No"
    },
    "sources": [
      "/nodejs/nodejs_api_auth.asp",
      "https://expressjs.com/en/advanced/best-practice-security/"
    ]
  },
  {
    "id": "express-generator",
    "module": "express",
    "title": "Compare generated projects, basic routing and FAQ",
    "minutes": 25,
    "intro": "Compare a generated scaffold with the server you assembled by hand. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Generated scaffold",
        "description": "In a separate scratch directory, npx express-generator --no-view generated-chat creates a conventional scaffold. Inspect package.json before npm install, then run its documented start script. The generator is optional; the cumulative app already has a React frontend and an explicit server entry point."
      },
      {
        "term": "Route and framework boundaries",
        "description": "app.get handles GET and app.post handles POST. Express does not impose a database, authentication system or project structure. A 404 is the normal fallthrough when no route responds; use middleware for the final response."
      }
    ],
    "example": "// Isolated scaffold inspection only:\n// npx express-generator --no-view generated-chat\n// Compare generated-chat/app.js and bin/www with server.mjs.\n// Do not copy a second app.listen into the existing server.\napp.get(\"/api/health\", (req, res) => res.json({ ok: true }));",
    "task": "Compare a generated scaffold with the server you assembled by hand.",
    "steps": [
      "Compare a generated scaffold with the server you assembled by hand.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Is express-generator required to use Express?",
      "options": [
        "No, it is an optional scaffold tool",
        "Yes, at every restart",
        "Only for MongoDB"
      ],
      "answer": 0,
      "explanation": "No, it is an optional scaffold tool"
    },
    "sources": [
      "https://expressjs.com/en/starter/generator/",
      "https://expressjs.com/en/starter/basic-routing/",
      "https://expressjs.com/en/starter/faq/"
    ]
  },
  {
    "id": "express-templates",
    "module": "express",
    "title": "Explore custom template engines and middleware catalogs",
    "minutes": 25,
    "intro": "Explain the renderer callback and inspect API signatures before choosing middleware. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Template adapter contract",
        "description": "app.engine(extension, renderer) registers a renderer(filePath, options, callback). The callback receives an error or completed HTML. Escaping and trusted template paths are essential; do not interpolate untrusted message text into raw HTML. The React chat continues rendering text through React."
      },
      {
        "term": "API reference literacy",
        "description": "Use the Express 5 API to check application settings, request properties, response methods and Router behavior. Middleware catalogs list third-party options, not built-in guarantees. Install each chosen package explicitly, verify maintenance and compatibility, and read its configuration."
      }
    ],
    "example": "// Safe minimal demonstration returns fixed HTML; no untrusted interpolation.\napp.engine(\"fixed\", (filePath, options, callback) => {\n  callback(null, \"<!doctype html><title>Chat status</title><p>Public demo</p>\");\n});\n// A real renderer must read an existing trusted template file and escape values.\n// Keep the cumulative React interface; this is a separate rendering lab.",
    "task": "Explain the renderer callback and inspect API signatures before choosing middleware.",
    "steps": [
      "Explain the renderer callback and inspect API signatures before choosing middleware.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "What must a template engine handle when inserting user text?",
      "options": [
        "Context-appropriate escaping",
        "Database indexing",
        "WebSocket handshakes"
      ],
      "answer": 0,
      "explanation": "Context-appropriate escaping"
    },
    "sources": [
      "https://expressjs.com/en/advanced/developing-template-engines/",
      "https://expressjs.com/en/resources/middleware/",
      "https://expressjs.com/en/5x/api/"
    ]
  },
  {
    "id": "express-debug-proxy",
    "module": "express",
    "title": "Debug Express and configure trusted proxies",
    "minutes": 25,
    "intro": "Diagnose route matching and document the deployment proxy boundary. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Diagnostics",
        "description": "Express internal debugging uses DEBUG namespaces. Enable only documented namespaces for the installed version; Express 5 router logs use router namespaces. Application logs should separately record request outcomes without credentials."
      },
      {
        "term": "Proxy trust",
        "description": "Behind a proxy, client IP and protocol may come from forwarded headers. trust proxy must match the actual trusted proxy addresses or network topology. Setting it blindly to true can let forged headers bypass IP policies or misidentify HTTPS."
      }
    ],
    "example": "// Unix shell, isolated development run:\n// DEBUG=express:*,router,router:* node server.mjs\n// Configure only when the deployment really uses a local trusted reverse proxy:\n// app.set(\"trust proxy\", \"loopback\");\n// Then inspect req.ip and req.protocol through that proxy.",
    "task": "Diagnose route matching and document the deployment proxy boundary.",
    "steps": [
      "Diagnose route matching and document the deployment proxy boundary.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why avoid blindly trusting forwarded headers?",
      "options": [
        "Clients may forge them unless the proxy boundary is controlled",
        "They are CSS variables",
        "They remove all latency"
      ],
      "answer": 0,
      "explanation": "Clients may forge them unless the proxy boundary is controlled"
    },
    "sources": [
      "https://expressjs.com/en/guide/debugging/",
      "https://expressjs.com/en/guide/behind-proxies/"
    ]
  },
  {
    "id": "express-operations",
    "module": "express",
    "title": "Performance, process management and graceful shutdown",
    "minutes": 25,
    "intro": "Drain live chat connections during a controlled restart. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Operate the process",
        "description": "Use a host-managed supervisor or service manager to restart failed processes and capture logs. Set NODE_ENV=production, avoid synchronous work, cache immutable frontend assets and scale only after measuring. Keep Express and middleware patched and review security release notes."
      },
      {
        "term": "Graceful draining",
        "description": "Save the server returned by app.listen. On SIGTERM mark readiness false, close SSE responses so server.close can finish, stop new requests, close database clients when introduced, and bound shutdown time. Multiple processes need shared storage and event fan-out; the current in-memory store works in one process only."
      }
    ],
    "example": "// Replace the earlier bare app.listen call:\nlet ready = true;\napp.get(\"/api/ready\", (req, res) => res.status(ready ? 200 : 503).json({ ready }));\nconst server = app.listen(Number(process.env.PORT ?? 4181), \"127.0.0.1\");\nprocess.on(\"SIGTERM\", () => {\n  ready = false;\n  for (const client of clients) client.end();\n  clients.clear();\n  server.close(() => { console.log(\"HTTP connections closed\"); });\n  setTimeout(() => { console.error(\"Shutdown timed out\"); process.exit(1); }, 10000).unref();\n});",
    "task": "Drain live chat connections during a controlled restart.",
    "steps": [
      "Drain live chat connections during a controlled restart.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "Why close SSE responses before waiting for server.close?",
      "options": [
        "They can otherwise remain open indefinitely",
        "It compresses history",
        "It resets React styles"
      ],
      "answer": 0,
      "explanation": "They can otherwise remain open indefinitely"
    },
    "sources": [
      "https://expressjs.com/en/advanced/pm/",
      "https://expressjs.com/en/advanced/security-updates/",
      "https://expressjs.com/en/advanced/best-practice-performance/",
      "https://expressjs.com/en/advanced/healthcheck-graceful-shutdown/"
    ]
  },
  {
    "id": "express-database-boundary",
    "module": "express",
    "title": "Prepare the database boundary without requiring MongoDB yet",
    "minutes": 25,
    "intro": "Extract an asynchronous store that can later be backed by MongoDB. Continue the same WhatsApp-style chat. Run server examples in the terminal, not in the browser. Each isolated lab is separate from the cumulative application; replace the named implementation when instructed. Insert application routes before the final 404 and error middleware, and keep one app.listen call at the end.",
    "concepts": [
      {
        "term": "Express and storage",
        "description": "Express does not include a database driver. A driver performs database operations while Express handles HTTP. Keep route validation and public JSON shape independent of persistence; the MongoDB track will teach documents, queries, indexes and the official driver before integration."
      },
      {
        "term": "Async repository interface",
        "description": "An async store interface works now with arrays and later with database calls. Route handlers await the interface. Persist successfully before broadcasting; a failed write must not appear to clients as a committed message."
      }
    ],
    "example": "// store.mjs — still entirely in memory\nconst records = [];\nexport const store = {\n  async list() { return records.map(record => ({ ...record })); },\n  async add(record) { records.push({ ...record }); if (records.length > 100) records.shift(); return { ...record }; }\n};\n// In the existing validated POST route:\n// const saved = await store.add(message);\n// broadcast(saved);\n// res.status(201).json(saved);",
    "task": "Extract an asynchronous store that can later be backed by MongoDB.",
    "steps": [
      "Extract an asynchronous store that can later be backed by MongoDB.",
      "Run the example in its own lab file before integrating it into the chat project.",
      "Verify the expected result and deliberately exercise the failure case explained in this lesson."
    ],
    "check": {
      "question": "When should a durable message be broadcast?",
      "options": [
        "After the database confirms the write",
        "Before validation",
        "As soon as the user types"
      ],
      "answer": 0,
      "explanation": "After the database confirms the write"
    },
    "sources": [
      "https://expressjs.com/en/guide/database-integration/"
    ]
  }
];
