// Original chat-focused lessons. Source coverage checked against the W3Schools JavaScript sidebar on 2026-10-26.
export const javascriptLessons = [
  {
    "id": "js-start",
    "module": "javascript",
    "title": "Connect JavaScript to the chat page",
    "minutes": 18,
    "intro": "Connect a script and verify that it runs without changing chat behavior. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Script placement",
        "description": "Save JavaScript in chat.js and load it with a deferred external script. defer waits for HTML parsing before executing the script."
      },
      {
        "term": "Statements and output",
        "description": "Statements perform actions; comments explain choices. Start with console.log while the page is still a static chat mockup. document.write can replace a loaded page and is unsuitable for chat updates."
      },
      {
        "term": "Integrate examples deliberately",
        "description": "Console and optional lab examples are isolated experiments. Reload the console or use a separate labs.js when repeating declarations. In the cumulative chat.js, update existing bindings and replace earlier listeners or helper implementations rather than appending duplicate const declarations or duplicate submit handlers."
      }
    ],
    "example": "<script src=\"chat.js\" defer></script>\n<!-- chat.js: -->\n// The chat is still a static prototype.\nconsole.log(\"Chat script connected\");",
    "task": "Connect a script and verify that it runs without changing chat behavior.",
    "steps": [
      "Create chat.js beside index.html.",
      "Add the deferred script to the document head.",
      "Open developer tools, reload, and check the message in the Console.",
      "Keep one chat.js for the cumulative app and a separate lab file for standalone experiments. Later examples that reuse names demonstrate replacements, not code to append unchanged."
    ],
    "check": {
      "question": "Where should you inspect console.log output?",
      "options": [
        "The browser developer tools Console.",
        "In the CSS stylesheet.",
        "Only on a remote server."
      ],
      "answer": 0,
      "explanation": "The browser developer tools Console."
    },
    "sources": [
      "/js/default.asp",
      "/js/js_intro.asp",
      "/js/js_whereto.asp",
      "/js/js_output.asp",
      "/js/js_syntax.asp",
      "/js/js_statements.asp",
      "/js/js_comments.asp"
    ]
  },
  {
    "id": "js-bindings",
    "module": "javascript",
    "title": "Store names, counts, and types",
    "minutes": 18,
    "intro": "Describe the initial chat state with named variables. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Bindings",
        "description": "Use const when the binding will not be reassigned and let when its value will change. var has function scope and is mainly useful for understanding older code."
      },
      {
        "term": "Values and types",
        "description": "Strings represent text, numbers represent counts, booleans represent true or false. undefined means a value has not been assigned; null can deliberately represent no selection."
      }
    ],
    "example": "const roomName = \"General\";\nlet unreadCount = 0;\nconst isConnected = false;\nlet selectedMessage = null;\nconsole.log(roomName, unreadCount, isConnected);",
    "task": "Describe the initial chat state with named variables.",
    "steps": [
      "Declare a fixed room name with const.",
      "Use let for a count you will change later.",
      "Log each value and its type in developer tools after the later typeof lesson."
    ],
    "check": {
      "question": "Which declaration fits an unread count that will change?",
      "options": [
        "let unreadCount = 0;",
        "const unreadCount = 0; followed by reassignment.",
        "A CSS variable."
      ],
      "answer": 0,
      "explanation": "let unreadCount = 0;"
    },
    "sources": [
      "/js/js_variables.asp",
      "/js/js_let.asp",
      "/js/js_const.asp",
      "/js/js_types.asp",
      "/js/js_varletconst.asp"
    ]
  },
  {
    "id": "js-operators",
    "module": "javascript",
    "title": "Calculate counters and compare values",
    "minutes": 18,
    "intro": "Calculate and inspect an unread badge count in the console. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Arithmetic and assignment",
        "description": "+, -, *, /, %, and ** calculate values. += updates a binding. Parentheses make precedence explicit and reduce mistakes."
      },
      {
        "term": "Strict equality",
        "description": "=== compares without converting types. A count of 0 is different from the string \"0\"; form inputs will eventually need explicit conversion."
      }
    ],
    "example": "let unreadCount = 2;\nunreadCount += 1;\nconst hasUnread = unreadCount > 0;\nconst isThree = unreadCount === 3;\nconsole.log(unreadCount, hasUnread, isThree);",
    "task": "Calculate and inspect an unread badge count in the console.",
    "steps": [
      "Increment and then decrement a count.",
      "Compare it with zero using > and ===.",
      "Try 2 + 3 * 4 and (2 + 3) * 4 to explain precedence."
    ],
    "check": {
      "question": "What does \"3\" === 3 evaluate to?",
      "options": [
        "false, because the types differ.",
        "true, because strict equality converts text.",
        "The string \"true\"."
      ],
      "answer": 0,
      "explanation": "false, because the types differ."
    },
    "sources": [
      "/js/js_operators.asp",
      "/js/js_arithmetic.asp",
      "/js/js_assignment.asp",
      "/js/js_comparisons.asp",
      "/js/js_conditionals.asp",
      "/js/js_precedence.asp",
      "/js/js_operators_reference.asp"
    ]
  },
  {
    "id": "js-conditions",
    "module": "javascript",
    "title": "Choose a message status",
    "minutes": 18,
    "intro": "Decide which status should describe a local chat draft. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Branches",
        "description": "if and else choose a path. A ternary expression chooses one value; switch fits a fixed group of status values."
      },
      {
        "term": "Boolean logic",
        "description": "&& requires both operands, || provides an alternative, and ! negates truthiness. Empty strings, 0, null, undefined, and NaN are falsy."
      }
    ],
    "example": "const messageText = \"Hello\";\nconst connected = false;\nlet status;\nif (messageText === \"\") {\n  status = \"Write a message\";\n} else if (!connected) {\n  status = \"Local draft\";\n} else {\n  status = \"Ready\";\n}\nconsole.log(status);",
    "task": "Decide which status should describe a local chat draft.",
    "steps": [
      "Write branches for empty text and disconnected state.",
      "Express a two-choice badge label with a ternary.",
      "Use switch for the labels draft, sent, and failed, with a default case."
    ],
    "check": {
      "question": "When does a && b evaluate truthily?",
      "options": [
        "When both a and b are truthy.",
        "Whenever either value is truthy.",
        "Only when both values are false."
      ],
      "answer": 0,
      "explanation": "When both a and b are truthy."
    },
    "sources": [
      "/js/js_if.asp",
      "/js/js_if_else.asp",
      "/js/js_if_ternary.asp",
      "/js/js_switch.asp",
      "/js/js_booleans.asp",
      "/js/js_logical.asp"
    ]
  },
  {
    "id": "js-strings",
    "module": "javascript",
    "title": "Prepare message text",
    "minutes": 18,
    "intro": "Normalize a draft and find a room mention without touching the page yet. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Immutable text",
        "description": "Strings do not change in place. trim, slice, replace, and toLowerCase return new strings; length counts UTF-16 code units, so it does not always equal visible characters."
      },
      {
        "term": "Search and templates",
        "description": "includes checks for a substring and indexOf returns its position or -1. Template literals interpolate values using ${...}."
      }
    ],
    "example": "const draft = \"  Hello General  \";\nconst text = draft.trim();\nconst mentionsGeneral = text.toLowerCase().includes(\"general\");\nconsole.log(`${text} (${text.length} code units)`);\nconsole.log(mentionsGeneral, text.slice(0, 5));",
    "task": "Normalize a draft and find a room mention without touching the page yet.",
    "steps": [
      "Trim leading and trailing whitespace.",
      "Search a lowercased copy while retaining the original message case.",
      "Compare slice, substring, replaceAll, split, startsWith, endsWith, and repeat on sample drafts."
    ],
    "check": {
      "question": "Does trim change the original string?",
      "options": [
        "No. It returns a new string.",
        "Yes. All strings are mutable.",
        "Only for const bindings."
      ],
      "answer": 0,
      "explanation": "No. It returns a new string."
    },
    "sources": [
      "/js/js_strings.asp",
      "/js/js_string_templates.asp",
      "/js/js_string_methods.asp",
      "/js/js_string_search.asp",
      "/js/js_string_reference.asp"
    ]
  },
  {
    "id": "js-numbers",
    "module": "javascript",
    "title": "Keep numeric values reliable",
    "minutes": 18,
    "intro": "Explore safe message limits, large sequence numbers, and notification flags. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Number limits",
        "description": "JavaScript Number uses floating point. Number.isFinite and Number.isSafeInteger test constraints; toFixed formats a string and does not improve arithmetic precision."
      },
      {
        "term": "BigInt and bits",
        "description": "BigInt stores arbitrary-size integers, uses an n suffix, and cannot mix directly with Number arithmetic. Bitwise operators work on 32-bit integer representations; use them for flags only when that limit is intended."
      }
    ],
    "example": "const limit = Number(\"120\");\nconsole.log(Number.isSafeInteger(limit));\nconsole.log((1 / 3).toFixed(2));\nconst serverSequence = 9007199254740993n;\nconst flags = 1 | 2;\nconsole.log(serverSequence + 1n, flags & 2);",
    "task": "Explore safe message limits, large sequence numbers, and notification flags.",
    "steps": [
      "Convert a numeric string with Number.",
      "Compare parseInt, parseFloat, Number.isNaN, Number.EPSILON, and Number.MAX_SAFE_INTEGER.",
      "Keep a BigInt experiment separate from normal counters; document why JSON serialization needs special treatment later."
    ],
    "check": {
      "question": "What happens when Number and BigInt are added directly?",
      "options": [
        "JavaScript throws a TypeError.",
        "The result is always a Number.",
        "The browser silently removes the BigInt suffix."
      ],
      "answer": 0,
      "explanation": "JavaScript throws a TypeError."
    },
    "sources": [
      "/js/js_numbers.asp",
      "/js/js_number_methods.asp",
      "/js/js_number_properties.asp",
      "/js/js_number_reference.asp",
      "/js/js_bitwise.asp",
      "/js/js_bigint.asp"
    ]
  },
  {
    "id": "js-functions",
    "module": "javascript",
    "title": "Extract draft rules into functions",
    "minutes": 18,
    "intro": "Create reusable helpers for draft normalization and remaining length. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Inputs and returns",
        "description": "Parameters name inputs, arguments provide values, and return gives a result to the caller. A function without return produces undefined. A default parameter supplies a fallback when an argument is omitted or undefined; it does not replace null."
      },
      {
        "term": "Function forms",
        "description": "Declarations can be called before their declaration; expressions are values assigned to bindings. Arrow functions use lexical this; begin with pure helpers that do not need this."
      }
    ],
    "example": "function normalizeDraft(text) {\n  return text.trim();\n}\nconst hasText = function (text) { return text.length > 0; };\nconst remaining = (text, limit = 280) => limit - text.length;\nconsole.log(hasText(normalizeDraft(\" Hi \")), remaining(\"Hi\"));",
    "task": "Create reusable helpers for draft normalization and remaining length.",
    "steps": [
      "Write and invoke normalizeDraft.",
      "Add a default limit parameter and test explicit overrides.",
      "Test empty, whitespace-only, and ordinary text using console.log."
    ],
    "check": {
      "question": "What is the result of a function with no return statement?",
      "options": [
        "undefined.",
        "An empty array.",
        "The value of its last expression automatically."
      ],
      "answer": 0,
      "explanation": "undefined."
    },
    "sources": [
      "/js/js_functions.asp",
      "/js/js_function_intro.asp",
      "/js/js_function_invocation.asp",
      "/js/js_function_parameters.asp",
      "/js/js_function_return.asp",
      "/js/js_function_arguments.asp",
      "/js/js_function_expressions.asp",
      "/js/js_arrow_function.asp",
      "/js/js_function_quiz.asp"
    ]
  },
  {
    "id": "js-objects",
    "module": "javascript",
    "title": "Model a message as an object",
    "minutes": 18,
    "intro": "Replace separate message variables with a coherent message object. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Properties and methods",
        "description": "An object groups named properties. Dot access fits fixed names; brackets allow computed keys. Methods are functions stored on an object."
      },
      {
        "term": "Identity and this",
        "description": "Two bindings can refer to the same object, so changing one affects both. In an ordinary method invoked as object.method(), this refers to that object; constructors called with new initialize instances."
      }
    ],
    "example": "const message = { author: \"You\", text: \"Hello\", status: \"draft\",\n  summary() { return this.author + \": \" + this.text; }\n};\nconsole.log(message.summary());\nmessage[\"status\"] = \"local\";\nconsole.log(message);",
    "task": "Replace separate message variables with a coherent message object.",
    "steps": [
      "Create author, text, and status properties.",
      "Read a property by dot and bracket notation.",
      "Try Object.keys and Object.values after the advanced object lesson; for now inspect the object in the console."
    ],
    "check": {
      "question": "What does a message method called as message.summary() receive as this?",
      "options": [
        "The message object.",
        "Always the browser window.",
        "The returned string."
      ],
      "answer": 0,
      "explanation": "The message object."
    },
    "sources": [
      "/js/js_objects.asp",
      "/js/js_object_intro.asp",
      "/js/js_object_properties.asp",
      "/js/js_object_methods.asp",
      "/js/js_object_this.asp",
      "/js/js_object_display.asp",
      "/js/js_object_constructors.asp"
    ]
  },
  {
    "id": "js-arrays",
    "module": "javascript",
    "title": "Keep an ordered message history",
    "minutes": 18,
    "intro": "Store multiple local chat messages in chronological order. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Ordered collections",
        "description": "Arrays use zero-based indexes and length. Prefer array literals; new Array(3) creates empty slots rather than three values of 3."
      },
      {
        "term": "Mutation and copies",
        "description": "push, pop, shift, unshift, and splice mutate an array. slice, concat, flat, toSpliced, and with produce new arrays. const prevents reassigning the binding but permits mutation of its array."
      }
    ],
    "example": "const messages = [{ author: \"You\", text: \"Hello\" }];\nmessages.push({ author: \"You\", text: \"Second local message\" });\nconst recent = messages.slice(-1);\nconsole.log(messages[0].text, messages.length, recent);",
    "task": "Store multiple local chat messages in chronological order.",
    "steps": [
      "Create an array of two message objects.",
      "Practice adding and removing a temporary draft.",
      "Compare a slice copy with a splice mutation and inspect both arrays."
    ],
    "check": {
      "question": "Can push modify an array declared with const?",
      "options": [
        "Yes. const fixes the binding, not the array contents.",
        "No. const freezes every object.",
        "Only if the array contains numbers."
      ],
      "answer": 0,
      "explanation": "Yes. const fixes the binding, not the array contents."
    },
    "sources": [
      "/js/js_arrays.asp",
      "/js/js_array_constructor.asp",
      "/js/js_array_methods.asp",
      "/js/js_array_const.asp",
      "/js/js_array_reference.asp"
    ]
  },
  {
    "id": "js-loops",
    "module": "javascript",
    "title": "Visit message history deliberately",
    "minutes": 18,
    "intro": "Inspect every nonempty message in your local history. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Repeat with a boundary",
        "description": "A for loop makes initialization, condition, and update explicit. A while loop repeats while a condition is true; update the condition so the loop terminates."
      },
      {
        "term": "Break and continue",
        "description": "break exits a loop and continue skips to its next iteration. Choose clear control flow before optimizing it."
      }
    ],
    "example": "const messages = [\"Hello\", \"\", \"Welcome\"];\nfor (let i = 0; i < messages.length; i += 1) {\n  if (messages[i] === \"\") continue;\n  console.log(i, messages[i]);\n}",
    "task": "Inspect every nonempty message in your local history.",
    "steps": [
      "Loop through history by index.",
      "Skip an empty draft with continue.",
      "Write a bounded while loop and stop early with break when a target is found."
    ],
    "check": {
      "question": "What does continue do?",
      "options": [
        "It skips the remaining statements in the current iteration.",
        "It exits the whole function.",
        "It always exits every nested loop."
      ],
      "answer": 0,
      "explanation": "It skips the remaining statements in the current iteration."
    },
    "sources": [
      "/js/js_loops.asp",
      "/js/js_loop_for.asp",
      "/js/js_loop_while.asp",
      "/js/js_break.asp",
      "/js/js_continue.asp",
      "/js/js_control_flow.asp",
      "/js/js_looping.asp"
    ]
  },
  {
    "id": "js-array-tools",
    "module": "javascript",
    "title": "Search, sort, and transform history",
    "minutes": 18,
    "intro": "Build console-only search results and chronological message views. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Transform and select",
        "description": "map produces transformed values, filter selects a subset, find returns the first match, and some/every answer boolean questions. reduce accumulates a result."
      },
      {
        "term": "Ordering",
        "description": "sort mutates and defaults to string ordering. Supply a comparator for numeric timestamps, or use toSorted for a sorted copy; use findIndex and includes for their specific lookup results."
      }
    ],
    "example": "const messages = [{ id: 1, text: \"Hello\", time: 20 }, { id: 2, text: \"Hi\", time: 10 }];\nconst matches = messages.filter(message => message.text.includes(\"H\"));\nconst ordered = messages.toSorted((a, b) => a.time - b.time);\nconsole.log(matches.map(message => message.text));\nconsole.log(ordered, messages.reduce(total => total + 1, 0));",
    "task": "Build console-only search results and chronological message views.",
    "steps": [
      "Filter history using a search term.",
      "Map matching objects to labels.",
      "Sort a copy with a comparator and confirm the original stays in insertion order."
    ],
    "check": {
      "question": "Which method returns the first matching message?",
      "options": [
        "find.",
        "filter, which returns one object.",
        "map, which removes all other objects."
      ],
      "answer": 0,
      "explanation": "find."
    },
    "sources": [
      "/js/js_array_search.asp",
      "/js/js_array_sort.asp",
      "/js/js_array_iteration.asp"
    ]
  },
  {
    "id": "js-scope",
    "module": "javascript",
    "title": "Keep draft state in its intended scope",
    "minutes": 18,
    "intro": "Keep temporary message values local to their functions. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Scope and lifetime",
        "description": "let and const are block scoped, while var is function scoped. A helper should access only the state it needs; avoid accidental globals."
      },
      {
        "term": "Hoisting and strict mode",
        "description": "Declarations are processed before execution, but let and const cannot be read before initialization. Strict mode catches accidental assignments to undeclared names; modules are strict automatically."
      }
    ],
    "example": "\"use strict\";\nlet draft = \"Hello\";\nfunction preview(text) {\n  const label = text.trim();\n  return label;\n}\nconsole.log(preview(draft));\n// label is unavailable here.",
    "task": "Keep temporary message values local to their functions.",
    "steps": [
      "Move temporary labels inside helpers.",
      "Explain why accessing a const before its declaration fails.",
      "Compare a block-scoped let with a var example in an isolated console experiment."
    ],
    "check": {
      "question": "Where can a const declared inside a function be accessed?",
      "options": [
        "Inside that function and closures that capture it.",
        "Everywhere on the site automatically.",
        "Only in CSS."
      ],
      "answer": 0,
      "explanation": "Inside that function and closures that capture it."
    },
    "sources": [
      "/js/js_scope.asp",
      "/js/js_codeblocks.asp",
      "/js/js_hoisting.asp",
      "/js/js_strict.asp"
    ]
  },
  {
    "id": "js-types",
    "module": "javascript",
    "title": "Convert values at the boundary",
    "minutes": 18,
    "intro": "Make conversions and missing message fields explicit. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Explicit conversion",
        "description": "typeof helps inspect values but typeof null is \"object\". Number, String, and Boolean make conversions intentional; Number.isNaN tests NaN without coercing its input."
      },
      {
        "term": "Primitives and destructuring",
        "description": "Primitives are immutable; objects have reference identity. Symbol creates unique keys. Destructuring extracts properties or array positions, with defaults for undefined values; spread copies one level rather than cloning nested objects. In a function call, ...array expands array entries into individual arguments; for example Math.max(...[2, 5]) passes 2 and 5."
      }
    ],
    "example": "const rawLimit = \"280\";\nconst limit = Number(rawLimit);\nconst message = { author: \"You\", text: \"Hello\" };\nconst { author, text, status = \"local\" } = message;\nconst privateKey = Symbol(\"internal\");\nmessage[privateKey] = true;\nconsole.log(typeof limit, author, text, status, Number.isNaN(limit));",
    "task": "Make conversions and missing message fields explicit.",
    "steps": [
      "Compare Boolean(\"false\") with Boolean(\"\") and explain truthiness.",
      "Use destructuring defaults for a missing status.",
      "Format a number using toLocaleString and compare it with toString."
    ],
    "check": {
      "question": "What is Boolean(\"false\")?",
      "options": [
        "true, because it is a nonempty string.",
        "false, because the text spells false.",
        "undefined."
      ],
      "answer": 0,
      "explanation": "true, because it is a nonempty string."
    },
    "sources": [
      "/js/js_datatypes.asp",
      "/js/js_datatypes_primitives.asp",
      "/js/js_datatypes_objects.asp",
      "/js/js_datatypes_symbol.asp",
      "/js/js_typeof.asp",
      "/js/js_undefined.asp",
      "/js/js_nan.asp",
      "/js/js_tostring.asp",
      "/js/js_tolocalestring.asp",
      "/js/js_type_coercion.asp",
      "/js/js_type_conversion.asp",
      "/js/js_destructuring.asp"
    ]
  },
  {
    "id": "js-dates",
    "module": "javascript",
    "title": "Timestamp chat messages",
    "minutes": 18,
    "intro": "Add timestamps to local message objects and display a readable sample. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Instants and formats",
        "description": "Date represents an instant as milliseconds from the Unix epoch. Prefer ISO timestamps with an explicit offset; ambiguous date strings can be interpreted inconsistently."
      },
      {
        "term": "Display and mutation",
        "description": "getTime gives a sortable numeric value. Local getters and UTC getters differ; setters mutate the Date. toISOString provides a UTC transport format and toLocaleString formats for readers."
      }
    ],
    "example": "const sentAt = new Date();\nconst stored = sentAt.toISOString();\nconst restored = new Date(stored);\nconsole.log(stored, restored.getTime(), restored.toLocaleString());",
    "task": "Add timestamps to local message objects and display a readable sample.",
    "steps": [
      "Record createdAt using an ISO timestamp.",
      "Compare local and UTC getters.",
      "Experiment with setDate on a separate Date so the message timestamp is not accidentally mutated."
    ],
    "check": {
      "question": "Which representation is useful for a timestamp exchanged across time zones?",
      "options": [
        "An ISO string with its time-zone offset or Z.",
        "An ambiguous date like 03/04/05.",
        "Only the local hour number."
      ],
      "answer": 0,
      "explanation": "An ISO string with its time-zone offset or Z."
    },
    "sources": [
      "/js/js_dates.asp",
      "/js/js_date_formats.asp",
      "/js/js_date_methods.asp",
      "/js/js_date_methods_set.asp",
      "/js/js_date_reference.asp"
    ]
  },
  {
    "id": "js-collections",
    "module": "javascript",
    "title": "Track unique participants and per-room state",
    "minutes": 18,
    "intro": "Model a unique participant list and a draft for each room. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Sets and maps",
        "description": "Set stores unique values and supports membership, addition, deletion, and set algebra where supported. Map stores key/value pairs and allows keys of any type; iterate entries to preserve insertion order."
      },
      {
        "term": "Weak collections",
        "description": "WeakSet and WeakMap accept objects as weakly held keys and cannot enumerate their contents. They suit object-associated metadata without retaining objects solely for that metadata."
      }
    ],
    "example": "const participants = new Set([\"You\", \"Asha\", \"You\"]);\nparticipants.add(\"Mina\");\nconst drafts = new Map();\ndrafts.set(\"general\", \"Hello\");\nconsole.log(participants.size, participants.has(\"You\"), drafts.get(\"general\"));",
    "task": "Model a unique participant list and a draft for each room.",
    "steps": [
      "Add duplicate participant names and verify Set size.",
      "Store and remove drafts using Map methods.",
      "Compare union/intersection with manual iteration if the newer Set methods are unavailable."
    ],
    "check": {
      "question": "Which collection directly associates each room name with its draft?",
      "options": [
        "Map.",
        "Set, which stores key/value pairs.",
        "WeakSet of string names."
      ],
      "answer": 0,
      "explanation": "Map."
    },
    "sources": [
      "/js/js_sets.asp",
      "/js/js_set_methods.asp",
      "/js/js_set_logic.asp",
      "/js/js_sets_weak.asp",
      "/js/js_set_reference.asp",
      "/js/js_maps.asp",
      "/js/js_map_methods.asp",
      "/js/js_maps_weak.asp",
      "/js/js_map_reference.asp"
    ]
  },
  {
    "id": "js-iterators",
    "module": "javascript",
    "title": "Read message batches with iterable protocols",
    "minutes": 18,
    "intro": "Create a generator that reads local history in small batches. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Iterable protocol",
        "description": "for...of consumes an iterable through Symbol.iterator and next results. Arrays, strings, Sets, and Maps are iterable; a plain object is not automatically iterable."
      },
      {
        "term": "Generators",
        "description": "A generator function uses function* and yield to pause and resume, producing an iterator. This is useful for local batches without constructing another large array."
      }
    ],
    "example": "function* messageBatches(messages, size) {\n  for (let i = 0; i < messages.length; i += size) {\n    yield messages.slice(i, i + size);\n  }\n}\nfor (const batch of messageBatches([\"Hi\", \"Hello\", \"Welcome\"], 2)) {\n  console.log(batch);\n}",
    "task": "Create a generator that reads local history in small batches.",
    "steps": [
      "Iterate a Set with for...of.",
      "Call a generator iterator next manually and inspect value/done.",
      "Keep the batch size positive to guarantee forward progress."
    ],
    "check": {
      "question": "What does yield do in a generator?",
      "options": [
        "Produces a value and pauses until the next iteration.",
        "Sends a message across the network.",
        "Freezes every object in the function."
      ],
      "answer": 0,
      "explanation": "Produces a value and pauses until the next iteration."
    },
    "sources": [
      "/js/js_iterables.asp",
      "/js/js_iterators.asp",
      "/js/js_generators.asp"
    ]
  },
  {
    "id": "js-math",
    "module": "javascript",
    "title": "Calculate small chat statistics",
    "minutes": 18,
    "intro": "Calculate local draft statistics and choose a playful sample greeting. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Math helpers",
        "description": "Math.min, max, abs, round, floor, ceil, trunc, and sign cover common arithmetic decisions. Math also includes constants, roots, logarithms, and trigonometry for visualization."
      },
      {
        "term": "Randomness limits",
        "description": "Math.random returns a value from 0 inclusive to 1 exclusive and suits playful UI effects. It does not provide cryptographically secure identifiers or authentication tokens."
      }
    ],
    "example": "const lengths = [2, 5, 9];\nconst longest = Math.max(...lengths);\nconst average = lengths.reduce((sum, length) => sum + length, 0) / lengths.length;\nconst sample = Math.floor(Math.random() * lengths.length);\nconsole.log(longest, Math.round(average), lengths[sample]);",
    "task": "Calculate local draft statistics and choose a playful sample greeting.",
    "steps": [
      "Calculate minimum, maximum, and rounded average message length.",
      "Use floor to select an array index.",
      "Keep random demo labels separate from eventual server message IDs."
    ],
    "check": {
      "question": "Should Math.random generate an authentication token?",
      "options": [
        "No. It is not a cryptographically secure random source.",
        "Yes, because its output is unique.",
        "Yes, if multiplied by 100."
      ],
      "answer": 0,
      "explanation": "No. It is not a cryptographically secure random source."
    },
    "sources": [
      "/js/js_math.asp",
      "/js/js_math_reference.asp",
      "/js/js_random.asp"
    ]
  },
  {
    "id": "js-regex",
    "module": "javascript",
    "title": "Recognize mentions with regular expressions",
    "minutes": 18,
    "intro": "Extract plain-text @mentions and check a simple username rule. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Pattern vocabulary",
        "description": "Character classes select allowed characters; quantifiers control repetition. Anchors ^ and $ constrain boundaries; groups capture parts, alternation offers choices, and assertions check context without consuming it."
      },
      {
        "term": "Flags and methods",
        "description": "i ignores case, g finds all matches, m changes line anchors, and u enables Unicode-aware behavior. test returns a boolean; exec and match expose captures, while replace transforms text. Global expressions have stateful lastIndex."
      }
    ],
    "example": "const mention = /@([a-z][a-z0-9_]{1,19})/gi;\nconst text = \"Hello @Asha and @mina\";\nconsole.log([...text.matchAll(mention)].map(match => match[1]));\nconst validName = /^[a-z][a-z0-9_]{1,19}$/i;\nconsole.log(validName.test(\"Asha\"));",
    "task": "Extract plain-text @mentions and check a simple username rule.",
    "steps": [
      "Compare literal and RegExp constructor syntax.",
      "Experiment with a class, a quantifier, a group, an anchor, and a lookahead.",
      "Keep matches as text; pattern matching does not make text safe to inject as HTML."
    ],
    "check": {
      "question": "What do ^ and $ enforce in a full username pattern?",
      "options": [
        "The beginning and end of the input.",
        "That any matching substring is accepted.",
        "Automatic HTML escaping."
      ],
      "answer": 0,
      "explanation": "The beginning and end of the input."
    },
    "sources": [
      "/js/js_regexp.asp",
      "/js/js_regexp_flags.asp",
      "/js/js_regexp_characters.asp",
      "/js/js_regexp_meta_characters.asp",
      "/js/js_regexp_assertions.asp",
      "/js/js_regexp_groups.asp",
      "/js/js_regexp_quantifiers.asp",
      "/js/js_regexp_patterns.asp",
      "/js/js_regexp_objects.asp",
      "/js/js_regexp_methods.asp"
    ]
  },
  {
    "id": "js-errors",
    "module": "javascript",
    "title": "Report failures and debug a draft",
    "minutes": 18,
    "intro": "Make invalid drafts fail clearly and inspect the cause. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Visible failures",
        "description": "throw reports an invalid operation. try/catch handles an expected failure and finally performs cleanup. Error objects carry a message and stack; swallowing errors hides broken behavior."
      },
      {
        "term": "Debugging workflow",
        "description": "Read the first relevant stack frame, reproduce with a small input, set a breakpoint, and inspect values. Console assertions and tables help compare actual state with expectations; async debugging later follows promise stacks."
      }
    ],
    "example": "function requireText(text) {\n  if (text.trim() === \"\") throw new Error(\"Message is empty\");\n  return text.trim();\n}\ntry {\n  console.log(requireText(\"   \"));\n} catch (error) {\n  console.error(\"Draft rejected:\", error.message);\n}",
    "task": "Make invalid drafts fail clearly and inspect the cause.",
    "steps": [
      "Test requireText with whitespace.",
      "Set a breakpoint before the throw and inspect text.",
      "Distinguish syntax errors, runtime exceptions, and wrong results without an exception."
    ],
    "check": {
      "question": "What should an expected validation failure produce?",
      "options": [
        "A clear explanation that the user or caller can act on.",
        "An empty catch block.",
        "A success message regardless of the result."
      ],
      "answer": 0,
      "explanation": "A clear explanation that the user or caller can act on."
    },
    "sources": [
      "/js/js_errors_intro.asp",
      "/js/js_errors_silent.asp",
      "/js/js_errors.asp",
      "/js/js_error_object.asp",
      "/js/js_debugging.asp",
      "/js/js_debugging_console.asp",
      "/js/js_debugging_breakpoints.asp",
      "/js/js_debugging_errors.asp",
      "/js/js_debugging_async.asp",
      "/js/js_debugging_reference.asp"
    ]
  },
  {
    "id": "js-quality",
    "module": "javascript",
    "title": "Review JavaScript style and compatibility",
    "minutes": 18,
    "intro": "Review your pure chat helpers against a concrete behavior checklist. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Readable contracts",
        "description": "Use consistent indentation, descriptive names, strict comparisons, and small functions. Avoid reserved words as bindings and avoid hidden global state."
      },
      {
        "term": "Measure before optimizing",
        "description": "Repeated DOM access and needless large allocations can be expensive; first verify correctness, then measure. Reference pages help confirm signatures, return values, mutation, exceptions, and support rather than guessing."
      }
    ],
    "example": "function countUnread(messages) {\n  return messages.filter(message => message.status === \"unread\").length;\n}\nconsole.assert(countUnread([{ status: \"unread\" }]) === 1, \"Unread count\");\nconsole.assert(countUnread([]) === 0, \"Empty history\");",
    "task": "Review your pure chat helpers against a concrete behavior checklist.",
    "steps": [
      "Test empty history and one unread message.",
      "Rename ambiguous variables and remove accidental globals.",
      "Use a reference to verify one method return type and mutation behavior."
    ],
    "check": {
      "question": "What is the best first response to a suspected slow function?",
      "options": [
        "Measure its behavior with representative input.",
        "Rewrite all loops immediately.",
        "Ignore correctness until later."
      ],
      "answer": 0,
      "explanation": "Measure its behavior with representative input."
    },
    "sources": [
      "/js/js_conventions.asp",
      "/js/js_best_practices.asp",
      "/js/js_mistakes.asp",
      "/js/js_performance.asp",
      "/js/js_alphabetic_reference.asp",
      "/js/js_statements_reference.asp",
      "/js/js_reserved.asp"
    ]
  },
  {
    "id": "js-dom",
    "module": "js-dom",
    "title": "Connect JavaScript to chat elements",
    "minutes": 18,
    "intro": "Update the existing room heading and honest connection status. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Document tree",
        "description": "The DOM represents elements, text, and their relationships as objects. querySelector finds the first matching element and returns null if none matches; querySelectorAll returns a static NodeList."
      },
      {
        "term": "Safe text updates",
        "description": "textContent writes text without interpreting markup. Use it for user messages; innerHTML parses markup and can execute unsafe behavior when untrusted strings are inserted."
      }
    ],
    "example": "const heading = document.querySelector(\"#room-title\");\nif (heading) heading.textContent = \"General chat\";\nconst status = document.querySelector(\"#status\");\nif (status) status.textContent = \"Local prototype — no server yet\";",
    "task": "Update the existing room heading and honest connection status.",
    "steps": [
      "Add id=\"room-title\" to the existing .chat-header h2. Reuse the shell’s #status paragraph rather than adding a duplicate status element.",
      "Select both in the deferred script.",
      "Set their textContent and test a missing selector to understand null."
    ],
    "check": {
      "question": "Which property safely displays message text such as <b>Hello</b> literally?",
      "options": [
        "textContent.",
        "innerHTML with untrusted message text.",
        "document.write after the page has loaded."
      ],
      "answer": 0,
      "explanation": "textContent."
    },
    "sources": [
      "/js/js_htmldom.asp",
      "/js/js_htmldom_methods.asp",
      "/js/js_htmldom_elements.asp",
      "/js/js_htmldom_html.asp",
      "/js/js_htmldom_document.asp",
      "/js/js_htmldom_element_reference.asp"
    ]
  },
  {
    "id": "js-dom-css",
    "module": "js-dom",
    "title": "Reflect state through CSS classes",
    "minutes": 18,
    "intro": "Give local connection state a visible style using CSS already learned. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Class-based state",
        "description": "classList.add, remove, toggle, and contains connect application state to CSS rules. style modifies inline CSS; prefer classes for reusable appearance."
      },
      {
        "term": "Animation frames",
        "description": "requestAnimationFrame schedules visual work before a repaint. Use the provided timestamp for time-based movement, cancel obsolete frames, and respect reduced-motion preferences."
      }
    ],
    "example": "const status = document.querySelector(\"#status\");\nstatus.classList.add(\"is-local\");\nstatus.classList.toggle(\"has-unread\", true);\nstatus.style.setProperty(\"--unread-count\", \"3\");",
    "task": "Give local connection state a visible style using CSS already learned.",
    "steps": [
      "Define .is-local in the stylesheet.",
      "Toggle it through classList and inspect the computed style.",
      "Experiment with requestAnimationFrame only for an optional indicator and keep the static reduced-motion version available."
    ],
    "check": {
      "question": "What is a maintainable way to switch a reusable status appearance?",
      "options": [
        "Toggle a CSS class on the element.",
        "Overwrite all document HTML.",
        "Build an infinite blocking loop."
      ],
      "answer": 0,
      "explanation": "Toggle a CSS class on the element."
    },
    "sources": [
      "/js/js_htmldom_css.asp",
      "/js/js_htmldom_animate.asp"
    ]
  },
  {
    "id": "js-events",
    "module": "js-dom",
    "title": "Respond to mouse, keyboard, and lifecycle events",
    "minutes": 18,
    "intro": "Handle the composer submit action without reloading the page. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Listeners and event objects",
        "description": "addEventListener registers a function without replacing other listeners. The event describes the target and input; removeEventListener needs the same function reference."
      },
      {
        "term": "Defaults and propagation",
        "description": "preventDefault cancels an event’s default action. Bubbling lets an ancestor observe events; target identifies the original source and currentTarget identifies the element running the listener. Prefer form submit for keyboard-accessible sending. removeAttribute(\"action\") removes the static form destination after the JavaScript submit handler is installed. Setting the button disabled property to false enables its native interaction."
      }
    ],
    "example": "const form = document.querySelector(\"#composer\");\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  console.log(\"Local submit requested\");\n});\ndocument.addEventListener(\"keydown\", function (event) {\n  if (event.key === \"Escape\") console.log(\"Cancel draft action\");\n});\n// Enable the send control only after submit handling exists.\ndocument.querySelector(\"#send\").disabled = false;\nform.removeAttribute(\"action\");",
    "task": "Handle the composer submit action without reloading the page.",
    "steps": [
      "Give the existing composer form id=\"composer\".",
      "Attach a submit listener and cancel navigation.",
      "Inspect click, input, keydown, DOMContentLoaded, and load in separate experiments; avoid requiring mouse-only interactions.",
      "Remove the static form action, enable #send only after the listener is installed, and confirm it does not navigate or claim server delivery."
    ],
    "check": {
      "question": "Why listen for submit on the form?",
      "options": [
        "It supports the form’s native keyboard and button submission.",
        "It prevents all keyboard input.",
        "It automatically sends messages to a server."
      ],
      "answer": 0,
      "explanation": "It supports the form’s native keyboard and button submission."
    },
    "sources": [
      "/js/js_events.asp",
      "/js/js_events_mouse.asp",
      "/js/js_events_keyboard.asp",
      "/js/js_events_load.asp",
      "/js/js_events_management.asp",
      "/js/js_htmldom_events.asp",
      "/js/js_htmldom_eventlistener.asp"
    ]
  },
  {
    "id": "js-sidebar",
    "module": "js-dom",
    "title": "Collapse, search, and select conversations",
    "minutes": 18,
    "intro": "Activate the WhatsApp-style navigation and conversation sidebar already built with HTML and CSS. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Synchronized sidebar state",
        "description": "The toggle changes the sidebar hidden property and aria-expanded together. A real button supplies keyboard activation; return focus to the toggle when hiding a focused sidebar."
      },
      {
        "term": "Local navigation and filtering",
        "description": "An input event can filter conversation labels with includes. A conversation click selects existing local UI and updates the heading; it does not create a second server room. Keep the no-results message synchronized with the filtered list."
      },
      {
        "term": "Attributes and properties",
        "description": "setAttribute(name, value) writes an HTML attribute string. The hidden and disabled properties are booleans; String(...) converts the expanded boolean into the aria-expanded string expected by assistive technologies."
      }
    ],
    "example": "const toggle = document.querySelector(\"#toggle-sidebar\");\nconst sidebar = document.querySelector(\"#conversation-sidebar\");\ntoggle.addEventListener(\"click\", () => {\n  sidebar.hidden = !sidebar.hidden;\n  toggle.setAttribute(\"aria-expanded\", String(!sidebar.hidden));\n  if (sidebar.hidden) toggle.focus();\n});\ntoggle.disabled = false;\nconst search = document.querySelector(\"#conversation-search\");\nconst general = document.querySelector(\"#general-conversation\");\nsearch.addEventListener(\"input\", () => {\n  const matches = general.textContent.toLowerCase().includes(search.value.trim().toLowerCase());\n  general.hidden = !matches;\n  document.querySelector(\"#search-empty\").hidden = matches;\n});\nsearch.disabled = false;\ngeneral.querySelector(\"a\").addEventListener(\"click\", () => {\n  document.querySelector(\".chat-header h2\").textContent = \"General room\";\n  document.querySelector(\"#status\").textContent = \"General selected — local prototype\";\n});",
    "task": "Activate the WhatsApp-style navigation and conversation sidebar already built with HTML and CSS.",
    "steps": [
      "Keep the existing shell; attach listeners to its disabled toggle and search controls.",
      "Enable each control after its listener exists and test Enter/Space on the sidebar button.",
      "Search for General and an unmatched name, verify the empty state, and select the conversation to update the header without claiming a live connection."
    ],
    "check": {
      "question": "Which state must change together when the sidebar is collapsed?",
      "options": [
        "The sidebar hidden property and the toggle aria-expanded value.",
        "Only the button color.",
        "The browser cookie and every message timestamp."
      ],
      "answer": 0,
      "explanation": "The sidebar hidden property and the toggle aria-expanded value."
    },
    "sources": []
  },
  {
    "id": "js-validation",
    "module": "js-dom",
    "title": "Validate the composer before adding a message",
    "minutes": 18,
    "intro": "Give empty or oversized drafts useful feedback. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "HTML validity first",
        "description": "Use required, minlength, maxlength, and appropriate input types before writing custom rules. checkValidity reports validity and reportValidity can show a browser message."
      },
      {
        "term": "Custom validity",
        "description": "setCustomValidity sets a specific error and must be reset with an empty string once valid. Client validation improves feedback; a later server must independently validate every request."
      }
    ],
    "example": "const input = document.querySelector(\"#message\");\ninput.addEventListener(\"input\", function () {\n  input.setCustomValidity(input.value.trim() ? \"\" : \"Write a message, not only spaces.\");\n});\nconst form = document.querySelector(\"#composer\");\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  if (!form.reportValidity()) return;\n  console.log(input.value.trim());\n});",
    "task": "Give empty or oversized drafts useful feedback.",
    "steps": [
      "Replace the earlier submit listener instead of installing a second one; reuse the existing form/input bindings or rename a standalone lab experiment.",
      "Add id=\"message\", required, and maxlength=\"280\" to the composer field.",
      "Reset custom validity whenever the input changes.",
      "Test blank, whitespace-only, valid, and over-limit drafts before continuing."
    ],
    "check": {
      "question": "How is a previous custom validity error cleared?",
      "options": [
        "Call setCustomValidity(\"\").",
        "Call setCustomValidity(\"valid\").",
        "Change the input color only."
      ],
      "answer": 0,
      "explanation": "Call setCustomValidity(\"\")."
    },
    "sources": [
      "/js/js_validation.asp",
      "/js/js_validation_api.asp",
      "/js/js_project_form_validation.asp"
    ]
  },
  {
    "id": "js-nodes",
    "module": "js-dom",
    "title": "Append safe message nodes",
    "minutes": 18,
    "intro": "Create the first real local message from structured state. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Create and navigate nodes",
        "description": "createElement creates an element, append attaches it, and remove detaches it. parentElement, children, firstElementChild, and nextElementSibling navigate elements; childNodes also includes text and comments. replaceChildren() with no arguments clears existing child nodes; use it once to remove static samples before the dynamic history begins."
      },
      {
        "term": "Live versus static collections",
        "description": "getElementsByClassName and children can be live collections; querySelectorAll is static. Convert or snapshot a live collection before removing elements while iterating it."
      }
    ],
    "example": "function renderMessage(message) {\n  const item = document.createElement(\"li\");\n  const author = document.createElement(\"strong\");\n  author.textContent = message.author + \": \";\n  const text = document.createElement(\"span\");\n  text.textContent = message.text;\n  item.append(author, text);\n  document.querySelector(\"#messages\").append(item);\n}\nrenderMessage({ author: \"You\", text: \"My first local message\" });",
    "task": "Create the first real local message from structured state.",
    "steps": [
      "Give the existing history list id=\"messages\".",
      "Build each message from newly created nodes.",
      "Render text containing <img> and verify it remains literal text; inspect parent and sibling relationships."
    ],
    "check": {
      "question": "What may happen to a live collection after removing one of its elements?",
      "options": [
        "Its length and indexes update immediately.",
        "It always stays unchanged.",
        "It becomes a network request."
      ],
      "answer": 0,
      "explanation": "Its length and indexes update immediately."
    },
    "sources": [
      "/js/js_htmldom_navigation.asp",
      "/js/js_htmldom_nodes.asp",
      "/js/js_htmldom_collections.asp",
      "/js/js_htmldom_nodelist.asp",
      "/js/js_project_todo.asp"
    ]
  },
  {
    "id": "js-local-chat",
    "module": "js-dom",
    "title": "Finish local sending, counters, and dialogs",
    "minutes": 18,
    "intro": "Connect your existing helpers into an honest single-browser chat prototype. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "State then render",
        "description": "Read and validate the draft, create its message object, update the array, then render the corresponding node. Keep local state explicit so a future transport can reuse the same rendering function."
      },
      {
        "term": "Progressive interactions",
        "description": "A counter is derived from the current draft length. A native dialog opened with showModal supports focus handling and Escape; keep the composer usable when optional enhancements fail."
      }
    ],
    "example": "// Replace the earlier submit handler; keep one shared history array.\nconst messages = [];\ndocument.querySelector(\"#messages\").replaceChildren();\nconst form = document.querySelector(\"#composer\");\nconst input = document.querySelector(\"#message\");\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  const text = input.value.trim();\n  if (!text || !form.reportValidity()) return;\n  const message = { author: \"You\", text, createdAt: new Date().toISOString() };\n  messages.push(message);\n  renderMessage(message); // Keep the helper from the preceding lesson.\n  form.reset();\n  input.focus();\n});",
    "task": "Connect your existing helpers into an honest single-browser chat prototype.",
    "steps": [
      "Reuse existing form, input, messages, and renderMessage bindings instead of redeclaring them. Clear the initial static #messages examples once when starting dynamic history; keep a single submit handler.",
      "Replace the earlier logging-only submit listener so each submit runs once.",
      "Render exactly one message per successful submission.",
      "Add an input-driven character counter and an optional native help dialog; confirm Enter and the send button behave consistently.",
      "The local example uses author for the display name. When the server lessons introduce the wire-format name field, either rename author consistently or adapt incoming { name, text } to { author: name, text } before rendering."
    ],
    "check": {
      "question": "What does this local prototype demonstrate?",
      "options": [
        "Local composition and rendering; it does not yet deliver to another user.",
        "A working multi-user server connection.",
        "Encrypted delivery to every browser."
      ],
      "answer": 0,
      "explanation": "Local composition and rendering; it does not yet deliver to another user."
    },
    "sources": [
      "/js/js_project_counter.asp",
      "/js/js_project_eventlistener.asp",
      "/js/js_project_modal_popup.asp"
    ]
  },
  {
    "id": "js-html-first",
    "module": "js-dom",
    "title": "Preserve useful HTML while enhancing it",
    "minutes": 18,
    "intro": "Audit the chat page with JavaScript disabled and add native HTML help. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Progressive enhancement",
        "description": "Start with semantic HTML and native form behavior, then add JavaScript features. details, dialog, popover, input constraints, and CSS pseudo-classes often remove unnecessary scripting."
      },
      {
        "term": "Failure behavior",
        "description": "A local-only demo should explain why delivery requires JavaScript and a later server. Keep labels, instructions, and existing history readable when scripts fail; never claim a message was delivered without an acknowledgment."
      },
      {
        "term": "Native popovers",
        "description": "A button with popovertarget can open a matching popover element without custom JavaScript. showPopover, hidePopover, and togglePopover provide optional scripted control; feature-detect before calling them."
      }
    ],
    "example": "<details>\n  <summary>How this prototype works</summary>\n  <p>Messages stay in this browser until the networking stage.</p>\n</details>\n<noscript><p>Enable JavaScript for local message composition. You can still read the sample conversation.</p></noscript>\n<button type=\"button\" popovertarget=\"chat-help\">Chat help</button>\n<aside id=\"chat-help\" popover>Messages are local in this stage.</aside>",
    "task": "Audit the chat page with JavaScript disabled and add native HTML help.",
    "steps": [
      "Use details for explanatory content.",
      "Inspect native validation and :invalid styles before adding more scripts.",
      "Disable JavaScript and verify room information, sample history, and limitations remain understandable.",
      "Add the native popover example, test dismissal and keyboard focus, and compare it with a modal dialog. In a separate console experiment call showPopover/hidePopover only when those methods exist."
    ],
    "check": {
      "question": "Why prefer native details for a simple expandable explanation?",
      "options": [
        "It already supplies built-in interaction and semantics.",
        "It creates a WebSocket automatically.",
        "It requires a custom click handler to exist."
      ],
      "answer": 0,
      "explanation": "It already supplies built-in interaction and semantics."
    },
    "sources": [
      "/js/js_htmlfirst.asp",
      "/js/js_htmlfirst_progressive.asp",
      "/js/js_htmlfirst_features.asp",
      "/js/js_htmlfirst_css.asp",
      "/html/html5_popover.asp"
    ]
  },
  {
    "id": "js-timers",
    "module": "js-dom",
    "title": "Schedule a temporary typing indicator",
    "minutes": 18,
    "intro": "Add a local typing indicator that clears after inactivity. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Scheduled work",
        "description": "setTimeout schedules one callback and setInterval schedules repeating callbacks. Delay is a minimum, not a precise deadline; background tabs can throttle timers."
      },
      {
        "term": "Cleanup",
        "description": "Store timer IDs and cancel obsolete work with clearTimeout or clearInterval. Typing status should expire after inactivity rather than remain permanently active."
      }
    ],
    "example": "let typingTimer;\nconst input = document.querySelector(\"#message\");\nconst status = document.querySelector(\"#status\");\ninput.addEventListener(\"input\", function () {\n  clearTimeout(typingTimer);\n  status.textContent = \"You are drafting locally…\";\n  typingTimer = setTimeout(function () {\n    status.textContent = \"Local prototype — no server yet\";\n  }, 1000);\n});",
    "task": "Add a local typing indicator that clears after inactivity.",
    "steps": [
      "Store one timeout ID outside the input listener.",
      "Clear the previous timeout before scheduling another.",
      "Compare timeout and interval in a console-only clock experiment, then clear the interval."
    ],
    "check": {
      "question": "Does setTimeout block execution until its delay passes?",
      "options": [
        "No. Its callback is scheduled to run later.",
        "Yes. It freezes the page.",
        "Yes, but only for string values."
      ],
      "answer": 0,
      "explanation": "No. Its callback is scheduled to run later."
    },
    "sources": [
      "/js/js_timers.asp",
      "/js/js_window_timing.asp"
    ]
  },
  {
    "id": "js-closures",
    "module": "js-advanced",
    "title": "Encapsulate counters and callback context",
    "minutes": 18,
    "intro": "Create a private local message counter and compare callback binding. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Closures and callbacks",
        "description": "Functions retain access to the lexical environment where they were created. Returning a function can preserve private state; passing a function as a callback does not invoke it immediately."
      },
      {
        "term": "Context control",
        "description": "call invokes with an explicit this and individual arguments; apply accepts an argument array; bind returns a function with a chosen this. IIFEs run immediately and historically created scope before modules."
      }
    ],
    "example": "function createCounter() {\n  let value = 0;\n  return function () { value += 1; return value; };\n}\nconst nextLocalId = createCounter();\nconsole.log(nextLocalId(), nextLocalId());\nconst room = { name: \"General\" };\nfunction label(prefix) { return prefix + this.name; }\nconst roomLabel = label.bind(room, \"Room: \");\nconsole.log(roomLabel());",
    "task": "Create a private local message counter and compare callback binding.",
    "steps": [
      "Return a closure that increments private state.",
      "Create two counters and verify they are independent.",
      "Compare call, apply, bind, and an IIFE with a small room-label example."
    ],
    "check": {
      "question": "What does bind return?",
      "options": [
        "A new function with a chosen this value and optional initial arguments.",
        "The result of immediately invoking the function.",
        "A permanently frozen object."
      ],
      "answer": 0,
      "explanation": "A new function with a chosen this value and optional initial arguments."
    },
    "sources": [
      "/js/js_function_advanced.asp",
      "/js/js_function_definition.asp",
      "/js/js_callback.asp",
      "/js/js_function_this.asp",
      "/js/js_function_call.asp",
      "/js/js_function_apply.asp",
      "/js/js_function_bind.asp",
      "/js/js_function_iife.asp",
      "/js/js_function_closures.asp",
      "/js/js_function_reference.asp",
      "/js/js_function_advanced_quiz.asp"
    ]
  },
  {
    "id": "js-object-design",
    "module": "js-advanced",
    "title": "Inspect, protect, and share message behavior",
    "minutes": 18,
    "intro": "Compare mutable draft state with an immutable message snapshot. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Descriptors and prototypes",
        "description": "Object.keys, values, and entries enumerate own enumerable properties. Object.create chooses a prototype; prototype lookup shares behavior. Property descriptors control writability, enumeration, and configurability."
      },
      {
        "term": "Protection and accessors",
        "description": "Getters and setters can validate or derive properties. Object.freeze prevents changing direct properties but is shallow; seal prevents adding/removing properties while allowing existing writable values to change."
      }
    ],
    "example": "const message = { author: \"You\", text: \"Hello\" };\nconsole.log(Object.entries(message));\nconst snapshot = Object.freeze({ ...message });\nconst messageBehavior = { summary() { return this.author + \": \" + this.text; } };\nconst shared = Object.assign(Object.create(messageBehavior), message);\nconsole.log(shared.summary(), Object.getOwnPropertyDescriptor(snapshot, \"text\"));",
    "task": "Compare mutable draft state with an immutable message snapshot.",
    "steps": [
      "Inspect keys, values, entries, and descriptors.",
      "Define a getter for a display label and a setter with an explicit validation rule.",
      "Freeze a shallow copy and demonstrate that nested objects would require separate protection."
    ],
    "check": {
      "question": "Does Object.freeze recursively freeze nested objects?",
      "options": [
        "No. Its protection is shallow.",
        "Yes. Every descendant is frozen.",
        "Only for arrays."
      ],
      "answer": 0,
      "explanation": "No. Its protection is shallow."
    },
    "sources": [
      "/js/js_object_advanced.asp",
      "/js/js_object_definition.asp",
      "/js/js_this.asp",
      "/js/js_object_iterations.asp",
      "/js/js_object_accessors.asp",
      "/js/js_object_management.asp",
      "/js/js_object_protection.asp",
      "/js/js_object_prototypes.asp",
      "/js/js_object_reference.asp"
    ]
  },
  {
    "id": "js-classes",
    "module": "js-advanced",
    "title": "Describe message models with classes",
    "minutes": 18,
    "intro": "Model ordinary and system messages while keeping rendering independent. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Construction and instances",
        "description": "A class groups a constructor and prototype methods. new creates an instance; class bodies use strict mode. Fields can initialize per-instance state."
      },
      {
        "term": "Inheritance and static methods",
        "description": "extends shares base behavior and super calls the base constructor or method. Static methods belong to the class itself; prefer composition when inheritance does not express a real relationship."
      }
    ],
    "example": "class Message {\n  constructor(author, text) { this.author = author; this.text = text; }\n  summary() { return this.author + \": \" + this.text; }\n  static isValid(text) { return typeof text === \"string\" && text.trim().length > 0; }\n}\nclass SystemMessage extends Message {\n  constructor(text) { super(\"System\", text); }\n}\nconsole.log(new SystemMessage(\"Local demo\").summary(), Message.isValid(\"Hi\"));",
    "task": "Model ordinary and system messages while keeping rendering independent.",
    "steps": [
      "Create a Message class and inspect two independent instances.",
      "Add a static validation helper.",
      "Compare a small SystemMessage subclass with simply passing an author property."
    ],
    "check": {
      "question": "Where is a static method called?",
      "options": [
        "On the class, such as Message.isValid(text).",
        "Only on an instance.",
        "Only inside CSS."
      ],
      "answer": 0,
      "explanation": "On the class, such as Message.isValid(text)."
    },
    "sources": [
      "/js/js_classes.asp",
      "/js/js_class_inheritance.asp",
      "/js/js_class_static.asp"
    ]
  },
  {
    "id": "js-json",
    "module": "js-advanced",
    "title": "Serialize chat state as JSON",
    "minutes": 18,
    "intro": "Round-trip local history through a JSON string. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Portable data",
        "description": "JSON supports objects, arrays, strings, numbers, booleans, and null. Keys use double quotes; functions, undefined, Symbols, and BigInt are not normal JSON values. JSON differs from executable JavaScript and from XML markup."
      },
      {
        "term": "Parse and stringify",
        "description": "JSON.stringify serializes supported data, and JSON.parse reads it without evaluating code. Parsing can throw; successful parsing still requires checking the resulting shape before rendering it."
      }
    ],
    "example": "const messages = [{ author: \"You\", text: \"Hello\", createdAt: new Date().toISOString() }];\nconst encoded = JSON.stringify(messages);\ntry {\n  const decoded = JSON.parse(encoded);\n  if (!Array.isArray(decoded)) throw new Error(\"Expected message array\");\n  console.log(decoded[0].text);\n} catch (error) { console.error(\"Cannot read history:\", error.message); }",
    "task": "Round-trip local history through a JSON string.",
    "steps": [
      "Serialize a message array and inspect the JSON syntax.",
      "Parse it back and validate array and message field types.",
      "Compare an equivalent XML document; display parsed values through textContent."
    ],
    "check": {
      "question": "Does valid JSON guarantee a valid chat message structure?",
      "options": [
        "No. The parsed data still needs shape and value checks.",
        "Yes. JSON enforces author and text fields.",
        "Yes, provided it contains braces."
      ],
      "answer": 0,
      "explanation": "No. The parsed data still needs shape and value checks."
    },
    "sources": [
      "/js/js_json.asp",
      "/js/js_json_syntax.asp",
      "/js/js_json_datatypes.asp",
      "/js/js_json_parse.asp",
      "/js/js_json_stringify.asp",
      "/js/js_json_server.asp",
      "/js/js_json_html.asp",
      "/js/js_json_xml.asp"
    ]
  },
  {
    "id": "js-async-basics",
    "module": "js-advanced",
    "title": "Understand callbacks, promises, and the event loop",
    "minutes": 18,
    "intro": "Predict asynchronous ordering before adding any network requests. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Event loop",
        "description": "Synchronous code runs first. Promise reactions run as microtasks after the current stack; timer callbacks run in later tasks. Long synchronous work blocks input and rendering."
      },
      {
        "term": "Promise states",
        "description": "A promise is pending, fulfilled, or rejected. then returns another promise; return the next promise to preserve sequencing, and catch handles rejection. finally performs cleanup without replacing a successful result."
      }
    ],
    "example": "console.log(\"start\");\nconst ready = Promise.resolve(\"local history ready\");\nready.then(value => console.log(value));\nsetTimeout(() => console.log(\"timer\"), 0);\nconsole.log(\"end\");\n// start, end, local history ready, timer",
    "task": "Predict asynchronous ordering before adding any network requests.",
    "steps": [
      "Write down the expected log sequence before running it.",
      "Create and reject a small Promise, then handle it with catch.",
      "Chain two then calls and return a value from the first."
    ],
    "check": {
      "question": "When does a fulfilled promise’s then callback run?",
      "options": [
        "After the current synchronous call stack completes.",
        "Immediately in the middle of the current statement.",
        "Only after every timer has run."
      ],
      "answer": 0,
      "explanation": "After the current synchronous call stack completes."
    },
    "sources": [
      "/js/js_asynchronous.asp",
      "/js/js_async.asp",
      "/js/js_async_callbacks.asp",
      "/js/js_async_promises.asp",
      "/js/js_async_event_loop.asp",
      "/js/js_promise_reference.asp",
      "/js/js_promises.asp"
    ]
  },
  {
    "id": "js-async-await",
    "module": "js-advanced",
    "title": "Sequence and cancel background work",
    "minutes": 18,
    "intro": "Refactor a promise chain into async/await and compare parallel outcomes. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Await and errors",
        "description": "An async function returns a promise; await pauses that function while other browser work continues. Use try/catch around awaited operations and finally to restore pending UI."
      },
      {
        "term": "Concurrency and cancellation",
        "description": "Promise.all joins independent operations and rejects if one fails; allSettled records every outcome. AbortController signals cancellation to APIs that support it, so stale results need not overwrite newer state."
      }
    ],
    "example": "async function inspectLocalHistory() {\n  try {\n    const [messages, room] = await Promise.all([\n      Promise.resolve([\"Hello\"]), Promise.resolve(\"General\")\n    ]);\n    console.log(room, messages);\n  } catch (error) { console.error(error); }\n}\ninspectLocalHistory();",
    "task": "Refactor a promise chain into async/await and compare parallel outcomes.",
    "steps": [
      "Keep work local using resolved and rejected promises.",
      "Compare Promise.all with Promise.allSettled when one input rejects.",
      "Draw the pending, success, failure, and cancelled states for a future history request."
    ],
    "check": {
      "question": "Does await block the browser’s entire JavaScript runtime?",
      "options": [
        "No. It suspends the current async function.",
        "Yes. All input handling stops until completion.",
        "Only when used with Promise.all."
      ],
      "answer": 0,
      "explanation": "No. It suspends the current async function."
    },
    "sources": [
      "/js/js_async_await.asp",
      "/js/js_async_parallel.asp",
      "/js/js_async_mistakes.asp",
      "/js/js_async_debug.asp",
      "/js/js_async_abortcontroller.asp"
    ]
  },
  {
    "id": "js-fetch",
    "module": "js-apis",
    "title": "Load history with Fetch and handle failures",
    "minutes": 18,
    "intro": "Load a local JSON history fixture through a local HTTP development server. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Request and response",
        "description": "fetch returns a promise for a Response. HTTP errors such as 404 do not normally reject it: check response.ok, then await response.json. A local JSON fixture can exercise reading before a server exists."
      },
      {
        "term": "State and cancellation",
        "description": "Use AbortController for obsolete requests and distinguish cancellation from failures. CORS controls cross-origin reads; browser code cannot solve a server’s missing CORS policy by hiding the error."
      }
    ],
    "example": "async function loadHistory() {\n  const controller = new AbortController();\n  try {\n    const response = await fetch(\"./history.json\", { signal: controller.signal });\n    if (!response.ok) throw new Error(`History HTTP ${response.status}`);\n    const messages = await response.json();\n    if (!Array.isArray(messages)) throw new Error(\"Expected history array\");\n    messages.forEach(renderMessage);\n  } catch (error) {\n    document.querySelector(\"#status\").textContent = \"History unavailable: \" + error.message;\n  }\n}",
    "task": "Load a local JSON history fixture through a local HTTP development server.",
    "steps": [
      "Save a history.json array using the message schema you already learned.",
      "Serve the project over HTTP with the existing development tools.",
      "Test success, a missing file, malformed JSON, and an invalid response shape before calling renderMessage."
    ],
    "check": {
      "question": "Does fetch automatically reject a 404 response?",
      "options": [
        "No. Check response.ok or response.status.",
        "Yes. catch always receives every HTTP error.",
        "Only when using const."
      ],
      "answer": 0,
      "explanation": "No. Check response.ok or response.status."
    },
    "sources": [
      "/js/js_api_fetch.asp",
      "/js/js_async_fetch.asp"
    ]
  },
  {
    "id": "js-modules",
    "module": "js-advanced",
    "title": "Split state, rendering, and transport modules",
    "minutes": 18,
    "intro": "Separate pure message helpers from DOM rendering before networking grows. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Module boundaries",
        "description": "export exposes a binding and import consumes it. Named and default exports have different syntax; namespace imports group exports. Modules are scoped, strict, and browser imports use URLs including file extensions."
      },
      {
        "term": "Dynamic imports",
        "description": "import() returns a promise and can load optional features on demand. Serve modules over HTTP and use script type=\"module\"; modules defer by default."
      }
    ],
    "example": "// messages.js\nexport function makeMessage(author, text) { return { author, text }; }\n// chat.js\nimport { makeMessage } from \"./messages.js\";\nconsole.log(makeMessage(\"You\", \"Hello\"));\n// HTML: <script type=\"module\" src=\"chat.js\"></script>",
    "task": "Separate pure message helpers from DOM rendering before networking grows.",
    "steps": [
      "Export a pure helper from messages.js.",
      "Import it in chat.js and switch the script to type=\"module\".",
      "Try a namespace import and an optional dynamic import in a controlled experiment, handling rejected imports."
    ],
    "check": {
      "question": "What does dynamic import() return?",
      "options": [
        "A promise for a module namespace object.",
        "The module’s CSS stylesheet.",
        "A synchronous HTML element."
      ],
      "answer": 0,
      "explanation": "A promise for a module namespace object."
    },
    "sources": [
      "/js/js_modules.asp",
      "/js/js_modules_export.asp",
      "/js/js_modules_import.asp",
      "/js/js_modules_namespace.asp",
      "/js/js_modules_dynamic.asp"
    ]
  },
  {
    "id": "js-browser",
    "module": "js-apis",
    "title": "Inspect browser context without confusing it with trust",
    "minutes": 18,
    "intro": "Inspect room navigation and browser capabilities without claiming delivery status. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Browser context",
        "description": "window represents the browsing context; screen describes display information. location exposes the URL and history changes navigation. navigator exposes capabilities and hints, but user-agent strings and onLine do not prove actual connectivity."
      },
      {
        "term": "Cookies and dialogs",
        "description": "Cookies are small scoped strings with path, expiry, SameSite, and Secure settings. Sensitive session cookies should be HttpOnly and set by a server. alert/confirm/prompt block interactions, so prefer accessible in-page feedback for routine chat actions."
      }
    ],
    "example": "console.log(window.innerWidth, screen.width);\nconst current = new URL(location.href);\nconsole.log(current.pathname, navigator.language, navigator.onLine);\nhistory.replaceState({ room: \"general\" }, \"\", \"#general\");\n// Do not store chat passwords in document.cookie.",
    "task": "Inspect room navigation and browser capabilities without claiming delivery status.",
    "steps": [
      "Read the current URL and distinguish location navigation from history state.",
      "Use replaceState for a same-page room marker and inspect history.state.",
      "Compare cookie attributes in developer tools; keep sensitive credentials out of JavaScript-readable cookies."
    ],
    "check": {
      "question": "Does navigator.onLine prove the chat server is reachable?",
      "options": [
        "No. A real request or transport acknowledgment is required.",
        "Yes. It confirms server authentication.",
        "Yes. It guarantees every message arrived."
      ],
      "answer": 0,
      "explanation": "No. A real request or transport acknowledgment is required."
    },
    "sources": [
      "/js/js_window.asp",
      "/js/js_window_screen.asp",
      "/js/js_window_location.asp",
      "/js/js_window_history.asp",
      "/js/js_window_navigator.asp",
      "/js/js_popup.asp",
      "/js/js_cookies.asp",
      "/js/js_browser.asp"
    ]
  },
  {
    "id": "js-storage",
    "module": "js-apis",
    "title": "Save drafts locally and handle unavailable storage",
    "minutes": 18,
    "intro": "Restore a draft after reload while keeping storage failures recoverable. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Storage scope",
        "description": "localStorage persists strings for an origin; sessionStorage belongs to a tab session. Serialize structured data with JSON and choose versioned keys to support migration."
      },
      {
        "term": "Failure and privacy",
        "description": "Storage can be blocked, full, or cleared. catch failures and leave composition usable; do not save passwords or assume local storage is private from other scripts on the origin."
      }
    ],
    "example": "const input = document.querySelector(\"#message\");\ntry { input.value = localStorage.getItem(\"chat:draft:v1\") || \"\"; }\ncatch (error) { console.warn(\"Draft restore unavailable\", error); }\ninput.addEventListener(\"input\", () => {\n  try { localStorage.setItem(\"chat:draft:v1\", input.value); }\n  catch (error) { console.warn(\"Draft could not be saved\", error); }\n});",
    "task": "Restore a draft after reload while keeping storage failures recoverable.",
    "steps": [
      "Use an origin-specific versioned key.",
      "Clear the saved draft after successful local submission.",
      "Compare sessionStorage and localStorage across reload and a second tab; test blocked storage."
    ],
    "check": {
      "question": "What data type does Web Storage store directly?",
      "options": [
        "Strings.",
        "Arbitrary live JavaScript objects.",
        "DOM nodes with event listeners."
      ],
      "answer": 0,
      "explanation": "Strings."
    },
    "sources": [
      "/js/js_api_intro.asp",
      "/js/js_api_web_storage.asp",
      "/html/html5_webstorage.asp",
      "/html/html5_api_whatis.asp"
    ]
  },
  {
    "id": "js-location-pointer",
    "module": "js-apis",
    "title": "Add consent-based location and pointer interactions",
    "minutes": 18,
    "intro": "Build an optional location preview and study pointer input for a room-panel handle. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Geolocation permission",
        "description": "Geolocation requires a secure context and user permission. Request it after a deliberate action, handle denial and timeouts, and avoid publishing precise coordinates without a clear user choice."
      },
      {
        "term": "Unified pointer input",
        "description": "Pointer events unify mouse, touch, and pen. pointerId identifies the active pointer, pointer capture maintains a drag outside the target, and keyboard alternatives remain necessary."
      }
    ],
    "example": "const button = document.querySelector(\"#share-location\");\nbutton.addEventListener(\"click\", () => {\n  if (!(\"geolocation\" in navigator)) return;\n  navigator.geolocation.getCurrentPosition(\n    position => console.log(\"Preview only:\", position.coords.latitude, position.coords.longitude),\n    error => console.warn(\"Location unavailable:\", error.message),\n    { timeout: 5000, maximumAge: 60000 }\n  );\n});",
    "task": "Build an optional location preview and study pointer input for a room-panel handle.",
    "steps": [
      "Add an explicitly labeled location-preview button and denial feedback.",
      "Display a preview without adding it to message history automatically.",
      "Experiment with pointerdown/move/up and capture on a separate panel handle with keyboard controls."
    ],
    "check": {
      "question": "When should a location request happen?",
      "options": [
        "After an explicit user action with a clear purpose.",
        "Immediately on every keystroke.",
        "Without handling denied permission."
      ],
      "answer": 0,
      "explanation": "After an explicit user action with a clear purpose."
    },
    "sources": [
      "/js/js_api_geolocation.asp",
      "/js/js_api_pointer_events.asp",
      "/html/html5_geolocation.asp"
    ]
  },
  {
    "id": "js-workers",
    "module": "js-apis",
    "title": "Move expensive analysis into a worker",
    "minutes": 18,
    "intro": "Analyze an exported local history without blocking typing. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Separate execution",
        "description": "A dedicated Worker executes a separate script without direct DOM access. postMessage sends data and message events receive results; ordinary data is structured-cloned."
      },
      {
        "term": "Lifecycle and errors",
        "description": "Handle worker errors, validate messages, and terminate workers when finished. Shared memory and atomics require later security and concurrency knowledge; ordinary message passing is simpler."
      }
    ],
    "example": "// analysis-worker.js\nself.onmessage = event => {\n  const messages = event.data;\n  self.postMessage(messages.reduce((sum, message) => sum + message.text.length, 0));\n};\n// chat.js\nconst worker = new Worker(\"./analysis-worker.js\");\nworker.onmessage = event => console.log(\"Total text length:\", event.data);\nworker.onerror = event => console.error(\"Analysis failed\", event.message);\nworker.postMessage([{ text: \"Hello\" }]);",
    "task": "Analyze an exported local history without blocking typing.",
    "steps": [
      "Create the separate worker script.",
      "Send a validated array and handle result and error events.",
      "Compare responsiveness with a larger synthetic fixture, then terminate the worker when the feature is closed."
    ],
    "check": {
      "question": "Can a dedicated worker directly update document.querySelector(...)?",
      "options": [
        "No. Send results to the main thread for DOM updates.",
        "Yes. It shares the document object.",
        "Only if the element has an id."
      ],
      "answer": 0,
      "explanation": "No. Send results to the main thread for DOM updates."
    },
    "sources": [
      "/js/js_api_web_workers.asp",
      "/js/js_async_webworkers.asp",
      "/html/html5_webworkers.asp"
    ]
  },
  {
    "id": "js-temporal-types",
    "module": "js-advanced",
    "title": "Choose the right Temporal type",
    "minutes": 18,
    "intro": "Compare precise message instants with a scheduled room’s calendar date. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Time models",
        "description": "Temporal.Instant represents a precise point on the timeline; PlainDate, PlainTime, and PlainDateTime represent calendar or wall-clock values without a time zone. PlainYearMonth and PlainMonthDay model partial calendar information."
      },
      {
        "term": "Time zones and availability",
        "description": "ZonedDateTime combines an instant, time zone, and calendar, which matters across daylight-saving changes. Feature-detect Temporal because support varies; retain your existing Date-based timestamp path when it is unavailable."
      }
    ],
    "example": "if (typeof Temporal !== \"undefined\") {\n  const instant = Temporal.Now.instant();\n  const local = instant.toZonedDateTimeISO(\"Asia/Kolkata\");\n  const date = Temporal.PlainDate.from(\"2026-10-26\");\n  console.log(instant.toString(), local.toString(), date.toString());\n} else {\n  console.log(new Date().toISOString());\n}",
    "task": "Compare precise message instants with a scheduled room’s calendar date.",
    "steps": [
      "Guard every Temporal experiment with a feature check.",
      "Represent a message timestamp as Instant and a scheduled day as PlainDate.",
      "Explore PlainTime, PlainDateTime, PlainYearMonth, and PlainMonthDay and explain what each intentionally omits."
    ],
    "check": {
      "question": "Which Temporal type represents a precise point in time?",
      "options": [
        "Temporal.Instant.",
        "Temporal.PlainMonthDay.",
        "Temporal.PlainTime without a date or zone."
      ],
      "answer": 0,
      "explanation": "Temporal.Instant."
    },
    "sources": [
      "/js/js_temporal.asp",
      "/js/js_temporal_intro.asp",
      "/js/js_temporal_vs_date.asp",
      "/js/js_temporal_instant.asp",
      "/js/js_temporal_plaindatetime.asp",
      "/js/js_temporal_plain.asp",
      "/js/js_temporal_plainyearmonth.asp",
      "/js/js_temporal_plainmonthday.asp",
      "/js/js_temporal_plaintime.asp",
      "/js/js_temporal_zoneddatetime.asp",
      "/js/js_temporal_now.asp"
    ]
  },
  {
    "id": "js-temporal-operations",
    "module": "js-advanced",
    "title": "Calculate time ranges without mixing clocks",
    "minutes": 18,
    "intro": "Experiment with a next-day room reminder while preserving existing Date support. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Immutable operations",
        "description": "Temporal operations return new objects. Duration represents a span; add/subtract apply it, since/until compute differences, and compare provides ordering. Calendar days and fixed 24-hour periods differ around daylight-saving changes."
      },
      {
        "term": "Conversions and migration",
        "description": "Convert explicitly between instants, zones, and calendar-only values. Store unambiguous timestamps and retain zone IDs when scheduling future wall-clock events. Standards and reference pages help distinguish proposals, supported features, and required compatibility fallbacks."
      }
    ],
    "example": "if (typeof Temporal !== \"undefined\") {\n  const start = Temporal.PlainDate.from(\"2026-10-26\");\n  const next = start.add({ days: 1 });\n  const duration = start.until(next);\n  console.log(start.toString(), next.toString(), duration.toString());\n  console.log(Temporal.PlainDate.compare(start, next));\n}",
    "task": "Experiment with a next-day room reminder while preserving existing Date support.",
    "steps": [
      "Compare add with since/until and inspect their return types.",
      "Format an instant in two zones and compare equal instants.",
      "Record which Temporal features your target browsers actually support before migrating production code."
    ],
    "check": {
      "question": "Does start.add({ days: 1 }) mutate start?",
      "options": [
        "No. Temporal values are immutable.",
        "Yes. All time APIs mutate.",
        "Only when the day crosses a month."
      ],
      "answer": 0,
      "explanation": "No. Temporal values are immutable."
    },
    "sources": [
      "/js/js_temporal_duration.asp",
      "/js/js_temporal_arithmetic.asp",
      "/js/js_temporal_differences.asp",
      "/js/js_temporal_compare.asp",
      "/js/js_temporal_conversion.asp",
      "/js/js_temporal_formats.asp",
      "/js/js_temporal_mistakes.asp",
      "/js/js_temporal_migrate.asp",
      "/js/js_temporal_standards.asp",
      "/js/js_temporal_reference.asp"
    ]
  },
  {
    "id": "js-proxy",
    "module": "js-advanced",
    "title": "Observe state with Reflect and Proxy",
    "minutes": 18,
    "intro": "Compare a validated state proxy with your existing explicit update functions. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Reflection",
        "description": "Reflect provides object operations as functions, such as get, set, ownKeys, and construct. Reflect.set returns a success boolean and accepts a receiver for correct accessor behavior."
      },
      {
        "term": "Proxy traps",
        "description": "Proxy intercepts operations on a target. Traps must obey invariants, and hidden writes or excessive interception make debugging difficult; explicit state functions are often clearer for a small chat."
      }
    ],
    "example": "const state = new Proxy({ unread: 0 }, {\n  set(target, key, value, receiver) {\n    if (key === \"unread\" && (!Number.isInteger(value) || value < 0)) {\n      throw new TypeError(\"Unread must be a nonnegative integer\");\n    }\n    return Reflect.set(target, key, value, receiver);\n  }\n});\nstate.unread = 2;\nconsole.log(Reflect.get(state, \"unread\"));",
    "task": "Compare a validated state proxy with your existing explicit update functions.",
    "steps": [
      "Intercept a single unread property write.",
      "Forward valid operations through Reflect.",
      "Test invalid values and discuss the debugging cost before adopting the pattern in chat state."
    ],
    "check": {
      "question": "Why return Reflect.set from a set trap?",
      "options": [
        "It forwards the operation and reports whether it succeeded.",
        "It serializes the entire Proxy to JSON.",
        "It automatically sends a network event."
      ],
      "answer": 0,
      "explanation": "It forwards the operation and reports whether it succeeded."
    },
    "sources": [
      "/js/js_meta_programming.asp",
      "/js/js_meta_reflect.asp",
      "/js/js_meta_proxy.asp",
      "/js/js_meta_reference.asp"
    ]
  },
  {
    "id": "js-binary",
    "module": "js-advanced",
    "title": "Read binary data with typed arrays and DataView",
    "minutes": 18,
    "intro": "Inspect a small binary attachment header in an isolated lab. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Buffers and views",
        "description": "ArrayBuffer owns bytes, typed arrays provide numeric views, and DataView reads mixed numeric layouts with explicit byte order. Typed arrays have fixed element types and different constraints from ordinary arrays."
      },
      {
        "term": "Shared memory",
        "description": "SharedArrayBuffer allows shared memory and Atomics coordinates access to supported integer views. Browser isolation policies affect availability; Atomics.wait is unsuitable on the main browser thread. Prefer worker message passing unless shared memory is justified."
      }
    ],
    "example": "const buffer = new ArrayBuffer(4);\nconst view = new DataView(buffer);\nview.setUint16(0, 513, true);\nconst bytes = new Uint8Array(buffer);\nconsole.log(bytes[0], bytes[1], view.getUint16(0, true));\nconst copy = bytes.slice();\nconsole.log(copy, bytes.subarray(0, 2));",
    "task": "Inspect a small binary attachment header in an isolated lab.",
    "steps": [
      "Create a buffer and compare two views over the same bytes.",
      "Compare slice, subarray, set, and numeric typed-array sorting.",
      "Document shared-memory isolation requirements and test Atomics only in a supported worker experiment."
    ],
    "check": {
      "question": "What does the true argument mean in getUint16(offset, true)?",
      "options": [
        "Read the bytes in little-endian order.",
        "Convert the value to a boolean.",
        "Use a secure network connection."
      ],
      "answer": 0,
      "explanation": "Read the bytes in little-endian order."
    },
    "sources": [
      "/js/js_typed_arrays.asp",
      "/js/js_typed_methods.asp",
      "/js/js_typed_reference.asp",
      "/js/js_arraybuffers.asp",
      "/js/js_dataview.asp",
      "/js/js_atomics.asp"
    ]
  },
  {
    "id": "js-canvas",
    "module": "js-apis",
    "title": "Draw a local chat activity graphic",
    "minutes": 18,
    "intro": "Draw a small local message-count chart beside an equivalent HTML table. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Canvas drawing",
        "description": "A canvas context draws pixels through paths, fills, strokes, text, and image operations. Resizing clears its bitmap; CSS size and bitmap dimensions need deliberate coordination."
      },
      {
        "term": "Accessible alternatives",
        "description": "Canvas pixels are not semantic data. Provide a text or table equivalent and avoid turning graphics into the only way to read message statistics."
      }
    ],
    "example": "const canvas = document.querySelector(\"#activity-chart\");\nconst context = canvas.getContext(\"2d\");\nconst counts = [2, 5, 3];\ncounts.forEach((count, index) => {\n  context.fillStyle = \"#5951c6\";\n  context.fillRect(index * 50 + 10, 100 - count * 10, 30, count * 10);\n});",
    "task": "Draw a small local message-count chart beside an equivalent HTML table.",
    "steps": [
      "Add a canvas with width and height attributes and an accessible label.",
      "Draw three bars from known counts.",
      "Provide the same counts in a real table and explore paths, text, and redraw behavior."
    ],
    "check": {
      "question": "What must accompany a canvas chart for equivalent access to its data?",
      "options": [
        "A readable text or table representation.",
        "Only a brighter fill color.",
        "An autoplay audio track."
      ],
      "answer": 0,
      "explanation": "A readable text or table representation."
    },
    "sources": [
      "/js/js_graphics.asp",
      "/js/js_graphics_canvas.asp"
    ]
  },
  {
    "id": "js-plotting",
    "module": "js-apis",
    "title": "Compare declarative chart libraries",
    "minutes": 18,
    "intro": "Compare the same two-room activity dataset across four optional visualization libraries. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Library models",
        "description": "Plotly describes traces and layouts; Chart.js configures datasets on a canvas; Google Charts uses a DataTable and visualization options. Each library requires its documented script or module before its API can be used."
      },
      {
        "term": "D3 joins",
        "description": "D3 binds data to selected SVG or HTML elements and uses joins to create, update, and remove them. It offers lower-level control rather than a ready-made chart configuration. Treat external loading, versions, accessibility, and failures as explicit dependencies."
      }
    ],
    "example": "// Optional lab after loading the Chart.js script documented in the source.\nif (typeof Chart !== \"undefined\") {\n  new Chart(document.querySelector(\"#activity-chart\"), {\n    type: \"bar\",\n    data: { labels: [\"General\", \"Help\"], datasets: [{ label: \"Local messages\", data: [5, 3] }] },\n    options: { animation: false }\n  });\n}",
    "task": "Compare the same two-room activity dataset across four optional visualization libraries.",
    "steps": [
      "Keep the chat itself independent of optional chart scripts.",
      "Follow each source’s setup and reproduce the two values with Plotly, Chart.js, and Google Charts.",
      "Use a D3 data join to draw equivalent SVG bars; retain the HTML data table in every experiment."
    ],
    "check": {
      "question": "How does D3 generally differ from a ready-made chart configuration API?",
      "options": [
        "It binds data to elements and gives low-level control over rendering.",
        "It is a built-in JavaScript keyword.",
        "It requires replacing the entire chat application."
      ],
      "answer": 0,
      "explanation": "It binds data to elements and gives low-level control over rendering."
    },
    "sources": [
      "/js/js_graphics_plotly.asp",
      "/js/js_graphics_chartjs.asp",
      "/js/js_graphics_google_chart.asp",
      "/js/js_graphics_d3js.asp"
    ]
  },
  {
    "id": "js-xhr",
    "module": "js-apis",
    "title": "Read legacy AJAX requests and responses",
    "minutes": 18,
    "intro": "Reimplement the existing local history fetch with legacy XHR for comparison. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "XMLHttpRequest lifecycle",
        "description": "XMLHttpRequest opens a request, sends it, and reports response or failure through events. Check HTTP status on load; readyState describes progress rather than application success."
      },
      {
        "term": "XML responses",
        "description": "responseText provides text and responseXML can expose a parsed XML document. Select nodes and render their text; understand GET query parameters versus POST bodies. Prefer asynchronous requests to avoid blocking the page."
      }
    ],
    "example": "const request = new XMLHttpRequest();\nrequest.open(\"GET\", \"./history.json\");\nrequest.onload = () => {\n  if (request.status < 200 || request.status >= 300) {\n    console.error(\"History HTTP\", request.status); return;\n  }\n  try { console.log(JSON.parse(request.responseText)); }\n  catch (error) { console.error(\"Invalid history\", error); }\n};\nrequest.onerror = () => console.error(\"History network failure\");\nrequest.send();",
    "task": "Reimplement the existing local history fetch with legacy XHR for comparison.",
    "steps": [
      "Read the same local JSON fixture.",
      "Inspect status, headers, readyState, and error events.",
      "Create a small XML fixture, inspect responseXML, and compare autocomplete or filter examples with your own chat search."
    ],
    "check": {
      "question": "Does an XHR load event guarantee HTTP success?",
      "options": [
        "No. Inspect the response status.",
        "Yes. It means status 200 in every case.",
        "Only if the response is XML."
      ],
      "answer": 0,
      "explanation": "No. Inspect the response status."
    },
    "sources": [
      "/js/js_ajax_intro.asp",
      "/js/js_ajax_http.asp",
      "/js/js_ajax_http_send.asp",
      "/js/js_ajax_http_response.asp",
      "/js/js_ajax_xmlfile.asp",
      "/js/js_ajax_applications.asp",
      "/js/js_ajax_examples.asp"
    ]
  },
  {
    "id": "js-legacy-server",
    "module": "js-apis",
    "title": "Understand PHP, ASP, and database AJAX boundaries",
    "minutes": 18,
    "intro": "Trace a legacy server-backed AJAX example and document a chat history API contract. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Server execution boundary",
        "description": "PHP and ASP execute on a server, receive request parameters, and return response data; copying server code into browser JavaScript cannot run it. AJAX database examples put database work behind such a server endpoint."
      },
      {
        "term": "Safe integration contract",
        "description": "Validate inputs and authorize access on the server, use parameterized database queries, and return a documented data format. A browser should never connect using a database password embedded in its source."
      }
    ],
    "example": "// Contract sketch for a separately implemented server, not an existing endpoint.\nasync function readRoomHistory(room) {\n  const response = await fetch(\"/api/history?room=\" + encodeURIComponent(room));\n  if (!response.ok) throw new Error(\"History request failed\");\n  return response.json();\n}\n// Do not call until the later server lesson creates its endpoint.",
    "task": "Trace a legacy server-backed AJAX example and document a chat history API contract.",
    "steps": [
      "Identify which source lines run in the browser and which require PHP or ASP hosting.",
      "Write request parameters, response shape, validation rules, and failure statuses.",
      "Compare those boundaries with the Node server introduced later; this lab does not claim an unimplemented endpoint works."
    ],
    "check": {
      "question": "Where should database credentials be stored?",
      "options": [
        "In server configuration, never in browser source.",
        "In a hidden input field.",
        "Inside a JavaScript comment."
      ],
      "answer": 0,
      "explanation": "In server configuration, never in browser source."
    },
    "sources": [
      "/js/js_ajax_php.asp",
      "/js/js_ajax_asp.asp",
      "/js/js_ajax_database.asp"
    ]
  },
  {
    "id": "js-jquery-jsonp",
    "module": "js-apis",
    "title": "Recognize jQuery operations and JSONP limitations",
    "minutes": 18,
    "intro": "Translate legacy jQuery chat UI snippets and inspect a JSONP response as text. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "jQuery equivalents",
        "description": "jQuery wraps selections and provides text, html, css, class, append, and remove operations. Native querySelector, textContent, classList, and DOM methods cover the same common tasks without a library dependency."
      },
      {
        "term": "JSONP execution",
        "description": "JSONP loads a script from another origin and calls a named callback. It executes remote code, uses GET, and does not provide the same controls as Fetch/CORS; do not use it for private chat data."
      }
    ],
    "example": "// Native equivalents of $(\"#status\").text(\"Local\").addClass(\"is-local\"):\nconst status = document.querySelector(\"#status\");\nstatus.textContent = \"Local\";\nstatus.classList.add(\"is-local\");\n// A JSONP response looks like: receiveHistory({ messages: [] });\n// That is executable JavaScript, not a JSON document.",
    "task": "Translate legacy jQuery chat UI snippets and inspect a JSONP response as text.",
    "steps": [
      "Compare selectors, text versus html, CSS changes, and node insertion in jQuery and native DOM.",
      "Use text rather than html for message content in both implementations.",
      "Explain why private history must not be exposed through a JSONP script endpoint."
    ],
    "check": {
      "question": "What is a JSONP response?",
      "options": [
        "Executable JavaScript that calls a callback.",
        "A harmless subset of JSON parsed by JSON.parse.",
        "A built-in encrypted transport."
      ],
      "answer": 0,
      "explanation": "Executable JavaScript that calls a callback."
    },
    "sources": [
      "/js/js_jquery_selectors.asp",
      "/js/js_jquery_elements.asp",
      "/js/js_jquery_css.asp",
      "/js/js_jquery_dom.asp",
      "/js/js_json_jsonp.asp"
    ]
  },
  {
    "id": "js-versions",
    "module": "js-advanced",
    "title": "Trace JavaScript versions and feature support",
    "minutes": 18,
    "intro": "Create a feature-support ledger covering every linked JavaScript edition. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Evolution",
        "description": "ES3 standardized early language behavior, ES5 added strict mode and many array/object methods, and ES2015 introduced let/const, classes, modules, promises, and more. Later yearly editions add features without making older syntax disappear."
      },
      {
        "term": "Compatibility review",
        "description": "Publication year, proposal stage, and browser support are different facts. Review each annual source, record its feature additions, and verify support before using a new API; feature detection or a documented fallback prevents the chat from failing on older browsers."
      }
    ],
    "example": "const features = {\n  promise: typeof Promise !== \"undefined\",\n  fetch: typeof fetch === \"function\",\n  temporal: typeof Temporal !== \"undefined\",\n  immutableSort: typeof Array.prototype.toSorted === \"function\"\n};\nconsole.table(features);\nconst ordered = features.immutableSort ? [3, 1, 2].toSorted() : [3, 1, 2].slice().sort();",
    "task": "Create a feature-support ledger covering every linked JavaScript edition.",
    "steps": [
      "Read ES3, ES5, ES2015, and each yearly edition through the latest linked page.",
      "For each edition record its new syntax or APIs, a small experiment, and whether your chat needs it.",
      "Distinguish forward-looking pages from shipped support and keep fallbacks for required browser features."
    ],
    "check": {
      "question": "Does appearing on a future-edition tutorial page guarantee browser support?",
      "options": [
        "No. Verify the feature’s status and target-browser support.",
        "Yes. Every listed feature works everywhere.",
        "Only if the page title contains a year."
      ],
      "answer": 0,
      "explanation": "No. Verify the feature’s status and target-browser support."
    },
    "sources": [
      "/js/js_2027.asp",
      "/js/js_2026.asp",
      "/js/js_2025.asp",
      "/js/js_2024.asp",
      "/js/js_2023.asp",
      "/js/js_2022.asp",
      "/js/js_2021.asp",
      "/js/js_2020.asp",
      "/js/js_2019.asp",
      "/js/js_2018.asp",
      "/js/js_2017.asp",
      "/js/js_2016.asp",
      "/js/js_es6.asp",
      "/js/js_es5.asp",
      "/js/js_es3.asp",
      "/js/js_versions.asp",
      "/js/js_history.asp"
    ]
  },
  {
    "id": "js-practice",
    "module": "js-advanced",
    "title": "Audit the whole JavaScript track with examples and references",
    "minutes": 18,
    "intro": "Complete a behavior-based review before attaching the chat to a real server. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Practice by behavior",
        "description": "Examples, exercises, quiz, editor, and interview questions provide different ways to check a skill. Reproduce an example, change an assumption, then explain the result without copying an answer."
      },
      {
        "term": "Reference coverage",
        "description": "Use DOM, input, HTML object, event, and browser examples as a checklist for the APIs studied. A syllabus and study plan organize practice; an optional certificate is not required for the chat project."
      }
    ],
    "example": "const cases = [\n  { input: \"  Hello  \", expected: \"Hello\" },\n  { input: \"   \", expected: \"\" }\n];\nfor (const test of cases) {\n  console.assert(test.input.trim() === test.expected, test.input);\n}",
    "task": "Complete a behavior-based review before attaching the chat to a real server.",
    "steps": [
      "Recreate one example each for DOM, inputs, HTML objects, events, and browser APIs using your chat interface.",
      "Work through the linked exercises and quiz, recording uncertain answers in a study plan.",
      "Demonstrate safe text rendering, validation, local history, async failure feedback, and storage recovery before the networking stage."
    ],
    "check": {
      "question": "What is the strongest evidence that you understand a tutorial example?",
      "options": [
        "You can modify it, predict the result, and explain why it works.",
        "You can paste it without reading it.",
        "You have opened its source link once."
      ],
      "answer": 0,
      "explanation": "You can modify it, predict the result, and explain why it works."
    },
    "sources": [
      "/js/js_examples.asp",
      "/js/js_dom_examples.asp",
      "/js/js_input_examples.asp",
      "/js/js_ex_dom.asp",
      "/js/js_events_examples.asp",
      "/js/js_ex_browser.asp",
      "/js/js_editor.asp",
      "/js/js_exercises.asp",
      "/js/js_quiz.asp",
      "/js/js_website.asp",
      "/js/js_syllabus.asp",
      "/js/js_study_plan.asp",
      "/js/js_interview_prep.asp",
      "/js/js_exam.asp"
    ]
  },
  {
    "id": "js-dragdrop",
    "module": "js-apis",
    "title": "Add an optional drag-and-drop attachment preview",
    "minutes": 18,
    "intro": "Add a local file-drop preview with an equivalent labeled file input. Work in the chat project you have already marked up and styled. This lesson introduces the tools used in its example before you add them to the project.",
    "concepts": [
      {
        "term": "Drag lifecycle",
        "description": "draggable enables native dragging; dragstart records data with DataTransfer, dragover must allow a drop, and drop reads the payload. A file picker must remain available for users who do not drag."
      },
      {
        "term": "Local preview boundary",
        "description": "A dropped filename is not an uploaded attachment. Inspect File metadata, validate type and size, and announce a preview; the later server needs a separate upload contract before claiming delivery."
      }
    ],
    "example": "const zone = document.querySelector(\"#drop-zone\");\nzone.addEventListener(\"dragover\", event => event.preventDefault());\nzone.addEventListener(\"drop\", event => {\n  event.preventDefault();\n  const file = event.dataTransfer.files[0];\n  if (file) zone.textContent = \"Local preview: \" + file.name;\n});",
    "task": "Add a local file-drop preview with an equivalent labeled file input.",
    "steps": [
      "Create the drop zone and file picker.",
      "Handle dragover and drop without navigating away.",
      "Validate file metadata and make clear that selecting a file does not upload it."
    ],
    "check": {
      "question": "What does reading dataTransfer.files accomplish?",
      "options": [
        "It gives local access to the dropped files; it does not upload them.",
        "It publishes the files to all chat participants.",
        "It bypasses every server validation rule."
      ],
      "answer": 0,
      "explanation": "It gives local access to the dropped files; it does not upload them."
    },
    "sources": [
      "/html/html5_draganddrop.asp"
    ]
  }
];
