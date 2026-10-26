export const graduation = [
  {
    "id": "reference-toolkit",
    "module": "finish",
    "title": "Read the web’s field guide",
    "minutes": 12,
    "intro": "You don’t need to memorize every tag or attribute. Learn to ask a precise question, find an authoritative reference, and test the answer in a small example. Open Course guide for the reference shelf and the complete source-topic map.",
    "concepts": [
      {
        "term": "Read a reference intentionally",
        "description": "Check what an element means, which attributes it supports, and whether it is available in your target browsers. Global attributes such as id, class, lang, title, hidden, and data-* work across elements; href belongs only to certain elements. Avoid positive tabindex values."
      },
      {
        "term": "Understand the request",
        "description": "In DevTools Network, 200 means success, 301/302 are redirects, 404 means not found, and 500 means the server failed. GET retrieves data; POST submits data. PUT, PATCH, and DELETE appear in APIs, not ordinary native HTML form methods."
      },
      {
        "term": "Language, encoding, and units",
        "description": "lang=\"en\" tells assistive tools the language; charset=\"UTF-8\" describes the bytes. They solve different problems. At a 16px font size, 24px is 1.5em; rem instead uses the root font size. Honor user zoom and font settings."
      },
      {
        "term": "The JavaScript boundary",
        "description": "Event handlers, canvas drawing commands, and media playback methods require JavaScript. You can use native form controls, audio/video controls, semantic markup, and SVG without writing JavaScript. API activities stay in the later track."
      },
      {
        "term": "Language and country codes",
        "description": "Language tags can combine a language and region: en-IN means English as used in India, en-GB British English. A region code alone is not a document language. Set lang=\"en-IN\" if it describes your chat UI, and use the country-code reference when localizing it."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat</title>\n  <style>p { font-size: 1.125rem; }</style>\n</head>\n<body>\n  <p data-topic=\"room discussions\">Our next room discussion is Friday.</p>\n</body>\n</html>",
    "task": "Use references and DevTools to investigate one unfamiliar attribute and one network request in your chat community site.",
    "steps": [
      "Open Course guide → References. Pick the Global attributes entry and read the local explanation; the source link is optional and needs internet.",
      "Add lang=\"en\" (or your site’s actual language) to your existing html tag, and a data-topic attribute to one existing element. Do not add a second html document.",
      "Open DevTools Network on your Live Server tab. Refresh and inspect index.html’s status and request method. Deliberately visit a missing filename to recognize a 404.",
      "Use the keyboard to move through your own page with Tab and Shift+Tab. Check visible focus, readable text at 200% zoom, and correct document language."
    ],
    "check": {
      "question": "Your browser shows 404 for a chat attachment. What should you investigate first?",
      "options": [
        "Whether the image file exists at the exact requested path.",
        "Whether your computer needs a different font.",
        "Whether the img tag should be a div."
      ],
      "answer": 0,
      "explanation": "404 means the server could not find that resource. Check the path, filename, letter case, and folder before changing unrelated markup."
    },
    "sources": [
      "/tags/default.asp",
      "/tags/ref_attributes.asp",
      "/tags/ref_standardattributes.asp",
      "/tags/ref_html_browsersupport.asp",
      "/tags/ref_eventattributes.asp",
      "/tags/ref_colornames.asp",
      "/tags/ref_canvas.asp",
      "/tags/ref_av_dom.asp",
      "/tags/ref_html_dtd.asp",
      "/tags/ref_charactersets.asp",
      "/tags/ref_urlencode.asp",
      "/tags/ref_language_codes.asp",
      "/tags/ref_httpmessages.asp",
      "/tags/ref_httpmethods.asp",
      "/tags/ref_pxtoemconversion.asp",
      "/tags/ref_keyboardshortcuts.asp",
      "/tags/ref_country_codes.asp"
    ]
  },
  {
    "id": "clubhouse-showcase",
    "module": "finish",
    "title": "Check your chat HTML prototype",
    "minutes": 15,
    "intro": "Your chat prototype now has sample conversations, a room directory, profile/preferences forms, and attachment markup. Review this same project before continuing into the CSS and JavaScript tracks. HTML alone does not send messages or store profiles.",
    "concepts": [
      {
        "term": "Check the document",
        "description": "Keep one doctype, one html element, one head, and one body. Use a meaningful page title, UTF-8, a viewport declaration, and a sensible heading outline. Check nesting and duplicate ids with the W3C HTML validator when online."
      },
      {
        "term": "Check the experience",
        "description": "Follow every navigation link. Read image alternatives, verify table headers and form labels, and test native validation with an empty required field and a malformed email. Forms in this static project are demonstrations, not a real profile submission service."
      },
      {
        "term": "Check multiple situations",
        "description": "Test narrow and wide screens, keyboard-only use, 200% zoom, and a second browser if available. Media needs files of a supported format. Remote embeds need internet and may be blocked by the provider."
      },
      {
        "term": "Explain your choices",
        "description": "Tell a classmate why you chose a semantic element instead of a generic div, when to use class versus id, and what needs JavaScript or a server. Explaining the boundary is as important as making the page look good."
      }
    ],
    "example": "<!-- Final review inside your existing body -->\n<footer>\n  <p>Made by the Campus Chat team.</p>\n  <a href=\"#top\">Back to the top</a>\n</footer>\n<!-- Make sure an existing element has id=\"top\". -->",
    "task": "Review your chat prototype, repair three issues, and save this HTML checkpoint.",
    "steps": [
      "Open your existing project in Live Server. Compare it against the concepts above; do not replace it with a new example document.",
      "Ask a classmate to find a room and read a sample message using only the keyboard. Fix any confusing heading, link, focus style, or missing information they discover.",
      "Resize the browser, zoom to 200%, and test your form. Fix three concrete issues. If online, paste your HTML into validator.w3.org and review errors.",
      "Save your VS Code files and back up the whole folder, including images/media/styles. If you used the in-course workspace, download index.html from My project."
    ],
    "check": {
      "question": "A form looks complete and its email input validates. Does that mean it stores real chat profiles?",
      "options": [
        "Yes, HTML automatically creates a database.",
        "Only when its button has a bright color.",
        "No. Receiving, validating, and storing data needs a backend or form service."
      ],
      "answer": 2,
      "explanation": "HTML describes the form and browser checks help users. A server or form service must safely receive and store real submissions."
    },
    "sources": [
      "html_examples.asp",
      "html_editor.asp",
      "html_quiz.asp",
      "html_exercises.asp",
      "html_challenges.asp",
      "html_website.asp",
      "html_summary.asp",
      "html_interview_prep.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<footer>\n  <p>Made by the Campus Chat team.</p>\n</footer>"
    }
  },
  {
    "id": "your-next-chapter",
    "module": "finish",
    "title": "Continue to CSS and JavaScript",
    "minutes": 5,
    "intro": "Continue in this course with the same Campus Chat project. CSS will style its rooms and messages. JavaScript will introduce state, functions, events, and DOM updates before making the interface interactive. Later networking and server lessons make chat live across browsers.",
    "concepts": [
      {
        "term": "A plan you can follow",
        "description": "Use Course map to revisit unfinished lessons. For each session, learn one idea, make one project change, explain it, and take a break. You can revisit completed lessons without losing your progress."
      },
      {
        "term": "Practice, not just reading",
        "description": "Rebuild a section without the example, then compare. Use the lesson knowledge checks and Build tasks as your local quiz and exercises. Additional W3Schools examples, exercises, challenges, and interview questions are optional online resources in Course guide."
      },
      {
        "term": "After JavaScript",
        "description": "The deferred API track covers Web API basics, geolocation, drag and drop, popovers, storage, workers, and server-sent events. Learn variables, functions, events, DOM updates, and async code first; some APIs also require permissions, HTTPS, or a server."
      },
      {
        "term": "Sharing your work",
        "description": "Local hosting is not publishing. When ready, choose a static hosting provider, check its requirements, and never upload passwords, private student details, or unlicensed media. W3Schools certification is a separate optional paid service, not a requirement or a certificate issued by this course."
      }
    ],
    "example": "<!-- Keep these next goals in a project comment. -->\n<!-- CSS: refine spacing and responsive layout. -->\n<!-- JavaScript: learn events and DOM updates. -->\n<!-- Then: return to the Web APIs track. -->",
    "task": "Write your next learning goal and show someone the site you built.",
    "steps": [
      "Check Course map for any unfinished HTML lessons and return to them before continuing into CSS.",
      "Write a comment in your existing index.html naming one CSS skill and one JavaScript skill you want to learn next.",
      "Save and back up your project folder. Share a local demo with a classmate; no account or public hosting is needed.",
      "Open the After JavaScript section in Course guide to preview the API roadmap. Complete their JavaScript prerequisites before those API exercises."
    ],
    "check": {
      "question": "When should you begin the deferred Web APIs track?",
      "options": [
        "Before understanding HTML elements.",
        "After completing JavaScript fundamentals, DOM, events, and async basics.",
        "Only after buying a certificate."
      ],
      "answer": 1,
      "explanation": "The API track builds on JavaScript. You do not need a paid certificate to continue learning."
    },
    "sources": [
      "html_syllabus.asp",
      "html_study_plan.asp",
      "html_exam.asp"
    ]
  }
];

export const resources = [
  [
    "Elements and tags",
    "/tags/default.asp",
    "Look up an element’s meaning, permitted content, attributes, and examples. Choose semantics before appearance."
  ],
  [
    "Attribute index",
    "/tags/ref_attributes.asp",
    "Find which elements accept an attribute; element-specific attributes do not apply everywhere."
  ],
  [
    "Global attributes",
    "/tags/ref_standardattributes.asp",
    "id identifies one element; class groups elements; lang declares language; title adds advisory text; hidden hides content; data-* stores custom data. tabindex=\"0\" joins natural keyboard order; avoid positive values."
  ],
  [
    "Browser support",
    "/tags/ref_html_browsersupport.asp",
    "Check support before relying on a feature. Test your actual target browsers and provide useful fallback content."
  ],
  [
    "Event attributes · after JavaScript",
    "/tags/ref_eventattributes.asp",
    "Events include click, input, submit, load, and keyboard events. Learn JavaScript before handling them; prefer addEventListener in a separate script to inline handlers."
  ],
  [
    "Named colors",
    "/tags/ref_colornames.asp",
    "CSS has named colors as well as RGB, HEX, and HSL values. A nice color still needs readable contrast."
  ],
  [
    "Canvas reference · after JavaScript",
    "/tags/ref_canvas.asp",
    "The 2D drawing context exposes paths, fills, strokes, text, and transforms. HTML creates the canvas; JavaScript performs the drawing."
  ],
  [
    "Audio/video DOM · after JavaScript",
    "/tags/ref_av_dom.asp",
    "play(), pause(), currentTime, duration, and media events control playback through JavaScript. Native controls work without your own scripts."
  ],
  [
    "Doctypes",
    "/tags/ref_html_dtd.asp",
    "Use <!DOCTYPE html> for modern HTML and standards-mode rendering. Older HTML/XHTML doctypes describe historical document versions; do not use them for this project."
  ],
  [
    "Character sets",
    "/tags/ref_charactersets.asp",
    "Encoding maps bytes to characters. Declare UTF-8 early in the head and save your source as UTF-8 so multilingual text and symbols remain intact."
  ],
  [
    "URL encoding",
    "/tags/ref_urlencode.asp",
    "Percent-encoding represents bytes that cannot be written literally in a URL component. A space is %20 in a path, and may be + in form query encoding. &amp; is HTML escaping, not URL encoding."
  ],
  [
    "Language codes",
    "/tags/ref_language_codes.asp",
    "Use lang=\"en\", lang=\"hi\", or another valid language tag on html. Add a local lang attribute when a passage changes language; country and language codes are not interchangeable."
  ],
  [
    "HTTP status messages",
    "/tags/ref_httpmessages.asp",
    "200 means success, 301/302 redirect, 400 invalid request, 401 authentication required, 403 forbidden, 404 not found, and 500 a server error. Inspect the Network tab for the actual status."
  ],
  [
    "HTTP methods",
    "/tags/ref_httpmethods.asp",
    "GET retrieves a representation; POST submits data; PUT replaces a resource; PATCH updates part; DELETE removes it. Native HTML forms support GET and POST. A static site cannot store submissions by itself."
  ],
  [
    "Pixels and ems",
    "/tags/ref_pxtoemconversion.asp",
    "An em is relative to font size; rem is relative to the root font size. At 16px, 24px equals 1.5em. Divide desired pixels by the relevant font size, and avoid assuming every user has a 16px default."
  ],
  [
    "Keyboard shortcuts",
    "/tags/ref_keyboardshortcuts.asp",
    "Save: Ctrl+S / Cmd+S. Find: Ctrl+F / Cmd+F. Undo: Ctrl+Z / Cmd+Z. Navigate interactive controls with Tab and Shift+Tab; activate buttons with Enter or Space. Browser and operating-system shortcuts can differ."
  ],
  [
    "More examples",
    "html_examples.asp",
    "Optional external example library. Every lesson here already includes an original example to explore offline."
  ],
  [
    "Online editor",
    "html_editor.asp",
    "Optional external editor; use our local project workspace or your own VS Code files without an account."
  ],
  [
    "Extra quiz",
    "html_quiz.asp",
    "Optional external quiz. This course has one knowledge check per lesson and a final review."
  ],
  [
    "Extra exercises",
    "html_exercises.asp",
    "Optional external practice. Our Build step asks you to apply each topic to your own chat app."
  ],
  [
    "Extra challenges",
    "html_challenges.asp",
    "Optional external code challenges. Try rebuilding your project sections from memory before looking at examples."
  ],
  [
    "Website publishing options",
    "html_website.asp",
    "A local site is visible on your laptop only. Publishing needs a hosting provider. Remove private student data before sharing; hosting services may need accounts and internet."
  ],
  [
    "HTML syllabus",
    "html_syllabus.asp",
    "Use Course map for the complete local syllabus and source-topic mapping. Web APIs are listed separately for after JavaScript."
  ],
  [
    "Study planning",
    "html_study_plan.asp",
    "Work in short learn–build–check cycles. Pause at each project milestone and explain the result to a classmate."
  ],
  [
    "Interview practice",
    "html_interview_prep.asp",
    "Explain semantics, class versus id, alt text, GET versus POST, and why browser validation is not a security boundary. Demonstrate each answer with your project."
  ],
  [
    "HTML recap",
    "html_summary.asp",
    "Review document structure, content, navigation, semantics, forms, media, and accessibility before moving on to CSS and JavaScript."
  ],
  [
    "W3Schools certificate · optional paid service",
    "html_exam.asp",
    "This independent course does not issue a W3Schools certificate. Their certification is a separate external service, not required for this class."
  ]
];
