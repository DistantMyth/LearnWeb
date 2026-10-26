export const foundations = [
  {
    "id": "html-intro",
    "module": "foundations",
    "title": "What is HTML?",
    "minutes": 10,
    "intro": "HTML stands for HyperText Markup Language. It is the code used to structure a web page and tell the browser what belongs on it, such as headings, paragraphs, pictures, and links. A web browser reads your HTML file and displays it visually on screen. Understanding tags and elements is the very first step to building websites.",
    "concepts": [
      {
        "term": "HTML",
        "description": "The standard language used to build the skeleton of every website by defining headings, text, images, and links."
      },
      {
        "term": "Web browser",
        "description": "An app like Chrome, Firefox, or Safari that reads HTML code and turns it into the page you see on your screen."
      },
      {
        "term": "Tags vs elements",
        "description": "A tag is the code inside angle brackets like <p> or </p>. An element is the whole package: the opening tag, the content, and the closing tag."
      },
      {
        "term": "Client and server",
        "description": "The client is your computer or browser asking for a page. The server is the computer that stores the website files and sends them back."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>Campus Chat</title>\n  </head>\n  <body>\n    <h1>Campus Chat</h1>\n    <p>Welcome to our student community space for chat rooms and projects.</p>\n  </body>\n</html>",
    "task": "Customize the existing heading and paragraph in your chat index.html. Keep the single <h1> tag already on the page and update its text.",
    "steps": [
      "Open your project's index.html file in your code editor.",
      "Find the existing <h1> tag inside the <body> and change its text to 'Welcome to Campus Chat'.",
      "Update the <p> tag right below the heading with a short welcome sentence about our student chat.",
      "Save index.html and preview your page in the browser to see your updated text."
    ],
    "check": {
      "question": "What is the difference between an HTML tag and an HTML element?",
      "options": [
        "A tag is just the angle bracket marker like <p> or </p>, while an element is the start tag, content, and end tag together.",
        "A tag is only used on mobile phones, while an element is used on desktop computers.",
        "Tags hold images, while elements only hold plain text."
      ],
      "answer": 0,
      "explanation": "A tag is the label in angle brackets, like <p> or </p>. The element includes the opening tag, the closing tag, and all the text or content in between."
    },
    "sources": [
      "default.asp",
      "html_intro.asp",
      "/html/html_exercise_embed.asp?topic=intro"
    ]
  },
  {
    "id": "html-document-structure",
    "module": "foundations",
    "title": "The basic page structure",
    "minutes": 10,
    "intro": "Every HTML page begins with the exact same simple structure. Code editors like VS Code are used instead of word processors like Microsoft Word because word processors add hidden formatting that breaks code. A webpage file ends with .html so browsers know how to read it. The code is split into two main sections: the head holds page settings and metadata, while the body holds everything visitors actually see.",
    "concepts": [
      {
        "term": "Code editor",
        "description": "A program like VS Code made for writing clean plain text code without hidden styling or fancy quotes."
      },
      {
        "term": ".html file extension",
        "description": "The file ending that tells your computer and browser that a file contains HTML code."
      },
      {
        "term": "<!DOCTYPE html>",
        "description": "The very first line of a webpage that tells the browser to display the page using modern HTML standards."
      },
      {
        "term": "<html lang=\"en\">",
        "description": "The root tag that wraps all page content and tells browsers and screen readers what language the page uses."
      },
      {
        "term": "<head> vs <body>",
        "description": "The <head> stores page settings and title, while the <body> contains all visible content like headings, paragraphs, and pictures."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat</title>\n</head>\n<body>\n  <h1>Campus Chat</h1>\n  <p>Read our sample conversation.</p>\n</body>\n</html>",
    "task": "Check the document structure of your existing chat page.",
    "steps": [
      "Keep one doctype, html, head, and body, as in the example.",
      "Set the title to Campus Chat.",
      "Keep the existing h1 and welcome paragraph inside body.",
      "Save and refresh. Semantic containers and IDs come in later lessons."
    ],
    "check": {
      "question": "What is the main difference between the <head> and the <body> tags?",
      "options": [
        "The <head> holds behind-the-scenes settings and titles, while the <body> holds the content visible on screen.",
        "The <head> is for mobile screens, and the <body> is for desktop screens.",
        "The <head> must be placed at the bottom of the page, and the <body> must be at the top."
      ],
      "answer": 0,
      "explanation": "Information inside <head> sets page rules, encoding, and tab titles. Visible content that users see and interact with always goes inside <body>."
    },
    "sources": [
      "html_editors.asp",
      "html_basic.asp",
      "/html/html_exercise_embed.asp?topic=basic",
      "/html/html_challenges_basic.asp"
    ]
  },
  {
    "id": "html-elements-nesting",
    "module": "foundations",
    "title": "Tags and nesting",
    "minutes": 10,
    "intro": "Most HTML elements use an opening tag like <p> and a closing tag with a slash like </p>. Nesting means placing one HTML element inside another, like putting a box inside a bigger box. The golden rule of nesting is simple: always close the inner element before closing the outer element. Some special elements are empty tags, such as <br> for a line break or <hr> for a dividing line, which do not need a closing tag.",
    "concepts": [
      {
        "term": "Opening and closing tags",
        "description": "An opening tag marks where an element starts, and a closing tag with a slash marks where it ends."
      },
      {
        "term": "Nesting",
        "description": "Placing one HTML element inside another element to group related content together."
      },
      {
        "term": "Golden rule of nesting",
        "description": "Always close the inside element first before you close the outside element (first opened is last closed)."
      },
      {
        "term": "Empty tags",
        "description": "Tags like <br> and <hr> that do not hold any text and do not require a separate closing tag."
      },
      {
        "term": "Lowercase tags",
        "description": "Writing tags in lowercase letters (like <p> instead of <P>) is the clean, modern standard for all web developers."
      },
      {
        "term": "Nested emphasis and headings",
        "description": "h1 is the main heading; h2 introduces a subsection. strong marks important words inside a paragraph. This lesson introduces strong before using it below."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<h2>Sample conversation</h2>\n<p>Ada: <strong>Welcome!</strong></p>\n<hr>\n<p>Sam: Hello everyone.<br>I am learning HTML.</p>",
    "task": "Add a sample conversation below the welcome heading.",
    "steps": [
      "Add an h2 titled Sample conversation.",
      "Add two p elements containing sample messages.",
      "Nest strong around an important word and close it before p.",
      "Try br inside a message and hr between groups."
    ],
    "check": {
      "question": "Which of these shows correct HTML nesting?",
      "options": [
        "<p>Join our <strong>coding chat room</strong> today.</p>",
        "<p>Join our <strong>coding chat room</p></strong>",
        "<p>Join our <strong>coding chat room"
      ],
      "answer": 0,
      "explanation": "The <strong> element was opened inside the <p> element, so it must be closed before the </p> closing tag."
    },
    "sources": [
      "html_elements.asp",
      "/html/html_exercise_embed.asp?topic=elements",
      "/html/html_challenges_elements.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<h2>Sample conversation</h2>\n<p>Ada: <strong>Welcome!</strong></p>\n<hr>\n<p>Sam: Hello everyone.<br>I am learning HTML.</p>"
    }
  },
  {
    "id": "html-attributes-basics",
    "module": "foundations",
    "title": "Adding attributes to tags",
    "minutes": 12,
    "intro": "Attributes give extra information or instructions to your HTML tags. They are always written inside the opening tag in a name=\"value\" format. For example, an id attribute gives an element a single unique name on the page, while a class attribute gives a label that can be shared across multiple elements. The title attribute creates a friendly tooltip popup when someone hovers their mouse over the element. Always put quotes around your attribute values.",
    "concepts": [
      {
        "term": "Attribute",
        "description": "Extra settings written inside an opening tag that provide more information about that element."
      },
      {
        "term": "id attribute",
        "description": "A unique label for one specific element on the page. No two elements should ever share the same id."
      },
      {
        "term": "class attribute",
        "description": "A reusable label that can be given to many elements to group them together for styling."
      },
      {
        "term": "title attribute",
        "description": "Extra text that appears in a small tooltip bubble when a user hovers their mouse over the element."
      },
      {
        "term": "Quoting values",
        "description": "Always wrapping attribute values in double quotes, such as id=\"notice\", to prevent code errors."
      },
      {
        "term": "Grouping with section",
        "description": "section groups a topic, usually with an h2 heading. Give your welcome group id=\"site-header\" and conversation group id=\"about\"; later links can target them. Classes label groups but do not style anything by themselves."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<div id=\"meeting-card\" class=\"chat-card\" title=\"Weekly meeting announcement\">\n  <h3>Weekly room discussion</h3>\n  <p>Every Wednesday at 5:00 PM in Room 204.</p>\n</div>",
    "task": "Give your chat sections IDs and a shared class.",
    "steps": [
      "Wrap the welcome heading and paragraph in <section id=\"site-header\">.",
      "Wrap the sample conversation in <section id=\"about\">.",
      "Add class=\"message\" to each sample-message paragraph.",
      "Add a title attribute and hover it. Keep every ID unique."
    ],
    "check": {
      "question": "What is the key rule about using an 'id' attribute on a webpage?",
      "options": [
        "Each id must be completely unique and used only once on the entire page.",
        "Every element on the page must have the same id.",
        "An id can only be added to image tags."
      ],
      "answer": 0,
      "explanation": "An id is like a fingerprint: it must be unique to a single element on the page so styles and links can target that exact element."
    },
    "sources": [
      "html_attributes.asp",
      "/html/html_exercise_embed.asp?topic=attributes",
      "/html/html_challenges_attributes.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"about\"><h2>Sample conversation</h2><p class=\"message\" title=\"Sample message\">Ada: Hello!</p></section>"
    }
  },
  {
    "id": "html-headings-hierarchy",
    "module": "foundations",
    "title": "Organize with headings",
    "minutes": 10,
    "intro": "Headings organize your page into a clear outline, running from <h1> (the most important) down to <h6> (the least important). Think of your page like a book: the <h1> is the book title, <h2> tags are chapter titles, and <h3> tags are sections within a chapter. Always use only one <h1> per page. Never skip heading levels (such as jumping straight from an <h2> to an <h4>), and use headings to organize your ideas rather than just to make words look bigger.",
    "concepts": [
      {
        "term": "Heading levels (h1 to h6)",
        "description": "Six levels of headings that show how topics are divided, with <h1> being the main title and <h6> being the smallest detail."
      },
      {
        "term": "Single h1 rule",
        "description": "Best practice is to use exactly one <h1> per page for the main subject or title of the page."
      },
      {
        "term": "Heading hierarchy",
        "description": "Organizing headings in order (h1, then h2, then h3) so the page reads like a well-organized outline."
      },
      {
        "term": "Do not skip levels",
        "description": "Always step down one level at a time (like h2 to h3) so screen readers and search engines can follow the structure easily."
      },
      {
        "term": "Structure over style",
        "description": "Use headings to label meaningful sections, not just to make normal text bigger. Visual styling belongs in CSS."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<section id=\"activity-groups\">\n  <h2>Chat activity groups</h2>\n  <h3>Coding group</h3>\n  <p>Learn web building and app development.</p>\n  <h3>Design group</h3>\n  <p>Explore user interfaces, color, and typography.</p>\n  <h3>Hardware group</h3>\n  <p>Tinker with electronics, sensors, and robotics.</p>\n</section>",
    "task": "Add <h2> and <h3> subheadings for chat activity groups (Coding, Design, Hardware) while preserving your existing page content.",
    "steps": [
      "In index.html, find a spot below your meeting card.",
      "Add a new <section id=\"activity-groups\"> container.",
      "Inside the section, add an <h2> heading titled 'Chat activity groups'.",
      "Add three <h3> subheadings beneath it: 'Coding group', 'Design group', and 'Hardware group', each with a brief <p> description.",
      "Verify that your headings follow a step-by-step order from <h2> down to <h3> without skipping levels."
    ],
    "check": {
      "question": "Why should you avoid jumping straight from an <h2> heading to an <h4> heading?",
      "options": [
        "Skipping levels breaks the logical outline of the page, making it confusing for screen readers and visitors.",
        "Web browsers will refuse to load any text after an <h4> tag.",
        "HTML only permits <h2> tags on odd-numbered days."
      ],
      "answer": 0,
      "explanation": "Headings create a clear outline of your page. Skipping levels (like h2 straight to h4) breaks that outline and confuses assistive technology like screen readers."
    },
    "sources": [
      "html_headings.asp",
      "/html/html_exercise_embed.asp?topic=headings",
      "/html/html_challenges_headings.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"activity-groups\">\n  <h2>Chat activity groups</h2>\n  <h3>Coding group</h3>\n  <p>Learn web building and app development.</p>\n  <h3>Design group</h3>\n  <p>Explore user interfaces, color, and typography.</p>\n  <h3>Hardware group</h3>\n  <p>Tinker with electronics, sensors, and robotics.</p>\n</section>"
    }
  },
  {
    "id": "html-paragraphs-spacing",
    "module": "foundations",
    "title": "Paragraphs and line breaks",
    "minutes": 15,
    "intro": "When you write text on a webpage, you want it to look neat and readable. In HTML, the <p> tag creates a paragraph, which automatically starts on a fresh line with a little breathing room above and below it.\n\nA surprising thing for beginners is that web browsers ignore extra spaces and enter keys you type in your code—this is called whitespace collapsing. If you press space five times or hit enter ten times, the browser still shows just a single space!\n\nWhen you need an actual line break inside the same paragraph—like for a street address or a poem—use the <br> tag. To draw a clean divider line between two different topics, use <hr>. And if you want the browser to keep every single space and enter key exactly as you typed it, wrap your text inside <pre>.",
    "concepts": [
      {
        "term": "<p> for paragraphs",
        "description": "Wraps a block of text and automatically adds blank space above and below so your words are comfortable to read."
      },
      {
        "term": "Space collapsing",
        "description": "Browsers turn multiple spaces, tabs, and enter keys in your code into a single space on screen."
      },
      {
        "term": "<br> for line breaks",
        "description": "Forces a line break right where you put it without creating a whole new paragraph. Perfect for poems or addresses."
      },
      {
        "term": "<hr> for divider lines",
        "description": "Draws a horizontal line across the page to mark a switch to a new topic or section."
      },
      {
        "term": "<pre> for preformatted text",
        "description": "Tells the browser to show text in a monospace font and keep every single space and line break exactly as you typed it."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<section>\n  <h2>Chat schedule</h2>\n  <p>Our chat is open all week. Stop by to write code, ask questions, or hang out!</p>\n\n  <!-- A divider line between topics -->\n  <hr>\n\n  <h3>Weekly room directory</h3>\n  <!-- Preformatted text keeps all spaces and enters -->\n  <pre>\nDay        Event                  Time\n---------------------------------------------\nMonday     Web design chat room    6:00 PM\nWednesday  Study hall and tea     5:00 PM\nSaturday   Hackathon build day    10:00 AM\n  </pre>\n</section>",
    "task": "Add a chat schedule section with paragraphs, a divider line (<hr>), and a preformatted room directory (<pre>) to your existing index.html page.",
    "steps": [
      "Open your existing index.html and find where your welcome section ends.",
      "Add an <hr> tag below the welcome section to create a divider line separating your intro from the new schedule.",
      "Below the line, create a <section id=\"schedule\"> container with an <h2> heading that says 'Chat schedule'.",
      "Add a <p> paragraph welcoming students to join daily study sessions.",
      "Add a <pre> block displaying a simple room directory with days, conversations, and times lined up using spaces."
    ],
    "check": {
      "question": "What happens if you type four enter keys and ten spaces inside a normal <p> tag in your HTML file?",
      "options": [
        "The browser shows four blank lines and ten spaces on the page.",
        "The browser ignores the extra spaces and enters, showing only a single space.",
        "The browser displays a red error message because extra spaces are not allowed."
      ],
      "answer": 1,
      "explanation": "Web browsers collapse extra spaces and line breaks in your HTML code into a single space. If you want to keep exact spacing and line breaks, use the <pre> tag."
    },
    "sources": [
      "html_paragraphs.asp",
      "/html/html_exercise_embed.asp?topic=paragraphs",
      "/html/html_challenges_paragraphs.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<hr>\n<section id=\"schedule\">\n  <h2>Chat schedule</h2>\n  <p>Drop in during our open lab hours to work on projects and meet other learners.</p>\n  <pre>\nMon - Fri: 4:00 PM - 8:00 PM\nSaturday:  10:00 AM - 4:00 PM\nSunday:    Closed\n  </pre>\n</section>"
    }
  },
  {
    "id": "html-text-formatting",
    "module": "foundations",
    "title": "Bold, italic, and highlighted text",
    "minutes": 15,
    "intro": "Text is more interesting and easier to scan when you emphasize key words. HTML gives you tags to mark text as important, italicize words for emphasis, highlight phrases, or mark fine print. Different tags have different meanings: <strong> tells the browser text has strong importance, while <b> just makes text bold for visual styling. Similarly, <em> adds vocal emphasis, while <i> simply styles words in italics without extra stress.",
    "concepts": [
      {
        "term": "<strong> vs <b>",
        "description": "<strong> indicates that the text is of strong importance or urgency. <b> simply draws attention visually in bold font without adding extra importance."
      },
      {
        "term": "<em> vs <i>",
        "description": "<em> adds emphasized stress to a word or phrase, indicating how it should be read. <i> displays text in italics for technical terms, alternate voices, or book titles without added stress."
      },
      {
        "term": "Screen reader emphasis note",
        "description": "Do not assume screen readers will automatically speak <strong> or <em> with a louder or deeper voice. While the semantic meaning is available to assistive tech, speech output depends on user settings."
      },
      {
        "term": "<mark> for highlights",
        "description": "Places a bright yellow background behind words to draw attention when visitors are skimming the page."
      },
      {
        "term": "<small> for fine print",
        "description": "Renders text in a smaller font, ideal for copyright notices, terms of use, or secondary side notes."
      },
      {
        "term": "<del> and <ins> for updates",
        "description": "Shows deleted text with a strikethrough line and inserted text with an underline to display revisions clearly."
      },
      {
        "term": "<sub> and <sup> for subscripts and superscripts",
        "description": "Lowers text for chemical formulas like H₂O, or raises text above the line for numbers like 1st."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<p>\n  <strong>Important safety note:</strong> Wear goggles in the hardware lab.\n  <b>Look here:</b> check the sign posted by the door.\n</p>\n<p>\n  We <em>really</em> want you to join our hackathon! In programming, an\n  <i>algorithm</i> is a list of step-by-step instructions.\n</p>\n<p>\n  Meeting room moved from <del>Room 101</del> to <ins>Room 204</ins>!\n  Register by <mark>Friday noon</mark>.\n  <small>Chat members only.</small>\n</p>\n<p>\n  Join our 1<sup>st</sup> web challenge. Water formula is H<sub>2</sub>O.\n</p>",
    "task": "Format an announcement box in index.html comparing <strong> vs <b>, <em> vs <i>, and highlighting deadlines with <mark>.",
    "steps": [
      "Open index.html and locate the area right beneath your activity groups.",
      "Add a <div class=\"announcement\"> container to hold chat notices.",
      "Add a paragraph using <strong> for an important safety alert and <b> to draw attention to a tip.",
      "Add a second paragraph using <del> and <ins> for a room update, and <mark> around the RSVP deadline.",
      "Save index.html and preview the formatted text styles in your browser."
    ],
    "check": {
      "question": "Why should you use <strong> instead of just making text bold for visual looks?",
      "options": [
        "The <strong> tag tells screen readers and browsers that the words are genuinely important, not just visually thick.",
        "The <strong> tag turns the words into clickable web links automatically.",
        "The <strong> tag makes text load faster over slow internet connections."
      ],
      "answer": 0,
      "explanation": "<strong> gives semantic meaning to important text, so assistive tools like screen readers know to emphasize it for users who cannot see the screen."
    },
    "sources": [
      "html_formatting.asp",
      "/html/html_exercise_embed.asp?topic=formatting",
      "/html/html_challenges_formatting.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<div class=\"announcement\">\n  <p><strong>Safety note:</strong> Clean your table before leaving. <b>Tip:</b> recycling bins are near the door.</p>\n  <p>Meeting moved from <del>Room 101</del> to <ins>Room 204</ins>! RSVP by <mark>Friday noon</mark>. <small>Members only.</small></p>\n</div>"
    }
  },
  {
    "id": "html-quotations-citations",
    "module": "foundations",
    "title": "Quotes and citations",
    "minutes": 15,
    "intro": "When sharing words from other people or giving credit to books and websites, HTML has built-in tags that keep your writing clear and honest.\n\nFor long quotes that deserve their own space, use <blockquote>. The browser indents it on both sides so it stands out as a special passage. For short quotes right inside a sentence, use <q>—the browser will insert the quotation marks for you automatically!\n\nYou can also use <abbr> to show what an acronym or abbreviation stands for when someone hovers over it, <address> to display room or email contact details, <cite> to name a creative work like a book or guide, and <bdo> if you ever need to flip text direction.",
    "concepts": [
      {
        "term": "<blockquote> for long quotes",
        "description": "Displays a standalone block of quoted text indented from the main content."
      },
      {
        "term": "<q> for short inline quotes",
        "description": "Wraps a quick quote inside a regular sentence, adding matching quotation marks automatically."
      },
      {
        "term": "<abbr> with title tooltip",
        "description": "Wraps an abbreviation like HTML or NASA; hovering over it shows the full phrase in a helpful tooltip."
      },
      {
        "term": "<address> for contact info",
        "description": "Holds contact details like physical room numbers, emails, or phone numbers for a page or organization."
      },
      {
        "term": "<cite> for titles of works",
        "description": "Marks the title of a book, article, movie, or project so readers know you are naming a creative work."
      },
      {
        "term": "<bdo> for text direction",
        "description": "Stands for bi-directional override; lets you switch text from left-to-right to right-to-left."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<section>\n  <h2>What members say</h2>\n  <p>\n    Our advisor says, <q>Curiosity is the best tool in tech.</q>\n    We read about this in the book <cite>Beginner Web Journeys</cite>.\n  </p>\n\n  <blockquote cite=\"https://campuschat.org/story\">\n    \"Joining the chat gave me the confidence to build my first website.\n    The community here helps you whenever you get stuck.\"\n  </blockquote>\n\n  <p>Questions? Reach out to our <abbr title=\"Peer Learning Coordinator\">PLC</abbr>.</p>\n\n  <address>\n    Campus Chat, Student Center<br>\n    Room 204, Second Floor<br>\n    Email: hello@campuschat.org\n  </address>\n</section>",
    "task": "Add a member testimonial quote and the chat room contact address with an abbreviation tooltip to index.html without removing previous sections.",
    "steps": [
      "In index.html, add a <blockquote> element containing a short encouraging quote from a chat member.",
      "Add a cite attribute to the <blockquote> pointing to the story source URL.",
      "Below the quote, create an <address> tag to hold chat contact information.",
      "Inside the address, add room and email details separated by <br> line break tags.",
      "Include an <abbr title=\"Campus Chat President\">CCP</abbr> abbreviation tag next to the student leader's name."
    ],
    "check": {
      "question": "Which tag should you use to mention the title of a book or article in your HTML text?",
      "options": [
        "The <address> tag.",
        "The <cite> tag.",
        "The <q> tag."
      ],
      "answer": 1,
      "explanation": "The <cite> tag is specially made to hold the title of a creative work, such as a book, article, movie, or web tutorial."
    },
    "sources": [
      "html_quotation_elements.asp",
      "/html/html_exercise_embed.asp?topic=quotation_elements",
      "/html/html_challenges_quotations.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<blockquote cite=\"https://campuschat.org/stories\">\n  \"The weekend code sessions helped me pass my first web design class with confidence!\"\n</blockquote>\n<address>\n  Campus Chat HQ<br>\n  Student Center, Room 204<br>\n  Contact: <abbr title=\"Campus Chat President\">CCP</abbr> Maya Lin\n</address>"
    }
  },
  {
    "id": "html-comments-organization",
    "module": "foundations",
    "title": "Notes in your code",
    "minutes": 10,
    "intro": "As your webpage grows, your HTML file will get longer and more detailed. HTML comments give you a friendly way to leave notes for yourself and your teammates directly in your code without showing anything on the screen.\n\nTo write a comment, start with <!-- and end with -->. Anything in between is completely invisible to people viewing the page in a browser. You can use comments to label different sections, explain tricky parts, or temporarily disable code while testing.\n\nOne golden rule to remember: anyone can right-click your web page and choose 'View Page Source' to read your HTML! That means comments are public to anyone on the web, so never put passwords, secret keys, or private phone numbers in them.",
    "concepts": [
      {
        "term": "Comment syntax",
        "description": "Starts with <!-- and ends with -->. Browsers skip over it completely when drawing your webpage."
      },
      {
        "term": "Leaving notes",
        "description": "Great for explaining what a section is for, reminding yourself of things to finish, or helping team members navigate."
      },
      {
        "term": "Section banners",
        "description": "Clear divider comments like <!-- ABOUT SECTION --> make finding parts of a long file fast and simple."
      },
      {
        "term": "Testing and hiding code",
        "description": "Wrapping code in comment tags lets you hide an element temporarily without deleting it."
      },
      {
        "term": "Public visibility warning",
        "description": "Anyone can read your HTML comments using 'View Source', so never include secrets or passwords."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat</title>\n</head>\n<body>\n  <!-- =============================== -->\n  <!-- HEADER SECTION                  -->\n  <!-- =============================== -->\n  <header>\n    <h1>Campus Chat</h1>\n  </header>\n\n  <!-- MAIN BODY CONTENT -->\n  <main>\n    <!-- Member stats box -->\n    <div class=\"stats\">\n      <p>Members: 120 | Projects: 15</p>\n    </div>\n\n    <!-- Temporary note: chat room profile submission opens next week\n    <p>Sign up now for our next coding sprint!</p>\n    -->\n    <p>Welcome to our tech chat! Drop by anytime.</p>\n  </main>\n</body>\n</html>",
    "task": "Add section comments in index.html to label your header, about section, and schedule, and add a quick member stats note without altering earlier code.",
    "steps": [
      "Open index.html and locate where your header, welcome, and schedule sections sit.",
      "Add an <!-- HEADER SECTION --> comment directly above your <header> element.",
      "Add an <!-- ABOUT SECTION --> comment above your welcome container.",
      "Add an <!-- MEMBER STATS --> comment and place a quick numbers note inside a <div> right below it.",
      "Preview index.html in your browser to verify that none of the comment text appears on your visual webpage."
    ],
    "check": {
      "question": "Why should you never write sensitive information like passwords inside HTML comments?",
      "options": [
        "Because anyone can view your HTML comments by using 'View Page Source' in their web browser.",
        "Because HTML comments automatically email passwords to search engines.",
        "Because the browser will refuse to load any webpage that contains comments."
      ],
      "answer": 0,
      "explanation": "HTML files are sent directly to the visitor's computer. Anyone can open 'View Page Source' or inspect the page to read every comment you wrote."
    },
    "sources": [
      "html_comments.asp",
      "/html/html_exercise_embed.asp?topic=comments",
      "/html/html_challenges_comments.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<!-- MEMBER STATS SECTION -->\n<div class=\"stats-counter\">\n  <p>Active Members: 120+ | Ongoing Projects: 14</p>\n</div>\n<!-- END STATS SECTION -->"
    }
  },
  {
    "id": "html-project-bio",
    "module": "foundations",
    "title": "Project: Chat profiles",
    "minutes": 20,
    "intro": "Time to put all your new skills together! In this project, you will build a friendly Chat profiles section for your chat website. Real websites group people cards inside <article> containers, using headings for names, styled text for roles, <cite> to name creative projects or publications, and <code> for software tools. This clean structure looks great and helps all visitors read profile cards easily.",
    "concepts": [
      {
        "term": "<article> for profile cards",
        "description": "A self-contained box for each member that can stand alone as a complete piece of information."
      },
      {
        "term": "Component heading levels",
        "description": "Using an <h3> for each person name under an <h2> section title creates a clear, logical outline."
      },
      {
        "term": "Combining styling tags",
        "description": "Pairing <em> for labels and <strong> for job titles makes key details stand out to readers."
      },
      {
        "term": "Creative works with <cite>",
        "description": "Use <cite> strictly for titles of creative works—such as project names, publications, or books. Do not use <cite> for software tools; write tools in plain text or with <code>."
      },
      {
        "term": "Accessibility for everyone",
        "description": "Using semantic tags like <article>, <h3>, and <cite> gives assistive devices clear clues about who each person is and what they built."
      },
      {
        "term": "Profile containers",
        "description": "section groups the profile directory; article holds one independent profile. h3 is a heading below h2. code marks a literal code token. These tags describe content; they add no layout or behavior."
      }
    ],
    "example": "<section id=\"profiles\">\n  <h2>Chat profiles</h2>\n\n  <!-- Bio card for Jordan -->\n  <article class=\"bio-card\">\n    <h3>Jordan Lee</h3>\n    <p><em>Role:</em> <strong>Chat room Lead</strong></p>\n    <p>Junior studying design and code. Jordan loves helping beginners build their first web pages.</p>\n    <p>Featured project: <cite>Campus Event Finder</cite></p>\n    <p>Favorite tools: <code>HTML</code>, <code>CSS</code>, and <code>Figma</code>.</p>\n  </article>\n\n  <!-- Bio card for Samira -->\n  <article class=\"bio-card\">\n    <h3>Samira Patel</h3>\n    <p><em>Role:</em> <strong>Community Manager</strong></p>\n    <p>Sophomore organizing hackathons and weekly study sessions for all students.</p>\n    <p>Published guide: <cite>The First-Year Hacker Handbook</cite></p>\n    <p>Favorite tools: <code>Markdown</code> and <code>VS Code</code>.</p>\n  </article>\n</section>",
    "task": "Build a Chat profiles section in index.html with bio cards, citing a creative project with <cite> and listing tools with <code>.",
    "steps": [
      "Open index.html and navigate below your announcement section.",
      "Add a <section id=\"profiles\"> with an <h2> title reading \"Chat profiles\".",
      "Insert an <article class=\"bio-card\"> container for the first chat moderator.",
      "Add an <h3> with Jordan Lee, a role paragraph using <em> and <strong>, a featured project with <cite>Campus Event Finder</cite>, and tools with <code>.",
      "Save index.html and view your new student profiles profile card in the browser."
    ],
    "check": {
      "question": "Why is <article> a great tag to wrap each person's bio card in?",
      "options": [
        "Because each bio card is an independent, self-contained profile that makes sense on its own.",
        "Because <article> automatically connects to a database to fetch live photos.",
        "Because <article> is the only HTML tag that allows bold text inside it."
      ],
      "answer": 0,
      "explanation": "The <article> element represents a self-contained piece of content that could stand alone or be shared anywhere, making it ideal for profile cards, blog posts, and news items."
    },
    "sources": [
      "html_project_bio.php"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"profiles\">\n  <h2>Chat profiles</h2>\n  <article class=\"bio-card\">\n    <h3>Jordan Lee</h3>\n    <p><em>Role:</em> <strong>Chat room Lead</strong></p>\n    <p>Junior studying design and code. Jordan loves helping beginners build their first web pages.</p>\n    <p>Featured project: <cite>Campus Event Finder</cite></p>\n    <p>Favorite tools: <code>HTML</code>, <code>CSS</code>, and <code>Figma</code>.</p>\n  </article>\n</section>"
    }
  },
  {
    "id": "html-page-title-favicon",
    "module": "appearance",
    "title": "Tab title and favicon",
    "minutes": 12,
    "intro": "Every webpage needs a clear name and a small icon so visitors can find it easily. The <title> tag sits inside the <head> section and controls what appears on the browser tab, bookmarks, and search results. Beside the title, browsers display a tiny graphic called a favicon. You connect a favicon using a <link rel=\"icon\"> tag in the <head>. You can point to an image file or write an SVG icon directly inside the tag so it loads right away without needing extra files.",
    "concepts": [
      {
        "term": "<title> tag",
        "description": "A required element in the <head> that sets the text shown on the browser tab and bookmark bars."
      },
      {
        "term": "Browser tab title",
        "description": "The title displayed at the top of your browser window, helping visitors identify your page among many open tabs."
      },
      {
        "term": "Search result title",
        "description": "Search engines like Google use your page title as the main clickable headline in search results."
      },
      {
        "term": "Favicon",
        "description": "The tiny icon shown next to your page title on the browser tab and in bookmarks."
      },
      {
        "term": "<link rel=\"icon\">",
        "description": "The tag placed inside the <head> that tells the browser where to find your site favicon."
      },
      {
        "term": "SVG data URI",
        "description": "A way to put vector icon code directly inside the href attribute so your favicon displays immediately without downloading an image file."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Campus Chat - Student Tech Hub</title>\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%230055aa'/><text x='50' y='65' font-size='45' font-weight='bold' fill='white' text-anchor='middle'>C</text></svg>\">\n</head>\n<body>\n  <h1>Welcome to Campus Chat</h1>\n  <p>Notice the custom tab title and icon in your browser tab!</p>\n</body>\n</html>",
    "task": "Update the existing <title> in your index.html <head> and add an SVG favicon directly beneath it. Keep your existing <!DOCTYPE html>, <html>, and <body> structure intact.",
    "steps": [
      "Open your existing index.html file and locate the <head> section near the top.",
      "Update the text inside the existing <title> tag to 'Campus Chat - Student Tech Hub'.",
      "Add a <link rel=\"icon\" type=\"image/svg+xml\"> tag directly below the title tag in the <head>.",
      "Set the href attribute to the provided SVG icon data URI depicting a blue circle with the letter 'C'.",
      "Save index.html and look at your browser tab to see your new title and icon."
    ],
    "check": {
      "question": "Where does the <title> tag belong, and what does it do?",
      "options": [
        "It goes inside the <head> and sets the text on the browser tab and search results.",
        "It goes inside the <body> and creates a big heading at the top of the page.",
        "It goes after the </html> tag and names the saved file on your hard drive."
      ],
      "answer": 0,
      "explanation": "The <title> tag lives in the <head> section. It does not show up as text on the webpage body; instead, it sets the name on the browser tab, bookmarks, and search listings."
    },
    "sources": [
      "html_page_title.asp",
      "html_favicon.asp",
      "/html/html_exercise_embed.asp?topic=favicon",
      "/html/html_exercise_embed.asp?topic=page_title"
    ],
    "patch": {
      "target": "head",
      "html": "<title>Campus Chat - Student Tech Hub</title>\n<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%230055aa'/><text x='50' y='65' font-size='45' font-weight='bold' fill='white' text-anchor='middle'>C</text></svg>\">"
    }
  },
  {
    "id": "html-inline-styles",
    "module": "appearance",
    "title": "Add styles with the style attribute",
    "minutes": 12,
    "intro": "By default, browsers display HTML elements with simple plain styling: black text on a white background. The style attribute lets you change colors, fonts, sizes, and spacing directly inside an element tag. You write inline styles using a simple format: style=\"property: value;\". For example, color changes the text color, background-color fills the area behind the text, and text-align centers content. Inline styles are handy for quick experiments or one-off styling, though styling multiple pages is usually easier with stylesheets.",
    "concepts": [
      {
        "term": "style attribute",
        "description": "An attribute added to an opening HTML tag that lets you style that specific element directly."
      },
      {
        "term": "Property and value",
        "description": "The styling rule format (property: value;) where property is what you want to change (like color) and value is the choice you pick (like white)."
      },
      {
        "term": "color property",
        "description": "Sets the color of text inside an element."
      },
      {
        "term": "background-color property",
        "description": "Sets the fill color behind the text and content inside an element."
      },
      {
        "term": "text-align property",
        "description": "Controls how text lines up horizontally inside a container, such as left, right, or center."
      },
      {
        "term": "When to use inline styles",
        "description": "Great for quick tests and single styled callouts, but best kept light so your HTML stays neat and easy to manage."
      },
      {
        "term": "Declarations in this banner",
        "description": "background-color paints the background; color sets text color; padding adds inside space; margin adds outside space; text-align aligns inline text; border-radius rounds corners. Values such as 20px are CSS lengths. A div is a generic block container."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<div style=\"background-color: #003366; color: white; padding: 20px; text-align: center; border-radius: 8px;\">\n  <h2 style=\"font-family: sans-serif; margin: 0 0 10px;\">Welcome to Innovation Labs</h2>\n  <p style=\"font-size: 18px; margin: 0;\">Open chat rooms every weekday at 4 PM.</p>\n</div>",
    "task": "Add a styled welcome banner box inside the existing <body> of your chat index.html, directly under your header. Preserve your existing page structure.",
    "steps": [
      "Open index.html and locate the area right below your existing <header> inside the <body>.",
      "Add a <div> element with a style attribute setting background-color: #003366; color: white; padding: 20px; text-align: center; border-radius: 8px;.",
      "Inside this styled div, add an <h2> heading with the text 'Build the Future Together'.",
      "Below the heading, add a <p> tag with the text 'Join our open chat collaboration sessions every Friday evening.'.",
      "Save index.html and refresh your browser preview to see your new dark blue banner box."
    ],
    "check": {
      "question": "What is the correct syntax for adding an inline style to change text color to blue?",
      "options": [
        "style=\"color: blue;\"",
        "font=\"color: blue;\"",
        "color=\"text: blue;\""
      ],
      "answer": 0,
      "explanation": "Inline styles always use the style attribute with property-value pairs inside quotes, written as style=\"property: value;\"."
    },
    "sources": [
      "html_styles.asp",
      "/html/html_exercise_embed.asp?topic=styles",
      "/html/html_challenges_styles.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<div style=\"background-color: #003366; color: white; padding: 20px; text-align: center; border-radius: 8px;\">\n  <h2 style=\"margin: 0 0 10px;\">Build the Future Together</h2>\n  <p style=\"margin: 0;\">Join our open chat collaboration sessions every Friday evening.</p>\n</div>"
    }
  },
  {
    "id": "html-colors-systems",
    "module": "appearance",
    "title": "Web colors: names, RGB, HEX, and HSL",
    "minutes": 14,
    "intro": "Colors make a website look lively and show off your chat community brand. In HTML and CSS, you can pick colors in four friendly ways: standard color names, RGB numbers, HEX codes, or HSL wheel degrees. You can also make colors semi-transparent using alpha transparency with rgba() or hsla(). Always keep readability in mind by ensuring high contrast between your text and background colors.",
    "concepts": [
      {
        "term": "Color names",
        "description": "HTML recognizes 140 standard color names like Navy, Gold, Tomato, and SteelBlue for quick color styling."
      },
      {
        "term": "RGB colors",
        "description": "rgb(red, green, blue) mixes three color channels with values from 0 to 255. For example, rgb(0, 102, 204) creates a bright blue."
      },
      {
        "term": "HEX codes (00 to ff)",
        "description": "#RRGGBB uses hexadecimal numbers from 00 (no light) to ff (maximum intensity, 255 in decimal) for red, green, and blue."
      },
      {
        "term": "3-digit HEX shorthand",
        "description": "A 3-digit shorthand like #08f expands to #0088ff by doubling each digit for red, green, and blue."
      },
      {
        "term": "HSL and HSLA",
        "description": "hsl(hue, saturation%, lightness%) sets color on a 360-degree color wheel. hsla(h, s%, l%, alpha) adds an alpha transparency value from 0 (invisible) to 1 (solid)."
      },
      {
        "term": "RGBA transparency and contrast",
        "description": "rgba(r, g, b, alpha) creates translucent overlays. Always make sure body text has high contrast against its background so it is easy to read."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<style>\n  .name-box  { background-color: Navy; color: white; padding: 8px; }\n  .rgb-box   { background-color: rgb(0, 102, 204); color: white; padding: 8px; }\n  .hex-box   { background-color: #0066cc; color: white; padding: 8px; } /* 00 to ff */\n  .short-hex { background-color: #08f; color: white; padding: 8px; }    /* #08f = #0088ff */\n  .hsl-box   { background-color: hsl(210, 100%, 40%); color: white; padding: 8px; }\n  .rgba-box  { background-color: rgba(0, 51, 102, 0.75); color: white; padding: 8px; }\n  .hsla-box  { background-color: hsla(210, 100%, 40%, 0.75); color: white; padding: 8px; }\n</style>\n\n<div class=\"name-box\">Named: Navy</div>\n<div class=\"rgb-box\">RGB: rgb(0, 102, 204)</div>\n<div class=\"hex-box\">HEX: #0066cc (channels 00 to ff)</div>\n<div class=\"short-hex\">Shorthand HEX: #08f (expands to #0088ff)</div>\n<div class=\"hsl-box\">HSL: hsl(210, 100%, 40%)</div>\n<div class=\"rgba-box\">Semi-transparent RGBA: rgba(0, 51, 102, 0.75)</div>\n<div class=\"hsla-box\">Semi-transparent HSLA: hsla(210, 100%, 40%, 0.75)</div>",
    "task": "Add a chat color palette section into the existing <body> of index.html, placed right below your welcome banner. Keep all earlier content in place.",
    "steps": [
      "Open index.html and find the spot below your welcome banner inside the <body>.",
      "Add a new <section id=\"chat-colors\"> element containing an <h2> heading that says 'Chat Color Palette'.",
      "Add a paragraph for each color sample; use only color and background-color in its style attribute.",
      "Add four badge <div> boxes inside the container displaying HEX (#004488), RGB (rgb(240, 160, 40)), HSL (hsl(140, 60%, 40%)), and a see-through RGBA (rgba(0, 0, 0, 0.65)) badge.",
      "Save index.html and refresh your browser preview to verify that all four color swatches display clearly."
    ],
    "check": {
      "question": "What does the 'A' in an RGBA color value like rgba(0, 0, 0, 0.5) control?",
      "options": [
        "It controls alpha transparency, making the color 50% see-through.",
        "It controls the alignment of text inside the box.",
        "It sets the animation speed of the background color."
      ],
      "answer": 0,
      "explanation": "The A in RGBA stands for Alpha. It takes a number between 0 (completely invisible) and 1 (completely solid) to create see-through color overlays."
    },
    "sources": [
      "html_colors.asp",
      "html_colors_rgb.asp",
      "html_colors_hex.asp",
      "html_colors_hsl.asp",
      "/html/html_exercise_embed.asp?topic=colors",
      "/html/html_challenges_colors.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"chat-colors\">\n  <h2>Chat Color Palette</h2>\n  <div style=\"\">\n    <div style=\"background-color: #004488; color: white; \">Navy: #004488</div>\n    <div style=\"background-color: #08f; color: white; \">Shorthand: #08f</div>\n    <div style=\"background-color: rgb(240, 160, 40); color: black; \">Gold: rgb(240, 160, 40)</div>\n    <div style=\"background-color: hsl(140, 60%, 40%); color: white; \">Green: hsl(140, 60%, 40%)</div>\n    <div style=\"background-color: rgba(0, 0, 0, 0.65); color: white; \">Overlay: rgba(0, 0, 0, 0.65)</div>\n    <div style=\"background-color: hsla(210, 80%, 30%, 0.75); color: white; \">Alpha: hsla(210, 80%, 30%, 0.75)</div>\n  </div>\n</section>"
    }
  },
  {
    "id": "html-css-cascade",
    "module": "appearance",
    "title": "Adding styles with CSS",
    "minutes": 15,
    "intro": "CSS stands for Cascading Style Sheets. It is the language used to make HTML look beautiful. You can add CSS in three ways: directly on a tag with inline styles, inside a <style> block in the <head>, or in a separate .css file. CSS uses selectors to choose what to style: element selectors (like p) change all tags of that type, class selectors (like .card) style groups of items, and ID selectors (like #header) style a single unique item. When two styling rules disagree, the more specific rule wins. Many styles, like font choice and text color, automatically pass down from parent elements to their child elements through inheritance.",
    "concepts": [
      {
        "term": "Three ways to add CSS",
        "description": "Inline styles on an individual tag, internal styles inside a <style> tag in the <head>, or external styles in a linked .css file."
      },
      {
        "term": "Element selector",
        "description": "Targets every tag of that type on the page (like p, h2, or body) to set general default styling."
      },
      {
        "term": "Class selector (.name)",
        "description": "Targets any element that has a matching class attribute, letting you reuse the same style on multiple cards or buttons."
      },
      {
        "term": "ID selector (#name)",
        "description": "Targets one single element with a specific id attribute, used for unique one-of-a-kind sections."
      },
      {
        "term": "The cascade rule",
        "description": "When two CSS rules target the same element, the more specific rule wins: inline beats ID, ID beats class, and class beats element."
      },
      {
        "term": "CSS inheritance",
        "description": "Certain styles like font-family and text color set on a parent element (like <body>) naturally trickle down to all child elements inside it."
      },
      {
        "term": "Selectors before styling",
        "description": "A tag selector such as p matches all paragraphs; .message matches class=\"message\"; #about matches id=\"about\". Braces contain property: value; declarations. Commas combine selectors. A space selects descendants. CSS affects presentation only."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Cascade Demo</title>\n  <style>\n    /* 1. Element selector: sets the base font for the whole page */\n    body { font-family: sans-serif; line-height: 1.6; color: #222; }\n    \n    /* 2. Class selector: reusable card box */\n    .card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; margin-bottom: 12px; }\n    \n    /* 3. Class selector: reusable button */\n    .btn { display: inline-block; padding: 8px 16px; background-color: #0055aa; color: white; text-decoration: none; border-radius: 4px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Upcoming Chat room</h2>\n    <p>Learn web building basics with fellow students.</p>\n    <a href=\"#\" class=\"btn\">Sign Up</a>\n  </div>\n</body>\n</html>",
    "task": "Add an internal <style> block inside the <head> of index.html to set page typography, card boxes, and a button class. Preserve your existing <title>, favicon link, and <body> content.",
    "steps": [
      "Open index.html, find the <head> section, and add an opening <style> and closing </style> tag right below your favicon link.",
      "Inside the <style> block, add a body rule setting font-family: sans-serif; line-height: 1.6; color: #222; so fonts inherit across the page.",
      "Add a .card class rule with border: 1px solid #ddd; padding: 16px; border-radius: 8px; margin-bottom: 12px; for reusable boxes.",
      "Add a .btn class rule setting display: inline-block; padding: 8px 16px; background-color: #0055aa; color: white; text-decoration: none; border-radius: 4px;.",
      "Save index.html and preview your page in the browser to see your new typography and styles take effect."
    ],
    "check": {
      "question": "If an element has styles from an element rule, a class rule, and an inline style attribute, which one wins?",
      "options": [
        "The inline style attribute wins because it is the most specific.",
        "The element rule wins because it was written first.",
        "The class rule wins because classes always override everything else."
      ],
      "answer": 0,
      "explanation": "In the CSS cascade, inline styles on the tag itself are the most specific and win over class, ID, or element selectors."
    },
    "sources": [
      "html_css.asp",
      "/html/html_exercise_embed.asp?topic=css",
      "/html/html_challenges_css.asp"
    ],
    "patch": {
      "target": "head",
      "html": "<style>\n  body { font-family: sans-serif; line-height: 1.6; color: #222; }\n  .card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; margin-bottom: 12px; }\n  .btn { display: inline-block; padding: 8px 16px; background-color: #0055aa; color: white; text-decoration: none; border-radius: 4px; }\n</style>"
    }
  },
  {
    "id": "html-links-navigation",
    "module": "appearance",
    "title": "Links to pages and email",
    "minutes": 10,
    "intro": "Hyperlinks (or just links) connect the web together. In HTML, links are created using the <a> tag, which stands for anchor. The href attribute tells the browser where to go when someone clicks the link. You can link to other websites, point to different pages inside your own project, or even open an email program or telephone dialer.",
    "concepts": [
      {
        "term": "The anchor tag and href attribute",
        "description": "The <a> tag creates a clickable link. The href attribute (hypertext reference) tells the browser the web address or file path to visit when clicked."
      },
      {
        "term": "Absolute links",
        "description": "Links that use a complete web address starting with https:// to send visitors to other websites on the internet."
      },
      {
        "term": "Relative links",
        "description": "Links that point to files inside your own project folder (such as about.html) or jump to sections on the same page."
      },
      {
        "term": "Opening links in a new tab",
        "description": "Adding target=\"_blank\" makes a link open in a new browser tab. Always add rel=\"noopener noreferrer\" alongside it to keep your site secure."
      },
      {
        "term": "Email and phone links",
        "description": "Using href=\"mailto:team@example.com\" opens the visitor's default email app, and href=\"tel:+18005550199\" lets mobile phones dial a number immediately."
      },
      {
        "term": "Navigation markup",
        "description": "nav groups major navigation links. aria-label gives the group a name for assistive technology. A fragment href=\"#about\" targets the existing element with id=\"about\"."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<nav aria-label=\"Chat navigation\">\n  <!-- Link to a page in your project -->\n  <a href=\"index.html\">Home</a> |\n  <a href=\"about.html\">About</a> |\n  \n  <!-- Link to an outside website in a new tab -->\n  <a href=\"https://www.w3schools.com\" target=\"_blank\" rel=\"noopener noreferrer\">W3Schools</a> |\n  \n  <!-- Link that opens an email app -->\n  <a href=\"mailto:chat@example.edu\">Email Us</a> |\n  \n  <!-- Link that opens a phone dialer -->\n  <a href=\"tel:+18005550199\">Call Us</a>\n</nav>",
    "task": "Add a navigation bar near the top of index.html inside the body with links to chat sections and an email link, preserving all existing headings and content.",
    "steps": [
      "Open your existing index.html file in your code editor.",
      "Near the top of the <body> element, just below your main heading, add a <nav> container.",
      "Inside <nav>, add links to your existing sections: <a href=\"#about\">About</a> and <a href=\"#activity-groups\">Activities</a>. After the gallery lesson, add <a href=\"#gallery\">Gallery</a>.",
      "Add an email link using <a href=\"mailto:chat@example.edu\">Email Us</a> so visitors can send questions to your chat community.",
      "Save index.html and preview your page in the browser to make sure each link appears clearly."
    ],
    "check": {
      "question": "Which attribute and value should you add to an <a> tag to open a link in a brand-new browser tab?",
      "options": [
        "target=\"_blank\"",
        "open=\"new-tab\"",
        "window=\"popup\""
      ],
      "answer": 0,
      "explanation": "The target=\"_blank\" attribute opens the destination in a new tab or window. Always pair it with rel=\"noopener noreferrer\" to protect your website's security."
    },
    "sources": [
      "html_links.asp",
      "/html/html_exercise_embed.asp?topic=links",
      "/html/html_challenges_links.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<nav id=\"main-nav\">\n  <a href=\"#about\">About</a> |\n  <a href=\"#activity-groups\">Activities</a> |\n  <a href=\"mailto:chat@example.edu\">Email us</a>\n</nav>"
    }
  },
  {
    "id": "html-links-styling-bookmarks",
    "module": "appearance",
    "title": "Styling links and page jumps",
    "minutes": 10,
    "intro": "By default, browsers show links as underlined blue text that turns purple once visited. You can use CSS to change link colors and make them react when someone moves their mouse over them. Links can also jump directly to specific sections on a long webpage by targeting an element's id, creating handy bookmarks and \"Back to top\" shortcuts.",
    "concepts": [
      {
        "term": "Link states in CSS",
        "description": "Special CSS pseudo-classes that style a link at different times: :link for unvisited links, :visited for links already clicked, :hover when the mouse points at them, and :active while being clicked."
      },
      {
        "term": "The LVHA rule order",
        "description": "Always list link pseudo-classes in this order: :link, :visited, :hover, :active. If :visited comes after :hover, visited links will not show their hover color."
      },
      {
        "term": "Page jumps with bookmarks",
        "description": "You can jump to any section on the same page by giving an element an id (like <section id=\"conversations\">) and setting a link's href to #conversations."
      },
      {
        "term": "Back to top links",
        "description": "A bottom-of-page link can return to your existing header with href=\"#site-header\". Match the actual ID rather than inventing a new target."
      }
    ],
    "example": "<style>\n  a:link { color: #0055aa; text-decoration: underline; }\n  a:visited { color: #551a8b; }\n  a:hover, a:focus-visible { color: #a53b00; }\n  a:active { color: #c62828; }\n</style>\n<!-- The earlier header already has id=\"site-header\". -->\n<p><a href=\"#site-header\">Back to top</a></p>",
    "task": "Add link hover and keyboard-focus colors to your existing style tag, then link back to the existing site-header ID from the bottom of the page.",
    "steps": [
      "Open index.html and locate your existing <style> block inside <head>.",
      "Add link rules following the LVHA order: style a:link, a:visited, a:hover, and a:active with colors that match your chat community theme.",
      "Confirm your existing top header has id=\"site-header\". Keep this ID because your other links already use it.",
      "At the bottom of <body>, add <p><a href=\"#site-header\">Back to top</a></p>.",
      "Save index.html and test your page by hovering over links and clicking the Back to top shortcut."
    ],
    "check": {
      "question": "Why is it important to write link styles in the LVHA (:link, :visited, :hover, :active) order?",
      "options": [
        "Browsers will refuse to load any CSS file that does not follow alphabetical order.",
        "If :visited is placed after :hover, visited links will block the hover color from appearing.",
        "Links will only work on mobile devices if the LVHA order is followed."
      ],
      "answer": 1,
      "explanation": "Because these link selectors have equal priority, later rules override earlier ones. Placing :visited after :hover would prevent previously visited links from displaying their hover effect."
    },
    "sources": [
      "html_links_colors.asp",
      "html_links_bookmarks.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<p class=\"top-jump\"><a href=\"#site-header\">↑ Back to top</a></p>"
    }
  },
  {
    "id": "html-images-backgrounds",
    "module": "appearance",
    "title": "Adding images and alt text",
    "minutes": 10,
    "intro": "Pictures make web pages lively and fun to read. In HTML, the <img> tag embeds an image directly into your document. The src attribute gives the file path, while the alt attribute provides a text description for screen readers. You can turn any image into a clickable link by wrapping it in an <a> tag, or float an image with CSS so text flows smoothly around it. Always set width and height so the browser knows how much space to reserve.",
    "concepts": [
      {
        "term": "The <img> tag and src attribute",
        "description": "An empty tag with no closing tag that displays pictures. The src (source) attribute provides the file path or web address where the image is stored."
      },
      {
        "term": "The alt attribute for accessibility",
        "description": "A text description of the image for screen readers and broken links. For graphics with text, describe the illustration accurately, like \"Chat Attachment banner illustration\"."
      },
      {
        "term": "Width and height dimensions",
        "description": "Setting width and height numbers on <img> tells the browser how much room to reserve, preventing the page from jumping while images download."
      },
      {
        "term": "Linked images",
        "description": "Wrap an <img> tag inside an <a href=\"...\"> link so visitors can click the image to navigate to a section or page."
      },
      {
        "term": "Floating images with CSS",
        "description": "Using float: right; or float: left; in CSS lets surrounding paragraph text wrap cleanly around the picture."
      },
      {
        "term": "CSS background images",
        "description": "Using background-image in CSS places a decorative photo or pattern behind text. Properties like background-repeat and background-size: cover control how it fits."
      },
      {
        "term": "CSS used by this image example",
        "description": "float: right lets text wrap beside an image; margin: 0 0 10px 15px sets top, right, bottom, left outer space; border-radius rounds corners. background-image: url(...) paints a decorative image and background-repeat controls tiling. Meaningful attachments still need img and alt."
      },
      {
        "term": "Practice and challenge",
        "description": "First complete this lesson’s chat build task without copying the example. Then change one detail, explain each tag or attribute aloud, and compare the result with the lesson. Use the linked W3Schools exercises and challenge for another check."
      }
    ],
    "example": "<style>\n  .chat-room-photo {\n    float: right;\n    margin: 0 0 10px 15px;\n    border-radius: 4px;\n  }\n</style>\n\n<section>\n  <h2>Chat Gallery</h2>\n  <!-- Linked image that floats next to text -->\n  <a href=\"#site-header\" title=\"Jump to top of page\">\n    <img \n      class=\"chat-room-photo\"\n      src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27160%27%20height%3D%27100%27%3E%3Crect%20width%3D%27160%27%20height%3D%27100%27%20fill%3D%27%23004488%27%2F%3E%3Ctext%20x%3D%2780%27%20y%3D%2755%27%20font-size%3D%2716%27%20fill%3D%27white%27%20text-anchor%3D%27middle%27%3EChat room%3C%2Ftext%3E%3C%2Fsvg%3E\" \n      alt=\"Blue banner illustration with text: Chat room\" \n      width=\"160\" \n      height=\"100\">\n  </a>\n  <p>Our chat room room is open every afternoon. Click the badge to jump back to the top of the page. Notice how this text wraps smoothly around the floating image.</p>\n</section>",
    "task": "Add a photo gallery section to index.html with an image, descriptive alt text, and explicit width and height dimensions, keeping all existing chat sections in place.",
    "steps": [
      "Open index.html and scroll toward the bottom of your <body> content.",
      "Add a new <section id=\"gallery\"> element with an <h2> heading titled 'Chat Life'.",
      "Inside the section, insert an <img> tag with width=\"300\" and height=\"180\" to reserve space for the image.",
      "Fill in the src attribute with an image link or data URI, and write clear descriptive text inside the alt attribute explaining the scene.",
      "Save index.html and view your page in the browser to confirm the picture displays neatly without pushing surrounding content around."
    ],
    "check": {
      "question": "Why should you always set width and height attributes on an <img> tag?",
      "options": [
        "It tells the browser how much space to reserve so the page does not jump as the picture loads.",
        "It shrinks the image file size on your hard drive automatically.",
        "It allows the image to be printed in color instead of black and white."
      ],
      "answer": 0,
      "explanation": "Specifying width and height lets the browser calculate the layout space before downloading the image file. This prevents the page text from jumping around while images load."
    },
    "sources": [
      "html_images.asp",
      "html_images_background.asp",
      "/html/html_exercise_embed.asp?topic=images",
      "/html/html_challenges_images.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"gallery\">\n  <h2>Chat life</h2>\n  <a href=\"#site-header\" title=\"Jump to the header\">\n    <img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='300'%20height='180'%3E%3Crect%20width='300'%20height='180'%20fill='%23e0ecf8'/%3E%3Ctext%20x='150'%20y='95'%20text-anchor='middle'%20fill='%23004488'%3EChat%20Attachment%3C/text%3E%3C/svg%3E\" alt=\"Blue banner illustration with text: Chat Attachment\" width=\"300\" height=\"180\">\n  </a>\n</section>"
    }
  },
  {
    "id": "html-picture-imagemaps",
    "module": "appearance",
    "title": "Responsive pictures and image maps",
    "minutes": 10,
    "intro": "Websites are viewed on all kinds of screens, from small phones to large desktop monitors. The <picture> element lets you show different images for small screens vs wide screens using <source media=\"...\" srcset=\"...\">. Meanwhile, HTML image maps let you make specific clickable zones on an image with <map> and <area>. You can define rectangles, circles, or custom polygon shapes, turning an image into an interactive directory.",
    "concepts": [
      {
        "term": "The <picture> element",
        "description": "A container tag that wraps around one or more <source> tags and a fallback <img> tag to display the best image for the user screen size."
      },
      {
        "term": "The <source> tag with media and srcset",
        "description": "Specifies an alternative image inside <picture>. The media attribute sets screen conditions (like min-width), and srcset provides the image file path."
      },
      {
        "term": "Percent-encoding data URIs in srcset",
        "description": "Because srcset uses spaces to separate image URLs from size descriptors (like 800w), any SVG data URI inside srcset must have its spaces percent-encoded as %20."
      },
      {
        "term": "Image maps with <map> and <area>",
        "description": "A <map name=\"map-name\"> element defines clickable hotspot areas over an image using nested <area> tags with coordinates."
      },
      {
        "term": "All area shapes: rect, circle, poly",
        "description": "shape=\"rect\" uses 4 coords (x1,y1,x2,y2 for top-left and bottom-right). shape=\"circle\" uses 3 coords (center-x, center-y, radius). shape=\"poly\" uses coordinate pairs for each corner."
      },
      {
        "term": "Connecting an image with usemap",
        "description": "Add usemap=\"#map-name\" to an <img> tag to connect it to the corresponding <map> that holds its clickable zones."
      }
    ],
    "example": "<!-- Responsive picture: wide banner on desktop, compact on mobile -->\n<picture>\n  <source media=\"(min-width: 600px)\" srcset=\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27600%27%20height%3D%27120%27%3E%3Crect%20width%3D%27600%27%20height%3D%27120%27%20fill%3D%27%23cfe2ff%27%2F%3E%3Ctext%20x%3D%27300%27%20y%3D%2768%27%20font-size%3D%2720%27%20fill%3D%27%23084298%27%20text-anchor%3D%27middle%27%3EDesktop%20Chat%20View%3C%2Ftext%3E%3C%2Fsvg%3E\">\n  <img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27300%27%20height%3D%27120%27%3E%3Crect%20width%3D%27300%27%20height%3D%27120%27%20fill%3D%27%23d1e7dd%27%2F%3E%3Ctext%20x%3D%27150%27%20y%3D%2768%27%20font-size%3D%2716%27%20fill%3D%27%230f5132%27%20text-anchor%3D%27middle%27%3EMobile%20View%3C%2Ftext%3E%3C%2Fsvg%3E\" alt=\"Chat responsive view\" width=\"300\" height=\"120\">\n</picture>\n\n<!-- Interactive floorplan image map with rect, circle, and poly shapes -->\n<img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27300%27%20height%3D%27150%27%3E%3Crect%20width%3D%27100%27%20height%3D%27150%27%20fill%3D%27%23cfe2ff%27%2F%3E%3Ccircle%20cx%3D%27150%27%20cy%3D%2775%27%20r%3D%2735%27%20fill%3D%27%23d1e7dd%27%2F%3E%3Cpolygon%20points%3D%27200%2C150%20250%2C20%20300%2C150%27%20fill%3D%27%23fff3cd%27%2F%3E%3Ctext%20x%3D%2750%27%20y%3D%2780%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3ELab%3C%2Ftext%3E%3Ctext%20x%3D%27150%27%20y%3D%2780%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3EHub%3C%2Ftext%3E%3Ctext%20x%3D%27250%27%20y%3D%27100%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3EStudio%3C%2Ftext%3E%3C%2Fsvg%3E\" usemap=\"#chat-map\" alt=\"Chat interactive floorplan\" width=\"300\" height=\"150\">\n\n<map name=\"chat-map\">\n  <!-- rect: x1, y1, x2, y2 -->\n  <area shape=\"rect\" coords=\"0,0,100,150\" href=\"#gallery\" alt=\"Coding Lab\">\n  <!-- circle: center-x, center-y, radius -->\n  <area shape=\"circle\" coords=\"150,75,35\" href=\"#site-header\" alt=\"Central Hub\">\n  <!-- poly: x1,y1, x2,y2, x3,y3... -->\n  <area shape=\"poly\" coords=\"200,150,250,20,300,150\" href=\"#about\" alt=\"Design Studio\">\n</map>",
    "task": "Add an interactive chat floorplan section to index.html with an image map and clickable areas linking to existing sections.",
    "steps": [
      "Open index.html and navigate to the bottom of your main content area.",
      "Add a <section id=\"floorplan\"> containing an <h2> title reading \"Interactive Chat Map\".",
      "Add an <img> tag with width=\"300\", height=\"150\", alt=\"Chat interactive floorplan\", and usemap=\"#chat-map\".",
      "Directly below the image, add a <map name=\"chat-map\"> container.",
      "Add <area> tags for rect, circle, and poly shapes pointing to existing sections like #gallery and #site-header, then save and test clicks in your browser."
    ],
    "check": {
      "question": "How do you connect an <img> tag to an HTML <map name=\"chat-map\"> element?",
      "options": [
        "Set usemap=\"#chat-map\" on the <img> tag.",
        "Place the <img> tag directly inside the <map> tag.",
        "Give the <img> tag an attribute named map=\"chat-map\"."
      ],
      "answer": 0,
      "explanation": "The <img> tag links to the map using the usemap attribute. Its value must begin with a hash (#) followed by the map's name attribute."
    },
    "sources": [
      "html_images_picture.asp",
      "html_images_imagemap.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"floorplan\">\n  <h2>Interactive Chat Map</h2>\n  <img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27300%27%20height%3D%27150%27%3E%3Crect%20width%3D%27100%27%20height%3D%27150%27%20fill%3D%27%23cfe2ff%27%2F%3E%3Ccircle%20cx%3D%27150%27%20cy%3D%2775%27%20r%3D%2735%27%20fill%3D%27%23d1e7dd%27%2F%3E%3Cpolygon%20points%3D%27200%2C150%20250%2C20%20300%2C150%27%20fill%3D%27%23fff3cd%27%2F%3E%3Ctext%20x%3D%2750%27%20y%3D%2780%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3ELab%3C%2Ftext%3E%3Ctext%20x%3D%27150%27%20y%3D%2780%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3EHub%3C%2Ftext%3E%3Ctext%20x%3D%27250%27%20y%3D%27100%27%20font-size%3D%2712%27%20text-anchor%3D%27middle%27%3EStudio%3C%2Ftext%3E%3C%2Fsvg%3E\" usemap=\"#chat-map\" alt=\"Chat interactive floorplan\" width=\"300\" height=\"150\">\n  <map name=\"chat-map\">\n    <area shape=\"rect\" coords=\"0,0,100,150\" href=\"#gallery\" alt=\"Coding Lab\">\n    <area shape=\"circle\" coords=\"150,75,35\" href=\"#site-header\" alt=\"Central Hub\">\n    <area shape=\"poly\" coords=\"200,150,250,20,300,150\" href=\"#about\" alt=\"Design Studio\">\n  </map>\n</section>"
    }
  }
];
