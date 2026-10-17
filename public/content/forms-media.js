// Campus Clubhouse HTML Curriculum: Forms and Media Content
// Complete lessons for modules 'forms' and 'media', plus deferred HTML5 APIs

export const formsMedia = [
  {
    "id": "form-foundations",
    "module": "forms",
    "title": "Form containers and how they work",
    "minutes": 12,
    "intro": "A form groups the fields visitors can fill in. Its action says where to send the answers, and its method says how. In this course, our forms are practice demos without a live backend server.",
    "concepts": [
      {
        "term": "<form>",
        "description": "The box that holds your input fields and buttons."
      },
      {
        "term": "action",
        "description": "The address that receives the form data. If action is empty or missing, submission uses the current page URL with the form’s method (GET by default). Our static project has no signup handler, so a POST attempt may show an unsupported-method error."
      },
      {
        "term": "method (GET vs POST)",
        "description": "GET shows typed answers in the web address bar. POST hides them inside the request body, but POST is not encryption (HTTPS is needed for security)."
      },
      {
        "term": "No backend in this course",
        "description": "Without a web server program, clicking submit only tests browser behavior and cannot store real member signups."
      },
      {
        "term": "autocomplete and novalidate",
        "description": "autocomplete lets the browser suggest saved details. novalidate skips the browser’s checks. Neither replaces checking data safely on a real server."
      },
      {
        "term": "target",
        "description": "Chooses where to show the response: _self uses the same tab (the default), _blank opens another, and a named target can use an iframe."
      },
      {
        "term": "enctype",
        "description": "Chooses how POST data is packaged. application/x-www-form-urlencoded is the default for text fields; multipart/form-data is needed for file uploads; text/plain is unstructured text, mostly useful for debugging."
      }
    ],
    "example": "<section id=\"club-form-section\">\n  <h2>Join the Campus Club</h2>\n  <p class=\"demo-notice\">Practice only: use made-up details. No signup handler saves this form.</p>\n  <form id=\"club-form\" action=\"#\" method=\"POST\" autocomplete=\"on\">\n    <p>Try how a local form works. An unsupported-method error is expected without a backend.</p>\n    <button type=\"submit\">Try form submission</button>\n  </form>\n</section>",
    "task": "Add a club sign-up section to index.html with a <form> container and submit button.",
    "steps": [
      "Locate the main area of index.html and add a <section id=\"club-form-section\"> if it is not already present.",
      "Add a helpful heading and demo notice paragraph explaining that this is a practice demo.",
      'Create a <form id="club-form"> with action="#", method="POST", and autocomplete="on". If a signup form already exists, give it this ID instead of adding another form.',
      "Add a description and <button type=\"submit\"> inside the form. Use made-up details only. This static site cannot handle POST requests, so an unsupported-method error is expected on submission; no real signup is created."
    ],
    "check": {
      "question": "What does setting method=\"POST\" do on a form?",
      "options": [
        "It automatically encrypts all answers so no one can intercept them.",
        "It sends typed data inside the request body instead of showing it in the URL bar.",
        "It saves answers into a live database without needing a backend server."
      ],
      "answer": 1,
      "explanation": "POST places data inside the request body so it stays out of the browser address bar. However, you still need HTTPS to encrypt the data over the network."
    },
    "sources": [
      "html_forms.asp",
      "html_forms_attributes.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"club-form-section\">\n  <h2>Join the Campus Club</h2>\n  <p class=\"demo-notice\">Note: This form is a student practice demo. It does not send real data or create live accounts.</p>\n  <form id=\"club-form\" action=\"#\" method=\"POST\" autocomplete=\"on\">\n    <p>Sign up to test form submission behavior in the browser.</p>\n    <button type=\"submit\" id=\"club-submit-btn\">Join Club</button>\n  </form>\n</section>"
    }
  },
  {
    "id": "form-basic-inputs-labels",
    "module": "forms",
    "title": "Text boxes and clear labels",
    "minutes": 14,
    "intro": "Labels tell visitors what to type into each box. When you link a label to an input using an ID, tapping the label puts the cursor right into the box. Different input types also give mobile phones the right keyboard.",
    "concepts": [
      {
        "term": "<label> and for",
        "description": "Connects text to an input with matching id so screen readers read it and clicking the text focuses the box."
      },
      {
        "term": "name",
        "description": "The label your server uses to know which answer is which."
      },
      {
        "term": "value",
        "description": "What is actually typed or stored inside the box."
      },
      {
        "term": "type=\"text\" and type=\"password\"",
        "description": "Normal single-line text versus dots that hide passwords from people nearby."
      },
      {
        "term": "type=\"email\" and type=\"tel\"",
        "description": "Boxes that bring up email keys (like @) or phone number dial pads on phones."
      },
      {
        "term": "type=\"search\" and type=\"url\"",
        "description": "Handy boxes for searching words or entering full website links."
      }
    ],
    "example": "<p class=\"demo-notice\">Note: This form is a student practice demo. It does not send real data or create live accounts.</p>\n<div class=\"form-row\">\n  <label for=\"student-name\">Full Name:</label>\n  <input type=\"text\" id=\"student-name\" name=\"student_name\" placeholder=\"Alex Morgan\" required>\n</div>\n\n<div class=\"form-row\">\n  <label for=\"student-email\">Email Address:</label>\n  <input type=\"email\" id=\"student-email\" name=\"student_email\" placeholder=\"alex@campus.edu\" required>\n</div>\n\n<div class=\"form-row\">\n  <label for=\"student-pass\">Password:</label>\n  <input type=\"password\" id=\"student-pass\" name=\"student_pass\" required>\n</div>",
    "task": "Add accessible text, email, password, phone, link, and search fields to the club form.",
    "steps": [
      "Inside <section id=\"club-form-section\">, locate the <form id=\"club-form\"> above the submit button.",
      "Add input fields for Full Name (type=\"text\"), Email (type=\"email\"), and Password (type=\"password\").",
      "Add inputs for Phone Number (type=\"tel\"), Personal Website (type=\"url\"), and Club Search (type=\"search\").",
      "Pair each input with a matching <label> using the for attribute and the input's unique id."
    ],
    "check": {
      "question": "Why should you always match the label's for attribute with the input's id?",
      "options": [
        "It tells the backend server what database column to update.",
        "It connects label text to the input for screen readers and allows clicking the label to focus the box.",
        "It creates a hidden password mask so characters are hidden."
      ],
      "answer": 1,
      "explanation": "Matching the for attribute to an input's id binds the label to the control, making it accessible to screen readers and enabling mouse clicks on the label to focus the box."
    },
    "sources": [
      "html_form_elements.asp",
      "html_form_input_types.asp"
    ],
    "patch": {
      "target": "form",
      "formId": "club-form",
      "html": "<div class=\"form-row\">\n  <label for=\"member-name\">Full Name:</label>\n  <input type=\"text\" id=\"member-name\" name=\"member_name\" placeholder=\"Jordan Lee\" required>\n</div>\n<div class=\"form-row\">\n  <label for=\"member-email\">Campus Email:</label>\n  <input type=\"email\" id=\"member-email\" name=\"member_email\" placeholder=\"jordan@campus.edu\" required>\n</div>\n<div class=\"form-row\">\n  <label for=\"member-pass\">Club Password:</label>\n  <input type=\"password\" id=\"member-pass\" name=\"member_pass\" required>\n</div>\n<div class=\"form-row\">\n  <label for=\"member-phone\">Phone Number:</label>\n  <input type=\"tel\" id=\"member-phone\" name=\"member_phone\" placeholder=\"555-0199\">\n</div>\n<div class=\"form-row\">\n  <label for=\"member-website\">Personal Website:</label>\n  <input type=\"url\" id=\"member-website\" name=\"member_website\" placeholder=\"https://example.com\">\n</div>\n<div class=\"form-row\">\n  <label for=\"member-search\">Directory Search:</label>\n  <input type=\"search\" id=\"member-search\" name=\"member_search\" placeholder=\"Search activities...\">\n</div>"
    }
  },
  {
    "id": "form-options-and-choices",
    "module": "forms",
    "title": "Radio buttons, checkboxes, and drop-down lists",
    "minutes": 15,
    "intro": "Sometimes visitors should choose from a list instead of typing. Radio buttons let people choose only one answer, while checkboxes let them pick several. Drop-down lists and suggestion boxes save screen space when you have many choices.",
    "concepts": [
      {
        "term": "type=\"radio\"",
        "description": "Round buttons for picking one choice. Giving them the same name groups them together."
      },
      {
        "term": "type=\"checkbox\"",
        "description": "Square boxes that can be checked or unchecked independently."
      },
      {
        "term": "<select> and <option>",
        "description": "A drop-down menu that holds choices without taking up page space."
      },
      {
        "term": "<optgroup>",
        "description": "Labels that group related options inside a long drop-down list."
      },
      {
        "term": "multiple and size",
        "description": "Lets visitors select more than one choice from a list or shows multiple rows at once."
      },
      {
        "term": "<datalist>",
        "description": "Gives helpful typing suggestions while still letting visitors type their own answer."
      }
    ],
    "example": "<p class=\"demo-notice\">Note: This form is a student practice demo. It does not send real data or create live accounts.</p>\n<div>\n  <p>Membership Tier (pick one):</p>\n  <input type=\"radio\" id=\"tier-basic\" name=\"tier\" value=\"basic\" checked>\n  <label for=\"tier-basic\">Standard Member</label>\n  <input type=\"radio\" id=\"tier-officer\" name=\"tier\" value=\"officer\">\n  <label for=\"tier-officer\">Club Officer</label>\n</div>\n\n<div>\n  <p>Interests (pick any):</p>\n  <input type=\"checkbox\" id=\"int-tech\" name=\"interests\" value=\"tech\">\n  <label for=\"int-tech\">Technology</label>\n  <input type=\"checkbox\" id=\"int-art\" name=\"interests\" value=\"art\">\n  <label for=\"int-art\">Creative Arts</label>\n</div>\n\n<div>\n  <label for=\"dept-select\">Department:</label>\n  <select id=\"dept-select\" name=\"department\">\n    <optgroup label=\"STEM\">\n      <option value=\"cs\">Computer Science</option>\n      <option value=\"math\">Mathematics</option>\n    </optgroup>\n    <optgroup label=\"Arts & Humanities\">\n      <option value=\"history\">History</option>\n      <option value=\"lit\">Literature</option>\n    </optgroup>\n  </select>\n</div>\n\n<div>\n  <label for=\"hall-choice\">Preferred Meeting Hall:</label>\n  <input type=\"text\" id=\"hall-choice\" name=\"meeting_hall\" list=\"hall-list\" placeholder=\"Type or pick a hall\">\n  <datalist id=\"hall-list\">\n    <option value=\"North Auditorium\">\n    <option value=\"Science Center Room 101\">\n    <option value=\"Library Study Room B\">\n  </datalist>\n</div>",
    "task": "Add membership radio options, interest checkboxes, a categorized department dropdown, and meeting hall suggestions to the club form.",
    "steps": [
      "Open <form id=\"club-form\"> in <section id=\"club-form-section\">.",
      "Add radio buttons sharing name=\"tier\" so visitors can pick either General Member or Officer.",
      "Add checkboxes for Club Activities (such as Coding or Workshops) with unique IDs and matching labels.",
      "Add a <select> element with <optgroup> headings separating STEM and Arts departments.",
      "Add a text input connected with a list attribute to a <datalist> offering meeting hall suggestions."
    ],
    "check": {
      "question": "How do you make sure selecting one radio button unchecks the other radio buttons in the same group?",
      "options": [
        "Give all radio buttons in the group the exact same id attribute.",
        "Give all radio buttons in the group the exact same name attribute.",
        "Wrap all radio buttons in a single <label> element."
      ],
      "answer": 1,
      "explanation": "Sharing the exact same name attribute tells the browser that those radio buttons belong to one group, allowing only one selection at a time."
    },
    "sources": [
      "html_form_elements.asp",
      "html_form_input_types.asp"
    ],
    "patch": {
      "target": "form",
      "formId": "club-form",
      "html": "<div class=\"form-group\">\n  <p>Membership Tier:</p>\n  <input type=\"radio\" id=\"tier-general\" name=\"tier\" value=\"general\" checked>\n  <label for=\"tier-general\">General Member</label>\n  <input type=\"radio\" id=\"tier-lead\" name=\"tier\" value=\"lead\">\n  <label for=\"tier-lead\">Team Leader</label>\n</div>\n<div class=\"form-group\">\n  <p>Activities of Interest:</p>\n  <input type=\"checkbox\" id=\"act-workshops\" name=\"activities\" value=\"workshops\">\n  <label for=\"act-workshops\">Hands-on Workshops</label>\n  <input type=\"checkbox\" id=\"act-projects\" name=\"activities\" value=\"projects\">\n  <label for=\"act-projects\">Team Projects</label>\n</div>\n<div class=\"form-group\">\n  <label for=\"member-dept\">Department:</label>\n  <select id=\"member-dept\" name=\"department\">\n    <optgroup label=\"STEM\">\n      <option value=\"cs\">Computer Science</option>\n      <option value=\"eng\">Engineering</option>\n    </optgroup>\n    <optgroup label=\"Arts &amp; Humanities\">\n      <option value=\"design\">Digital Design</option>\n      <option value=\"writing\">Creative Writing</option>\n    </optgroup>\n  </select>\n</div>\n<div class=\"form-group\">\n  <label for=\"hall-suggest\">Preferred Meeting Hall:</label>\n  <input list=\"hall-list\" id=\"hall-suggest\" name=\"preferred_hall\" placeholder=\"Type or pick a venue...\">\n  <datalist id=\"hall-list\">\n    <option value=\"East Campus Commons\">\n    <option value=\"Pioneer Library Hall\">\n    <option value=\"Student Union Room 101\">\n  </datalist>\n</div>"
    }
  },
  {
    "id": "form-grouping-and-buttons",
    "module": "forms",
    "title": "Grouping fields and action buttons",
    "minutes": 14,
    "intro": "Large forms feel easier to fill out when broken into organized sections. The fieldset and legend tags draw neat borders and headings around related fields. Textareas let visitors type long comments, and buttons submit or reset the answers.",
    "concepts": [
      {
        "term": "<fieldset> and <legend>",
        "description": "Groups related fields in a box with a clear title at the top border."
      },
      {
        "term": "<textarea>",
        "description": "A multi-line text box for longer paragraphs, reviews, or bios."
      },
      {
        "term": "<button type=\"submit\">",
        "description": "Sends the form. Note: Any <button> inside a form defaults to submit if you forget its type!"
      },
      {
        "term": "<button type=\"reset\">",
        "description": "Clears all fields in the form back to how they started."
      },
      {
        "term": "<button type=\"button\">",
        "description": "A harmless button that does nothing until scripted later with JavaScript."
      },
      {
        "term": "<input type=\"hidden\">",
        "description": "Holds secret or tracking data (like a club branch ID) that visitors do not need to see."
      },
      {
        "term": "<output>",
        "description": "A spot reserved to display the result of a calculation."
      }
    ],
    "example": "<p class=\"demo-notice\">Note: This form is a student practice demo. It does not send real data or create live accounts.</p>\n<fieldset>\n  <legend>Club Member Feedback</legend>\n  <input type=\"hidden\" name=\"club_id\" value=\"CLUB-101\">\n\n  <label for=\"member-feedback\">Your Goals & Ideas:</label>\n  <textarea id=\"member-feedback\" name=\"feedback\" rows=\"4\" cols=\"40\" placeholder=\"Tell us what you want to learn...\"></textarea>\n\n  <div class=\"form-actions\">\n    <button type=\"submit\">Save Profile</button>\n    <button type=\"reset\">Reset Form</button>\n    <button type=\"button\">Preview Details</button>\n  </div>\n</fieldset>",
    "task": "Organize the club form into fieldsets, and add a comment textarea, action buttons, and a hidden club ID.",
    "steps": [
      "In <section id=\"club-form-section\">, wrap related sections of <form id=\"club-form\"> inside <fieldset> elements with descriptive <legend> titles.",
      "Add an <input type=\"hidden\" name=\"club_id\" value=\"CLUB-MAIN-2026\"> to store club tracking info.",
      "Add a <textarea id=\"member-bio\" name=\"bio\" rows=\"4\" cols=\"40\"> with an associated <label> for member notes.",
      "Add buttons for <button type=\"submit\">, <button type=\"reset\">, and <button type=\"button\"> to handle form actions."
    ],
    "check": {
      "question": "What happens if you create a <button> inside a form without giving it a type attribute?",
      "options": [
        "It does nothing when clicked until you attach JavaScript.",
        "The browser defaults it to type=\"submit\", which tries to send the form when clicked.",
        "The browser resets all form inputs to their original empty states."
      ],
      "answer": 1,
      "explanation": "Inside a form, a <button> without a type attribute defaults to type=\"submit\". To prevent unwanted form submissions, explicitly write type=\"button\"."
    },
    "sources": [
      "html_form_elements.asp",
      "html_form_input_types.asp"
    ],
    "patch": {
      "target": "form",
      "formId": "club-form",
      "html": "<fieldset>\n  <legend>Member Goals &amp; Feedback</legend>\n  <input type=\"hidden\" id=\"club-branch-id\" name=\"branch_id\" value=\"CLUB-101\">\n  <div>\n    <label for=\"member-goals\">Your Goals &amp; Suggestions:</label>\n    <textarea id=\"member-goals\" name=\"goals\" rows=\"4\" cols=\"40\" placeholder=\"Share what workshops you would like to see...\"></textarea>\n  </div>\n  <div class=\"form-actions\">\n    <button type=\"reset\" id=\"club-reset-btn\">Reset Form</button>\n    <button type=\"button\" id=\"club-preview-btn\">Preview Info</button>\n  </div>\n</fieldset>"
    }
  },
  {
    "id": "form-specialized-inputs",
    "module": "forms",
    "title": "Special pickers and file uploads",
    "minutes": 16,
    "intro": "HTML has built-in pickers for dates, numbers, colors, and files so you don't need extra code. These pickers open friendly calendars and color wheels directly on phones and computers. In total, HTML has 22 native input types you can choose from.",
    "concepts": [
      {
        "term": "The 22 input types",
        "description": "HTML includes 22 native types: text, password, submit, reset, radio, checkbox, button, color, date, datetime-local, email, file, hidden, image, month, number, range, search, tel, time, url, and week."
      },
      {
        "term": "type=\"number\" and type=\"range\"",
        "description": "A number input gives a typing box with up and down arrow buttons, while a range input gives a smooth sliding bar to choose an approximate value."
      },
      {
        "term": "type=\"color\"",
        "description": "Opens a color chooser popup on your device and saves the chosen shade as a seven-character hex code, such as #059669."
      },
      {
        "term": "Date and time pickers",
        "description": "Types like date, time, datetime-local, month, and week show easy calendars and clocks so visitors can pick dates accurately."
      },
      {
        "term": "type=\"file\"",
        "description": "Lets visitors pick a document or photo from their device to attach, requiring enctype=\"multipart/form-data\" on the form."
      },
      {
        "term": "type=\"image\"",
        "description": "Uses an image as a clickable submit button and sends the exact coordinates where the user clicked."
      }
    ],
    "example": `<!-- Keep your existing form. Add enctype="multipart/form-data" to its opening tag. -->
<!-- Insert these NEW controls inside that same form. Use made-up details only. -->
<fieldset>
  <legend>Event options</legend>
  <label for="event-guests">Guests (1 to 6):</label>
  <input type="number" id="event-guests" name="guests" min="1" max="6" value="1">
  <label for="event-enthusiasm">Excitement (1 to 10):</label>
  <input type="range" id="event-enthusiasm" name="enthusiasm" min="1" max="10" value="8">
  <label for="badge-color">Badge color:</label>
  <input type="color" id="badge-color" name="badge_color" value="#059669">
  <label for="session-date">Event date:</label>
  <input type="date" id="session-date" name="session_date">
  <label for="session-time">Event time:</label>
  <input type="time" id="session-time" name="session_time">
  <label for="member-avatar">A practice image file:</label>
  <input type="file" id="member-avatar" name="avatar" accept="image/*">
</fieldset>`,
    "task": "Add an event options section to the club form with a guest count box, excitement slider, badge color picker, event date, and photo upload field.",
    "steps": [
      "Find the club form inside <section id=\"club-form-section\"> in index.html (or create this section in <body> if not present yet).",
      "Make sure the form tag includes enctype=\"multipart/form-data\" so attached files can be sent.",
      "Add a number input with id=\"guest-count\" (min=\"1\" and max=\"6\") and a range slider with id=\"excitement-level\".",
      "Add a color picker with id=\"badge-color\" and a date picker with id=\"event-date\".",
      "Add a file input with id=\"member-photo\" and accept=\"image/*\", complete with a clear label for each control."
    ],
    "check": {
      "question": "What happens when someone clicks an <input type=\"image\" src=\"join.png\" alt=\"Join\"> button?",
      "options": [
        "It submits the form and sends the exact pixel coordinates where the visitor clicked the picture.",
        "It opens the image in full screen without submitting any form data.",
        "It uploads that picture file from the user computer to the web server."
      ],
      "answer": 0,
      "explanation": "An input with type=\"image\" acts as a graphical submit button. When clicked, it submits the form and sends the x and y pixel position of the click."
    },
    "sources": [
      "html_form_input_types.asp"
    ],
    "patch": {
      "target": "form",
      "formId": "club-form",
      "html": "<fieldset>\n  <legend>Event Options &amp; Preferences</legend>\n  <div>\n    <label for=\"event-guests\">Expected Guests (1 to 6):</label>\n    <input type=\"number\" id=\"event-guests\" name=\"guests\" min=\"1\" max=\"6\" value=\"1\">\n  </div>\n  <div>\n    <label for=\"event-enthusiasm\">Excitement Level (1 to 10):</label>\n    <input type=\"range\" id=\"event-enthusiasm\" name=\"enthusiasm\" min=\"1\" max=\"10\" value=\"8\">\n  </div>\n  <div>\n    <label for=\"badge-color\">Custom Badge Color:</label>\n    <input type=\"color\" id=\"badge-color\" name=\"badge_color\" value=\"#059669\">\n  </div>\n  <div>\n    <label for=\"session-date\">Preferred Session Date:</label>\n    <input type=\"date\" id=\"session-date\" name=\"session_date\">\n  </div>\n  <div>\n    <label for=\"session-time\">Preferred Session Time:</label>\n    <input type=\"time\" id=\"session-time\" name=\"session_time\">\n  </div>\n  <div>\n    <label for=\"member-avatar\">Profile Photo (PNG or JPEG):</label>\n    <input type=\"file\" id=\"member-avatar\" name=\"avatar\" accept=\"image/png, image/jpeg\">\n  </div>\n</fieldset>"
    }
  },
  {
    "id": "form-input-validation-attributes",
    "module": "forms",
    "title": "Helping visitors fill out forms correctly",
    "minutes": 15,
    "intro": "HTML can check visitor answers before a form is sent. Special attributes can make fields required, limit how many letters can be typed, or suggest helpful formats. While these browser checks help visitors, real websites still need a server to check everything securely.",
    "concepts": [
      {
        "term": "required and placeholder",
        "description": "The required attribute stops the form from submitting if a box is empty. The placeholder attribute displays faint hint text that vanishes once someone starts typing."
      },
      {
        "term": "readonly versus disabled",
        "description": "A readonly field allows visitors to read and copy its text, and its data is still submitted. A disabled field turns gray, cannot be used, and is never sent with the form."
      },
      {
        "term": "min, max, and step",
        "description": "Sets the smallest allowed number, largest allowed number, and step intervals for number, range, and date fields."
      },
      {
        "term": "maxlength and size",
        "description": "The maxlength attribute limits how many characters someone can type into a field. The size attribute only sets how wide the box appears visually on screen."
      },
      {
        "term": "pattern",
        "description": "Checks typed text against a simple format rule (such as requiring exactly 8 digits for a student ID) without writing any JavaScript."
      },
      {
        "term": "autofocus and multiple",
        "description": "The autofocus attribute places the cursor in a field as soon as the page opens. The multiple attribute lets visitors select more than one email address or file at once."
      }
    ],
    "example": `<!-- EDIT your existing name input; do not add a second one. -->
<label for="member-name">Full name:</label>
<input type="text" id="member-name" name="member_name" required
       placeholder="Use a made-up name" maxlength="60">

<!-- NEW controls to insert inside your existing club-form. -->
<label for="student-card-id">Practice student ID (8 digits):</label>
<input type="text" id="student-card-id" name="student_id" required
       pattern="[0-9]{8}" title="Enter exactly 8 digits" placeholder="12345678">
<label for="school-term">Membership term:</label>
<input type="text" id="school-term" name="term" value="Fall 2026" readonly>

<!-- Add maxlength="140" to the existing member-goals textarea.
     A placeholder is a hint, not a replacement for a visible label.
     Try disabled, then readonly, and compare their submission behavior. -->`,
    "task": "Add helpful validation rules to your club signup form, including required fields, an 8-digit student ID pattern, a readonly term box, and character limits.",
    "steps": [
      "Locate your club form inside <section id=\"club-form-section\"> in index.html (or create this section in <body> if not present yet).",
      "Add the required attribute to the student name field so it cannot be left blank.",
      "Add a student ID input with pattern=\"[0-9]{8}\" and title=\"Please enter your 8-digit student ID number\" to guide correct entry.",
      "Add a readonly input with name=\"term\" and value=\"Fall 2026\" so the term information is submitted without being changed.",
      "Add maxlength=\"140\" to a bio or comment field to keep responses short and easy to read."
    ],
    "check": {
      "question": "What is the main difference between readonly and disabled form fields?",
      "options": [
        "A readonly field sends its value with the form submission, while a disabled field is completely omitted and never sent.",
        "A disabled field allows typing but blocks mouse clicks, while a readonly field allows neither.",
        "A readonly field can only be used on buttons, while disabled can only be used on text inputs."
      ],
      "answer": 0,
      "explanation": "Readonly inputs let visitors see and copy text, and their name and value are included when the form is submitted. Disabled inputs are grayed out and their values are not submitted at all."
    },
    "sources": [
      "html_form_attributes.asp"
    ]
  },
  {
    "id": "form-override-attributes",
    "module": "forms",
    "title": "Special submit buttons and detached controls",
    "minutes": 14,
    "intro": "Submit buttons can change how and where a form is sent. You can have one button that sends a finished form and another button that saves an unfinished draft without checking required fields. You can even put fields outside the form tag and connect them using the form attribute.",
    "concepts": [
      {
        "term": "formaction",
        "description": "Sends the form data to a different web address only when this specific button is clicked, such as saving to a draft address."
      },
      {
        "term": "formnovalidate",
        "description": "Tells the browser to skip required field checks when this button is pressed, which is ideal for a \"Save draft\" button."
      },
      {
        "term": "formmethod and formenctype",
        "description": "Changes the HTTP method (GET or POST) or data encoding type just for this button click instead of using the form default."
      },
      {
        "term": "formtarget",
        "description": "Opens the form result in a new window or tab (such as formtarget=\"_blank\") when this button is used."
      },
      {
        "term": "The form attribute",
        "description": "Links an input or button anywhere on the page to a form by matching the form id, even if the element is placed outside the form tag."
      }
    ],
    "example": `<!-- INSIDE your existing form id="club-form": add a second action. -->
<!-- A real draft-saving address would need a backend; ours is a demo. -->
<button type="submit" formaction="#save-draft" formnovalidate
        formmethod="post" formenctype="application/x-www-form-urlencoded"
        formtarget="_blank">
  Try draft submission
</button>

<!-- OUTSIDE the form, inside your EXISTING footer: -->
<button type="submit" form="club-form">Submit from the footer</button>
<!-- No new section, form, or footer wrapper is needed. -->`,
    "task": "Add a draft button that skips required validation, and connect an external submit button located in the page footer to the club form using the form attribute.",
    "steps": [
      "Locate the form in <section id=\"club-form-section\"> in index.html (or create this section in <body> if not present yet) and ensure it has id=\"club-form\".",
      "Make sure at least one field inside the form has the required attribute so validation is active.",
      "Add a second submit button labeled \"Save Draft for Later\" with formaction=\"#save-draft\" and formnovalidate.",
      "Add formtarget=\"_blank\" to the draft button so draft results open in a fresh tab.",
      "Place a button outside the form in the page footer with form=\"club-form\" to confirm it submits the form from anywhere."
    ],
    "check": {
      "question": "Why would a developer add the formnovalidate attribute to a submit button?",
      "options": [
        "To let visitors save an incomplete draft without being blocked by required field checks.",
        "To automatically encrypt all form information before sending it across the web.",
        "To permanently delete all validation rules from the browser cache."
      ],
      "answer": 0,
      "explanation": "The formnovalidate attribute tells the browser to skip client-side validation for that button click. This is great for \"Save Draft\" buttons so users can save partial work without filling out every required field first."
    },
    "sources": [
      "html_form_attributes_form.asp"
    ],
    "patch": {
      "target": "form",
      "formId": "club-form",
      "html": "<div class=\"draft-actions\">\n  <button type=\"submit\" id=\"btn-save-draft\" formaction=\"#save-draft\" formnovalidate formtarget=\"_blank\">Save Draft for Later</button>\n</div>"
    }
  },
  {
    "id": "media-audio-playback",
    "module": "media",
    "title": "Playing audio on your website",
    "minutes": 12,
    "intro": "HTML5 lets you play music, podcasts, and sound clips directly in the browser without any extra plugins. You use the audio tag and provide control buttons so visitors can play or adjust the volume. Because different browsers like different audio files, you can list MP3, OGG, or WAV formats together.",
    "concepts": [
      {
        "term": "<audio> and controls",
        "description": "The player box; controls shows play, pause, time scrubbers, and volume bars."
      },
      {
        "term": "<source> element",
        "description": "Lists your audio files; the browser plays the first file format it understands."
      },
      {
        "term": "Audio formats (MP3, OGG, WAV)",
        "description": "Common audio file types. MP3 works almost everywhere."
      },
      {
        "term": "autoplay and muted",
        "description": "autoplay starts audio right away, but modern browsers only allow it if the audio is muted."
      },
      {
        "term": "loop and preload",
        "description": "loop repeats the track when finished; preload tells the browser whether to download audio right away or wait."
      },
      {
        "term": "Fallback text",
        "description": "A friendly download link inside the audio tag for older devices that cannot play web audio."
      }
    ],
    "example": "<section id=\"club-podcast-section\">\n  <h3>Club Weekly Podcast</h3>\n  <audio controls preload=\"metadata\">\n    <source src=\"media/podcast.mp3\" type=\"audio/mpeg\">\n    <source src=\"media/podcast.ogg\" type=\"audio/ogg\">\n    <p>Your browser does not support audio playback. <a href=\"media/podcast.mp3\">Download the episode</a>.</p>\n  </audio>\n</section>",
    "task": "Add an audio player to your club page so visitors can listen to a club podcast with playback controls and a download backup.",
    "steps": [
      "Find the main area in index.html where you want to add club audio.",
      "Add an <audio> element with the controls and preload=\"metadata\" attributes.",
      "Add two <source> tags inside the audio player for MP3 and OGG audio files.",
      "Include a fallback paragraph with a direct link to download the audio file."
    ],
    "check": {
      "question": "Why do we list multiple <source> tags inside one <audio> element?",
      "options": [
        "It forces the browser to play all the tracks at the exact same time.",
        "Different browsers support different audio formats, so the browser picks the first one it can play.",
        "It makes the audio file sound twice as loud."
      ],
      "answer": 1,
      "explanation": "Different browsers and devices support different file formats. Providing MP3 and OGG lets the browser play the first format it understands."
    },
    "sources": [
      "html_media.asp",
      "html5_audio.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"clubhouse-podcast\" aria-labelledby=\"podcast-title\">\n  <h3 id=\"podcast-title\">Clubhouse Audio Dispatch</h3>\n  <audio id=\"clubhouse-audio-player\" controls preload=\"metadata\">\n    <source src=\"audio/clubhouse-weekly.mp3\" type=\"audio/mpeg\">\n    <source src=\"audio/clubhouse-weekly.ogg\" type=\"audio/ogg\">\n    <p>Your browser does not support the audio element. <a href=\"audio/clubhouse-weekly.mp3\">Download the clubhouse audio broadcast</a>.</p>\n  </audio>\n</section>"
    }
  },
  {
    "id": "media-video-and-captions",
    "module": "media",
    "title": "Adding video and captions",
    "minutes": 15,
    "intro": "The video tag lets you display movies and clips right on your webpage. Setting width and height keeps your page layout steady while the video loads, and a poster image shows a preview photo. Adding captions with the track tag ensures everyone, including deaf students and people in quiet libraries, can follow along.",
    "concepts": [
      {
        "term": "<video> and dimensions",
        "description": "Plays video clips; width and height reserve space on the page so nothing jumps around while loading."
      },
      {
        "term": "poster",
        "description": "A preview picture shown on screen before the visitor presses play."
      },
      {
        "term": "Multiple video formats",
        "description": "Providing MP4 and WebM files inside <source> tags gives good playback on any device."
      },
      {
        "term": "<track> element",
        "description": "Loads timed subtitle or caption files (.vtt) so words appear on screen."
      },
      {
        "term": "kind, srclang, and label",
        "description": "Configures the track as captions, specifies the language (like \"en\"), and gives it a friendly menu name."
      },
      {
        "term": "Autoplay rules",
        "description": "Videos can only play automatically if they are muted, saving mobile data and avoiding loud surprises."
      }
    ],
    "example": "<section id=\"club-video-section\">\n  <h3>Welcome Tour</h3>\n  <video controls width=\"640\" height=\"360\" poster=\"images/tour-preview.jpg\" preload=\"metadata\">\n    <source src=\"videos/tour.webm\" type=\"video/webm\">\n    <source src=\"videos/tour.mp4\" type=\"video/mp4\">\n    <track kind=\"captions\" src=\"captions/tour-en.vtt\" srclang=\"en\" label=\"English\" default>\n    <p>Your browser cannot play this video. <a href=\"videos/tour.mp4\">Download the tour video</a>.</p>\n  </video>\n</section>",
    "task": "Add a video clip with controls, width and height dimensions, a poster photo, and an English captions track to your page.",
    "steps": [
      "Find the media section in your index.html page.",
      "Create a <video> element with controls, width=\"640\", height=\"360\", and a poster attribute.",
      "Add <source> tags offering WebM and MP4 formats.",
      "Add a <track> element with kind=\"captions\", srclang=\"en\", and a label attribute.",
      "Add a friendly fallback paragraph with a download link inside the video element."
    ],
    "check": {
      "question": "What does the <track> element do when placed inside a <video> tag?",
      "options": [
        "It tracks the physical GPS location of the person watching the video.",
        "It provides timed captions or subtitles from a .vtt file for accessibility.",
        "It speeds up the video download rate."
      ],
      "answer": 1,
      "explanation": "The track tag connects a WebVTT (.vtt) subtitle file to your video so synchronized captions appear on screen."
    },
    "sources": [
      "html_media.asp",
      "html5_video.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"clubhouse-tour\" aria-labelledby=\"tour-heading\">\n  <h3 id=\"tour-heading\">Campus Clubhouse Virtual Tour</h3>\n  <video id=\"clubhouse-video-player\" controls width=\"640\" height=\"360\" poster=\"images/clubhouse-poster.jpg\" preload=\"metadata\">\n    <source src=\"media/clubhouse-tour.webm\" type=\"video/webm\">\n    <source src=\"media/clubhouse-tour.mp4\" type=\"video/mp4\">\n    <track kind=\"captions\" src=\"captions/tour-en.vtt\" srclang=\"en\" label=\"English\" default>\n    <p>Your browser does not support native video. <a href=\"media/clubhouse-tour.mp4\">Download the tour video</a>.</p>\n  </video>\n</section>"
    }
  },
  {
    "id": "media-svg-graphics",
    "module": "media",
    "title": "Crisp graphics with SVG",
    "minutes": 14,
    "intro": "Normal photos can become blurry or pixelated when you zoom in on them. Scalable Vector Graphics (SVG) are drawn with math and code instead of fixed dots, so they stay perfectly sharp on any screen size. You can write SVG shapes directly in your HTML and color them with code.",
    "concepts": [
      {
        "term": "<svg> and viewBox",
        "description": "The vector image box; viewBox sets the internal grid coordinates that scale to fit any size."
      },
      {
        "term": "Basic shapes (<rect>, <circle>, <line>)",
        "description": "Simple building blocks for drawing rectangles, circles, and lines."
      },
      {
        "term": "<polygon> and <path>",
        "description": "Shapes with many points or smooth curves for drawing complex logos and icons."
      },
      {
        "term": "fill and stroke",
        "description": "fill paints the inside of a shape; stroke paints the outline border."
      },
      {
        "term": "Accessibility with <title> and <desc>",
        "description": "Gives screen readers a clear spoken description of what the graphic shows."
      }
    ],
    "example": "<svg viewBox=\"0 0 100 100\" width=\"120\" height=\"120\" role=\"img\" aria-labelledby=\"crest-title crest-desc\">\n  <title id=\"crest-title\">Club Logo</title>\n  <desc id=\"crest-desc\">A gold circular badge with a dark blue star in the center.</desc>\n  <circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#facc15\" stroke=\"#1e3a8a\" stroke-width=\"4\" />\n  <polygon points=\"50,15 61,38 86,38 66,54 73,78 50,62 27,78 34,54 14,38 39,38\" fill=\"#1e3a8a\" />\n</svg>",
    "task": "Draw a sharp vector club badge directly in HTML using SVG shapes, custom colors, and accessible text descriptions.",
    "steps": [
      "Open index.html and locate your club branding or header area.",
      "Add an <svg> tag with viewBox=\"0 0 100 100\", width=\"100\", and height=\"100\".",
      "Add <title> and <desc> elements inside the SVG so screen readers can explain the graphic.",
      "Draw a round background using the <circle> tag with cx, cy, r, fill, and stroke attributes.",
      "Add a shape like a <rect> or <polygon> in the center to complete your club emblem."
    ],
    "check": {
      "question": "Why do SVG images remain crisp and clear when zoomed in, unlike PNG or JPG images?",
      "options": [
        "SVGs use mathematical instructions to draw shapes rather than a fixed grid of color dots.",
        "SVGs download hidden extra photos from the server whenever you zoom in.",
        "SVGs turn on high-definition mode inside your computer monitor."
      ],
      "answer": 0,
      "explanation": "Because SVG drawings use mathematical coordinates and lines, the browser recalculates the picture at any size with perfect sharpness."
    },
    "sources": [
      "html5_svg.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<div id=\"club-brand-badge\" class=\"clubhouse-brand-badge\">\n  <svg id=\"club-brand-svg\" viewBox=\"0 0 100 100\" width=\"80\" height=\"80\" role=\"img\" aria-labelledby=\"badge-title badge-desc\">\n    <title id=\"badge-title\">Clubhouse Official Badge</title>\n    <desc id=\"badge-desc\">Gold circular crest with navy club monogram</desc>\n    <circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#fef08a\" stroke=\"#0f172a\" stroke-width=\"4\" />\n    <rect x=\"25\" y=\"25\" width=\"50\" height=\"50\" rx=\"8\" fill=\"#0f172a\" />\n    <text x=\"50\" y=\"58\" font-size=\"24\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">CC</text>\n  </svg>\n</div>"
    }
  },
  {
    "id": "media-canvas-markup",
    "module": "media",
    "title": "The canvas drawing surface",
    "minutes": 12,
    "intro": "The canvas tag creates a blank rectangular space on your page for drawing graphics, charts, and animations. In HTML, canvas is just an empty container with a set width and height, plus fallback text for older devices. Drawing actual shapes and games on that canvas requires JavaScript, which you will learn in the next course.",
    "concepts": [
      {
        "term": "<canvas> tag",
        "description": "Creates an empty drawing surface on your webpage."
      },
      {
        "term": "width and height attributes",
        "description": "Sets the number of pixels on the drawing surface. (Do not resize it only with CSS, or drawings can look stretched)."
      },
      {
        "term": "Fallback text",
        "description": "Helpful text placed inside <canvas> and </canvas> that appears if a browser cannot display canvas drawings."
      },
      {
        "term": "JavaScript handles the drawing",
        "description": "HTML sets up the canvas box; JavaScript commands actually draw the lines, colors, and game elements later."
      }
    ],
    "example": `<section id="club-scoreboard-section">
  <h3>Club drawing board</h3>
  <p>This surface stays blank until we add JavaScript drawing after the JavaScript course.</p>
  <canvas id="game-scoreboard" width="500" height="250" role="img" aria-label="Blank practice drawing surface">
    <p>Your browser cannot display canvas. This is an empty practice drawing surface.</p>
  </canvas>
</section>`,
    "task": "Add a blank <canvas> surface to your page with explicit pixel dimensions and accessible fallback text describing the board.",
    "steps": [
      "Find the games or activities section in index.html.",
      "Add a <canvas> element with an id, role=\"img\", and aria-label attribute.",
      "Set width=\"480\" and height=\"240\" directly as HTML attributes on the canvas tag.",
      "Add fallback text inside canvas for browsers without canvas support. Also add a visible paragraph outside it explaining that supported browsers show a blank surface until JavaScript drawing is added."
    ],
    "check": {
      "question": "What happens if you resize a canvas using only CSS instead of setting HTML width and height attributes?",
      "options": [
        "The canvas automatically gains higher resolution for your drawings.",
        "The drawing area gets stretched out and blurry, like enlarging a small photo.",
        "The canvas immediately turns into an SVG graphic."
      ],
      "answer": 1,
      "explanation": "HTML width and height define the actual pixel count of the drawing board. CSS only stretches the surface, making drawings look distorted."
    },
    "sources": [
      "html5_canvas.asp"
    ],
    "patch": {
      "target": "body",
      "html": `<section id="clubhouse-game-arena" aria-labelledby="arena-heading">
  <h3 id="arena-heading">Club drawing board</h3>
  <p>This canvas stays blank until we learn JavaScript drawing. Its HTML sets up only the surface.</p>
  <canvas id="arena-stage" width="480" height="240" role="img" aria-label="Blank club practice drawing surface">
    <p>Your browser cannot display canvas. This is an empty practice drawing surface.</p>
  </canvas>
</section>`
    }
  },
  {
    "id": "media-objects-embeds-plugins",
    "module": "media",
    "title": "Embedding documents and older media",
    "minutes": 12,
    "intro": "The object and embed tags let you display external files like PDF documents directly inside your webpage. Years ago, people used plugins like Flash for games and videos, but Flash is now completely obsolete, disabled, and unsafe. Today, we use object primarily to display PDFs with a direct download link as a backup.",
    "concepts": [
      {
        "term": "<object> and data",
        "description": "Embeds an external document like a PDF using its data file path."
      },
      {
        "term": "Fallback content",
        "description": "Any message or download link placed inside the <object> tag shows up if the device cannot display the file inline."
      },
      {
        "term": "<embed> element",
        "description": "A simple tag for embedding external files, but it does not support fallback content inside it."
      },
      {
        "term": "Why Flash is gone",
        "description": "Old browser plugins like Flash and Silverlight were slow, drained batteries, and had security holes; modern HTML5 replaced them completely."
      },
      {
        "term": "<object> versus <iframe>",
        "description": "Iframes are usually used for other web pages, while objects are great for media files and PDFs."
      }
    ],
    "example": "<section id=\"club-docs-section\">\n  <h3>Club Constitution</h3>\n  <object data=\"docs/club-constitution.pdf\" type=\"application/pdf\" width=\"100%\" height=\"400\">\n    <p>Your device cannot display this PDF directly. <a href=\"docs/club-constitution.pdf\">Download the Club Constitution (PDF)</a>.</p>\n  </object>\n</section>",
    "task": "Embed the club constitution PDF using an <object> element and provide a direct download link if a visitor's device cannot display PDFs.",
    "steps": [
      "Locate the documents or information section in index.html.",
      "Add an <object> element with data=\"docs/club-rules.pdf\" and type=\"application/pdf\".",
      "Set width=\"100%\" and height=\"400\" on the object tag.",
      "Add a fallback paragraph inside the object tag containing a download link."
    ],
    "check": {
      "question": "Why are browser plugins like Adobe Flash no longer used on the web?",
      "options": [
        "They required special passwords that web browsers forgot.",
        "They had severe security flaws and drained device batteries, so modern HTML5 replaced them.",
        "Flash only worked on desktop computers made before the year 2000."
      ],
      "answer": 1,
      "explanation": "Plugins like Flash were insecure and slow. Modern HTML5 handles audio, video, and vector graphics directly without any plugins."
    },
    "sources": [
      "html_object.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"clubhouse-governance\" aria-labelledby=\"bylaws-heading\">\n  <h3 id=\"bylaws-heading\">Clubhouse Charter &amp; Bylaws</h3>\n  <object id=\"clubhouse-rules-doc\" data=\"docs/campus-clubhouse-rules.pdf\" type=\"application/pdf\" width=\"100%\" height=\"450\">\n    <p>Inline PDF viewer unavailable on this device. <a href=\"docs/campus-clubhouse-rules.pdf\">Download the Clubhouse Charter PDF</a>.</p>\n  </object>\n</section>"
    }
  },
  {
    "id": "media-youtube-video-embeds",
    "module": "media",
    "title": "Embedding YouTube videos safely",
    "minutes": 14,
    "intro": "Hosting high-definition video files on your own server can use lots of storage and bandwidth. Many club websites embed videos hosted on YouTube using an iframe instead. Using YouTube's privacy-enhanced web address protects student privacy by blocking tracking cookies until they press play.",
    "concepts": [
      {
        "term": "<iframe> embed code",
        "description": "Creates a window on your page that displays the video player from YouTube."
      },
      {
        "term": "Privacy-enhanced mode (youtube-nocookie.com)",
        "description": "A special YouTube address that avoids saving tracking cookies on visitors devices before they play the video."
      },
      {
        "term": "Video address parameters",
        "description": "Extra settings added to the link, like ?controls=1 (shows player buttons) or ?mute=1."
      },
      {
        "term": "allow and allowfullscreen",
        "description": "Lets the embedded video use full-screen viewing and phone features."
      },
      {
        "term": "Internet requirements",
        "description": "Embedded videos need an active internet connection to load and will not work offline."
      }
    ],
    "example": "<div class=\"video-container\">\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=1\"\n    title=\"Club Semester Highlights Video\"\n    loading=\"lazy\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen>\n  </iframe>\n</div>",
    "task": "Embed a club highlight video using YouTube's privacy-enhanced domain, lazy loading, and an accessible title.",
    "steps": [
      "Find the video showcase section in index.html.",
      "Add a container <div> to hold the video embed.",
      "Add an <iframe> element pointing to https://www.youtube-nocookie.com/embed/VIDEO_ID.",
      "Add a descriptive title attribute explaining the video to screen readers.",
      "Include loading=\"lazy\" and allowfullscreen attributes on the iframe."
    ],
    "check": {
      "question": "What is the main benefit of using youtube-nocookie.com instead of youtube.com?",
      "options": [
        "It prevents YouTube from setting tracking cookies until the visitor actually clicks play.",
        "It removes all video advertisements forever without a subscription.",
        "It makes the video play three times faster on slow connections."
      ],
      "answer": 0,
      "explanation": "YouTube's privacy-enhanced mode (youtube-nocookie.com) stops the platform from setting tracking cookies on your visitors until they start the video."
    },
    "sources": [
      "html_youtube.asp"
    ],
    "patch": {
      "target": "body",
      "html": "<section id=\"clubhouse-highlights-section\" aria-labelledby=\"highlights-heading\">\n  <h3 id=\"highlights-heading\">Semester Showcase Highlights</h3>\n  <div class=\"video-embed-frame\">\n    <iframe\n      id=\"clubhouse-highlights-iframe\"\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?rel=0\"\n      title=\"Campus Clubhouse Semester Highlights and Student Projects\"\n      loading=\"lazy\"\n      allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen>\n    </iframe>\n  </div>\n</section>"
    }
  }
];

export const deferredApis = [
  {
    "id": "html5-api-overview",
    "title": "HTML5 browser APIs overview",
    "intro": "Browser APIs are built-in tools that let web pages tap into advanced device features and live data. While HTML creates the content structure, using these APIs requires JavaScript to run logic and react to actions. You will learn to use these tools when you begin your JavaScript studies.",
    "sources": [
      "html5_api_whatis.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Add interactive features to the Campus Clubhouse portal, such as live member badges, dynamic club schedules, and quick device status alerts."
  },
  {
    "id": "html5-geolocation",
    "title": "Geolocation: Finding device location",
    "intro": "The Geolocation API allows a web page to ask for your device's geographical coordinates like latitude and longitude. Because location is private, the browser always asks the user for permission before sharing anything. Reading those coordinates and placing a marker on a map requires JavaScript code.",
    "sources": [
      "html5_geolocation.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Build a \"Find Nearest Club Meeting\" tool on the Campus Clubhouse page that calculates how close a student is to a study lounge or workshop room once they share their location."
  },
  {
    "id": "html5-drag-and-drop",
    "title": "Drag and drop: Moving items on screen",
    "intro": "HTML lets you mark an element as draggable by adding a simple attribute to it. However, deciding what information gets moved, allowing an area to accept the drop, and updating the page requires JavaScript. With scripting, you can turn draggable elements into smooth interactive widgets.",
    "sources": [
      "html5_draganddrop.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Create a visual task organizer for Campus Clubhouse leaders where officers can drag club project cards between \"Planning\", \"Approved\", and \"Completed\" columns."
  },
  {
    "id": "html5-popover-api",
    "title": "Popover: Simple overlays and popups",
    "intro": "The Popover API creates small overlays such as menus and information cards. Some popovers can be opened using only HTML attributes; JavaScript adds programmatic controls and events. We intentionally keep this whole API topic until after JavaScript, when you can learn both approaches together.",
    "sources": [
      "html5_popover.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Display quick club leader bios and upcoming workshop details inside clean popover cards on the Campus Clubhouse member directory."
  },
  {
    "id": "html5-web-storage",
    "title": "Web storage: Saving info in the browser",
    "intro": "Web storage lets websites save small pieces of information directly inside your web browser so they stay saved between visits. Tools like localStorage keep your saved settings even after you close the tab. Saving, reading, and clearing this stored data requires JavaScript functions.",
    "sources": [
      "html5_webstorage.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Save a student's dark mode preference and remember their unsubmitted Campus Clubhouse club interest form so their answers are not lost if they accidentally refresh the page."
  },
  {
    "id": "html5-web-workers",
    "title": "Web workers: Running tasks in the background",
    "intro": "Normally, a web browser runs all page scripts and visual updates on a single main thread. Web workers let you run heavy background calculations in a separate thread so the page never freezes or lags. Starting workers and sending messages between them is handled entirely with JavaScript.",
    "sources": [
      "html5_webworkers.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Calculate attendance stats and filter hundreds of Campus Clubhouse activity records in the background without slowing down the page."
  },
  {
    "id": "html5-server-sent-events",
    "title": "Server-sent events: Live updates from a server",
    "intro": "Server-sent events let a web server push fresh updates to a web page automatically without the page having to reload. This is great for live sports scores, election counts, or real-time news feeds. Listening for new incoming messages and displaying them on the screen requires JavaScript.",
    "sources": [
      "html5_serversentevents.asp"
    ],
    "prerequisite": "Complete JavaScript first",
    "projectIdea": "Stream live attendance numbers, sudden room changes, and real-time voting results for club elections onto the Campus Clubhouse dashboard."
  }
];
