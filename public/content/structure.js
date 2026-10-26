export const structure = [
  {
    "id": "tables-intro-headers",
    "module": "structure",
    "title": "Organize chat rooms with tables",
    "minutes": 14,
    "intro": "Tables are for information that belongs in rows and columns, such as your chat community\u2019s room directory. They give each item a clear spot so visitors can easily look up room names and topics. Avoid using tables to lay out your whole website; use them only for grid-like data.",
    "concepts": [
      {
        "term": "<table> and <caption>",
        "description": "The <table> tag wraps the table, and <caption> adds a friendly visible title so everyone knows what the table shows."
      },
      {
        "term": "<tr> (table row)",
        "description": "Each <tr> tag creates a horizontal row across your table from left to right."
      },
      {
        "term": "<th> and <td>",
        "description": "Use <th> for header cells, which browsers make bold by default, and <td> for ordinary data cells with your details."
      },
      {
        "term": "The scope attribute",
        "description": "Adding scope=\"col\" or scope=\"row\" tells screen readers whether a header labels a column or a row."
      },
      {
        "term": "Tables vs page layout",
        "description": "Use tables only for real data grids like room directorys or rosters. Use modern CSS layout tools for overall page design."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<table>\n<caption>Campus Chat room directory</caption>\n<thead><tr><th scope=\"col\">Room</th><th scope=\"col\">Topic</th><th scope=\"col\">Members</th></tr></thead>\n<tbody>\n<tr><th scope=\"row\">General</th><td>Introductions</td><td>12</td></tr>\n<tr><th scope=\"row\">Help</th><td>HTML questions</td><td>8</td></tr>\n</tbody>\n</table>",
    "task": "Add a room directory table to your chat prototype.",
    "steps": [
      "Add table and caption below the sample conversation.",
      "Use thead and th for Room, Topic, and Members.",
      "Add tbody with two room rows.",
      "Use scope=\"col\" and scope=\"row\" to explain header relationships."
    ],
    "check": {
      "question": "Why do we add scope=\"col\" to the header cells at the top of a table?",
      "options": [
        "It tells screen readers that this header applies to the whole column below it.",
        "It automatically arranges the table into columns using CSS Grid.",
        "It makes the header clickable so visitors can sort the column."
      ],
      "answer": 0,
      "explanation": "The scope=\"col\" attribute clearly tells assistive technologies like screen readers which column of data each header explains."
    },
    "sources": [
      "html_tables.asp",
      "html_table_headers.asp",
      "/html/html_exercise_embed.asp?topic=tables",
      "/html/html_challenges_tables.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<table>\n<caption>Campus Chat room directory</caption>\n<thead><tr><th scope=\"col\">Room</th><th scope=\"col\">Topic</th><th scope=\"col\">Members</th></tr></thead>\n<tbody>\n<tr><th scope=\"row\">General</th><td>Introductions</td><td>12</td></tr>\n<tr><th scope=\"row\">Help</th><td>HTML questions</td><td>8</td></tr>\n</tbody>\n</table>"
    }
  },
  {
    "id": "table-borders-padding",
    "module": "structure",
    "title": "Table borders and spacing",
    "minutes": 14,
    "intro": "Let\u2019s make your room directory easier to read with borders and spacing. By default, browser tables look cramped and can have double lines between cells. Adding a little CSS padding and collapsing borders creates clean, modern grid lines.",
    "concepts": [
      {
        "term": "border-collapse: collapse",
        "description": "By default, browsers show two separate borders between cells. Setting border-collapse: collapse joins them into a single neat line."
      },
      {
        "term": "Cell padding",
        "description": "Adding padding to <th> and <td> gives your text breathing room so words and numbers do not touch the borders."
      },
      {
        "term": "Border styling",
        "description": "Use CSS border (like border: 1px solid #cbd5e1;) on cells to draw clear, light dividers."
      },
      {
        "term": "border-spacing property",
        "description": "When borders are not collapsed, border-spacing controls the gap between cells."
      },
      {
        "term": "Modern CSS vs old HTML attributes",
        "description": "Always style tables using CSS. Avoid deprecated old HTML attributes like cellpadding, cellspacing, or border=\"1\"."
      },
      {
        "term": "Table CSS declarations",
        "description": "border: 1px solid #cbd5e1 sets thickness, line style, and color. border-collapse: collapse merges adjacent cell borders. padding adds inner cell space; border-spacing adds space when borders are separate. rem uses the root font size, and width: 100% fills the container."
      }
    ],
    "example": "<style>\n  .chat-table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  .chat-table th,\n  .chat-table td {\n    border: 1px solid #cbd5e1;\n    padding: 0.75rem 1rem;\n    text-align: left;\n  }\n  .chat-table th {\n    background-color: #f1f5f9;\n  }\n</style>\n\n<table class=\"chat-table\">\n  <caption>Chat Meeting Rooms</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Room</th>\n      <th scope=\"col\">Capacity</th>\n      <th scope=\"col\">Equipment</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Studio A</td>\n      <td>25</td>\n      <td>Projector & Whiteboard</td>\n    </tr>\n    <tr>\n      <td>Study Pod 3</td>\n      <td>6</td>\n      <td>Monitor & Webcam</td>\n    </tr>\n  </tbody>\n</table>",
    "task": "Add CSS styles to your chat room directory to collapse borders and add comfortable cell padding.",
    "steps": [
      "Inside your <style> tag in the document <head>, add a class rule for .chat-schedule with width: 100%; and border-collapse: collapse;.",
      "Select both .chat-schedule th and .chat-schedule td, and add a subtle 1px solid border and 0.75rem of padding.",
      "Give .chat-schedule th a light background color and bold font weight to distinguish headers from data.",
      "Verify that your table displays single clean grid lines without touching old attributes like cellpadding or cellspacing."
    ],
    "check": {
      "question": "What does setting border-collapse: collapse do on an HTML table?",
      "options": [
        "It merges double cell borders into single crisp lines.",
        "It hides all borders completely from the table.",
        "It removes the table from the page on mobile screens."
      ],
      "answer": 0,
      "explanation": "border-collapse: collapse tells the browser to combine adjacent borders into one shared border line."
    },
    "sources": [
      "html_table_borders.asp",
      "html_table_padding_spacing.asp"
    ],
    "patch": {
      "target": "head",
      "html": "<style>\n  .chat-schedule {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 1rem 0;\n  }\n  .chat-schedule th,\n  .chat-schedule td {\n    border: 1px solid #d1d5db;\n    padding: 0.75rem 1rem;\n    text-align: left;\n  }\n  .chat-schedule th {\n    background-color: #f3f4f6;\n    font-weight: 600;\n  }\n</style>"
    }
  },
  {
    "id": "table-sizing-spanning",
    "module": "structure",
    "title": "Table sizes and merged cells",
    "minutes": 15,
    "intro": "Sometimes an activity takes two hours or spans across multiple days. HTML lets you merge table cells sideways across columns or downwards across rows. This keeps your chat community calendar looking organized without repeating words.",
    "concepts": [
      {
        "term": "colspan attribute",
        "description": "The colspan attribute tells a cell to stretch across multiple columns horizontally, like colspan=\"2\"."
      },
      {
        "term": "rowspan attribute",
        "description": "The rowspan attribute tells a cell to stretch downward across multiple rows vertically."
      },
      {
        "term": "Column width sizing",
        "description": "You can set widths on tables and columns using CSS percentages (like width: 100%) so the table fills its container."
      },
      {
        "term": "Counting cells carefully",
        "description": "When a cell spans into another column or row, the affected row needs fewer <td> tags so the grid stays balanced."
      }
    ],
    "example": "<table class=\"retreat-grid\">\n  <caption>Chat Weekend Room Topic Matrix</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Time</th>\n      <th scope=\"col\">Track A (Web)</th>\n      <th scope=\"col\">Track B (Design)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">9:00 AM</th>\n      <td colspan=\"2\">Welcome messages (all rooms)</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">10:00 AM</th>\n      <td rowspan=\"2\">HTML help conversation</td>\n      <td>CSS questions</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">11:00 AM</th>\n      <td>JavaScript questions</td>\n    </tr>\n  </tbody>\n</table>",
    "task": "Build a multi-track hackathon schedule table for Campus Chat using colspan and rowspan.",
    "steps": [
      "Inside your <body> tag, create a <table> with a <caption> and three columns in the header (Time, Track A, and Track B).",
      "In the first body row, add a <td> with colspan=\"2\" for an all-hands morning keynote that spans both tracks.",
      "In the second body row, add a <td> with rowspan=\"2\" under Track A for a two-hour coding sprint.",
      "In the third body row, add only the time header and the Track B cell, since Track A is already filled by the row above."
    ],
    "check": {
      "question": "What happens when you add colspan=\"2\" to a <td> element?",
      "options": [
        "The cell stretches across two columns in that row.",
        "The table creates a duplicate copy of the cell.",
        "The cell stretches across two rows vertically."
      ],
      "answer": 0,
      "explanation": "colspan stands for column span; it tells the cell to widen and occupy two or more column spots horizontally."
    },
    "sources": [
      "html_table_sizes.asp",
      "html_table_colspan_rowspan.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"retreat-section\">\n  <h3>Weekend Hackathon Schedule</h3>\n  <table class=\"chat-schedule\">\n    <caption>Campus Chat Hackathon Schedule</caption>\n    <thead>\n      <tr>\n        <th scope=\"col\">Time</th>\n        <th scope=\"col\">Track A</th>\n        <th scope=\"col\">Track B</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">9:00 AM</th>\n        <td colspan=\"2\">Welcome & Keynote (Main Hall)</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">10:00 AM</th>\n        <td rowspan=\"2\">Full-Stack Hack Sprint</td>\n        <td>UI/UX Sprint</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">11:00 AM</th>\n        <td>Design Critique & Testing</td>\n      </tr>\n    </tbody>\n  </table>\n</section>"
    }
  },
  {
    "id": "table-styling-colgroup",
    "module": "structure",
    "title": "Table styles and column groups",
    "minutes": 15,
    "intro": "You can make long tables much easier to scan by highlighting alternating rows or changing colors when a mouse hovers over them. You can also style entire columns at once with column groups. If your table is wide, wrapping it in a container lets mobile phone users scroll it smoothly.",
    "concepts": [
      {
        "term": "Zebra striping with :nth-child(even)",
        "description": "This CSS selector gives alternating table rows a soft background color so long rows of data are easy to follow."
      },
      {
        "term": "Row hover with tr:hover",
        "description": "Changing the background color when a visitor hovers over a row provides instant feedback on where they are looking."
      },
      {
        "term": "<colgroup> and <col>",
        "description": "Placed right under <caption>, <col> tags let you apply a width or background color to an entire column at once."
      },
      {
        "term": "CSS limits on <col>",
        "description": "Browsers only let you style a few properties on columns: background, width, border, and visibility."
      },
      {
        "term": "Responsive scroll wrapper",
        "description": "Wrapping a table in a <div> with overflow-x: auto lets small mobile screens scroll sideways without breaking the page."
      },
      {
        "term": "Table selectors and overflow",
        "description": ":nth-child(even) matches even rows or cells; :hover matches pointer hover. A descendant selector such as .chat-data td selects cells inside that class. overflow-x: auto allows a wide directory to scroll horizontally. colgroup groups table columns; span counts columns."
      }
    ],
    "example": "<style>\n  .table-scroll {\n    overflow-x: auto;\n  }\n  .chat-data {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  .highlight-col {\n    background-color: #fef3c7;\n  }\n  .chat-data tbody tr:nth-child(even) {\n    background-color: #f8fafc;\n  }\n  .chat-data tbody tr:hover {\n    background-color: #e0f2fe;\n  }\n</style>\n\n<div class=\"table-scroll\" tabindex=\"0\">\n  <table class=\"chat-data\">\n    <caption>Campus Chat Active Member Roster</caption>\n    <colgroup>\n      <col style=\"width: 35%;\">\n      <col style=\"width: 35%;\">\n      <col class=\"highlight-col\" style=\"width: 30%;\">\n    </colgroup>\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Role</th>\n        <th scope=\"col\">Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Maya Patel</td>\n        <td>Project Lead</td>\n        <td>Active</td>\n      </tr>\n      <tr>\n        <td>Liam Miller</td>\n        <td>UI Designer</td>\n        <td>Active</td>\n      </tr>\n      <tr>\n        <td>Sofia Rossi</td>\n        <td>Developer</td>\n        <td>Mentor</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "task": "Add zebra striping, row hover highlights, and a scrollable container to your Chat table.",
    "steps": [
      "Wrap your table in a <div class=\"table-scroll\" tabindex=\"0\"> so mobile users can scroll it sideways with touch or keyboard.",
      "In CSS, give .table-scroll the declaration overflow-x: auto;.",
      "Add a <colgroup> right below your <caption> and use <col> tags to set widths or a highlight class for a column.",
      "In your stylesheet, add rules for tbody tr:nth-child(even) and tbody tr:hover to tint alternating rows and hovered rows."
    ],
    "check": {
      "question": "Why is wrapping wide tables in a container with overflow-x: auto recommended?",
      "options": [
        "It allows mobile screens to scroll the table sideways instead of stretching or breaking the page layout.",
        "It automatically shrinks the table text to fit any screen without scrolling.",
        "It converts table rows into vertical bullet points on phones."
      ],
      "answer": 0,
      "explanation": "Wide tables cannot shrink smaller than their text. Using overflow-x: auto provides a smooth horizontal scrollbar on small mobile displays."
    },
    "sources": [
      "html_table_styling.asp",
      "html_table_colgroup.asp"
    ],
    "patch": {
      "target": "head",
      "html": "<style>\n  .table-scroll { overflow-x: auto; margin: 1.5rem 0; }\n  .chat-schedule tbody tr:nth-child(even) { background-color: #f9fafb; }\n  .chat-schedule tbody tr:hover { background-color: #f0fdf4; }\n  .highlight-col { background-color: #eff6ff; }\n</style>"
    }
  },
  {
    "id": "lists-structure",
    "module": "structure",
    "title": "Lists for resources and glossaries",
    "minutes": 15,
    "intro": "Lists are one of the best ways to present items in a clean, readable format. You can make bulleted lists for chat benefits, numbered lists for step-by-step profile preferences guides, or description lists for chat roles and terms.",
    "concepts": [
      {
        "term": "<ul> and <li> (bulleted lists)",
        "description": "Use <ul> for unordered lists when item order does not matter. Each item sits inside an <li> tag with a bullet point."
      },
      {
        "term": "<ol> (numbered lists)",
        "description": "Use <ol> for ordered lists when sequence matters, such as step-by-step instructions. Numbers appear automatically."
      },
      {
        "term": "<ol> attributes (start and reversed)",
        "description": "You can customize numbered lists with start=\"5\" to begin at five, or reversed to count down backwards."
      },
      {
        "term": "list-style-type in CSS",
        "description": "This CSS property changes bullet markers to circles, squares, or none (often used for navigation menus)."
      },
      {
        "term": "<dl>, <dt>, and <dd> (description lists)",
        "description": "<dl> wraps term-and-description pairs. <dt> marks the term or title, and <dd> provides its definition or details."
      },
      {
        "term": "Nested lists",
        "description": "To create a sub-list, place the child <ul> or <ol> inside an existing <li> element, never directly between them."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!-- Unordered list with nested sub-teams -->\n<h3>Chat Working Committees</h3>\n<ul class=\"chat-teams\">\n  <li>\n    Development Team\n    <ul>\n      <li>Frontend Working Group</li>\n      <li>API & Database Group</li>\n    </ul>\n  </li>\n  <li>Design & Marketing Team</li>\n</ul>\n\n<!-- Ordered list for steps -->\n<h3>New Member Onboarding Steps</h3>\n<ol start=\"1\">\n  <li>Your Campus Chat profile Discord server.</li>\n  <li>Attend the Monday orientation lab in Room 204.</li>\n  <li>Submit your first pull request to the chat community repository.</li>\n</ol>\n\n<!-- Description list for profiles roles -->\n<h3>Chat Leadership Directory</h3>\n<dl class=\"moderator-directory\">\n  <dt>Amina Chen</dt>\n  <dd>President - Coordinates chat activities and university partnerships.</dd>\n  <dt>Devon Vance</dt>\n  <dd>Technical Lead - Mentors student developers and leads chat rooms.</dd>\n</dl>",
    "task": "Add chat committee lists, an onboarding guide, and an moderator directory using unordered, ordered, and description lists.",
    "steps": [
      "Inside your <body> tag, create an unordered list (<ul>) of chat teams, placing a nested <ul> inside one <li> to show sub-groups.",
      "Create an ordered list (<ol>) with three numbered steps for new members to join the chat.",
      "Create a description list (<dl>) with at least two chat profiles roles using <dt> for names and <dd> for duties.",
      "Save and preview your page to confirm proper indentation for nested items and clear term-definition spacing."
    ],
    "check": {
      "question": "When should you choose an ordered list (<ol>) instead of an unordered list (<ul>)?",
      "options": [
        "When the order of the items matters, such as numbered steps in a guide.",
        "When you want to display items horizontally across the page.",
        "When the items represent glossary terms and definitions."
      ],
      "answer": 0,
      "explanation": "Use <ol> for sequential information where order is important (like steps or rankings), and <ul> when the items can appear in any order."
    },
    "sources": [
      "html_lists.asp",
      "html_lists_unordered.asp",
      "html_lists_ordered.asp",
      "html_lists_other.asp",
      "/html/html_exercise_embed.asp?topic=lists",
      "/html/html_challenges_lists.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"chat-structure-section\">\n  <h2>Chat Committees & Leadership</h2>\n  <ul>\n    <li>\n      Technology Division\n      <ul>\n        <li>Web & App Development</li>\n        <li>Open Source Mentorship</li>\n      </ul>\n    </li>\n    <li>Conversations & Community Outreach</li>\n  </ul>\n\n  <h3>Joining Roadmap</h3>\n  <ol>\n    <li>Sign up at the student activities fair.</li>\n    <li>Join our Discord community.</li>\n    <li>Participate in your first weekend sprint.</li>\n  </ol>\n\n  <h3>Moderator Directory</h3>\n  <dl>\n    <dt>President</dt>\n    <dd>Directs chat vision and oversees university partnerships.</dd>\n    <dt>Tech Lead</dt>\n    <dd>Oversees open source student repositories and chat rooms.</dd>\n  </dl>\n</section>"
    }
  },
  {
    "id": "block-inline-div",
    "module": "structure",
    "title": "Block elements, inline elements, and divs",
    "minutes": 12,
    "intro": "Every HTML element belongs to one of two main display types: block or inline. Block elements start on their own new line and stretch across the page, while inline elements sit inside text without breaking the line. The <div> tag is an empty block box you can use to group items together for styling your Campus Chat announcements.",
    "concepts": [
      {
        "term": "Block-level elements",
        "description": "Elements like <p>, <h1>, and <div> always start on a brand new line and stretch all the way across the available page width."
      },
      {
        "term": "Inline elements",
        "description": "Elements like <span>, <a>, and <strong> sit directly inside the flow of text without creating a line break."
      },
      {
        "term": "The <div> element",
        "description": "Short for division, <div> is a blank block container with no built-in meaning that groups elements together for layout and styling."
      },
      {
        "term": "When to use a div",
        "description": "Use <div> tags as handy styling wrappers or card boxes, but prefer meaningful tags like <section> or <article> for major page areas."
      },
      {
        "term": "Avoiding div soup",
        "description": "Div soup means piling too many unnecessary <div> boxes inside each other, which clutters your HTML and makes it harder for screen readers to follow."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<div class=\"message-card\">\n<h3>Ada</h3>\n<p>Hello <span class=\"mention\">Sam</span>, welcome to <strong>General</strong>!</p>\n</div>",
    "task": "Group one sample chat message with div and mark a name inside it with span.",
    "steps": [
      "Add a div with class=\"message-card\".",
      "Place an h3 sender heading and p message inside it.",
      "Wrap a mentioned name in span.",
      "Observe that div starts a block while span stays in the text line."
    ],
    "check": {
      "question": "How does a block-level element like <p> or <div> behave compared to an inline element like <span>?",
      "options": [
        "A block element starts on its own new line and takes the full width, while an inline element stays in line with surrounding text.",
        "A block element can only contain numbers, while an inline element can only contain images.",
        "A block element is always hidden until clicked, while an inline element is always visible."
      ],
      "answer": 0,
      "explanation": "Block elements always break onto a fresh line and stretch across the page, whereas inline elements fit naturally inside a line of text."
    },
    "sources": [
      "html_blocks.asp",
      "html_div.asp",
      "/html/html_exercise_embed.asp?topic=blocks",
      "/html/html_challenges_blocks.asp",
      "/html/html_exercise_embed.asp?topic=div",
      "/html/html_challenges_div.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<div class=\"message-card\">\n<h3>Ada</h3>\n<p>Hello <span class=\"mention\">Sam</span>, welcome to <strong>General</strong>!</p>\n</div>"
    }
  },
  {
    "id": "classes-and-ids",
    "module": "structure",
    "title": "Style with classes and jump with IDs",
    "minutes": 14,
    "intro": "As your Campus Chat page grows, you will want to style certain items similarly or jump directly to specific sections. You can give any element a class to share styles, or an ID to give it a one-of-a-kind name on the page.",
    "concepts": [
      {
        "term": "The class attribute",
        "description": "A label you can place on multiple elements so they can share the same styling rules or layout."
      },
      {
        "term": "Multiple classes",
        "description": "You can give an element more than one class by separating their names with spaces, such as class=\"badge active\"."
      },
      {
        "term": "The id attribute",
        "description": "A unique name that must only appear on one single element in your entire web page."
      },
      {
        "term": "Page jump links",
        "description": "Setting an anchor link href to \"#about\" lets visitors jump straight down to the element with id=\"about\" when clicked."
      },
      {
        "term": "Connecting form labels",
        "description": "Matching a label's for attribute to an input's id allows visitors to click the label text to activate that input field."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<nav>\n  <a href=\"#conversations\">Upcoming Conversations</a>\n  <a href=\"#contact\">Contact</a>\n</nav>\n\n<section id=\"conversations\">\n  <h2>Upcoming Conversations</h2>\n  <p><span class=\"badge badge-active\">Active</span> Web Design Jam</p>\n</section>\n\n<section id=\"contact\">\n  <h2>Contact Us</h2>\n  <label for=\"member-email\">Email:</label>\n  <input type=\"email\" id=\"member-email\">\n</section>",
    "task": "Give your Campus Chat sections unique IDs for jump links and add reusable badge classes to your chat community announcements.",
    "steps": [
      "Inside your <body> tag, add id=\"schedule\" to your schedule section so visitors can jump right to it.",
      "In your navigation links at the top of the page, add an anchor link with href=\"#schedule\" pointing to that ID.",
      "Add class=\"badge badge-featured\" to your top chat announcement to give it reusable styling labels.",
      "Save your file and click your navigation link to watch the browser jump directly to the schedule section."
    ],
    "check": {
      "question": "What is the main difference between a class and an id in HTML?",
      "options": [
        "A class can be reused across many elements, while an id must be unique to just one element per page.",
        "A class is only for images, while an id is only for text headings.",
        "An id can only be used once per year, while a class can be used every day."
      ],
      "answer": 0,
      "explanation": "Classes are made for reusable styling across as many elements as you want, while an id is a unique identifier that should only be used once on each page."
    },
    "sources": [
      "html_classes.asp",
      "html_id.asp",
      "/html/html_exercise_embed.asp?topic=classes",
      "/html/html_challenges_classes.asp",
      "/html/html_exercise_embed.asp?topic=id",
      "/html/html_challenges_id.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"chat-roster\" class=\"roster-section\">\n  <h2 class=\"roster-title\">Chat Leaders</h2>\n  <ul class=\"roster-list\">\n    <li><strong>Alex Rivera</strong> <span class=\"badge badge-president\">President</span></li>\n    <li><strong>Samira Khan</strong> <span class=\"badge badge-treasurer\">Treasurer</span></li>\n  </ul>\n</section>"
    }
  },
  {
    "id": "interactive-buttons",
    "module": "structure",
    "title": "Clickable buttons and button types",
    "minutes": 15,
    "intro": "Buttons give visitors a clear way to take action, like opening a menu or joining a chat activity. Unlike links that take you to a new page, buttons are meant for actions right where you are. A type=\"button\" control has no action until the JavaScript track. Label it \"Send (demo)\" and do not claim messages are being delivered.",
    "concepts": [
      {
        "term": "<button> vs <a>",
        "description": "Use <a> links with href to take visitors to another page or section, and use <button> to perform actions on the current page."
      },
      {
        "term": "Button types",
        "description": "HTML buttons have three types: type=\"button\" for general clicks, type=\"submit\" to send form answers, and type=\"reset\" to clear fields."
      },
      {
        "term": "Default type warning",
        "description": "Inside a <form>, any button without a type automatically acts like type=\"submit\" and might accidentally reload your page!"
      },
      {
        "term": "The disabled attribute",
        "description": "Adding disabled turns off the button, making it grayed out and unclickable for full conversations or closed profile preferencess."
      },
      {
        "term": "Keyboard accessible",
        "description": "Native <button> elements work with keyboards automatically, so visitors can press Tab to reach them and Enter or Spacebar to press them."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<div class=\"button-group\">\n  <!-- Action button for in-page interaction -->\n  <button type=\"button\" class=\"btn\">Show room directory</button>\n\n  <!-- Form submit button -->\n  <form action=\"#\" method=\"POST\">\n    <button type=\"submit\" class=\"btn-primary\">Save demo profile</button>\n  </form>\n\n  <!-- Disabled button for closed registration -->\n  <button type=\"button\" class=\"btn\" disabled>Chat room Full</button>\n</div>",
    "task": "Add action buttons with explicit types to your Campus Chat page for filtering activities and RSVPing.",
    "steps": [
      "Inside your <body> tag, find your chat activities area.",
      "Add a <button type=\"button\">Filter Chat rooms</button> so visitors know it triggers an action on the page.",
      "Add a second button with the disabled attribute to show an activity that is currently full.",
      "Save your file and test pressing the Tab key on your keyboard to navigate to your active button."
    ],
    "check": {
      "question": "Why should you always set type=\"button\" on buttons that are not meant to submit a form?",
      "options": [
        "Because without type=\"button\", a button inside a form defaults to type=\"submit\" and may submit data by mistake.",
        "Because modern web browsers will hide any button that does not have type=\"button\".",
        "Because type=\"button\" automatically turns the button into a link to Google."
      ],
      "answer": 0,
      "explanation": "Inside forms, buttons default to type=\"submit\". Giving normal action buttons an explicit type=\"button\" prevents accidental form submissions."
    },
    "sources": [
      "html_buttons.asp",
      "/html/html_challenges_buttons.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<div class=\"chat-controls\">\n  <button type=\"button\" class=\"btn-chat\">Filter by Chat rooms</button>\n  <button type=\"button\" class=\"btn-chat\">Filter by Socials</button>\n  <button type=\"button\" class=\"btn-chat\" disabled>Archived Conversations (0)</button>\n</div>"
    }
  },
  {
    "id": "iframe-sandboxing",
    "module": "structure",
    "title": "Embed other pages with iframes",
    "minutes": 16,
    "intro": "An iframe lets you show another web page or document right inside your own page, like a campus map or a slide deck. Because showing outside content can carry security risks, HTML gives you a sandbox attribute to lock down what the embedded page is allowed to do.",
    "concepts": [
      {
        "term": "The <iframe> element",
        "description": "Short for inline frame, it opens a small window on your page to display another web document using the src attribute."
      },
      {
        "term": "The title attribute",
        "description": "Required for accessibility so screen readers can explain to visually impaired visitors what is inside the embedded frame."
      },
      {
        "term": "loading=\"lazy\"",
        "description": "Tells the browser to wait to load the iframe until the student scrolls near it, saving internet data and speed."
      },
      {
        "term": "The sandbox attribute",
        "description": "Locks down the embedded page by blocking scripts, form submissions, and popups for safety."
      },
      {
        "term": "Embedding restrictions",
        "description": "Many popular sites like Google or GitHub intentionally block being embedded in iframes to protect their users from clickjacking."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<iframe src=\"room-help.html\" title=\"Chat room rules\" width=\"300\" height=\"180\" sandbox></iframe>",
    "task": "Embed a safe, sandboxed map frame on your Campus Chat page so members know how to find meetings.",
    "steps": [
      "Create room-help.html beside index.html containing <h1>Room rules</h1><p>Be kind. Do not share private information.</p>.",
      "Inside your <body> tag, create a new section with a heading for chat location directions.",
      "Add an <iframe> element with a src link pointing to your campus map.",
      "Add a descriptive title attribute, such as title=\"Map showing Campus Chat meeting room\", for screen readers.",
      "Add loading=\"lazy\" and sandbox=\"allow-scripts\" to keep the iframe safe and fast."
    ],
    "check": {
      "question": "Why is the sandbox attribute important when embedding an iframe on your website?",
      "options": [
        "It automatically translates the embedded page into five different languages.",
        "It locks down untrusted outside code by disabling potentially risky features like popups and harmful scripts.",
        "It forces the iframe to turn into a full-screen video player."
      ],
      "answer": 1,
      "explanation": "The sandbox attribute creates a security wall around the embedded page, keeping outside content from running unauthorized scripts or navigating your visitors away."
    },
    "sources": [
      "html_iframe.asp",
      "/html/html_exercise_embed.asp?topic=iframe",
      "/html/html_challenges_iframes.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section class=\"chat-location\">\n  <h3>Find Our Chat</h3>\n  <iframe \n    src=\"https://maps.example.edu/embed?hall=student-center\" \n    title=\"Map of Student Center Room 101\" \n    width=\"100%\" \n    height=\"250\" \n    loading=\"lazy\" \n    sandbox=\"allow-scripts\" \n    style=\"border: 1px solid #ccc; border-radius: 6px;\">\n  </iframe>\n</section>"
    }
  },
  {
    "id": "scripts-and-noscript",
    "module": "structure",
    "title": "Add scripts and noscript fallbacks",
    "minutes": 16,
    "intro": "HTML connects to JavaScript using script and can supply a noscript fallback. This is markup only: the later JavaScript track teaches all the code before you write chat behavior.",
    "concepts": [
      {
        "term": "The <script> tag and src",
        "description": "Links an external JavaScript file into your HTML document using the src attribute so your code stays tidy and separate."
      },
      {
        "term": "Parser-blocking scripts",
        "description": "By default, the browser stops reading your HTML while downloading a script, which can slow down how fast visitors see your page."
      },
      {
        "term": "The defer attribute",
        "description": "Downloads the script quietly in the background and runs it only after the entire HTML page is fully loaded and ready."
      },
      {
        "term": "The async attribute",
        "description": "Downloads the script in the background and runs it immediately the instant it arrives, great for independent counters or analytics."
      },
      {
        "term": "The <noscript> tag",
        "description": "Shows a friendly backup message to visitors if their browser has JavaScript turned off or blocked."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat</title>\n  <!-- Downloads in background and runs after HTML is ready -->\n  <script src=\"app.js\" defer></script>\n</head>\n<body>\n  <h1>Campus Chat Portal</h1>\n\n  <!-- Friendly backup for visitors without JavaScript -->\n  <noscript>\n    <div class=\"notice\">\n      <p>JavaScript is turned off in your browser. You can still read our room directory and sample messages!</p>\n    </div>\n  </noscript>\n</body>\n</html>",
    "task": "Link a JavaScript file cleanly using the defer attribute and add a polite <noscript> fallback message for chat visitors.",
    "steps": [
      "Create an empty app.js beside index.html. It deliberately does nothing yet; do not add JavaScript code.",
      "Inside the <head> of your index.html file, add a <script src=\"app.js\" defer></script> tag.",
      "Notice how the defer attribute prevents the script from blocking the HTML while the page loads.",
      "Inside your <body> tag, add a <noscript> element with a friendly message letting visitors know they can still read the schedule.",
      "Save your file and verify your HTML structure in the browser."
    ],
    "check": {
      "question": "What does the defer attribute do when added to an external <script> tag?",
      "options": [
        "It completely disables the script so it never runs.",
        "It downloads the script in the background and waits to run it until the HTML document is fully parsed.",
        "It forces the browser to run the script ten times before showing any HTML."
      ],
      "answer": 1,
      "explanation": "The defer attribute downloads external JavaScript in parallel without stopping HTML parsing, and then runs the script right after the HTML page finishes loading."
    },
    "sources": [
      "html_scripts.asp",
      "/html/html_exercise_embed.asp?topic=scripts",
      "/html/html_challenges_scripts.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<noscript>\n  <div class=\"noscript-banner\">\n    <p>JavaScript is turned off. All chat schedules and meeting rooms remain readable, but online interactive forms are paused.</p>\n  </div>\n</noscript>"
    }
  },
  {
    "id": "file-paths",
    "module": "structure",
    "title": "Find your files with web paths",
    "minutes": 14,
    "intro": "When building your Campus Chat website, your HTML files need to point to images, stylesheets, and other pages on your computer. File paths are the addresses that tell the browser exactly where to look for those files. Using clear paths keeps your photos and links working smoothly as your project grows.",
    "concepts": [
      {
        "term": "Relative file paths",
        "description": "Points to files relative to the current file folder, such as images/chat-banner.jpg for a picture in a subfolder."
      },
      {
        "term": "Going up a folder with ../",
        "description": "Tells the browser to step back one folder level, which is helpful when a page inside a subfolder needs a file from the main directory."
      },
      {
        "term": "Root-relative paths",
        "description": "Starts with a forward slash (/) and looks from the main website root folder on a web server."
      },
      {
        "term": "Absolute URLs",
        "description": "Full web addresses starting with https:// that link to outside files and websites across the internet."
      },
      {
        "term": "Server case sensitivity",
        "description": "On production web servers, Logo.png and logo.png are treated as completely different files, so keep all filenames lowercase."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!-- Current file: campus-chat/index.html -->\n<!-- Sibling asset inside an images subfolder -->\n<img src=\"images/chat-banner.jpg\" alt=\"Campus Chat gathering hall\">\n\n<!-- Stepping up and into another folder (from conversations/chat room.html) -->\n<!-- <link rel=\"stylesheet\" href=\"../styles/main.css\"> -->\n\n<!-- External absolute resource -->\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Campus Chat Network</a>",
    "task": "Organize your chat images into a dedicated folder and link a banner graphic using a clean relative file path.",
    "steps": [
      "Inside your project root folder, create a new subfolder named images.",
      "Place your banner photo inside that images/ folder using lowercase naming, such as chat-banner.jpg.",
      "In index.html, add an <img> tag with src=\"images/chat-banner.jpg\" and descriptive alt text.",
      "Open your page in the browser to confirm the image displays properly without any broken file icons."
    ],
    "check": {
      "question": "What does ../ at the start of a file path tell the browser to do?",
      "options": [
        "Climb up one folder level from where the current file is saved.",
        "Search your entire computer hard drive for that filename.",
        "Reload the web page automatically if the file cannot be found."
      ],
      "answer": 0,
      "explanation": "../ tells the browser to step up one directory level, making it easy to reach files stored in parent or neighboring folders."
    },
    "sources": [
      "html_filepaths.asp",
      "/html/html_challenges_filepaths.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<p><img src=\"images/chat-banner.jpg\" alt=\"Campus Chat gathering area\" width=\"600\"></p>"
    }
  },
  {
    "id": "head-metadata",
    "module": "structure",
    "title": "Page info and the document head",
    "minutes": 15,
    "intro": "The <head> element is where you put behind-the-scenes information about your web page that visitors do not see directly on the screen. It tells browsers your page title, character set, responsive settings, and links to your styles. Adding good metadata helps search engines understand your Campus Chat site and ensures it looks great on all screens.",
    "concepts": [
      {
        "term": "<title> tag",
        "description": "Names the page on the browser tab, in bookmarks, and as the headline in search engine results."
      },
      {
        "term": "<meta charset=\"utf-8\">",
        "description": "Ensures international letters, accents, and symbols display correctly without turning into garbled characters."
      },
      {
        "term": "Viewport meta tag",
        "description": "Makes your website fit properly on mobile phone and tablet screens by matching the page width to the device screen."
      },
      {
        "term": "<meta name=\"description\">",
        "description": "Provides a short summary of your page that search engines often show beneath your page title."
      },
      {
        "term": "<link> tag",
        "description": "Connects external files to your document, such as your CSS stylesheet or the favicon icon shown on the browser tab."
      },
      {
        "term": "<base> tag caution",
        "description": "Sets a starting address for all relative links on the page, but can easily break your links and images if misused."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Official website for Campus Chat student chat rooms and room discussions.\">\n  <title>Campus Chat | Student Hub</title>\n  <link rel=\"stylesheet\" href=\"styles/main.css\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n<body>\n  <h1>Welcome to Campus Chat</h1>\n</body>\n</html>",
    "task": "Equip the <head> section of your Campus Chat page with character encoding, mobile viewport settings, and a title.",
    "steps": [
      "Open index.html and locate the opening <head> tag near the top of the document.",
      "Add <meta charset=\"utf-8\"> as the very first item inside <head>.",
      "Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> right below it to support mobile phones.",
      "Add a descriptive <title> tag and a <meta name=\"description\"> summarizing your chat community.",
      "Link your external stylesheet using <link rel=\"stylesheet\" href=\"styles/main.css\">."
    ],
    "check": {
      "question": "Where does the text inside the <title> tag show up for website visitors?",
      "options": [
        "On the browser tab and in bookmarks, rather than directly on the page body.",
        "As a large bold heading at the very center of the web page.",
        "At the bottom of the page in the copyright footer."
      ],
      "answer": 0,
      "explanation": "The <title> tag lives in the <head> and provides the title shown on the browser tab, in search results, and in bookmark lists."
    },
    "sources": [
      "html_head.asp",
      "/html/html_exercise_embed.asp?topic=head",
      "/html/html_challenges_head.asp"
    ],
    "patch": {
      "target": "head",
      "html": "<meta name=\"description\" content=\"Campus Chat - Connecting student innovators, creators, and leaders.\">\n<title>Campus Chat | Student Hub</title>"
    }
  },
  {
    "id": "semantic-layout",
    "module": "structure",
    "title": "Organize pages with semantic tags",
    "minutes": 16,
    "intro": "HTML5 includes special layout tags that describe what each part of your page actually is, instead of using generic <div> boxes for everything. Using tags like <header>, <nav>, and <main> creates clear landmarks across your layout. This makes your website easier to maintain and much friendlier for students who use screen readers.",
    "concepts": [
      {
        "term": "Page landmarks",
        "description": "<header>, <main>, and <footer> mark the top banner, main page content, and bottom copyright notes."
      },
      {
        "term": "<nav> tag",
        "description": "Marks your main menu links so visitors and screen readers can jump directly to navigation sections."
      },
      {
        "term": "<section> vs <article>",
        "description": "<article> is for standalone content like an event card or blog post; <section> groups related chat content under a heading."
      },
      {
        "term": "<aside> tag",
        "description": "Holds side notes, meeting hours, or quick links that complement the main content."
      },
      {
        "term": "<figure> and <figcaption>",
        "description": "Pairs photos, charts, or illustrations with a clear explanatory caption underneath."
      },
      {
        "term": "<time> tag",
        "description": "Marks dates and times in human text while providing a standardized date for search engines and calendars."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<header>\n  <h1>Campus Chat</h1>\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"#about\">About</a></li>\n      <li><a href=\"#conversations\">Conversations</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <section id=\"about\">\n    <h2>About Our Chat</h2>\n    <p>We host weekly technology chat rooms and design sessions for students.</p>\n  </section>\n\n  <article>\n    <h3>Weekend Hackathon</h3>\n    <p>Date: <time datetime=\"2026-10-25\">October 25, 2026</time></p>\n    <p>Join us for 24 hours of fun coding challenges, mentorship, and pizza!</p>\n  </article>\n\n  <aside>\n    <h4>Chat Hours</h4>\n    <p>Open Monday through Thursday, 4:00 PM to 9:00 PM in Room 204.</p>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2026 Campus Chat. All rights reserved.</p>\n</footer>",
    "task": "Organize the Campus Chat body layout using semantic landmark tags: header, nav, main, section, article, and footer.",
    "steps": [
      "Inside <body>, wrap your site title and menu links inside a <header> and <nav> element.",
      "Place the unique central content of your page inside a single <main> element.",
      "Group chat topics into a <section> with an <h2> heading, and upcoming announcements into an <article>.",
      "Add a <time> tag with a datetime attribute inside your event article.",
      "End your page with a <footer> element containing chat contact and copyright text."
    ],
    "check": {
      "question": "Why are semantic tags like <main> and <nav> better than generic <div> tags?",
      "options": [
        "They give clear meaning to screen readers and make the page structure easier to understand.",
        "They make web pages load ten times faster on mobile networks.",
        "They automatically style text with bright colors without using CSS."
      ],
      "answer": 0,
      "explanation": "Semantic tags describe their purpose directly, which helps assistive technologies like screen readers create convenient navigation shortcuts."
    },
    "sources": [
      "html_layout.asp",
      "html5_semantic_elements.asp",
      "/html/html_challenges_layout.asp",
      "/html/html_exercise_embed.asp?topic=semantic_elements",
      "/html/html_challenges_semantics.asp"
    ]
  },
  {
    "id": "responsive-design",
    "module": "structure",
    "title": "Make your page mobile-friendly",
    "minutes": 16,
    "intro": "Students visit the Campus Chat site on smartphones, tablets, and laptops of all sizes. Responsive web design means building your site so it automatically rearranges itself to look great on any screen size. Using fluid widths and flexible images ensures everyone has a smooth viewing experience.",
    "concepts": [
      {
        "term": "Viewport meta tag",
        "description": "Tells mobile phones to scale your page to match the device screen width so text does not appear microscopic."
      },
      {
        "term": "Fluid widths",
        "description": "Using percentages like width: 100% instead of fixed pixels so elements can shrink and expand naturally."
      },
      {
        "term": "Responsive images",
        "description": "Setting max-width: 100% and height: auto so pictures scale down cleanly and never spill outside their container."
      },
      {
        "term": "Media queries",
        "description": "CSS rules like @media (min-width: 768px) that apply extra styles only on larger screens."
      },
      {
        "term": "Mobile-first thinking",
        "description": "Designing a simple layout for phones first, then expanding to side-by-side columns on laptops and desktops."
      },
      {
        "term": "The two CSS declarations used here",
        "description": "max-width: 100% keeps an image no wider than its container. height: auto preserves its proportions. The viewport meta tag matches the layout viewport to the device width. Flexbox, Grid, and media-query layouts are taught fully in the CSS track."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<!-- Put the meta element in your existing head. -->\n<style>\n  img { max-width: 100%; height: auto; }\n</style>",
    "task": "Make chat attachments fit narrow screens with a viewport declaration and fluid images.",
    "steps": [
      "Check that your head contains one viewport meta declaration.",
      "Add the example style rule to your existing style element.",
      "Resize the preview and check an attachment image.",
      "Keep your static message content; responsive columns come in the CSS lessons."
    ],
    "check": {
      "question": "What does setting max-width: 100% and height: auto do for images on small screens?",
      "options": [
        "It lets the image shrink down to fit narrow screens without distorting its shape.",
        "It stretches small images to cover the entire computer monitor.",
        "It turns photographs into downloadable PDF documents."
      ],
      "answer": 0,
      "explanation": "max-width: 100% prevents images from overflowing their container, while height: auto keeps the image's original proportions intact."
    },
    "sources": [
      "html_responsive.asp",
      "/html/html_exercise_embed.asp?topic=responsive",
      "/html/html_challenges_responsive.asp"
    ]
  },
  {
    "id": "computer-code-elements",
    "module": "structure",
    "title": "Show code and keyboard shortcuts",
    "minutes": 14,
    "intro": "If your chat community hosts coding nights or technology chat rooms, you will want to display code snippets, keyboard shortcuts, and terminal output on your page. HTML has dedicated tags that format technical text neatly in a monospaced font. Using these tags makes technical instructions clear, readable, and easy for students to follow.",
    "concepts": [
      {
        "term": "<code> tag",
        "description": "Formats inline words, filenames, or short code snippets in a typewriter monospaced font."
      },
      {
        "term": "<pre> tag",
        "description": "Preformatted text that preserves all of your exact spaces, indents, and line breaks without collapsing them."
      },
      {
        "term": "Combining <pre><code>",
        "description": "The standard way to display multi-line programming code blocks neatly on a web page."
      },
      {
        "term": "<kbd> tag",
        "description": "Shows keyboard inputs and shortcut combinations that a user presses, like Ctrl + S or Enter."
      },
      {
        "term": "<samp> and <var>",
        "description": "<samp> shows computer program output or terminal messages; <var> represents a programming or math variable."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      },
      {
        "term": "Display markup as text",
        "description": "Use &lt; and &gt; instead of angle brackets to display an HTML tag without the browser treating it as an element. The sample uses HTML you already know; programming behavior comes later."
      }
    ],
    "example": "<section id=\"dev-tips\">\n  <h2>Chat markup guide</h2>\n  <p>Save with <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>\n  <pre><code>&lt;h1&gt;Campus Chat&lt;/h1&gt;\n&lt;p&gt;Welcome to our room.&lt;/p&gt;</code></pre>\n  <p>Example browser output: <samp>Welcome to our room.</samp></p>\n  <p>A room with <var>n</var> members has a changing member count.</p>\n</section>",
    "task": "Add a chat help section showing a keyboard shortcut, a multi-line HTML sample, sample output, and a mathematical variable.",
    "steps": [
      "Inside your page <body>, add a <section id=\"dev-tips\"> with an <h3> heading.",
      "Add a paragraph documenting a common shortcut using <kbd> tags, such as <kbd>Ctrl</kbd> + <kbd>S</kbd>.",
      "Add a multi-line code sample using a combined <pre><code> container.",
      "Show the sample displayed text with samp, and label the member count variable n with var. These are descriptions, not executed code."
    ],
    "check": {
      "question": "Why is <pre> needed when displaying multi-line code blocks?",
      "options": [
        "It preserves spaces, indents, and line breaks that browsers usually collapse into a single space.",
        "It translates JavaScript into Python automatically inside the browser.",
        "It runs the code sample automatically when the visitor loads the page."
      ],
      "answer": 0,
      "explanation": "Browsers normally ignore extra whitespace and line breaks in HTML. <pre> keeps your exact spacing and line formatting intact so code blocks stay readable."
    },
    "sources": [
      "html_computercode_elements.asp",
      "/html/html_exercise_embed.asp?topic=computercode_elements",
      "/html/html_challenges_computercode.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"dev-tips\">\n  <h2>Chat markup guide</h2>\n  <p>Save with <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>\n  <pre><code>&lt;h1&gt;Campus Chat&lt;/h1&gt;\n&lt;p&gt;Welcome to our room.&lt;/p&gt;</code></pre>\n  <p>Example browser output: <samp>Welcome to our room.</samp></p>\n  <p>A room with <var>n</var> members has a changing member count.</p>\n</section>"
    }
  },
  {
    "id": "html5-syntax-standards",
    "module": "structure",
    "title": "Clean HTML5 code standards",
    "minutes": 12,
    "intro": "Modern HTML5 is forgiving and lets browsers display pages even when code has small mistakes. However, writing clean, consistent HTML makes your code much easier to read, helps teammates work together, and prevents weird browser bugs on your Campus Chat site.",
    "concepts": [
      {
        "term": "<!DOCTYPE html>",
        "description": "A simple line at the very top of your file that tells the browser to use modern web standards."
      },
      {
        "term": "Lowercase tag names",
        "description": "Writing tags like <p> and <section> instead of <P> or <SECTION> keeps your code neat, uniform, and readable."
      },
      {
        "term": "Quoting attributes",
        "description": "Always putting quotes around values like class=\"card\" avoids parsing mistakes and keeps code predictable."
      },
      {
        "term": "Empty or void elements",
        "description": "Tags like <img>, <meta>, and <br> do not wrap around content, so they do not need closing tags."
      },
      {
        "term": "HTML validators",
        "description": "Free online checker tools, such as the official W3C validator, that scan your code and point out accidental mistakes."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat Guidelines</title>\n</head>\n<body>\n  <header>\n    <h1>Campus Chat Standards</h1>\n  </header>\n  <main>\n    <section class=\"guidelines-card\">\n      <h2>Clean Code Rules</h2>\n      <p>Writing neat HTML helps our chat community team maintain the website together.</p>\n      <img src=\"images/banner.jpg\" alt=\"Chat members coding together\">\n    </section>\n  </main>\n  <footer class=\"site-footer\">\n    <p>Maintained by the Student Web Committee</p>\n  </footer>\n</body>\n</html>",
    "task": "Format the Campus Chat guidelines page using clean modern HTML5 standards with lowercase tags and quoted attribute values.",
    "steps": [
      "Open your HTML file and make sure <!DOCTYPE html> sits on the very first line with no spaces or tags above it.",
      "Check all tags in your <header>, <main>, and <footer> to confirm they are written in lowercase, such as <section> instead of <SECTION>.",
      "Ensure every attribute value is wrapped in clean double quotes, such as class=\"guidelines-card\".",
      "Verify that void elements like <img> do not have an extra closing tag like </img>."
    ],
    "check": {
      "question": "Why is it best practice to write lowercase tags and quote your attribute values in HTML5?",
      "options": [
        "Browsers will refuse to open any webpage that contains capital letters in tags.",
        "It keeps your code neat, prevents confusing browser bugs, and makes collaborating with others much easier.",
        "Uppercase tags take up double the memory and slow down internet connections."
      ],
      "answer": 1,
      "explanation": "Even though browsers can often read uppercase tags, using lowercase tags and quoted attributes keeps your code consistent, professional, and free of accidental bugs."
    },
    "sources": [
      "html5_syntax.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"standards-notice\" class=\"notice-box\">\n  <p class=\"notice-text\">All chat site contributions adhere to clean HTML5 coding standards.</p>\n</section>"
    }
  },
  {
    "id": "entities-symbols-emojis",
    "module": "structure",
    "title": "Special characters, symbols, and emojis",
    "minutes": 12,
    "intro": "Because characters like < and > are used for HTML tags, you cannot just type them into plain text without confusing the browser. HTML entities are short codes that let you display reserved characters, copyright symbols, and fun emojis safely across your Campus Chat website.",
    "concepts": [
      {
        "term": "Reserved character entities",
        "description": "Special codes like &lt; for <, &gt; for >, &amp; for &, and &quot; for \" that prevent the browser from mistaking text for HTML tags."
      },
      {
        "term": "Non-breaking space (&nbsp;)",
        "description": "A special space entity that prevents two words from getting split across lines when text wraps."
      },
      {
        "term": "Symbols and trademarks",
        "description": "Named shortcuts like &copy; for copyright (\u00a9), &trade; for trademark (\u2122), and &rarr; for an arrow (\u2192)."
      },
      {
        "term": "Emojis in HTML",
        "description": "Friendly icons like \ud83c\udf89 or \ud83d\ude80 that you can paste directly into your text or display using numeric codes like &#128512;."
      },
      {
        "term": "Font support",
        "description": "Emojis and symbols rely on device fonts, meaning they can look slightly different on Apple, Android, and Windows devices."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson\u2019s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<footer class=\"chat-footer\">\n  <!-- Escaped angle brackets and ampersand -->\n  <p>Learn tags like &lt;header&gt; &amp; &lt;footer&gt; at our next chat room!</p>\n\n  <!-- Non-breaking space keeps meeting room together -->\n  <p>Weekly room discussion: Room&nbsp;302</p>\n\n  <!-- Copyright symbol and emoji -->\n  <p>&copy; 2026 Campus Chat &bull; Made with &hearts; by students &#127881;</p>\n</footer>",
    "task": "Add a friendly chat footer announcement featuring safe character entities, a copyright symbol, and an emoji.",
    "steps": [
      "Inside your <body> tag at the bottom of the page, add a <footer class=\"chat-footer\"> element.",
      "Add a paragraph sharing code tips, using &lt; and &gt; to show tag brackets and &amp; for an ampersand.",
      "Use the non-breaking space &nbsp; between words like 'Room' and a room number so they never separate across lines.",
      "Add a copyright line using &copy; along with the year and a party emoji &#127881; or pasted icon."
    ],
    "check": {
      "question": "Which HTML entity code represents the less-than symbol (<)?",
      "options": [
        "&lt;",
        "&less;",
        "&gt;"
      ],
      "answer": 0,
      "explanation": "&lt; stands for 'less than' and safely displays the < symbol on your webpage."
    },
    "sources": [
      "html_entities.asp",
      "html_symbols.asp",
      "html_emojis.asp",
      "/html/html_exercise_embed.asp?topic=entities",
      "/html/html_challenges_entities.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<footer class=\"site-footer\">\n  <p>&copy; 2026 Campus Chat &bull; Built with HTML5 &amp; CSS3 &#x2728;</p>\n</footer>"
    }
  },
  {
    "id": "charset-url-encoding",
    "module": "structure",
    "title": "Character sets and web links",
    "minutes": 12,
    "intro": "Web pages need a standard way to translate human letters into computer bytes, and web addresses need a way to handle spaces and special symbols. UTF-8 makes sure international letters show up properly, while URL encoding ensures your Campus Chat links never break.",
    "concepts": [
      {
        "term": "Character sets and UTF-8",
        "description": "UTF-8 is the universal standard that includes letters, accents, and symbols from almost every language in the world."
      },
      {
        "term": "<meta charset=\"UTF-8\">",
        "description": "Placed near the top of the <head> so the browser knows how to read and decode your text immediately."
      },
      {
        "term": "URL character restrictions",
        "description": "Web links can only contain standard ASCII characters without spaces or special punctuation symbols."
      },
      {
        "term": "Percent-encoding",
        "description": "Turning spaces into %20 or + so web addresses remain valid and clickable in web browsers."
      },
      {
        "term": "URL query strings",
        "description": "The part of a link after a ? used to pass search words or filter settings, such as ?chat=coding."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Tells the browser to decode international characters properly -->\n  <meta charset=\"UTF-8\">\n  <title>Chat Search &amp; Links</title>\n</head>\n<body>\n  <header>\n    <h1>Find a Campus Chat</h1>\n  </header>\n  <main>\n    <!-- Link with a percent-encoded space in the query string -->\n    <p>\n      <a href=\"index.html?room=game%20design\">Browse the Game Design room</a>\n    </p>\n    <p>\n      <a href=\"index.html?profile=new%20member\">Preview a member profile</a>\n    </p>\n  </main>\n</body>\n</html>",
    "task": "Add a UTF-8 character declaration to your document head and create a search link that safely uses URL percent-encoding.",
    "steps": [
      "Inside your <head> section, place <meta charset=\"UTF-8\"> on the first line right after the opening <head> tag.",
      "In your <body>, create an <a> link leading to your chat search page.",
      "Add a query string starting with '?' and replace any space in the search phrase with '%20' (such as href=\"/search?q=web%20design\").",
      "Save and test your link in the browser to confirm the address loads without broken characters."
    ],
    "check": {
      "question": "Why is UTF-8 the recommended character encoding for modern websites?",
      "options": [
        "It supports letters, accents, and symbols from almost every language so text never turns into unreadable gibberish.",
        "It makes images and videos download ten times faster than older formats.",
        "It encrypts your HTML files so unauthorized visitors cannot inspect the page source."
      ],
      "answer": 0,
      "explanation": "UTF-8 includes characters and symbols from virtually every written language, ensuring your text displays correctly for all visitors worldwide."
    },
    "sources": [
      "html_charset.asp",
      "html_urlencode.asp"
    ],
    "patch": {
      "target": "head",
      "html": "<meta charset=\"UTF-8\">"
    }
  },
  {
    "id": "xhtml-and-accessibility",
    "module": "structure",
    "title": "Accessibility and tidy markup",
    "minutes": 14,
    "intro": "Building a great website means making sure everyone can use it, including students who navigate with keyboards or use screen readers. Learning accessible HTML habits early ensures your Campus Chat site welcomes every student on campus.",
    "concepts": [
      {
        "term": "Accessibility basics",
        "description": "Making sure content is easy to see, hear, and interact with for all visitors, including those using assistive tools."
      },
      {
        "term": "Keyboard navigation",
        "description": "Ensuring students can press Tab to reach every button and link smoothly without needing a mouse."
      },
      {
        "term": "Descriptive link text",
        "description": "Writing clear links like 'View chat schedule' instead of vague words like 'click here' so users know where links lead."
      },
      {
        "term": "Heading order",
        "description": "Organizing headings logically from <h1> down to <h3> without skipping levels so the page structure is easy to follow."
      },
      {
        "term": "XHTML history",
        "description": "An older, strict version of HTML that required closing every tag and helped inspire today\u2019s clean coding habits."
      }
    ],
    "example": "<section class=\"resources-card\">\n  <h2>Chat Student Resources</h2>\n  <p>Explore tools and guides created to help all students succeed in tech.</p>\n\n  <!-- Clear, descriptive link labels for accessibility -->\n  <nav aria-label=\"Chat Resources\">\n    <ul>\n      <li>\n        <a href=\"/docs/guide.pdf\">Download New Member Guide (PDF)</a>\n      </li>\n      <li>\n        <a href=\"/calendar\">View Spring 2026 room directory</a>\n      </li>\n      <li>\n        <a href=\"/mentors\">Meet Our Peer Mentoring Team</a>\n      </li>\n    </ul>\n  </nav>\n</section>",
    "task": "Create an accessible chat resources section using logical heading levels and helpful, descriptive link text.",
    "steps": [
      "Inside your <body> area, add a <section class=\"resources-card\"> to hold chat guides and helpful links.",
      "Add a logical <h2> heading that clearly announces what resources are in this section.",
      "Add an unordered list (<ul>) with descriptive links that clearly tell where each link leads, avoiding vague words like 'click here'.",
      "Use your keyboard's Tab key to navigate through the links to make sure each one is easily reachable."
    ],
    "check": {
      "question": "Why is descriptive link text like 'View chat schedule' important for screen readers?",
      "options": [
        "Screen reader users often listen to a list of links alone, and descriptive text tells them where each link goes without needing surrounding context.",
        "Browsers will display an error pop-up if any link contains the words 'click here'.",
        "Descriptive links make the webpage load faster on mobile networks."
      ],
      "answer": 0,
      "explanation": "Screen readers can read out a list of links on the page. Descriptive labels immediately tell the user what they will get when they select that link."
    },
    "sources": [
      "html_xhtml.asp",
      "html_accessibility.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<aside class=\"a11y-statement\" aria-label=\"Accessibility Commitment\">\n  <p>Campus Chat is committed to accessible web standards for all students.</p>\n</aside>"
    }
  }
];
