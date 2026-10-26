// Original chat-app lessons. W3Schools CSS tutorial sidebar audited 2026-10-26.
export const cssLessons = [
  {
    "id": "css-start",
    "module": "css",
    "title": "CSS syntax, selectors, and stylesheets",
    "minutes": 20,
    "intro": "The HTML chat is currently a static document. CSS rules give that document a visual language without adding message sending. Start with an external file so every later experiment has a predictable home.",
    "concepts": [
      {
        "term": "Rule",
        "description": "A selector chooses elements; declarations inside braces pair properties with values."
      },
      {
        "term": "Selectors",
        "description": "Type selectors match tags, .class matches reusable labels, #id matches one ID, and a comma groups selectors."
      },
      {
        "term": "Stylesheet placement",
        "description": "A link in head loads an external stylesheet. Internal style and inline style also exist; later cascade lessons explain conflicts."
      },
      {
        "term": "Comments and errors",
        "description": "Use /* comments */. A misspelled property or invalid value is ignored; inspect the browser Styles panel to locate it."
      }
    ],
    "example": "<link rel=\"stylesheet\" href=\"styles.css\">\n/* styles.css */\nbody { color: #172033; }\nh1, h2 { color: navy; }\n.message { background-color: aliceblue; }",
    "task": "Create styles.css and link it from the chat page. Style headings and a sample message, then deliberately misspell color and inspect the ignored declaration.",
    "steps": [
      "Open the chat project built in the HTML track. Create styles.css and link it from the chat page. Style headings and a sample message, then deliberately misspell color and inspect the ignored declaration.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains css syntax, selectors, and stylesheets?",
      "options": [
        "A selector chooses elements; declarations inside braces pair properties with values.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A selector chooses elements; declarations inside braces pair properties with values. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/default.asp",
      "/css/css_intro.asp",
      "/css/css_syntax.asp",
      "/css/css_selectors.asp",
      "/css/css_selectors_grouping.asp",
      "/css/css_howto.asp",
      "/css/css_howto_internal.asp",
      "/css/css_howto_inline.asp",
      "/css/css_howto_multiple_cascade.asp",
      "/css/css_comments.asp",
      "/css/css_errors.asp",
      "/css/css_challenges_selectors.asp",
      "/css/css_challenges_howto.asp",
      "/css/css_challenges_imagemodal.asp",
      "/css/css_challenges_imagecenter.asp",
      "/css/css_challenges_imagefilters.asp",
      "/css/css_challenges_imageshapes.asp",
      "/css/css_challenges_objectfit.asp",
      "/css/css_challenges_objectposition.asp",
      "/css/css_challenges_flexbox_intro.asp",
      "/css/css_challenges_grid_intro.asp"
    ]
  },
  {
    "id": "css-colors",
    "module": "css",
    "title": "Colors and background layers",
    "minutes": 20,
    "intro": "Use color to separate the room navigation, transcript, and message composer. Text must remain legible even when decorative images fail to load.",
    "concepts": [
      {
        "term": "Color notation",
        "description": "Named colors, RGB/RGBA, hexadecimal including alpha, and HSL/HSLA describe colors; alpha controls transparency."
      },
      {
        "term": "Background layers",
        "description": "Background color sits behind background images. Repeat, position, attachment, and shorthand control their painting."
      },
      {
        "term": "Readability",
        "description": "A background image is decoration and cannot replace meaningful HTML text or alternative text."
      }
    ],
    "example": ".message { color: hsl(220, 40%, 18%); background-color: #eef4ff; }\n.chat-banner { background: #17375e url(\"room-pattern.png\") repeat-x left top scroll; }\n.notice { background-color: rgba(20, 90, 160, .12); }",
    "task": "Give the transcript a solid readable base. Experiment with RGB, HEX and HSL equivalents and an optional local background image; verify the fallback color.",
    "steps": [
      "Open the chat project built in the HTML track. Give the transcript a solid readable base. Experiment with RGB, HEX and HSL equivalents and an optional local background image; verify the fallback color.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains colors and background layers?",
      "options": [
        "Named colors, RGB/RGBA, hexadecimal including alpha, and HSL/HSLA describe colors; alpha controls transparency.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Named colors, RGB/RGBA, hexadecimal including alpha, and HSL/HSLA describe colors; alpha controls transparency. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_colors.asp",
      "/css/css_colors_rgb.asp",
      "/css/css_colors_hex.asp",
      "/css/css_colors_hsl.asp",
      "/css/css_background.asp",
      "/css/css_background_image.asp",
      "/css/css_background_repeat.asp",
      "/css/css_background_attachment.asp",
      "/css/css_background_shorthand.asp",
      "/css/css_challenges_colors.asp",
      "/css/css_challenges_background.asp"
    ]
  },
  {
    "id": "css-borders",
    "module": "css",
    "title": "Borders and rounded message bubbles",
    "minutes": 20,
    "intro": "A border can distinguish messages from the page without relying on color alone. A visible border needs a style as well as a width and color.",
    "concepts": [
      {
        "term": "Border shorthand",
        "description": "border combines width, style, and color; individual side properties can override one edge."
      },
      {
        "term": "Rounded corners",
        "description": "border-radius rounds a box; two values separated by / create elliptical corners."
      },
      {
        "term": "Border styles",
        "description": "solid, dotted, dashed, double, groove, ridge, inset and outset create different edge treatments."
      }
    ],
    "example": ".message { border: 1px solid #9bb1cf; border-left: 4px solid navy; border-radius: 12px 12px 12px 2px; }",
    "task": "Style incoming and outgoing static message bubbles with different corner shapes. Compare the border style choices without changing message meaning.",
    "steps": [
      "Open the chat project built in the HTML track. Style incoming and outgoing static message bubbles with different corner shapes. Compare the border style choices without changing message meaning.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains borders and rounded message bubbles?",
      "options": [
        "border combines width, style, and color; individual side properties can override one edge.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "border combines width, style, and color; individual side properties can override one edge. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_border.asp",
      "/css/css_border_width.asp",
      "/css/css_border_color.asp",
      "/css/css_border_sides.asp",
      "/css/css_border_shorthand.asp",
      "/css/css_border_rounded.asp",
      "/css/css3_borders.asp",
      "/css/css_challenges_border.asp",
      "/css/css_challenges_css3_rounded_corners.asp",
      "/css/css_challenges_css3_transforms.asp"
    ]
  },
  {
    "id": "css-units",
    "module": "css",
    "title": "Absolute and relative units",
    "minutes": 20,
    "intro": "Relative units help the chat respond to user preferences and screen size. Pixel values are useful for thin borders, while text should usually respect the root font size.",
    "concepts": [
      {
        "term": "Relative units",
        "description": "rem follows the root font size, em follows the relevant element font size, percentages depend on context, and vw/vh follow viewport dimensions."
      },
      {
        "term": "Absolute units",
        "description": "px is a CSS reference pixel; cm, mm, in, pt and pc are mainly useful for print rather than assuming physical screen measurements."
      }
    ],
    "example": "body { font-size: 1rem; }\n.message { padding: .75em 1em; max-width: 36rem; }\n.chat-shell { width: 95%; }\n.transcript { min-height: 40vh; }",
    "task": "Compare px, em, rem, percent and viewport units on disposable message boxes. Increase the browser font setting and verify that the production transcript remains readable.",
    "steps": [
      "Open the chat project built in the HTML track. Compare px, em, rem, percent and viewport units on disposable message boxes. Increase the browser font setting and verify that the production transcript remains readable.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains absolute and relative units?",
      "options": [
        "rem follows the root font size, em follows the relevant element font size, percentages depend on context, and vw/vh follow viewport dimensions.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "rem follows the root font size, em follows the relevant element font size, percentages depend on context, and vw/vh follow viewport dimensions. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_units.asp",
      "/css/css_units_absolute.asp",
      "/css/css_units_relative.asp",
      "/css/css_challenges_units.asp"
    ]
  },
  {
    "id": "css-box-model",
    "module": "css",
    "title": "Spacing, dimensions, and the box model",
    "minutes": 20,
    "intro": "A message is more than its text width. Content, padding, border, and margin each occupy space. Learn this before building columns so widths remain predictable.",
    "concepts": [
      {
        "term": "Box model",
        "description": "Padding is inside the border; margin separates boxes outside the border."
      },
      {
        "term": "Sizing",
        "description": "content-box excludes padding and borders from width; border-box includes them."
      },
      {
        "term": "Margin collapse",
        "description": "Adjacent vertical block margins may collapse to the larger margin rather than add together."
      },
      {
        "term": "Bounds",
        "description": "min-width/min-height and max-width/max-height constrain dimensions; percentage sizes depend on the containing block."
      }
    ],
    "example": ".message { box-sizing: border-box; width: 90%; max-width: 36rem; padding: 12px 16px; margin: 12px 0; }\n.transcript { min-height: 240px; }",
    "task": "Add comfortable message padding, a maximum bubble width, and transcript minimum height. Measure the total width in DevTools and compare content-box with border-box.",
    "steps": [
      "Open the chat project built in the HTML track. Add comfortable message padding, a maximum bubble width, and transcript minimum height. Measure the total width in DevTools and compare content-box with border-box.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains spacing, dimensions, and the box model?",
      "options": [
        "Padding is inside the border; margin separates boxes outside the border.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Padding is inside the border; margin separates boxes outside the border. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_margin.asp",
      "/css/css_margin_collapse.asp",
      "/css/css_padding.asp",
      "/css/css_padding_box-sizing.asp",
      "/css/css_height_width.asp",
      "/css/css_height_width_min_max.asp",
      "/css/css_boxmodel.asp",
      "/css/css_max-width.asp",
      "/css/css3_box-sizing.asp",
      "/css/css_challenges_margin.asp",
      "/css/css_challenges_padding.asp",
      "/css/css_challenges_height_width.asp",
      "/css/css_challenges_boxmodel.asp",
      "/css/css_challenges_max-width.asp",
      "/css/css_challenges_css3_box-sizing.asp"
    ]
  },
  {
    "id": "css-selectors",
    "module": "css",
    "title": "Combinators, pseudo-classes, and pseudo-elements",
    "minutes": 20,
    "intro": "Selectors should describe the intended component precisely. Learn relationship and state selectors before styling menus or form interactions.",
    "concepts": [
      {
        "term": "Combinators",
        "description": "A space matches descendants, > direct children, + the next sibling, and ~ following siblings."
      },
      {
        "term": "Pseudo-classes",
        "description": "States include :hover, :focus, :checked, :disabled and :invalid; structural selectors include :first-child, :last-child and :nth-child()."
      },
      {
        "term": "Pseudo-elements",
        "description": "::before/::after insert decorative generated content; ::first-letter, ::first-line, ::selection and ::marker style portions of content."
      }
    ],
    "example": ".transcript > .message + .message { margin-top: 12px; }\n.message:first-child { border-top-width: 3px; }\nbutton:disabled { opacity: .6; }\n.room-label::before { content: \"# \"; }\n::selection { background: #c9ddff; }",
    "task": "Style direct message children, the first message, and selected text. Add a decorative room hash with ::before; keep meaningful unread counts in HTML.",
    "steps": [
      "Open the chat project built in the HTML track. Style direct message children, the first message, and selected text. Add a decorative room hash with ::before; keep meaningful unread counts in HTML.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains combinators, pseudo-classes, and pseudo-elements?",
      "options": [
        "A space matches descendants, > direct children, + the next sibling, and ~ following siblings.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A space matches descendants, > direct children, + the next sibling, and ~ following siblings. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_combinators.asp",
      "/css/css_pseudo_classes.asp",
      "/css/css_pseudo_classes_interactive.asp",
      "/css/css_pseudo_classes_structural.asp",
      "/css/css_pseudo_elements.asp",
      "/css/css_pseudo_elements_text.asp",
      "/css/css_pseudo_elements_content.asp",
      "/css/css_image_transparency.asp",
      "/css/css_challenges_combinators.asp",
      "/css/css_challenges_pseudo_classes.asp",
      "/css/css_challenges_pseudo_elements.asp",
      "/css/css_challenges_image_transparency.asp"
    ]
  },
  {
    "id": "css-outline",
    "module": "css",
    "title": "Outlines and visible focus",
    "minutes": 20,
    "intro": "Outlines are painted outside the border without taking layout space. They are particularly useful for showing which chat control has keyboard focus.",
    "concepts": [
      {
        "term": "Outline",
        "description": "An outline does not occupy layout space and may overlap adjacent content."
      },
      {
        "term": "Outline controls",
        "description": "outline-style, outline-width, outline-color and shorthand set the ring; outline-offset moves it away from the border."
      }
    ],
    "example": "input:focus, button:focus, a:focus { outline: 3px solid #005fcc; outline-offset: 3px; }",
    "task": "Add a visible focus outline to the composer, Send button, and room links. Tab through the page and verify that each focused element is obvious.",
    "steps": [
      "Open the chat project built in the HTML track. Add a visible focus outline to the composer, Send button, and room links. Tab through the page and verify that each focused element is obvious.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains outlines and visible focus?",
      "options": [
        "An outline does not occupy layout space and may overlap adjacent content.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "An outline does not occupy layout space and may overlap adjacent content. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_outline.asp",
      "/css/css_outline_width.asp",
      "/css/css_outline_color.asp",
      "/css/css_outline_shorthand.asp",
      "/css/css_outline_offset.asp",
      "/css/css_challenges_outline.asp"
    ]
  },
  {
    "id": "css-text",
    "module": "css",
    "title": "Text alignment, decoration, and spacing",
    "minutes": 20,
    "intro": "Chat content should be easy to scan while retaining the sender’s original wording. Apply decorative transformations to labels rather than rewriting message appearance unexpectedly.",
    "concepts": [
      {
        "term": "Text formatting",
        "description": "text-align aligns inline content; direction and unicode-bidi affect bidirectional text."
      },
      {
        "term": "Decoration",
        "description": "text-decoration-line, color, style and thickness control underlines and other decorations."
      },
      {
        "term": "Spacing",
        "description": "line-height changes line spacing; letter-spacing, word-spacing and text-indent adjust text rhythm; white-space controls wrapping."
      },
      {
        "term": "Transformation and shadow",
        "description": "text-transform changes rendered case without changing source text; text-shadow paints a decorative shadow."
      }
    ],
    "example": ".message { line-height: 1.6; text-align: start; }\n.room-label { text-transform: uppercase; letter-spacing: .06em; }\na { text-decoration: underline solid navy 2px; }\nh1 { text-shadow: 1px 1px 2px #ccd8eb; }",
    "task": "Improve transcript line spacing and room label hierarchy. Compare decoration styles and verify that long paragraphs and mixed-direction content remain understandable.",
    "steps": [
      "Open the chat project built in the HTML track. Improve transcript line spacing and room label hierarchy. Compare decoration styles and verify that long paragraphs and mixed-direction content remain understandable.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains text alignment, decoration, and spacing?",
      "options": [
        "text-align aligns inline content; direction and unicode-bidi affect bidirectional text.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "text-align aligns inline content; direction and unicode-bidi affect bidirectional text. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_text.asp",
      "/css/css_text_align.asp",
      "/css/css_text_decoration.asp",
      "/css/css_text_decoration_styles.asp",
      "/css/css_text_transformation.asp",
      "/css/css_text_spacing.asp",
      "/css/css_text_shadow.asp",
      "/css/css_challenges_text.asp",
      "/css/css_challenges_align.asp"
    ]
  },
  {
    "id": "css-fonts",
    "module": "css",
    "title": "Font families, fallback, and web fonts",
    "minutes": 20,
    "intro": "A font stack keeps the chat usable when a preferred font is absent. Remote font services are optional; the interface must still work with local fallbacks.",
    "concepts": [
      {
        "term": "Font stack",
        "description": "The browser tries font-family choices from left to right and finishes with a generic family such as sans-serif."
      },
      {
        "term": "Font controls",
        "description": "font-size, font-style, font-weight and font-variant control text; the font shorthand must include size and family."
      },
      {
        "term": "Font loading",
        "description": "Google Fonts uses a stylesheet service; @font-face loads a custom file. Provide permitted font files, fallback families and font-display: swap."
      }
    ],
    "example": "@font-face { font-family: ChatSans; src: url(\"chat-sans.woff2\") format(\"woff2\"); font-display: swap; }\nbody { font: 1rem/1.6 ChatSans, Arial, sans-serif; }\n.sender { font-weight: 700; }\n.timestamp { font-style: italic; }",
    "task": "Choose a web-safe font stack for all messages. Compare serif and sans-serif pairings; optionally load a permitted local web font and test the fallback with its URL temporarily removed.",
    "steps": [
      "Open the chat project built in the HTML track. Choose a web-safe font stack for all messages. Compare serif and sans-serif pairings; optionally load a permitted local web font and test the fallback with its URL temporarily removed.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains font families, fallback, and web fonts?",
      "options": [
        "The browser tries font-family choices from left to right and finishes with a generic family such as sans-serif.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "The browser tries font-family choices from left to right and finishes with a generic family such as sans-serif. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_font.asp",
      "/css/css_font_websafe.asp",
      "/css/css_font_fallbacks.asp",
      "/css/css_font_style.asp",
      "/css/css_font_size.asp",
      "/css/css_font_google.asp",
      "/css/css_font_pairings.asp",
      "/css/css_font_shorthand.asp",
      "/css/css3_fonts.asp",
      "/css/css_challenges_font.asp",
      "/css/css_challenges_css3_fonts.asp"
    ]
  },
  {
    "id": "css-icons",
    "module": "css",
    "title": "Icon libraries and accessible labels",
    "minutes": 20,
    "intro": "W3Schools demonstrates Font Awesome, Bootstrap Icons and Google icons. Their glyphs require the corresponding external stylesheet; the underlying control still needs a readable accessible name.",
    "concepts": [
      {
        "term": "Icon fonts",
        "description": "Icon libraries map classes or ligature text to glyphs after their library stylesheet is loaded."
      },
      {
        "term": "Accessible controls",
        "description": "Decorative icons should be hidden from assistive technology when adjacent visible text already names the action."
      }
    ],
    "example": "<button type=\"button\"><span aria-hidden=\"true\">✉</span> Send</button>\n<!-- After loading the selected library stylesheet: -->\n<span class=\"material-icons\" aria-hidden=\"true\">chat</span>\n/* CSS */\nbutton { font: inherit; }",
    "task": "Give the static Send control a visible text label and a decorative icon. Compare the three library installation examples in the source lessons; use only one library and retain the text fallback.",
    "steps": [
      "Open the chat project built in the HTML track. Give the static Send control a visible text label and a decorative icon. Compare the three library installation examples in the source lessons; use only one library and retain the text fallback.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains icon libraries and accessible labels?",
      "options": [
        "Icon libraries map classes or ligature text to glyphs after their library stylesheet is loaded.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Icon libraries map classes or ligature text to glyphs after their library stylesheet is loaded. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_icons.asp",
      "/css/css_icons_bootstrap.asp",
      "/css/css_icons_google.asp",
      "/css/css_challenges_icons.asp"
    ]
  },
  {
    "id": "css-display",
    "module": "css",
    "title": "Display and visibility",
    "minutes": 20,
    "intro": "A box can participate in flow as block, inline or inline-block. Hiding an element has different effects depending on whether its box remains in the layout.",
    "concepts": [
      {
        "term": "Hiding",
        "description": "display: none removes a box from layout; visibility: hidden preserves its occupied space."
      },
      {
        "term": "Display modes",
        "description": "Block boxes start a new line; inline boxes flow with text; inline-block accepts dimensions while flowing inline."
      }
    ],
    "example": ".badge { display: inline-block; padding: 4px 8px; }\n.demo-removed { display: none; }\n.demo-reserved { visibility: hidden; }",
    "task": "Make message status labels inline-block badges. Compare the two hiding methods on a disposable example, keeping essential controls visible.",
    "steps": [
      "Open the chat project built in the HTML track. Make message status labels inline-block badges. Compare the two hiding methods on a disposable example, keeping essential controls visible.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains display and visibility?",
      "options": [
        "display: none removes a box from layout; visibility: hidden preserves its occupied space.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "display: none removes a box from layout; visibility: hidden preserves its occupied space. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_display.asp",
      "/css/css_display_hide.asp",
      "/css/css_inline-block.asp",
      "/css/css_challenges_display.asp",
      "/css/css_challenges_inline-block.asp"
    ]
  },
  {
    "id": "css-links-lists",
    "module": "css",
    "title": "Links, lists, and room navigation",
    "minutes": 20,
    "intro": "Room navigation begins as ordinary HTML links. Style the links and their containing list while preserving their keyboard behavior and link semantics.",
    "concepts": [
      {
        "term": "Link states",
        "description": "Style :link, :visited, :hover and :active in that order when equal specificity would conflict."
      },
      {
        "term": "List presentation",
        "description": "list-style-type, list-style-position and list-style-image configure markers; list-style is their shorthand."
      },
      {
        "term": "Link buttons",
        "description": "A padded link may look like a button but still navigates; use a real button for actions."
      }
    ],
    "example": ".rooms { list-style: none; padding: 0; }\n.rooms a { display: block; padding: 12px; }\na:link { color: navy; }\na:visited { color: purple; }\na:hover { text-decoration-thickness: 3px; }\na:active { color: maroon; }",
    "task": "Style the existing room links as a vertical navigation list. Keep a visible current-room indication and test links with Tab and Enter.",
    "steps": [
      "Open the chat project built in the HTML track. Style the existing room links as a vertical navigation list. Keep a visible current-room indication and test links with Tab and Enter.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains links, lists, and room navigation?",
      "options": [
        "Style :link, :visited, :hover and :active in that order when equal specificity would conflict.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Style :link, :visited, :hover and :active in that order when equal specificity would conflict. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_link.asp",
      "/css/css_link_buttons.asp",
      "/css/css_list.asp",
      "/css/css_navbar.asp",
      "/css/css_navbar_vertical.asp",
      "/css/css_navbar_horizontal.asp",
      "/css/css_challenges_link.asp",
      "/css/css_challenges_list.asp",
      "/css/css_challenges_navbar.asp"
    ]
  },
  {
    "id": "css-tables",
    "module": "css",
    "title": "Readable and responsive tables",
    "minutes": 20,
    "intro": "A table can display room membership or message export metadata. Keep conversation messages in their semantic transcript rather than forcing them into a layout table.",
    "concepts": [
      {
        "term": "Table borders",
        "description": "border-collapse merges touching cell borders; border-spacing applies when borders are separate."
      },
      {
        "term": "Cell formatting",
        "description": "Width, height, text-align, vertical-align and padding control cells; nth-child can stripe rows."
      },
      {
        "term": "Responsive wrapper",
        "description": "overflow-x: auto on a wrapper allows a wide data table to scroll instead of squeezing text."
      }
    ],
    "example": ".table-scroll { overflow-x: auto; }\ntable { border-collapse: collapse; width: 100%; }\nth, td { border: 1px solid #bbb; padding: 12px; text-align: start; vertical-align: top; }\ntr:nth-child(even) { background: #eef4ff; }",
    "task": "Style a static room-members table and place it in a horizontal scrolling wrapper. Check that captions and header cells remain meaningful.",
    "steps": [
      "Open the chat project built in the HTML track. Style a static room-members table and place it in a horizontal scrolling wrapper. Check that captions and header cells remain meaningful.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains readable and responsive tables?",
      "options": [
        "border-collapse merges touching cell borders; border-spacing applies when borders are separate.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "border-collapse merges touching cell borders; border-spacing applies when borders are separate. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_table.asp",
      "/css/css_table_size.asp",
      "/css/css_table_align.asp",
      "/css/css_table_style.asp",
      "/css/css_table_responsive.asp",
      "/css/css_challenges_table.asp"
    ]
  },
  {
    "id": "css-position",
    "module": "css",
    "title": "Positioning, offsets, and stacking",
    "minutes": 20,
    "intro": "Use positioning for a small badge or sticky room heading. Keep the basic transcript in normal flow so it can grow with messages.",
    "concepts": [
      {
        "term": "Position modes",
        "description": "relative keeps the original flow space; absolute uses a positioned ancestor; fixed uses the viewport; sticky responds to a scroll threshold."
      },
      {
        "term": "Offsets",
        "description": "top/right/bottom/left and inset move positioned boxes; normal static boxes ignore these offsets."
      },
      {
        "term": "Stacking",
        "description": "z-index orders boxes within stacking contexts; a large value cannot escape an ancestor stacking context."
      }
    ],
    "example": ".room-heading { position: sticky; top: 0; z-index: 1; background: white; }\n.avatar-wrap { position: relative; }\n.status-dot { position: absolute; right: 0; bottom: 0; }",
    "task": "Make the room heading sticky, then place a static status badge on an avatar using a relative wrapper. Test scrolling and avoid covering the composer.",
    "steps": [
      "Open the chat project built in the HTML track. Make the room heading sticky, then place a static status badge on an avatar using a relative wrapper. Test scrolling and avoid covering the composer.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains positioning, offsets, and stacking?",
      "options": [
        "relative keeps the original flow space; absolute uses a positioned ancestor; fixed uses the viewport; sticky responds to a scroll threshold.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "relative keeps the original flow space; absolute uses a positioned ancestor; fixed uses the viewport; sticky responds to a scroll threshold. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_position.asp",
      "/css/css_positioning_fixed_absolute.asp",
      "/css/css_positioning_sticky.asp",
      "/css/css_position_offset.asp",
      "/css/css_z-index.asp",
      "/css/css_challenges_position.asp",
      "/css/css_challenges_position_offset.asp",
      "/css/css_challenges_z-index.asp"
    ]
  },
  {
    "id": "css-overflow",
    "module": "css",
    "title": "Overflow and long messages",
    "minutes": 20,
    "intro": "A real chat will receive content of unpredictable length. The static prototype should already handle long text and bounded panels safely.",
    "concepts": [
      {
        "term": "Overflow",
        "description": "overflow: auto adds scrolling when needed; hidden clips, scroll reserves scrollbars, and visible allows content to escape."
      },
      {
        "term": "Axis control",
        "description": "overflow-x and overflow-y can control horizontal and vertical overflow separately; overflow-wrap breaks otherwise unbreakable strings."
      }
    ],
    "example": ".transcript { max-height: 28rem; overflow-y: auto; }\n.message { overflow-wrap: anywhere; }\n.attachment-code { overflow-x: auto; }",
    "task": "Add several long static messages, including an unbroken URL. Verify that the transcript scrolls and that the page does not gain accidental horizontal scrolling.",
    "steps": [
      "Open the chat project built in the HTML track. Add several long static messages, including an unbroken URL. Verify that the transcript scrolls and that the page does not gain accidental horizontal scrolling.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains overflow and long messages?",
      "options": [
        "overflow: auto adds scrolling when needed; hidden clips, scroll reserves scrollbars, and visible allows content to escape.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "overflow: auto adds scrolling when needed; hidden clips, scroll reserves scrollbars, and visible allows content to escape. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_overflow.asp",
      "/css/css_overflow_xy.asp",
      "/css/css_challenges_overflow.asp"
    ]
  },
  {
    "id": "css-float-align",
    "module": "css",
    "title": "Float, clearing, and alignment",
    "minutes": 20,
    "intro": "Float is useful for wrapping text around an attachment, while modern layout lessons will use Flexbox and Grid for whole interface regions. Learn older techniques so you can maintain existing code.",
    "concepts": [
      {
        "term": "Float and clear",
        "description": "A float lets inline content wrap beside a box; clear moves content past preceding floats."
      },
      {
        "term": "Containing floats",
        "description": "display: flow-root creates a new formatting context that contains floats; clearfix is a legacy pseudo-element alternative."
      },
      {
        "term": "Alignment",
        "description": "margin-inline: auto centers a bounded block; text-align centers inline content, and vertical-align applies to inline/table-cell contexts."
      }
    ],
    "example": ".attachment-note { display: flow-root; }\n.attachment-note img { float: left; width: 80px; margin-right: 12px; }\n.after-attachment { clear: both; }\n.chat-shell { max-width: 70rem; margin-inline: auto; }",
    "task": "Create a static attachment note with wrapped text around a floated thumbnail. Clear subsequent content and center the bounded chat shell.",
    "steps": [
      "Open the chat project built in the HTML track. Create a static attachment note with wrapped text around a floated thumbnail. Clear subsequent content and center the bounded chat shell.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains float, clearing, and alignment?",
      "options": [
        "A float lets inline content wrap beside a box; clear moves content past preceding floats.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A float lets inline content wrap beside a box; clear moves content past preceding floats. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_float.asp",
      "/css/css_float_clear.asp",
      "/css/css_float_examples.asp",
      "/css/css_align.asp",
      "/css/css_align_horizontal.asp",
      "/css/css_align_vertical.asp",
      "/css/css_challenges_float.asp"
    ]
  },
  {
    "id": "css-attributes",
    "module": "css",
    "title": "Attribute selectors",
    "minutes": 20,
    "intro": "Attribute selectors can target the existing form semantics without adding a new class to every input.",
    "concepts": [
      {
        "term": "Attribute matching",
        "description": "[attr] tests presence, [attr=\"value\"] exact equality, ~= a word, |= a hyphenated prefix, ^= starts-with, $= ends-with and *= substring."
      },
      {
        "term": "Case matching",
        "description": "An i flag can make an attribute value comparison ASCII case-insensitive when appropriate."
      }
    ],
    "example": "input[type=\"text\"] { border: 1px solid #8095b3; }\na[href^=\"https://\"] { text-decoration-style: double; }\n[lang|=\"en\"] { quotes: \"“\" \"”\"; }\n[data-status~=\"unread\"] { font-weight: bold; }",
    "task": "Style the composer text input by its type. Make a small selector comparison lab with exact, prefix, suffix and substring attribute matches.",
    "steps": [
      "Open the chat project built in the HTML track. Style the composer text input by its type. Make a small selector comparison lab with exact, prefix, suffix and substring attribute matches.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains attribute selectors?",
      "options": [
        "[attr] tests presence, [attr=\"value\"] exact equality, ~= a word, |= a hyphenated prefix, ^= starts-with, $= ends-with and *= substring.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "[attr] tests presence, [attr=\"value\"] exact equality, ~= a word, |= a hyphenated prefix, ^= starts-with, $= ends-with and *= substring. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_attribute_selectors.asp",
      "/css/css_attribute_selectors_advanced.asp",
      "/css/css_challenges_attribute_selectors.asp"
    ]
  },
  {
    "id": "css-forms",
    "module": "css",
    "title": "Form inputs, focus, and other controls",
    "minutes": 20,
    "intro": "The composer is a visual form at this stage. Make its label, textarea and buttons readable before JavaScript attaches send behavior.",
    "concepts": [
      {
        "term": "Form consistency",
        "description": "Inputs, selects, textareas and buttons do not always inherit the page font automatically; font: inherit makes them consistent."
      },
      {
        "term": "State styling",
        "description": "Focus, invalid, checked and disabled states communicate different conditions; labels must remain visible."
      },
      {
        "term": "Resize and sizing",
        "description": "Textarea resize can be constrained to vertical; border-box sizing keeps padded fields inside their container."
      }
    ],
    "example": "input, textarea, select, button { font: inherit; box-sizing: border-box; }\ntextarea { width: 100%; min-height: 6rem; resize: vertical; }\ninput:focus, textarea:focus { outline: 3px solid #005fcc; }\ninput:invalid { border-color: #a31818; }",
    "task": "Style the labelled composer, room select and attachment controls. Test native validation and focus without adding any script.",
    "steps": [
      "Open the chat project built in the HTML track. Style the labelled composer, room select and attachment controls. Test native validation and focus without adding any script.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains form inputs, focus, and other controls?",
      "options": [
        "Inputs, selects, textareas and buttons do not always inherit the page font automatically; font: inherit makes them consistent.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Inputs, selects, textareas and buttons do not always inherit the page font automatically; font: inherit makes them consistent. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_forms.asp",
      "/css/css_form_inputs.asp",
      "/css/css_form_focus.asp",
      "/css/css_form_elements.asp",
      "/css/css3_user_interface.asp",
      "/css/css_challenges_form_styling.asp",
      "/css/css_challenges_css3_user_interface.asp"
    ]
  },
  {
    "id": "css-dropdowns",
    "module": "css",
    "title": "CSS dropdowns and accessible tooltips",
    "minutes": 20,
    "intro": "CSS can reveal informational content with hover and focus. A production action menu needs additional keyboard behavior, so use HTML details/summary for a simple menu at this stage.",
    "concepts": [
      {
        "term": "Focus-aware reveal",
        "description": "A hover-only dropdown excludes keyboard users; :focus-within can also reveal descendants while a contained control has focus."
      },
      {
        "term": "Tooltip limits",
        "description": "A tooltip supplements a visible label and should never contain the only essential instructions; avoid interactive content in simple CSS tooltips."
      },
      {
        "term": "Arrow decoration",
        "description": "A border triangle on ::after can draw a tooltip arrow without extra meaningful markup."
      }
    ],
    "example": ".help { position: relative; }\n.help .tip { display: none; position: absolute; bottom: 100%; background: navy; color: white; padding: 8px; }\n.help:hover .tip, .help:focus-within .tip { display: block; }\n.tip::after { content: \"\"; position: absolute; top: 100%; border: 5px solid transparent; border-top-color: navy; }",
    "task": "Add supplementary composer help that appears on focus and hover. Use details/summary for static room options and keep necessary help text visible outside the tooltip.",
    "steps": [
      "Open the chat project built in the HTML track. Add supplementary composer help that appears on focus and hover. Use details/summary for static room options and keep necessary help text visible outside the tooltip.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains css dropdowns and accessible tooltips?",
      "options": [
        "A hover-only dropdown excludes keyboard users; :focus-within can also reveal descendants while a contained control has focus.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A hover-only dropdown excludes keyboard users; :focus-within can also reveal descendants while a contained control has focus. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_dropdowns.asp",
      "/css/css_dropdowns_advanced.asp",
      "/css/css_tooltip.asp",
      "/css/css_tooltip_arrows.asp",
      "/css/css_challenges_dropdowns.asp",
      "/css/css_challenges_css_tooltip.asp"
    ]
  },
  {
    "id": "css-counters",
    "module": "css",
    "title": "Counters and nested counters",
    "minutes": 20,
    "intro": "Counters generate visual numbering for onboarding instructions or exported thread outlines. They are presentation and must not become the authoritative message IDs.",
    "concepts": [
      {
        "term": "Counter lifecycle",
        "description": "counter-reset initializes, counter-increment changes, and counter() displays a named counter in generated content."
      },
      {
        "term": "Nested numbering",
        "description": "counters(name, \".\") combines nested counter values into outlines such as 1.2."
      }
    ],
    "example": ".guide { counter-reset: step; }\n.guide > section { counter-increment: step; }\n.guide > section::before { content: \"Step \" counter(step); }\n.outline ol { counter-reset: item; }\n.outline li { counter-increment: item; }\n.outline li::marker { content: counters(item, \".\") \" \"; }",
    "task": "Number the static chat onboarding steps with a counter and create a nested room guide experiment. Compare it with a semantic ordered list.",
    "steps": [
      "Open the chat project built in the HTML track. Number the static chat onboarding steps with a counter and create a nested room guide experiment. Compare it with a semantic ordered list.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains counters and nested counters?",
      "options": [
        "counter-reset initializes, counter-increment changes, and counter() displays a named counter in generated content.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "counter-reset initializes, counter-increment changes, and counter() displays a named counter in generated content. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_counters.asp",
      "/css/css_counters_nested.asp",
      "/css/css_challenges_counters.asp"
    ]
  },
  {
    "id": "css-cascade",
    "module": "css",
    "title": "Inheritance, specificity, and !important",
    "minutes": 20,
    "intro": "When two rules disagree, diagnose the cascade instead of piling on overrides. Origins, importance and layers are considered before specificity; source order breaks otherwise equal ties.",
    "concepts": [
      {
        "term": "Inheritance",
        "description": "Text properties commonly inherit; box properties usually do not. inherit, initial, unset and revert express different reset intentions."
      },
      {
        "term": "Specificity",
        "description": "Within the same cascade level, IDs outweigh classes/attributes/pseudo-classes, which outweigh type selectors; combinators add no weight."
      },
      {
        "term": "Important declarations",
        "description": "!important changes cascade priority and can make maintenance harder; resolve selectors and source order before using it."
      }
    ],
    "example": "body { color: #172033; }\n.message { color: navy; }\n.message.notice { color: maroon; }\nbutton { font: inherit; }\n/* .message.notice matches both classes and wins over one class. */",
    "task": "Inspect a message with conflicting rules. Predict its computed color, remove an unnecessary ID selector, and practice inherit, initial and unset on a demonstration element.",
    "steps": [
      "Open the chat project built in the HTML track. Inspect a message with conflicting rules. Predict its computed color, remove an unnecessary ID selector, and practice inherit, initial and unset on a demonstration element.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains inheritance, specificity, and !important?",
      "options": [
        "Text properties commonly inherit; box properties usually do not. inherit, initial, unset and revert express different reset intentions.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Text properties commonly inherit; box properties usually do not. inherit, initial, unset and revert express different reset intentions. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_inheritance.asp",
      "/css/css_specificity.asp",
      "/css/css_specificity_hierarchy.asp",
      "/css/css_important.asp",
      "/css/css_challenges_inheritance.asp",
      "/css/css_challenges_specificity.asp",
      "/css/css_challenges_important.asp"
    ]
  },
  {
    "id": "css-math-functions",
    "module": "css",
    "title": "Math and CSS functions",
    "minutes": 20,
    "intro": "CSS can compute responsive sizes without a script. Some functions return lengths, others colors, gradients, counters or attribute-based generated text.",
    "concepts": [
      {
        "term": "Responsive math",
        "description": "calc() combines compatible units; min() selects the smallest result, max() the largest and clamp() sets a preferred value between bounds."
      },
      {
        "term": "Function categories",
        "description": "var() reads custom properties, rgb()/hsl() create colors, url() identifies resources and attr() can supply generated text content."
      }
    ],
    "example": ".chat-shell { width: min(96%, 72rem); }\nh1 { font-size: clamp(1.5rem, 3vw, 2.5rem); }\n.message { max-width: calc(100% - 2rem); }\n[data-label]::before { content: attr(data-label); }",
    "task": "Give the chat shell a fluid maximum width and the heading a bounded fluid size. Resize the browser and identify which bound is active.",
    "steps": [
      "Open the chat project built in the HTML track. Give the chat shell a fluid maximum width and the heading a bounded fluid size. Resize the browser and identify which bound is active.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains math and css functions?",
      "options": [
        "calc() combines compatible units; min() selects the smallest result, max() the largest and clamp() sets a preferred value between bounds.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "calc() combines compatible units; min() selects the smallest result, max() the largest and clamp() sets a preferred value between bounds. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_math_functions.asp",
      "/css/css_functions.asp",
      "/css/css_challenges_math_functions.asp"
    ]
  },
  {
    "id": "css-advanced-surfaces",
    "module": "css",
    "title": "Border images and multiple backgrounds",
    "minutes": 20,
    "intro": "Decorative surfaces should remain readable with a plain fallback. Explore advanced painting on a small demo card before adopting it in the chat.",
    "concepts": [
      {
        "term": "Border images",
        "description": "border-image slices a source image into regions; source, slice, width, outset and repeat control the result."
      },
      {
        "term": "Multiple backgrounds",
        "description": "Comma-separated backgrounds are painted front to back; background-size controls scaling and origin/clip define positioning and painting boxes."
      },
      {
        "term": "Color keywords",
        "description": "transparent removes color opacity, currentColor uses the element color, and inherit follows the parent value."
      }
    ],
    "example": ".theme-preview { border: 12px solid #a9bfdc; border-image: url(\"frame.png\") 24 round; background: url(\"room-pattern.png\") left top / 80px repeat, #eef4ff; background-origin: padding-box; background-clip: padding-box; color: navy; }\n.theme-preview hr { border-color: currentColor; }",
    "task": "Create a decorative theme preview card with multiple backgrounds and a border image. Remove image URLs temporarily to verify usable fallbacks.",
    "steps": [
      "Open the chat project built in the HTML track. Create a decorative theme preview card with multiple backgrounds and a border image. Remove image URLs temporarily to verify usable fallbacks.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains border images and multiple backgrounds?",
      "options": [
        "border-image slices a source image into regions; source, slice, width, outset and repeat control the result.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "border-image slices a source image into regions; source, slice, width, outset and repeat control the result. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_border_images.asp",
      "/css/css3_backgrounds.asp",
      "/css/css3_background_size.asp",
      "/css/css3_background_origin.asp",
      "/css/css3_background_clip.asp",
      "/css/css3_colors.asp",
      "/css/css_colors_keywords.asp",
      "/css/css_challenges_css3_border_images.asp",
      "/css/css_challenges_css3_backgrounds.asp",
      "/css/css_challenges_css3_colors.asp",
      "/css/css_challenges_css3_images.asp"
    ]
  },
  {
    "id": "css-gradients-shadows",
    "module": "css",
    "title": "Gradients and shadows",
    "minutes": 20,
    "intro": "Gradients generate backgrounds without downloading images. Shadows can show elevation, but stronger shadows do not make content semantically more important.",
    "concepts": [
      {
        "term": "Gradient types",
        "description": "linear-gradient follows a direction, radial-gradient expands from a center, and conic-gradient rotates around a center; repeating variants repeat color stops."
      },
      {
        "term": "Shadow parameters",
        "description": "box-shadow uses horizontal/vertical offsets, blur, spread and color, with optional inset; text-shadow omits spread and inset."
      }
    ],
    "example": ".room-heading { background: linear-gradient(120deg, #eef4ff, white); box-shadow: 0 2px 8px #17203322; }\n.theme-preview { background: radial-gradient(circle, white, #a7c8ef); }\n.color-wheel { background: conic-gradient(red, yellow, lime, cyan, blue, magenta, red); }",
    "task": "Compare linear, radial and conic gradient theme swatches and add a subtle heading shadow. Check text contrast over every part of the gradient.",
    "steps": [
      "Open the chat project built in the HTML track. Compare linear, radial and conic gradient theme swatches and add a subtle heading shadow. Check text contrast over every part of the gradient.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains gradients and shadows?",
      "options": [
        "linear-gradient follows a direction, radial-gradient expands from a center, and conic-gradient rotates around a center; repeating variants repeat color stops.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "linear-gradient follows a direction, radial-gradient expands from a center, and conic-gradient rotates around a center; repeating variants repeat color stops. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_gradients.asp",
      "/css/css3_gradients_radial.asp",
      "/css/css3_gradients_conic.asp",
      "/css/css3_shadows.asp",
      "/css/css3_shadows_box.asp",
      "/css/css_challenges_css3_gradients.asp",
      "/css/css_challenges_css3_shadows.asp"
    ]
  },
  {
    "id": "css-text-effects",
    "module": "css",
    "title": "Long text and text effects",
    "minutes": 20,
    "intro": "A room name may be long and a message can contain pasted URLs. Keep essential message text available rather than applying ellipsis indiscriminately.",
    "concepts": [
      {
        "term": "Ellipsis prerequisites",
        "description": "text-overflow: ellipsis needs a constrained box with overflow hidden and white-space nowrap for the common single-line pattern."
      },
      {
        "term": "Wrapping and writing modes",
        "description": "overflow-wrap and word-break control breaks; writing-mode changes the line progression direction."
      }
    ],
    "example": ".room-name { max-width: 18rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.message { overflow-wrap: anywhere; }\n.demo-vertical { writing-mode: vertical-rl; }",
    "task": "Add a long room-name example and compare clipping, ellipsis and wrapping. Keep full message bodies wrapping and provide the full room name in nearby visible content.",
    "steps": [
      "Open the chat project built in the HTML track. Add a long room-name example and compare clipping, ellipsis and wrapping. Keep full message bodies wrapping and provide the full room name in nearby visible content.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains long text and text effects?",
      "options": [
        "text-overflow: ellipsis needs a constrained box with overflow hidden and white-space nowrap for the common single-line pattern.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "text-overflow: ellipsis needs a constrained box with overflow hidden and white-space nowrap for the common single-line pattern. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_text_effects.asp",
      "/css/css_challenges_css3_text_effects.asp"
    ]
  },
  {
    "id": "css-transforms",
    "module": "css",
    "title": "2D and 3D transforms",
    "minutes": 20,
    "intro": "Transforms change the painted position or shape of a box without reflowing surrounding content. Use a separate demonstration so essential chat controls stay stable.",
    "concepts": [
      {
        "term": "2D transforms",
        "description": "translate moves, rotate turns, scale resizes, skew slants and matrix combines transformations; order matters."
      },
      {
        "term": "3D space",
        "description": "rotateX/rotateY/rotateZ and translateZ operate in 3D; perspective controls depth and transform-style: preserve-3d keeps child depth."
      },
      {
        "term": "3D components",
        "description": "A card flip uses front/back faces and backface-visibility; cubes and carousels arrange several rotated and translated faces."
      }
    ],
    "example": ".transform-demo { transform: translate(8px, 0) rotate(3deg) scale(1.05); }\n.stage { perspective: 600px; }\n.card { transform-style: preserve-3d; }\n.card-face { backface-visibility: hidden; }\n.card-back { transform: rotateY(180deg); }\n.stage:hover .card, .stage:focus-within .card { transform: rotateY(180deg); }",
    "task": "Build a separate profile-card transform lab. Compare translate, scale, skew and matrix, then arrange card, cube and carousel faces using the linked source diagrams; do not transform the composer.",
    "steps": [
      "Open the chat project built in the HTML track. Build a separate profile-card transform lab. Compare translate, scale, skew and matrix, then arrange card, cube and carousel faces using the linked source diagrams; do not transform the composer.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains 2d and 3d transforms?",
      "options": [
        "translate moves, rotate turns, scale resizes, skew slants and matrix combines transformations; order matters.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "translate moves, rotate turns, scale resizes, skew slants and matrix combines transformations; order matters. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_2dtransforms.asp",
      "/css/css3_2dtransforms_scale.asp",
      "/css/css3_2dtransforms_skew.asp",
      "/css/css3_3dtransforms.asp",
      "/css/css3_3dtransforms_perspective.asp",
      "/css/css3_3dtransforms_cardflip.asp",
      "/css/css3_3dtransforms_cube.asp",
      "/css/css3_3dtransforms_carousel.asp",
      "/css/css_challenges_css3_3dtransforms.asp"
    ]
  },
  {
    "id": "css-motion",
    "module": "css",
    "title": "Transitions and keyframe animations",
    "minutes": 20,
    "intro": "Motion can acknowledge a hover or show a purely illustrative typing indicator. A CSS animation alone cannot determine whether someone is actually typing.",
    "concepts": [
      {
        "term": "Transitions",
        "description": "A transition interpolates a changed property over duration, timing function and optional delay; prefer explicit properties over all."
      },
      {
        "term": "Keyframes",
        "description": "@keyframes defines stages; animation-name, duration, delay, iteration-count, direction, fill-mode, play-state and timing-function control playback."
      },
      {
        "term": "Reduced motion",
        "description": "prefers-reduced-motion lets users request less movement; provide a static equivalent."
      }
    ],
    "example": "button { transition: background-color 150ms ease-out; }\nbutton:hover { background-color: #dceaff; }\n@keyframes pulse { from { opacity: .4; } to { opacity: 1; } }\n.typing-demo { animation: pulse 1s ease-in-out infinite alternate; }\n@media (prefers-reduced-motion: reduce) { .typing-demo { animation: none; } button { transition: none; } }",
    "task": "Add a subtle button transition and a labelled demonstration typing indicator. Compare timing, fill, direction and pause settings, and verify the reduced-motion presentation.",
    "steps": [
      "Open the chat project built in the HTML track. Add a subtle button transition and a labelled demonstration typing indicator. Compare timing, fill, direction and pause settings, and verify the reduced-motion presentation.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains transitions and keyframe animations?",
      "options": [
        "A transition interpolates a changed property over duration, timing function and optional delay; prefer explicit properties over all.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A transition interpolates a changed property over duration, timing function and optional delay; prefer explicit properties over all. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_transitions.asp",
      "/css/css3_transitions_timing.asp",
      "/css/css3_animations.asp",
      "/css/css3_animations_timing.asp",
      "/css/css3_animations_properties.asp",
      "/css/css_challenges_css3_transitions.asp",
      "/css/css_challenges_css3_animations.asp"
    ]
  },
  {
    "id": "css-images",
    "module": "css",
    "title": "Attachment galleries, image fit, and filters",
    "minutes": 20,
    "intro": "Attachments must fit their available space without distorting. Use a thumbnail for decoration only when a meaningful alternative text or adjacent caption remains available.",
    "concepts": [
      {
        "term": "Image fit",
        "description": "object-fit chooses contain, cover, fill, none or scale-down inside a sized replaced element; object-position sets its crop alignment."
      },
      {
        "term": "Image effects",
        "description": "filter can blur, brighten, change contrast, grayscale, invert, rotate hue, saturate or add drop-shadow; opacity affects the whole element."
      },
      {
        "term": "Centering and galleries",
        "description": "A block image can be centered with auto margins; overlay effects should reveal on focus as well as hover."
      }
    ],
    "example": ".attachment img { display: block; max-width: 100%; height: auto; margin-inline: auto; }\n.avatar { width: 64px; height: 64px; object-fit: cover; object-position: center top; border-radius: 50%; }\n.filter-demo { filter: grayscale(100%) contrast(1.2); }",
    "task": "Create a static attachment gallery and cropped avatars. Compare contain and cover, center a thumbnail, and test filter effects on decorative duplicates without obscuring original attachments.",
    "steps": [
      "Open the chat project built in the HTML track. Create a static attachment gallery and cropped avatars. Compare contain and cover, center a thumbnail, and test filter effects on decorative duplicates without obscuring original attachments.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains attachment galleries, image fit, and filters?",
      "options": [
        "object-fit chooses contain, cover, fill, none or scale-down inside a sized replaced element; object-position sets its crop alignment.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "object-fit chooses contain, cover, fill, none or scale-down inside a sized replaced element; object-position sets its crop alignment. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_image_gallery.asp",
      "/css/css3_images.asp",
      "/css/css3_images_effects.asp",
      "/css/css3_images_hover.asp",
      "/css/css3_image_center.asp",
      "/css/css3_image_filters.asp",
      "/css/css3_object-fit.asp",
      "/css/css3_object-position.asp",
      "/css/css_challenges_image_gallery.asp"
    ]
  },
  {
    "id": "css-sprites-shapes",
    "module": "css",
    "title": "Sprites, clipping, shapes, and masks",
    "minutes": 20,
    "intro": "These techniques change image presentation or reuse regions of an image. They belong in a decorative sandbox until a clear chat interface use justifies them.",
    "concepts": [
      {
        "term": "Sprites",
        "description": "A sprite sheet holds several images in one resource; background-position selects a region with a fixed box size."
      },
      {
        "term": "Shapes",
        "description": "clip-path clips painting to a shape; shape-outside controls surrounding text wrapping around a float."
      },
      {
        "term": "Masks",
        "description": "A mask image controls alpha visibility using a PNG, a gradient or SVG; keep meaningful content available without the mask."
      }
    ],
    "example": ".sprite-demo { width: 24px; height: 24px; background: url(\"icons.png\") -24px 0; }\n.shape-demo { float: left; width: 100px; height: 100px; clip-path: circle(50%); shape-outside: circle(50%); }\n.mask-demo { mask-image: linear-gradient(black 70%, transparent); }",
    "task": "Create decorative sprite, circular shape and gradient-mask previews beside the chat theme samples. Compare PNG and SVG masks from the references and ensure no essential text is masked.",
    "steps": [
      "Open the chat project built in the HTML track. Create decorative sprite, circular shape and gradient-mask previews beside the chat theme samples. Compare PNG and SVG masks from the references and ensure no essential text is masked.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains sprites, clipping, shapes, and masks?",
      "options": [
        "A sprite sheet holds several images in one resource; background-position selects a region with a fixed box size.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A sprite sheet holds several images in one resource; background-position selects a region with a fixed box size. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_image_sprites.asp",
      "/css/css3_image_shapes.asp",
      "/css/css3_masking.asp",
      "/css/css3_masking_gradients.asp",
      "/css/css3_masking_svg.asp",
      "/css/css_challenges_image_sprites.asp",
      "/css/css_challenges_css3_masking.asp"
    ]
  },
  {
    "id": "css-image-modal",
    "module": "css",
    "title": "Image preview styling without premature JavaScript",
    "minutes": 20,
    "intro": "The W3Schools image modal example includes JavaScript click behavior. Here the lesson is only the overlay presentation; use a normal attachment link until event handling has been taught.",
    "concepts": [
      {
        "term": "Overlay styling",
        "description": "A fixed full-viewport backdrop can frame a larger image with bounded dimensions."
      },
      {
        "term": "Modal behavior",
        "description": "A real modal also requires focus management, keyboard dismissal and return of focus. CSS alone does not implement those interactions."
      }
    ],
    "example": ".preview-demo { padding: 24px; background: #172033dd; color: white; }\n.preview-demo img { display: block; max-width: 100%; max-height: 70vh; margin-inline: auto; }\n/* Fixed overlay experiment, enabled manually only in a separate lab: */\n.preview-demo.overlay { position: fixed; inset: 0; z-index: 10; overflow: auto; }",
    "task": "Style a static full-image preview section with a normal link back to the transcript. Inspect overlay rules in a separate lab and defer opening/closing behavior to the JavaScript dialog lesson.",
    "steps": [
      "Open the chat project built in the HTML track. Style a static full-image preview section with a normal link back to the transcript. Inspect overlay rules in a separate lab and defer opening/closing behavior to the JavaScript dialog lesson.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains image preview styling without premature javascript?",
      "options": [
        "A fixed full-viewport backdrop can frame a larger image with bounded dimensions.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "A fixed full-viewport backdrop can frame a larger image with bounded dimensions. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_images_modal.asp"
    ]
  },
  {
    "id": "css-buttons-pages",
    "module": "css",
    "title": "Buttons, button groups, and pagination",
    "minutes": 20,
    "intro": "Visual polish must preserve the difference between an action and navigation. The static history pager links to existing archive sections; it does not fetch older messages yet.",
    "concepts": [
      {
        "term": "Button states",
        "description": "Hover, focus, active and disabled styling should provide visible feedback without relying only on color."
      },
      {
        "term": "Groups",
        "description": "Adjacent buttons can share borders and corners while retaining separate focus indicators."
      },
      {
        "term": "Pagination",
        "description": "Use navigation links for history pages and aria-current=\"page\" for the current page; disabled navigation needs meaningful non-link markup."
      }
    ],
    "example": ".send-button { padding: .75rem 1rem; border: 2px solid navy; border-radius: .5rem; background: navy; color: white; cursor: pointer; }\n.send-button:disabled { opacity: .6; cursor: default; }\n.history a { display: inline-block; padding: .5rem; }\n.history [aria-current=\"page\"] { border-bottom: 3px solid navy; }",
    "task": "Style the composer button, a two-button formatting demonstration group, and static archive pagination. Tab through every separate control.",
    "steps": [
      "Open the chat project built in the HTML track. Style the composer button, a two-button formatting demonstration group, and static archive pagination. Tab through every separate control.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains buttons, button groups, and pagination?",
      "options": [
        "Hover, focus, active and disabled styling should provide visible feedback without relying only on color.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Hover, focus, active and disabled styling should provide visible feedback without relying only on color. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_buttons.asp",
      "/css/css3_buttons_hover.asp",
      "/css/css3_buttons_groups.asp",
      "/css/css3_pagination.asp",
      "/css/css3_pagination_styles.asp",
      "/css/css_challenges_css3_buttons.asp",
      "/css/css_challenges_css3_pagination.asp"
    ]
  },
  {
    "id": "css-columns",
    "module": "css",
    "title": "Multiple columns for a room guide",
    "minutes": 20,
    "intro": "Newspaper-style columns suit a supplementary room guide. Avoid them for the live transcript because reading order across columns can make conversations difficult to follow.",
    "concepts": [
      {
        "term": "Column layout",
        "description": "column-count requests a count, column-width a preferred width, and columns is their shorthand."
      },
      {
        "term": "Rules and breaks",
        "description": "column-gap controls separation, column-rule paints a divider, column-span can span headings, and break-inside avoids splitting a block when possible."
      }
    ],
    "example": ".room-guide { column-width: 18rem; column-gap: 2rem; column-rule: 1px solid #bbc; }\n.room-guide h2 { column-span: all; }\n.room-guide section { break-inside: avoid; }",
    "task": "Lay out the static room etiquette guide in columns. Resize the page and verify that its reading order remains clear while the transcript stays single-column.",
    "steps": [
      "Open the chat project built in the HTML track. Lay out the static room etiquette guide in columns. Resize the page and verify that its reading order remains clear while the transcript stays single-column.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains multiple columns for a room guide?",
      "options": [
        "column-count requests a count, column-width a preferred width, and columns is their shorthand.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "column-count requests a count, column-width a preferred width, and columns is their shorthand. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_multiple_columns.asp",
      "/css/css3_multiple_columns_rules.asp",
      "/css/css_challenges_css3_columns.asp"
    ]
  },
  {
    "id": "css-variables",
    "module": "css",
    "title": "Custom properties and typed properties",
    "minutes": 20,
    "intro": "Define reusable theme tokens before repeating colors across the project. Custom properties participate in inheritance and can be overridden in a component.",
    "concepts": [
      {
        "term": "Custom properties",
        "description": "Names beginning -- hold reusable values; var(--name, fallback) substitutes them and can provide a fallback."
      },
      {
        "term": "Scope and overrides",
        "description": "A :root declaration supplies global defaults; a more local rule can override an inherited token."
      },
      {
        "term": "Typed registration",
        "description": "@property registers a syntax, inherits behavior and initial value for a custom property."
      },
      {
        "term": "JavaScript boundary",
        "description": "The W3Schools variables-and-JavaScript page shows reading and setting CSS values through DOM APIs. Execute that integration only after the JavaScript DOM/style lessons."
      }
    ],
    "example": ":root { --accent: #184c91; --surface: #eef4ff; }\n.message { background: var(--surface, white); border-color: var(--accent); }\n.theme-dark { --surface: #172033; color: white; }\n@property --turn { syntax: \"<angle>\"; inherits: false; initial-value: 0deg; }",
    "task": "Replace repeated chat colors with tokens and add an opt-in static dark theme class. Inspect @property in a lab. Record the JS integration as a later exercise rather than using untaught script.",
    "steps": [
      "Open the chat project built in the HTML track. Replace repeated chat colors with tokens and add an opt-in static dark theme class. Inspect @property in a lab. Record the JS integration as a later exercise rather than using untaught script.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains custom properties and typed properties?",
      "options": [
        "Names beginning -- hold reusable values; var(--name, fallback) substitutes them and can provide a fallback.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Names beginning -- hold reusable values; var(--name, fallback) substitutes them and can provide a fallback. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_variables.asp",
      "/css/css3_variables_overriding.asp",
      "/css/css3_variables_javascript.asp",
      "/css/css3_variables_mediaqueries.asp",
      "/css/css3_property.asp",
      "/css/css_challenges_css3_variables.asp",
      "/css/css_challenges_css3_property.asp",
      "/css/css_challenges_css3_mediaqueries.asp"
    ]
  },
  {
    "id": "css-media",
    "module": "css",
    "title": "Media queries and responsive foundations",
    "minutes": 20,
    "intro": "The same chat should work on a small phone, a wide monitor and a printed archive. Let content determine breakpoints rather than assuming a particular device model.",
    "concepts": [
      {
        "term": "Media queries",
        "description": "@media applies rules when a type or feature matches; min/max-width, orientation, print and user preferences describe contexts."
      },
      {
        "term": "Viewport",
        "description": "The HTML viewport meta tag with width=device-width, initial-scale=1 enables expected mobile layout sizing; do not disable zoom."
      },
      {
        "term": "Mobile first",
        "description": "Write a usable narrow-screen base and progressively add columns where enough space exists."
      }
    ],
    "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n/* styles.css */\n.chat-shell { padding: 12px; }\n@media (min-width: 48rem) { .chat-shell { padding: 24px; } }\n@media print { .composer { display: none; } .transcript { max-height: none; overflow: visible; } }",
    "task": "Verify the viewport meta tag, add a wide-screen spacing breakpoint and a readable print archive style. Test zoom and both portrait and landscape widths.",
    "steps": [
      "Open the chat project built in the HTML track. Verify the viewport meta tag, add a wide-screen spacing breakpoint and a readable print archive style. Test zoom and both portrait and landscape widths.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains media queries and responsive foundations?",
      "options": [
        "@media applies rules when a type or feature matches; min/max-width, orientation, print and user preferences describe contexts.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "@media applies rules when a type or feature matches; min/max-width, orientation, print and user preferences describe contexts. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_mediaqueries.asp",
      "/css/css3_mediaqueries_ex.asp",
      "/css/css_rwd_intro.asp",
      "/css/css_rwd_viewport.asp",
      "/css/css_rwd_mediaqueries.asp",
      "/css/css_challenges_rwd_intro.asp",
      "/css/css_challenges_rwd_viewport.asp",
      "/css/css_challenges_rwd_mediaqueries.asp"
    ]
  },
  {
    "id": "css-flex",
    "module": "css",
    "title": "Flexbox containers and items",
    "minutes": 20,
    "intro": "Flexbox organizes one dimension at a time. It is a natural fit for the composer row and message metadata, with wrapping when space becomes limited.",
    "concepts": [
      {
        "term": "Container axes",
        "description": "display: flex creates a flex formatting context; flex-direction defines the main axis and flex-wrap allows new lines."
      },
      {
        "term": "Alignment",
        "description": "justify-content distributes main-axis space; align-items aligns items on the cross axis; align-content distributes multiple lines."
      },
      {
        "term": "Items",
        "description": "flex-grow, flex-shrink and flex-basis control flexible size; align-self overrides cross alignment and order changes visual order only."
      }
    ],
    "example": ".composer-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; }\n.composer-row textarea { flex: 1 1 16rem; min-width: 0; }\n.composer-row button { flex: 0 0 auto; }\n@media (max-width: 30rem) { .composer-row { flex-direction: column; align-items: stretch; } }",
    "task": "Refactor the composer into a wrapping flex row. Compare justify-content, align-items and align-content, then adjust grow/shrink/basis without changing meaningful source order.",
    "steps": [
      "Open the chat project built in the HTML track. Refactor the composer into a wrapping flex row. Compare justify-content, align-items and align-content, then adjust grow/shrink/basis without changing meaningful source order.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains flexbox containers and items?",
      "options": [
        "display: flex creates a flex formatting context; flex-direction defines the main axis and flex-wrap allows new lines.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "display: flex creates a flex formatting context; flex-direction defines the main axis and flex-wrap allows new lines. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css3_flexbox.asp",
      "/css/css3_flexbox_container.asp",
      "/css/css3_flexbox_container_justify.asp",
      "/css/css3_flexbox_container_align.asp",
      "/css/css3_flexbox_items.asp",
      "/css/css3_flexbox_responsive.asp",
      "/css/css_challenges_flexbox_container.asp",
      "/css/css_challenges_flexbox_items.asp",
      "/css/css_challenges_flexbox_responsive.asp"
    ]
  },
  {
    "id": "css-grid",
    "module": "css",
    "title": "Grid containers, tracks, and named areas",
    "minutes": 20,
    "intro": "Grid controls rows and columns together. Use it for the shell that contains room navigation, transcript and composer after the simpler normal-flow layout already works.",
    "concepts": [
      {
        "term": "Tracks and gaps",
        "description": "grid-template-columns/rows define tracks; fr shares leftover space, minmax constrains tracks, repeat repeats them and gap separates them."
      },
      {
        "term": "Item placement",
        "description": "grid-column and grid-row place spans or line ranges; grid-template-areas names rectangular regions and grid-area assigns items."
      },
      {
        "term": "Alignment and order",
        "description": "justify/align-items control items, justify/align-content tracks, and self properties individual items. Visual order must preserve an understandable DOM order."
      },
      {
        "term": "Twelve-column layout",
        "description": "A 12-track grid lets regions span different column counts at responsive breakpoints."
      }
    ],
    "example": ".chat-shell { display: grid; grid-template-columns: minmax(12rem, 1fr) minmax(0, 3fr); grid-template-areas: \"rooms transcript\" \"rooms composer\"; gap: 16px; }\n.rooms { grid-area: rooms; }\n.transcript { grid-area: transcript; }\n.composer { grid-area: composer; }\n@media (max-width: 48rem) { .chat-shell { grid-template-columns: minmax(0, 1fr); grid-template-areas: \"rooms\" \"transcript\" \"composer\"; } }",
    "task": "Build the two-column chat shell using named areas and a single-column fallback. In a separate lab compare line placement, named lines, auto-placement, item alignment and a 12-column span.",
    "steps": [
      "Open the chat project built in the HTML track. Build the two-column chat shell using named areas and a single-column fallback. In a separate lab compare line placement, named lines, auto-placement, item alignment and a 12-column span.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains grid containers, tracks, and named areas?",
      "options": [
        "grid-template-columns/rows define tracks; fr shares leftover space, minmax constrains tracks, repeat repeats them and gap separates them.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "grid-template-columns/rows define tracks; fr shares leftover space, minmax constrains tracks, repeat repeats them and gap separates them. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_grid.asp",
      "/css/css_grid_container.asp",
      "/css/css_grid_tracks.asp",
      "/css/css_grid_gap.asp",
      "/css/css_grid_align.asp",
      "/css/css_grid_item.asp",
      "/css/css_grid_item_name.asp",
      "/css/css_grid_item_align.asp",
      "/css/css_grid_item_order.asp",
      "/css/css_grid_12column.asp",
      "/css/css_website_layout.asp",
      "/css/css_challenges_website_layout.asp",
      "/css/css_challenges_grid_container.asp",
      "/css/css_challenges_grid_item.asp",
      "/css/css_challenges_grid_12column.asp"
    ]
  },
  {
    "id": "css-supports",
    "module": "css",
    "title": "Feature queries and progressive enhancement",
    "minutes": 20,
    "intro": "A baseline interface should remain usable even if a browser ignores an advanced declaration. Feature queries let you isolate enhancements around explicit support tests.",
    "concepts": [
      {
        "term": "Feature query",
        "description": "@supports tests whether a property/value syntax is supported; not, and and or compose conditions."
      },
      {
        "term": "Fallback",
        "description": "Write the baseline first so an unsupported feature query still leaves readable normal-flow content."
      }
    ],
    "example": ".attachment-grid { display: block; }\n@supports (display: grid) { .attachment-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: 12px; } }",
    "task": "Give the attachment gallery a normal-flow fallback and a Grid enhancement. Toggle the enhancement in DevTools and confirm all attachment links remain accessible.",
    "steps": [
      "Open the chat project built in the HTML track. Give the attachment gallery a normal-flow fallback and a Grid enhancement. Toggle the enhancement in DevTools and confirm all attachment links remain accessible.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains feature queries and progressive enhancement?",
      "options": [
        "@supports tests whether a property/value syntax is supported; not, and and or compose conditions.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "@supports tests whether a property/value syntax is supported; not, and and or compose conditions. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_supports_rule.asp",
      "/css/css_challenges_supports_rule.asp"
    ]
  },
  {
    "id": "css-responsive-media",
    "module": "css",
    "title": "Responsive grids, images, and videos",
    "minutes": 20,
    "intro": "Responsive design includes content as well as columns. Images and video should scale inside the chat without stretching or forcing the page wider.",
    "concepts": [
      {
        "term": "Fluid media",
        "description": "max-width: 100% and height: auto preserve the natural aspect ratio of ordinary images and videos."
      },
      {
        "term": "Responsive grid view",
        "description": "A percentage-based column grid or CSS Grid can collapse at breakpoints; account for padding with border-box."
      },
      {
        "term": "Frameworks and templates",
        "description": "Responsive frameworks and templates supply conventions and components. Review their dependencies and do not paste unexplained classes into this vanilla project."
      }
    ],
    "example": ".attachments img, .attachments video { max-width: 100%; height: auto; }\n.legacy-column { box-sizing: border-box; width: 100%; padding: 12px; }\n@media (min-width: 48rem) { .legacy-column { width: 50%; float: left; } }",
    "task": "Test image and video attachments at 320px, tablet and desktop widths. Compare the source grid-view approach with your Grid shell, and inspect a responsive template without adding an untaught framework dependency.",
    "steps": [
      "Open the chat project built in the HTML track. Test image and video attachments at 320px, tablet and desktop widths. Compare the source grid-view approach with your Grid shell, and inspect a responsive template without adding an untaught framework dependency.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains responsive grids, images, and videos?",
      "options": [
        "max-width: 100% and height: auto preserve the natural aspect ratio of ordinary images and videos.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "max-width: 100% and height: auto preserve the natural aspect ratio of ordinary images and videos. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_rwd_grid.asp",
      "/css/css_rwd_images.asp",
      "/css/css_rwd_videos.asp",
      "/css/css_rwd_frameworks.asp",
      "/css/css_rwd_templates.asp",
      "/css/css_challenges_rwd_grid.asp",
      "/css/css_challenges_rwd_images.asp",
      "/css/css_challenges_rwd_videos.asp"
    ]
  },
  {
    "id": "css-quality",
    "module": "css",
    "title": "CSS accessibility and optimization",
    "minutes": 20,
    "intro": "Before JavaScript makes the chat interactive, audit the static interface for keyboard use, readable text, responsive layout and unnecessary styling cost.",
    "concepts": [
      {
        "term": "Accessible presentation",
        "description": "Preserve visible focus, sufficient contrast, zoom, source order and reduced-motion preferences; do not communicate status by color alone."
      },
      {
        "term": "Optimization",
        "description": "Remove unused rules, avoid duplicate imports and large decorative assets, and animate transform/opacity when suitable; measure before optimizing."
      },
      {
        "term": "Maintainability",
        "description": "Group related component styles, keep selectors understandable, and verify computed styles instead of accumulating !important overrides."
      }
    ],
    "example": "@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }\n.status { border-left: 4px solid currentColor; }\n/* Keep a text status such as \"Offline\" beside its visual marker. */",
    "task": "Audit the complete static chat with keyboard navigation, 200% zoom, long messages, reduced motion and disabled images. Remove duplicate styles and document measured issues before changing performance-sensitive rules.",
    "steps": [
      "Open the chat project built in the HTML track. Audit the complete static chat with keyboard navigation, 200% zoom, long messages, reduced motion and disabled images. Remove duplicate styles and document measured issues before changing performance-sensitive rules.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains css accessibility and optimization?",
      "options": [
        "Preserve visible focus, sufficient contrast, zoom, source order and reduced-motion preferences; do not communicate status by color alone.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Preserve visible focus, sufficient contrast, zoom, source order and reduced-motion preferences; do not communicate status by color alone. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_performance.asp",
      "/css/css_accessibility.asp",
      "/css/css_challenges_performance.asp",
      "/css/css_challenges_accessibility.asp"
    ]
  },
  {
    "id": "css-reference-lab",
    "module": "css",
    "title": "CSS examples, practice, and reference lab",
    "minutes": 20,
    "intro": "Use references to answer a concrete styling question, then test the rule in the chat. A reference index is a lookup tool rather than evidence that every possible property belongs in a production interface.",
    "concepts": [
      {
        "term": "Reference workflow",
        "description": "Find the property, accepted values, inheritance, default and browser support; construct a minimal experiment and verify the computed result."
      },
      {
        "term": "Practice workflow",
        "description": "Use examples, editor, snippets, exercises, code challenges, quiz and interview prompts to retrieve knowledge without copying their solutions."
      },
      {
        "term": "Scope of adjacent tools",
        "description": "Sass is a separate preprocessor tutorial linked from the CSS sidebar. Compare its variables and nesting conceptually; installation and compilation are outside browser CSS and remain optional."
      }
    ],
    "example": "@media print { body { color: black; background: white; } a { text-decoration: underline; } }\n/* Reference exercise: inspect each rule’s initial value, inheritance and support. */",
    "task": "Complete one example, exercise and code challenge per covered CSS chapter. Use the references to investigate selectors, combinators, pseudo-classes/elements, at-rules, functions, aural styles, fonts, animation, units, colors, defaults and browser support. Keep a small notebook of tested chat-related examples.",
    "steps": [
      "Open the chat project built in the HTML track. Complete one example, exercise and code challenge per covered CSS chapter. Use the references to investigate selectors, combinators, pseudo-classes/elements, at-rules, functions, aural styles, fonts, animation, units, colors, defaults and browser support. Keep a small notebook of tested chat-related examples.",
      "Keep the <link> element in index.html inside head; put only the CSS rules and comments in styles.css. Add the example rules to styles.css; add the matching class to an existing appropriate HTML element, or create a clearly labelled demonstration section using HTML already learned.",
      "Change one value at a time and describe the visible result. Keep functional message sending for the JavaScript track.",
      "Test the result at narrow and wide browser widths, and with keyboard navigation. Remove any experiment that hides essential chat content."
    ],
    "check": {
      "question": "Which statement correctly explains css examples, practice, and reference lab?",
      "options": [
        "Find the property, accepted values, inheritance, default and browser support; construct a minimal experiment and verify the computed result.",
        "CSS sends messages to other people without a server.",
        "A visual style change automatically updates the HTML meaning."
      ],
      "answer": 0,
      "explanation": "Find the property, accepted values, inheritance, default and browser support; construct a minimal experiment and verify the computed result. The example changes presentation; it does not add networking."
    },
    "sources": [
      "/css/css_templates.asp",
      "/css/css_examples.asp",
      "/css/css_editor.asp",
      "/css/css_snippets.asp",
      "/css/css_quiz.asp",
      "/css/css_exercises.asp",
      "/css/css_challenges.asp",
      "/css/css_website.asp",
      "/css/css_syllabus.asp",
      "/css/css_study_plan.asp",
      "/css/css_interview_prep.asp",
      "/css/css_exam.asp",
      "/sass/default.asp",
      "/cssref/index.php",
      "/cssref/css_selectors.php",
      "/cssref/css_ref_combinators.php",
      "/cssref/css_ref_pseudo_classes.php",
      "/cssref/css_ref_pseudo_elements.php",
      "/cssref/css_ref_atrules.php",
      "/cssref/css_functions.php",
      "/cssref/css_ref_aural.php",
      "/cssref/css_websafe_fonts.php",
      "/cssref/css_animatable.php",
      "/cssref/css_units.php",
      "/cssref/css_pxtoemconversion.php",
      "/cssref/css_colors.php",
      "/cssref/css_colors_legal.php",
      "/cssref/css_default_values.php",
      "/cssref/css3_browsersupport.php"
    ]
  }
];
