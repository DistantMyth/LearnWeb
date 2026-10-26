export const setup = [
  {
    "id": "inspect-the-web",
    "module": "setup",
    "title": "Peek behind a webpage",
    "minutes": 8,
    "intro": "Every website starts with a document. Your browser reads that document and turns it into the page you see. Before writing any HTML, let’s open the browser’s toolbox and see what a page is made of.",
    "concepts": [
      {
        "term": "The browser",
        "description": "Chrome, Edge, Firefox, and Safari are browsers. They request files, read HTML, apply CSS, and run JavaScript. HTML supplies structure; CSS supplies appearance; JavaScript adds behavior."
      },
      {
        "term": "Inspect an element",
        "description": "Right-click a heading on this page and choose Inspect. In the Elements tab (Inspector in Firefox), the highlighted line is an HTML element. Move over other lines to see which parts of the page they describe."
      },
      {
        "term": "Try a temporary edit",
        "description": "Double-click the heading’s text inside the inspector, change it, and press Enter. You changed the browser’s in-memory document (the DOM), not the website’s source file. Refresh the page and your edit disappears."
      },
      {
        "term": "Styles and the box model",
        "description": "Select an element and look at Styles or Rules. Toggle a color declaration. The box-model diagram shows content, padding, border, and margin. These temporary changes are a safe way to experiment."
      },
      {
        "term": "Other useful tools",
        "description": "The Console shows messages and errors; do not paste scripts you don’t understand. The Network tab shows requested files: open it and refresh to see the document, styles, and images arrive. Responsive/device mode lets you test a narrow screen."
      }
    ],
    "example": "<h1>Campus Chat</h1>\n<p>A little corner of the web for our big ideas.</p>",
    "task": "Change a heading in the inspector, then refresh to discover what stays and what doesn’t.",
    "steps": [
      "Right-click the “Peek behind a webpage” lesson heading and choose Inspect. No right-click? Open the browser menu → More tools → Developer tools.",
      "Windows/Linux Chrome or Edge: Ctrl+Shift+I. macOS: Cmd+Option+I. Firefox uses the same shortcuts. In Safari, Settings → Advanced → enable features for web developers, then Develop → Show Web Inspector (Cmd+Option+I).",
      "Expand the selected heading, double-click its text in Elements/Inspector, type your chat community’s name, and press Enter. Toggle a color rule in Styles/Rules.",
      "Refresh the page. The original heading returns because no source file was saved. Open Network, refresh again, and find the HTML document request. Close DevTools when finished."
    ],
    "check": {
      "question": "You changed a heading using Inspect, then refreshed. Why did the change disappear?",
      "options": [
        "Inspect edits only the browser’s temporary document.",
        "HTML cannot display custom headings.",
        "You need an account to save browser edits."
      ],
      "answer": 0,
      "explanation": "Inspect changes the live DOM. To make a lasting change, edit and save the HTML source file. That is what we’ll do next."
    },
    "sources": []
  },
  {
    "id": "set-up-vscode",
    "module": "setup",
    "title": "Make a home for your project",
    "minutes": 10,
    "intro": "We are building Campus Chat, a real-time chat application, in one project folder. First create its static HTML screens: sample messages, rooms, profiles, and attachments. The CSS track styles those screens; JavaScript adds behavior; the final server lessons connect browsers so messages arrive live. Each checkpoint uses only concepts taught by then.",
    "concepts": [
      {
        "term": "Read the starter before using it",
        "description": "<!DOCTYPE html> selects modern HTML. html wraps the document and lang=\"en\" names its language. head contains settings: meta charset=\"UTF-8\" supports international text, meta name=\"viewport\" makes the page match device width, and title labels the browser tab. body contains visible content: h1 is the main heading and p is a paragraph. Most elements open with <tag> and close with </tag>; meta has no closing tag. Attributes are settings in the opening tag, written name=\"value\". Later lessons expand each idea."
      },
      {
        "term": "One-time tools",
        "description": "Install Visual Studio Code from code.visualstudio.com and a modern browser. The classroom itself needs Node.js LTS from nodejs.org, installed once. Node powers this course launcher; your HTML page does not need Node."
      },
      {
        "term": "Your own folder",
        "description": "Create a folder named campus-chat somewhere easy to find, such as Documents. Keep it separate from the LearnWeb classroom folder. In VS Code choose File → Open Folder and select campus-chat. On macOS, Open may be shown instead."
      },
      {
        "term": "A real HTML file",
        "description": "In VS Code’s Explorer, click New File and name it index.html. The .html extension matters: index.html.txt is a text file, not the page we want. VS Code shows the filename in its tab."
      },
      {
        "term": "Edit, then save",
        "description": "Type the example into index.html. Save with Ctrl+S on Windows/Linux or Cmd+S on macOS. An unsaved dot on the tab means your file on disk has not caught up with your typing."
      }
    ],
    "example": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Campus Chat</title>\n</head>\n<body>\n  <h1>Campus Chat</h1>\n  <p>A place for curious people.</p>\n</body>\n</html>",
    "task": "Create your campus-chat folder and save its first index.html file.",
    "steps": [
      "Install VS Code if needed. Open your file manager (Explorer on Windows, Finder on macOS, or Files on Linux) and create Documents/campus-chat.",
      "In VS Code, use File → Open Folder to open that folder. Trust it only if you created it yourself.",
      "Create index.html in the Explorer panel. Copy the example into this file, and change the chat community name to make it yours.",
      "Save the file. Keep this folder open: every later lesson changes this same project. You can also download the blank starter from My project."
    ],
    "check": {
      "question": "Where should you save the HTML you write during this course?",
      "options": [
        "Only inside the browser inspector.",
        "In index.html inside your campus-chat folder.",
        "Inside the VS Code application folder."
      ],
      "answer": 1,
      "explanation": "Your project belongs in its own folder. Saving index.html makes your work persist beyond a browser refresh."
    },
    "sources": [],
    "patch": {
      "target": "body",
      "html": "<h1>Campus Chat</h1>\n<p>A place for curious people.</p>"
    }
  },
  {
    "id": "go-live",
    "module": "setup",
    "title": "See it with Live Server",
    "minutes": 7,
    "intro": "A local server serves your files to a browser on your own laptop. Live Server watches your project, so saving a change in VS Code refreshes the page. Your classroom and your student website are two different local sites.",
    "concepts": [
      {
        "term": "Install the extension",
        "description": "Open Extensions in VS Code (Ctrl+Shift+X, or Cmd+Shift+X on macOS). Search Live Server and choose the extension by Ritwick Dey (ritwickdey.LiveServer). Click Install. Installation needs internet; subsequent local use does not."
      },
      {
        "term": "Open with Live Server",
        "description": "Open index.html in VS Code, right-click in the editor and select Open with Live Server. You can also click Go Live in the bottom status bar. The browser usually opens http://127.0.0.1:5500, sometimes a different port if busy."
      },
      {
        "term": "The save-refresh loop",
        "description": "Change the paragraph in VS Code and save. Check the Live Server browser tab: it should update. Edit the file, not Inspect, when you want changes to last. Keep the course tab open separately."
      },
      {
        "term": "If it doesn’t open",
        "description": "Make sure a folder—not just a single file—is open in VS Code, the filename is index.html, and the extension is enabled. Stop and restart Go Live. If automatic opening fails, use the port shown in the status bar and open http://127.0.0.1:PORT/index.html yourself."
      }
    ],
    "example": "<!-- In your existing index.html, change the paragraph: -->\n<p>Our first chat room discussion is this Friday!</p>",
    "task": "Open your page with Live Server and watch one saved edit appear in the browser.",
    "steps": [
      "Install Live Server by Ritwick Dey from VS Code Extensions. Keep campus-chat open as your folder.",
      "Right-click index.html in the Explorer and select Open with Live Server. Look for a browser address starting http://127.0.0.1 or http://localhost, not file://.",
      "Change your paragraph, save with Ctrl+S or Cmd+S, and switch to the student-site tab. Confirm the text updated.",
      "Keep the classroom terminal open for this course. Keep VS Code and Live Server open for your own website. Click the Live Server port in VS Code to stop it after class."
    ],
    "check": {
      "question": "Which action makes a lasting change appear through Live Server?",
      "options": [
        "Edit the page in Inspect.",
        "Refresh without editing a file.",
        "Edit index.html in VS Code and save."
      ],
      "answer": 2,
      "explanation": "Live Server serves the file you saved. It cannot save a temporary DevTools edit back into your source."
    },
    "sources": []
  }
];
