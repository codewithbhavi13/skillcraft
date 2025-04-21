const tutorial1_chapter1_topics = [
  {
    name: "What is Web Development?",
    content: [
      {
        type: "paragraph",
        data: "Web development is the process of creating websites and applications for the internet (public network) or an intranet (private network). It goes far beyond just designing web pages — it involves building powerful software that runs on browsers.",
      },
      {
        type: "h6",
        data: "There are three major categories of web development:",
      },
      {
        type: "numbered",
        data: [
          "Frontend Development (Client-Side)",
          "Backend Development (Server-Side)",
          "Full-Stack Development",
        ],
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Frontend Development (Client-Side)",
            body: "Frontend developers create everything the user sees and interacts with:\n• HTML: Provides structure.\n• CSS: Adds styling.\n• JavaScript: Adds interactivity (like dropdowns, sliders, buttons).",
          },
          {
            title: "Backend Development (Server-Side)",
            body: "Backend developers build and maintain:\n• Server logic (business rules).\n• Databases.\n• APIs (Application Programming Interfaces).\n• Authentication and authorization systems.",
          },
          {
            title: "Full-Stack Development",
            body: "A full-stack developer handles both frontend and backend. They:\n• Build UI and layout.\n• Write API endpoints.\n• Deploy applications to servers or cloud platforms.",
          },
        ],
      },
    ],
  },
  {
    name: "Specializations in Web Development",
    content: [
      {
        type: "paragraph",
        data: "Apart from traditional roles, web development includes several specialized roles:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "🛠️ Performance Optimization Engineers",
            body: "Focus on improving website speed and load time.\nUse tools like Lighthouse, PageSpeed Insights.",
          },
          {
            title: "🔐 Security Specialists",
            body: "Implement encryption (HTTPS), validation, and firewalls.\nPrevent attacks like XSS, CSRF, SQL Injection.",
          },
          {
            title: "♿ Accessibility Engineers",
            body: "Make websites usable for everyone, including people with disabilities.\nFollow WCAG guidelines.\nUse semantic HTML and ARIA attributes.",
          },
          {
            title: "🎨 UI/UX-Focused Developers",
            body: "Collaborate with designers to build beautiful and user-friendly interfaces.\nEnsure intuitive navigation and interactions.",
          },
        ],
      },
      {
        type: "paragraph",
        data: "⚠️ Note: Being a developer doesn’t always mean coding alone. It also means understanding users and delivering the best experience.",
      },
    ],
  },
  {
    name: "Static Websites",
    content: [
      {
        type: "h6",
        data: "Characteristics:",
      },
      {
        type: "bullet",
        data: [
          "Content doesn’t change unless edited manually.",
          "No real-time data fetching or database integration.",
          "Very fast and SEO-friendly.",
        ],
      },
      {
        type: "h6",
        data: "Technologies Used:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "HTML",
            body: "Defines structure.",
          },
          {
            title: "CSS",
            body: "Adds styling.",
          },
          {
            title: "Optional",
            body: "Small JS snippets for animations.",
          },
        ],
      },
      {
        type: "h6",
        data: "Use Cases:",
      },
      {
        type: "bullet",
        data: ["Personal portfolios.", "Landing pages.", "Company profiles."],
      },
      {
        type: "h6",
        data: "Hosting:",
      },
      {
        type: "bullet",
        data: [
          "Can be hosted easily using platforms like:",
          "GitHub Pages",
          "Netlify",
          "Vercel",
        ],
      },
    ],
  },
  {
    name: "Dynamic Websites",
    content: [
      {
        type: "paragraph",
        data: "Dynamic websites generate content on the fly, often based on user input or backend data.",
      },
      {
        type: "h6",
        data: "How They Work:",
      },
      {
        type: "bullet",
        data: [
          "User requests a page.",
          "Server processes logic.",
          "Fetches data from a database.",
          "Sends dynamically generated HTML back to the user.",
        ],
      },
      {
        type: "h6",
        data: "Technologies Involved:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Languages",
            body: "PHP, Python, Node.js, Ruby",
          },
          {
            title: "Databases",
            body: "MySQL, PostgreSQL, MongoDB",
          },
          {
            title: "Frameworks",
            body: "Django, Laravel, Express",
          },
        ],
      },
      {
        type: "h6",
        data: "Examples:",
      },
      {
        type: "bullet",
        data: [
          "E-commerce sites (showing products based on filters)",
          "Social media platforms",
          "Blogs with CMS (like WordPress)",
        ],
      },
    ],
  },
  {
    name: "Hybrid Websites (Static + Dynamic)",
    content: [
      {
        type: "paragraph",
        data: "Many modern web apps are hybrids, combining static speed and dynamic power.",
      },
      {
        type: "h6",
        data: "Examples:",
      },
      {
        type: "bullet",
        data: [
          "Next.js: React framework that supports static site generation (SSG) and server-side rendering (SSR).",
          "Gatsby: Static site generator pulling content from APIs or CMSs.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Fast performance (like static).",
          "Real-time updates (like dynamic).",
          "SEO-friendly and scalable.",
        ],
      },
      {
        type: "h6",
        data: "Use Case:",
      },
      {
        type: "paragraph",
        data: "Blogs, portfolios, e-commerce — where some pages don’t change often, but others do.",
      },
    ],
  },
  {
    name: "Role of a Web Developer",
    content: [
      {
        type: "paragraph",
        data: "Web developers play a critical role in digital product teams.",
      },
      {
        type: "h6",
        data: "Responsibilities:",
      },
      {
        type: "bullet",
        data: [
          "Build layouts and interfaces.",
          "Add user interactivity with JavaScript or frontend frameworks.",
          "Communicate with backend APIs to send/receive data.",
          "Handle form validation and state management.",
        ],
      },
      {
        type: "h6",
        data: "Real World Examples:",
      },
      {
        type: "bullet",
        data: [
          "Adding animations or sliders.",
          "Submitting login/signup forms to the server.",
          "Displaying real-time data like weather or prices.",
        ],
      },
      {
        type: "h6",
        data: "Additional Responsibilities:",
      },
      {
        type: "bullet",
        data: [
          "Optimizing page speed and performance.",
          "Writing clean, maintainable code.",
          "Version control (using Git).",
          "Continuous learning and adapting to tech changes.",
        ],
      },
    ],
  },
  {
    name: "Collaboration in Web Development",
    content: [
      {
        type: "paragraph",
        data: "Web developers don’t work in isolation. They’re part of a larger team that includes:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "🧑🎨 UI/UX Designers",
            body: "Provide mockups and wireframes.\nEnsure a pleasant user experience.",
          },
          {
            title: "🧑💻 Backend Developers",
            body: "Provide API documentation and database structure.\nHandle server logic and data management.",
          },
          {
            title: "🧑💼 Product Managers",
            body: "Ensure the final product aligns with business goals and user needs.",
          },
        ],
      },
      {
        type: "paragraph",
        data: "Effective collaboration is key to delivering successful web applications.",
      },
    ],
  },
];

const tutorial1_chapter2_topics = [
  {
    name: "What is Frontend Development?",
    content: [
      {
        type: "paragraph",
        data: "Frontend development (also called client-side development) focuses on everything users see, touch, and interact with in a browser.",
      },
      {
        type: "h6",
        data: "🧰 Technologies Used:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "HTML",
            body: "The backbone of web content, providing structure.",
          },
          {
            title: "CSS",
            body: "Styles the content (colors, layout, fonts).",
          },
          {
            title: "JavaScript",
            body: "Adds interactivity (dropdowns, sliders, validation).",
          },
        ],
      },
      {
        type: "h6",
        data: "🖼️ What Frontend Developers Do:",
      },
      {
        type: "bullet",
        data: [
          "Build visually appealing and responsive layouts.",
          "Optimize for different screen sizes (desktop, mobile, tablet).",
          "Make web pages interactive (e.g., show/hide content, animations).",
          "Integrate APIs to fetch/display dynamic data (e.g., weather, user data).",
        ],
      },
      {
        type: "h6",
        data: "🌐 Tools and Frameworks:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Libraries",
            body: "React.js, jQuery",
          },
          {
            title: "Frameworks",
            body: "Angular, Vue.js",
          },
          {
            title: "Styling",
            body: "Bootstrap, Tailwind CSS",
          },
          {
            title: "Build Tools",
            body: "Webpack, Vite",
          },
        ],
      },
    ],
  },
  {
    name: "What is Backend Development?",
    content: [
      {
        type: "paragraph",
        data: "Backend development (or server-side development) is the hidden engine that powers web applications. It handles logic, data, servers, and databases.",
      },
      {
        type: "h6",
        data: "⚙️ Technologies Used:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Programming Languages",
            body: "Node.js (JavaScript), Python, PHP, Ruby, Java, Go",
          },
          {
            title: "Databases",
            body: "SQL: MySQL, PostgreSQL; NoSQL: MongoDB, Firebase",
          },
          {
            title: "Servers",
            body: "Apache, Nginx",
          },
          {
            title: "Frameworks",
            body: "Express.js (Node), Django (Python), Laravel (PHP)",
          },
        ],
      },
      {
        type: "h6",
        data: "📌 Responsibilities of a Backend Developer:",
      },
      {
        type: "bullet",
        data: [
          "Build and manage APIs (REST, GraphQL).",
          "Handle form submissions, authentication, and file uploads.",
          "Connect, query, and update databases.",
          "Handle user sessions and server logic.",
          "Ensure security (e.g., encryption, input validation).",
        ],
      },
    ],
  },
  {
    name: "Understanding APIs",
    content: [
      {
        type: "paragraph",
        data: "APIs (Application Programming Interfaces) act as the bridge between frontend and backend.",
      },
      {
        type: "h6",
        data: "🔗 How APIs Work:",
      },
      {
        type: "bullet",
        data: [
          "Frontend makes a request (e.g., user clicks a button).",
          "API receives the request and talks to the database or server logic.",
          "Sends the response (data) back to the frontend.",
        ],
      },
      {
        type: "h6",
        data: "🔍 API Example:",
      },
      {
        type: "paragraph",
        data: "A weather site fetches data from a weather API. You type your city, click search. JavaScript sends a request. Backend responds with temperature, forecast, etc.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Example API call
  fetch('https://api.weather.com/weather?q=London')
    .then(response => response.json())
    .then(data => console.log(data));`,
        },
      },
    ],
  },
  {
    name: "What is Full Stack Development?",
    content: [
      {
        type: "paragraph",
        data: "A full stack developer handles both frontend and backend.",
      },
      {
        type: "h6",
        data: "🎯 Key Skills:",
      },
      {
        type: "bullet",
        data: [
          "Mastery in HTML, CSS, and JavaScript.",
          "Working with backend frameworks like Node.js or Django.",
          "Creating APIs and integrating databases.",
          "Deploying and managing web applications.",
        ],
      },
      {
        type: "h6",
        data: "📦 Popular Full Stack Stacks:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "MERN",
            body: "MongoDB, Express.js, React, Node.js",
          },
          {
            title: "MEVN",
            body: "MongoDB, Express.js, Vue.js, Node.js",
          },
          {
            title: "LAMP",
            body: "Linux, Apache, MySQL, PHP",
          },
        ],
      },
      {
        type: "h6",
        data: "🧑‍💼 Why Full Stack?",
      },
      {
        type: "bullet",
        data: [
          "Ideal for startups and solo projects.",
          "Better collaboration and understanding across the whole system.",
          "In-demand in job markets due to versatility.",
        ],
      },
    ],
  },
  {
    name: "Comparing Frontend, Backend, and Full Stack",
    content: [
      {
        type: "paragraph",
        data: "Feature comparison between Frontend, Backend, and Full Stack development roles.",
      },
      {
        type: "h6",
        data: "Comparison Table:",
      },
      {
        type: "paragraph",
        data: "Focus: Frontend - Visuals, UI, Interactions; Backend - Server logic, databases, APIs; Full Stack - All of the above.",
      },
      {
        type: "paragraph",
        data: "Tools: Frontend - HTML, CSS, JS, React; Backend - Node.js, Python, SQL, MongoDB; Full Stack - Combination of both sets.",
      },
      {
        type: "paragraph",
        data: "Goal: Frontend - Great user experience; Backend - Efficient data management; Full Stack - Full system understanding.",
      },
      {
        type: "paragraph",
        data: "Collaboration With: Frontend - Designers; Backend - DevOps, database engineers; Full Stack - Entire development team.",
      },
    ],
  },
];

const tutorial1_chapter3_topics = [
  {
    name: "Setting Up Visual Studio Code (VS Code)",
    content: [
      {
        type: "paragraph",
        data: "VS Code is a lightweight yet powerful source code editor developed by Microsoft.",
      },
      {
        type: "h6",
        data: "🔧 Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Syntax highlighting for all web languages (HTML, CSS, JS).",
          "Integrated terminal to run commands.",
          "Debugger for JavaScript and Node.js.",
          "Smart IntelliSense and autocompletion.",
          "Git support built-in.",
        ],
      },
      {
        type: "h6",
        data: "🧩 Recommended Extensions:",
      },
      {
        type: "bullet",
        data: [
          "Live Server – Launch a local dev server with live reload.",
          "Prettier – Format code consistently.",
          "ESLint – Lint JavaScript code for bugs and bad practices.",
          "Auto Rename Tag – Renames matching HTML tags instantly.",
          "GitLens – Shows who wrote which line of code and why.",
        ],
      },
      {
        type: "h6",
        data: "⚙️ Getting Started:",
      },
      {
        type: "numbered",
        data: [
          "Download from https://code.visualstudio.com/",
          "Install essential extensions.",
          "Open a folder and start coding with .html, .css, .js files.",
        ],
      },
    ],
  },
  {
    name: "Browser Developer Tools (DevTools)",
    content: [
      {
        type: "paragraph",
        data: "Modern browsers like Google Chrome and Firefox come with built-in developer tools that are crucial for debugging and optimizing websites.",
      },
      {
        type: "h6",
        data: "🔍 Features:",
      },
      {
        type: "bullet",
        data: [
          "Inspect Element: View and edit HTML/CSS on the fly.",
          "Console: Run JavaScript code and view error logs.",
          "Network Tab: Monitor API calls, performance, and loading speed.",
          "Sources Tab: Set breakpoints and debug JS code line-by-line.",
          "Responsive Mode: Simulate how your site looks on different screen sizes.",
        ],
      },
      {
        type: "h6",
        data: "🧪 Use Case Example:",
      },
      {
        type: "paragraph",
        data: [
          "Change a button color live in the inspector to test styles.",
          "Monitor if a fetch API call is returning the correct JSON.",
          "Debug form validations by checking errors in the console.",
        ],
      },
      {
        type: "h6",
        data: "💡 Pro Tip:",
      },
      {
        type: "paragraph",
        data: "Press F12 or right-click on a webpage → Inspect to launch DevTools.",
      },
    ],
  },
  {
    name: "Git – Version Control System",
    content: [
      {
        type: "paragraph",
        data: "Git is a distributed version control system that helps developers track code changes, collaborate, and manage project history.",
      },
      {
        type: "h6",
        data: "📌 Why Use Git?",
      },
      {
        type: "bullet",
        data: [
          "Keep track of every code change.",
          "Revert to previous versions if something breaks.",
          "Collaborate with others on the same codebase.",
        ],
      },
      {
        type: "h6",
        data: "🛠️ Common Git Commands:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `git init             # Start a new Git repository
            git add .            # Stage all files for commit
            git commit -m "msg"  # Save your staged changes
            git status           # Check modified/untracked files
            git log              # View commit history`,
        },
      },
      {
        type: "paragraph",
        data: "Every developer should be comfortable with at least basic Git operations.",
      },
    ],
  },
  {
    name: "GitHub – Hosting & Collaboration Platform",
    content: [
      {
        type: "paragraph",
        data: "GitHub is a platform for hosting Git repositories online. It supports collaboration and deployment workflows.",
      },
      {
        type: "h6",
        data: "🔧 Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Remote repository hosting.",
          "Pull Requests and Code Review.",
          "GitHub Actions for CI/CD automation.",
          "GitHub Pages for hosting static websites.",
        ],
      },
      {
        type: "h6",
        data: "🚀 Getting Started:",
      },
      {
        type: "numbered",
        data: [
          "Create a GitHub account at https://github.com",
          "Create a new repository.",
          "Connect local Git to GitHub:",
        ],
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `git remote add origin <repo_url>
            git push -u origin main`,
        },
      },
      {
        type: "paragraph",
        data: "GitHub is also great for contributing to open-source projects.",
      },
    ],
  },
  {
    name: "Terminal & Command Line Basics",
    content: [
      {
        type: "paragraph",
        data: "The terminal (Command Prompt, Bash, or PowerShell) is where you execute commands for managing projects.",
      },
      {
        type: "h6",
        data: "🧾 Common Commands:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `cd folder        # Change directory
            ls / dir         # List directory contents
            mkdir new-folder # Create a new folder
            touch index.html # Create a new file
            npm init         # Initialize a Node.js project`,
        },
      },
      {
        type: "paragraph",
        data: "Developers use the CLI every day — it’s faster and often more powerful than using GUIs.",
      },
    ],
  },
];

const tutorial1_chapters = [
  {
    name: "Introduction to Web Development",
    topics: tutorial1_chapter1_topics,
    description:
      "This chapter introduces the fundamentals of web development, covering key areas such as frontend, backend, and full-stack development. It highlights specialized roles like performance optimization, security, and accessibility, along with various types of websites (static, dynamic, and hybrid). Additionally, it emphasizes the crucial responsibilities of web developers and the importance of collaboration within a team to create successful digital products.",
  },
  {
    name: "Frontend vs Backend vs Full Stack",
    topics: tutorial1_chapter2_topics,
    description:
      "This chapter explains the differences between frontend, backend, and full stack development. It outlines the tools, technologies, and responsibilities of each role—frontend focuses on user interfaces, backend on server-side logic and databases, and full stack covers both ends. It also introduces APIs as the bridge between the two and compares the roles to help understand their unique contributions and collaborative importance in web development.",
  },
  {
    name: "Tools Setup – VS Code, Browser DevTools, Git, etc.",
    topics: tutorial1_chapter3_topics,
    description:
      "This chapter covers the essential tools every web developer should have in their toolkit before writing their first line of code. These tools help you write code, debug it, track changes, and collaborate with others efficiently.",
  },
];

const tutorial2_chapter1_topics = [
  {
    name: "What is HTML?",
    content: [
      {
        type: "paragraph",
        data: "HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the structure for content like text, images, links, videos, and more.",
      },
      {
        type: "h6",
        data: "🔑 Key Points:",
      },
      {
        type: "bullet",
        data: [
          "HTML uses tags to define elements.",
          "Tags are enclosed in angle brackets like <p>, <h1>, <a>.",
          "Most tags come in pairs: an opening tag <p> and a closing tag </p>.",
        ],
      },
      {
        type: "h6",
        data: "🧱 Basic Page Structure:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>",
        },
      },
    ],
  },
  {
    name: "HTML Tags and Their Uses",
    content: [
      {
        type: "paragraph",
        data: "HTML has hundreds of tags, but these are the most commonly used for content and layout.",
      },
      {
        type: "h6",
        data: "📄 Content Tags:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "<h1> to <h6>",
            body: "Headings (from largest to smallest)",
          },
          {
            title: "<p>",
            body: "Paragraph",
          },
          {
            title: '<a href="URL">',
            body: "Anchor (link)",
          },
          {
            title: '<img src="image.jpg" alt="desc">',
            body: "Image",
          },
          {
            title: "<strong>",
            body: "Bold text",
          },
          {
            title: "<em>",
            body: "Italicized text",
          },
          {
            title: "<br>",
            body: "Line break",
          },
        ],
      },
      {
        type: "h6",
        data: "🧭 Navigation and Grouping Tags:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "<nav>",
            body: "Navigation links",
          },
          {
            title: "<div>",
            body: "Division block (generic container)",
          },
          {
            title: "<span>",
            body: "Inline container",
          },
          {
            title: "<ul>, <ol>, <li>",
            body: "Lists (unordered/ordered)",
          },
          {
            title: "<header>, <footer>, <section>, <article>",
            body: "Semantic containers (more in Chapter 3)",
          },
        ],
      },
      {
        type: "paragraph",
        data: "💡 Tip: Use meaningful tags to improve readability and accessibility.",
      },
    ],
  },
  {
    name: "Attributes in HTML",
    content: [
      {
        type: "paragraph",
        data: "Tags can have attributes to provide additional information.",
      },
      {
        type: "h6",
        data: "🔍 Common Attributes:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "href",
            body: "Specifies the link URL in <a>",
          },
          {
            title: "src",
            body: "Source of an image in <img>",
          },
          {
            title: "alt",
            body: "Alternate text for image",
          },
          {
            title: "id",
            body: "Unique identifier for the element",
          },
          {
            title: "class",
            body: "Assigns a class name (used in CSS/JS)",
          },
          {
            title: "style",
            body: "Adds inline CSS styles",
          },
        ],
      },
      {
        type: "h6",
        data: "🧪 Example:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: '<img src="logo.png" alt="Company Logo" class="brand-logo" />\n<a href="https://example.com" target="_blank">Visit Site</a>',
        },
      },
    ],
  },
  {
    name: "Nesting and Valid HTML",
    content: [
      {
        type: "h6",
        data: "📚 Nesting Elements:",
      },
      {
        type: "paragraph",
        data: "HTML supports nested tags — one tag inside another. Proper nesting improves page structure and avoids rendering issues.",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: "<p>This is a <strong>bold</strong> word in a paragraph.</p>",
        },
      },
      {
        type: "h6",
        data: "❌ Invalid Example:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: "<p><strong>This is invalid</p></strong>  <!-- Incorrect closing -->",
        },
      },
      {
        type: "h6",
        data: "✅ Valid HTML Practices:",
      },
      {
        type: "bullet",
        data: [
          "Close all tags.",
          "Don't overlap elements.",
          "Use lowercase tag names.",
          "Include alt for all images.",
          "Use semantic tags where possible.",
        ],
      },
    ],
  },
];

const tutorial2_chapter2_topics = [
  {
    name: "Forms in HTML",
    content: [
      {
        type: "paragraph",
        data: "Forms are essential for collecting user input on a webpage. They allow users to submit data to a server, such as during registration or feedback.",
      },
      {
        type: "h6",
        data: "Key Form Elements:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "<form>",
            body: "Defines the start of the form.",
          },
          {
            title: "<input>",
            body: "Allows user input (text, password, checkbox, etc.).",
          },
          {
            title: "<textarea>",
            body: "Multiline text input.",
          },
          {
            title: "<select> and <option>",
            body: "Dropdown list.",
          },
          {
            title: "<button>",
            body: "Defines a clickable button.",
          },
        ],
      },
      {
        type: "h6",
        data: "Form Example:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: '<form action="submit_form.php" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  \n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  \n  <label for="message">Message:</label>\n  <textarea id="message" name="message"></textarea>\n  \n  <button type="submit">Submit</button>\n</form>',
        },
      },
    ],
  },
  {
    name: "Tables in HTML",
    content: [
      {
        type: "paragraph",
        data: "Tables are used to display structured data in rows and columns.",
      },
      {
        type: "h6",
        data: "Table Elements:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "<table>",
            body: "Defines the table.",
          },
          {
            title: "<tr>",
            body: "Defines a row.",
          },
          {
            title: "<th>",
            body: "Defines a table header.",
          },
          {
            title: "<td>",
            body: "Defines a table data cell.",
          },
          {
            title: "<thead>, <tbody>, <tfoot>",
            body: "Optional elements for grouping table rows.",
          },
        ],
      },
      {
        type: "h6",
        data: "Table Example:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: "<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>30</td>\n    </tr>\n    <tr>\n      <td>Alice</td>\n      <td>25</td>\n    </tr>\n  </tbody>\n</table>",
        },
      },
    ],
  },
  {
    name: "Embedding Media in HTML",
    content: [
      {
        type: "paragraph",
        data: "HTML allows you to embed different types of media, such as images, videos, and audio.",
      },
      {
        type: "h6",
        data: "Common Media Elements:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: '<img src="image.jpg" alt="description">',
            body: "Embeds an image.",
          },
          {
            title: "<audio controls>",
            body: "Embeds an audio player.",
          },
          {
            title: "<video controls>",
            body: "Embeds a video player.",
          },
          {
            title: "<iframe>",
            body: "Embeds another webpage or content, like a map.",
          },
        ],
      },
      {
        type: "h6",
        data: "Media Examples:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: '<img src="logo.png" alt="Company Logo">\n\n<audio controls>\n  <source src="audio.mp3" type="audio/mp3">\n  Your browser does not support the audio element.\n</audio>\n\n<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>',
        },
      },
    ],
  },
];

const tutorial2_chapter3_topics = [
  {
    name: "What is Semantic HTML?",
    content: [
      {
        type: "paragraph",
        data: "Semantic HTML refers to using HTML tags that have meaning, both for developers and browsers. These tags help structure the content in a meaningful way, improving accessibility and SEO.",
      },
      {
        type: "h6",
        data: "Examples of Semantic HTML Tags:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "<header>",
            body: "Defines a header for a document or section.",
          },
          {
            title: "<nav>",
            body: "Defines navigation links.",
          },
          {
            title: "<section>",
            body: "Defines a section of content.",
          },
          {
            title: "<article>",
            body: "Defines independent content that could be distributed separately (like a blog post).",
          },
          {
            title: "<footer>",
            body: "Defines the footer for a document or section.",
          },
          {
            title: "<aside>",
            body: "Represents content that is tangentially related to the content around it (like a sidebar).",
          },
        ],
      },
      {
        type: "h6",
        data: "Why Use Semantic Tags?",
      },
      {
        type: "bullet",
        data: [
          "Accessibility: Screen readers and other assistive technologies can interpret semantic tags more effectively.",
          "SEO: Search engines can better understand the content of the page, improving rankings.",
          "Maintainability: It's easier for other developers to understand the structure of your webpage.",
        ],
      },
      {
        type: "h6",
        data: "Example of Semantic HTML:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<header>
    <h1>My Blog</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <article>
        <h2>Blog Post 1</h2>
        <p>This is the first blog post.</p>
      </article>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 My Blog. All rights reserved.</p>
  </footer>`,
        },
      },
    ],
  },
  {
    name: "Best Practices in HTML",
    content: [
      {
        type: "paragraph",
        data: "Following best practices ensures that your HTML is clean, readable, and efficient.",
      },
      {
        type: "h6",
        data: "HTML Best Practices:",
      },
      {
        type: "numbered",
        data: [
          "Use Lowercase Tags: Always use lowercase for HTML tags. This is a convention and avoids potential issues across browsers.",
          "Close All Tags: Always close your tags. Unclosed tags can lead to unexpected rendering and behavior.",
          "Use Proper Indentation: Indentation makes your code more readable and maintainable.",
          "Avoid Inline Styles: Use external CSS for styling instead of inline styles.",
          "Use Meaningful Names for IDs and Classes: Descriptive names help make your code easier to understand and maintain.",
        ],
      },
      {
        type: "h6",
        data: "Example of Good HTML Structure:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Website</title>
    </head>
    <body>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
  
      <main>
        <section>
          <h2>About Us</h2>
          <p>We provide high-quality services to our customers.</p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </body>
  </html>`,
        },
      },
    ],
  },
  {
    name: "HTML Accessibility",
    content: [
      {
        type: "paragraph",
        data: "Ensuring that your website is accessible to all users, including those with disabilities, is an important aspect of web development. Here are a few guidelines to improve accessibility:",
      },
      {
        type: "numbered",
        data: [
          "Use Alt Text for Images: Always provide an alt attribute for <img> tags.",
          "Label Form Elements: Use the <label> tag to associate text with form inputs.",
          "Provide Keyboard Navigation: Make sure interactive elements are accessible via the keyboard.",
          "Ensure Contrast: Use sufficient color contrast between text and background for readability.",
        ],
      },
      {
        type: "h6",
        data: "Example of Accessible HTML:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<img src="logo.png" alt="Company Logo" />
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
  </form>`,
        },
      },
    ],
  },
];

const tutorial2_chapters = [
  {
    name: "HTML Syntax & Tags",
    topics: tutorial2_chapter1_topics,
    description:
      "This chapter lays the foundation of HTML — understanding its syntax, structure, and the most commonly used tags.",
  },
  {
    name: "Forms, Tables, and Media",
    topics: tutorial2_chapter2_topics,
    description:
      "This chapter covers three important aspects of web development: forms for user input, tables for structured data, and embedding media like images and videos.",
  },
  {
    name: "Semantic HTML & Best Practices",
    topics: tutorial2_chapter3_topics,
    description:
      "In this chapter, we will focus on writing clean, accessible, and maintainable HTML. We will learn about semantic tags, which provide meaningful structure, and best practices for writing efficient and SEO-friendly code.",
  },
];

const tutorial3_chapter1_topics = [
  {
    name: "Selectors in CSS",
    content: [
      {
        type: "paragraph",
        data: "CSS selectors are used to target HTML elements that you want to style. Selectors can be based on element types, classes, ids, or attributes.",
      },
      {
        type: "h6",
        data: "Types of Selectors:",
      },
      {
        type: "bullet",
        data: [
          "Universal Selector (*): Targets all elements.",
          "Type Selector (element): Targets elements of a specific type, e.g., p for paragraphs.",
          "Class Selector (.class): Targets all elements with a specific class.",
          "ID Selector (#id): Targets an element with a specific ID.",
          "Descendant Selector (parent child): Targets elements nested inside a parent.",
          "Attribute Selector ([attr=value]): Targets elements with a specific attribute value.",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Universal Selector */
  * {
    margin: 0;
    padding: 0;
  }
  
  /* Class Selector */
  .button {
    background-color: blue;
    color: white;
  }
  
  /* ID Selector */
  #header {
    font-size: 24px;
  }
  
  /* Descendant Selector */
  nav ul li {
    display: inline-block;
  }`,
        },
      },
    ],
  },
  {
    name: "Box Model",
    content: [
      {
        type: "paragraph",
        data: "The CSS Box Model is a fundamental concept that defines how elements are displayed and how their size is calculated. It consists of: Content, Padding, Border, and Margin.",
      },
      {
        type: "h6",
        data: "Box Model Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `div {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
  }
  `,
        },
      },
      {
        type: "paragraph",
        data: "Here, the total width will be: 300px (width) + 20px (left padding) + 20px (right padding) + 2px (left border) + 2px (right border) = 344px.",
      },
      {
        type: "h6",
        data: "Tip:",
      },
      {
        type: "paragraph",
        data: "To avoid margin collapse (when adjacent margins combine), you can use padding or border.",
      },
    ],
  },
  {
    name: "Display Property",
    content: [
      {
        type: "paragraph",
        data: "The display property is essential for controlling the layout of elements. Here are some common values:",
      },
      {
        type: "bullet",
        data: [
          "block: Elements that take up the full width of their parent and start on a new line (e.g., <div>, <p>).",
          "inline: Elements that flow within the text and don’t start on a new line (e.g., <span>, <a>).",
          "inline-block: Behaves like inline but allows you to set width and height.",
          "none: Hides the element, making it not visible and removing it from the layout.",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `div {
    display: block;
  }
  span {
    display: inline;
  }`,
        },
      },
    ],
  },
];

const tutorial3_chapter2_topics = [
  {
    name: "Flexbox Basics",
    content: [
      {
        type: "paragraph",
        data: "Flexbox (Flexible Box) is a one-dimensional layout system that allows you to arrange items along either a row or column. It is designed for distributing space inside a container.",
      },
      {
        type: "h6",
        data: "Key Flexbox Concepts:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Container",
            body: "The parent element that holds the flex items.",
          },
          {
            title: "Items",
            body: "The child elements inside the container.",
          },
        ],
      },
      {
        type: "h6",
        data: "Important Properties for the Container:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "display: flex;",
            body: "Turns an element into a flex container.",
          },
          {
            title: "flex-direction",
            body: "Defines the direction of the items: row (default) or column.",
          },
          {
            title: "justify-content",
            body: "Aligns items along the main axis.",
          },
          {
            title: "align-items",
            body: "Aligns items along the cross axis.",
          },
          {
            title: "gap",
            body: "Sets space between flex items.",
          },
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item {
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }`,
        },
      },
    ],
  },
  {
    name: "Advanced Flexbox",
    content: [
      {
        type: "paragraph",
        data: "Flexbox also includes advanced features to control the behavior of items more precisely.",
      },
      {
        type: "h6",
        data: "Flex Item Properties:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "flex-grow",
            body: "Specifies how much an item will grow relative to others.",
          },
          {
            title: "flex-shrink",
            body: "Specifies how much an item will shrink relative to others.",
          },
          {
            title: "flex-basis",
            body: "Defines the initial size of an item before space is distributed.",
          },
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.container {
    display: flex;
  }
  
  .item1 {
    flex-grow: 2;
  }
  
  .item2 {
    flex-grow: 1;
  }`,
        },
      },
      {
        type: "h6",
        data: "Aligning and Justifying Items:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "justify-content",
            body: "flex-start, center, space-between",
          },
          {
            title: "align-items",
            body: "flex-start, center, stretch",
          },
        ],
      },
    ],
  },
  {
    name: "CSS Grid Basics",
    content: [
      {
        type: "paragraph",
        data: "CSS Grid is a two-dimensional layout system that lets you define both rows and columns. It is ideal for creating complex layouts with both rows and columns.",
      },
      {
        type: "h6",
        data: "Key Grid Concepts:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Container",
            body: "The parent element that holds the grid items.",
          },
          {
            title: "Items",
            body: "The child elements inside the grid.",
          },
        ],
      },
      {
        type: "h6",
        data: "Important Properties for the Container:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "display: grid;",
            body: "Turns an element into a grid container.",
          },
          {
            title: "grid-template-rows",
            body: "Defines the height of each row.",
          },
          {
            title: "grid-template-columns",
            body: "Defines the width of each column.",
          },
          {
            title: "grid-gap",
            body: "Sets the space between grid items.",
          },
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  
  .item {
    background-color: lightgreen;
    padding: 10px;
  }`,
        },
      },
    ],
  },
  {
    name: "Advanced CSS Grid",
    content: [
      {
        type: "paragraph",
        data: "Grid can be used in more advanced scenarios with the following properties:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "grid-template-areas",
            body: "Allows you to name grid areas for more control.",
          },
          {
            title: "grid-column and grid-row",
            body: "Specify where an item should start and end within the grid.",
          },
          {
            title: "align-items and justify-items",
            body: "Control how items are aligned inside the grid cells.",
          },
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.container {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
    grid-gap: 20px;
  }
  
  .header {
    grid-area: header;
  }
  
  .sidebar {
    grid-area: sidebar;
  }
  
  .content {
    grid-area: content;
  }
  
  .footer {
    grid-area: footer;
  }`,
        },
      },
    ],
  },
];

const tutorial3_chapter3_topics = [
  {
    name: "What is Responsive Design?",
    content: [
      {
        type: "paragraph",
        data: "Responsive Design is the practice of designing web pages that automatically adjust to different screen sizes, orientations, and resolutions. This ensures that the web content looks great on desktops, tablets, smartphones, and other devices.",
      },
      {
        type: "h6",
        data: "Core Concepts:",
      },
      {
        type: "bullet",
        data: [
          "Fluid Layouts: Use percentage-based widths for elements rather than fixed pixel values.",
          "Flexible Images: Ensure images resize according to their container size.",
          "Media Queries: Apply different styles based on screen size, resolution, or device characteristics.",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* This container will adjust its width based on the screen size */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }`,
        },
      },
    ],
  },
  {
    name: "Introduction to Media Queries",
    content: [
      {
        type: "paragraph",
        data: "Media Queries allow you to apply CSS rules based on specific conditions such as screen width, height, resolution, and more. They are essential for creating responsive layouts.",
      },
      {
        type: "h6",
        data: "Syntax:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `@media screen and (condition) {
    /* CSS rules */
  }`,
        },
      },
      {
        type: "h6",
        data: "Common Media Query Conditions:",
      },
      {
        type: "bullet",
        data: [
          "max-width: Applies styles for screens smaller than or equal to a given width.",
          "min-width: Applies styles for screens larger than or equal to a given width.",
          "orientation: Targets landscape or portrait modes.",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Styles for screens with a max width of 768px (typically tablets and below) */
  @media screen and (max-width: 768px) {
    body {
      background-color: lightblue;
    }
  }
  
  /* Styles for screens with a min width of 768px (typically larger devices) */
  @media screen and (min-width: 768px) {
    body {
      background-color: lightgreen;
    }
  }`,
        },
      },
    ],
  },
  {
    name: "Breakpoints for Responsive Design",
    content: [
      {
        type: "paragraph",
        data: "Breakpoints are the specific screen widths at which you want the layout to change. Common breakpoints are based on device screen sizes, such as mobile, tablet, and desktop.",
      },
      {
        type: "h6",
        data: "Typical Breakpoints:",
      },
      {
        type: "bullet",
        data: [
          "Mobile: max-width: 480px",
          "Tablet: max-width: 768px",
          "Desktop: min-width: 1024px",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* For mobile devices */
  @media screen and (max-width: 480px) {
    .container {
      padding: 20px;
    }
  }
  
  /* For tablets and larger screens */
  @media screen and (min-width: 768px) {
    .container {
      padding: 40px;
    }
  }
  
  /* For desktops */
  @media screen and (min-width: 1024px) {
    .container {
      padding: 60px;
    }
  }`,
        },
      },
    ],
  },
  {
    name: "Creating a Responsive Layout with Media Queries",
    content: [
      {
        type: "paragraph",
        data: "Now let's put everything together to create a basic responsive layout using media queries.",
      },
      {
        type: "h6",
        data: "Example: Responsive Navigation Menu",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Default styles for desktop */
  nav {
    display: flex;
    justify-content: space-between;
  }
  
  nav a {
    margin: 0 10px;
  }
  
  /* Styles for mobile devices */
  @media screen and (max-width: 768px) {
    nav {
      display: block;
    }
  
    nav a {
      margin: 10px 0;
      text-align: center;
    }
  }`,
        },
      },
      {
        type: "paragraph",
        data: "In this example: The navigation menu is displayed as a row for desktop screens and a column for smaller screens (max-width: 768px).",
      },
      {
        type: "h6",
        data: "Example: Responsive Grid Layout",
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Default grid for larger screens */
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  
  /* For smaller screens */
  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }`,
        },
      },
    ],
  },
];

const tutorial3_chapters = [
  {
    name: "Selectors, Box Model, Display",
    topics: tutorial3_chapter1_topics,
    description:
      "In this chapter, we’ll cover the foundation of CSS: how to apply styles to HTML elements using selectors, the CSS box model (which controls element sizing and spacing), and different display properties that control how elements are shown on a page.",
  },
  {
    name: "Flexbox & CSS Grid",
    topics: tutorial3_chapter2_topics,
    description:
      "In this chapter, we'll cover the two most popular layout systems in CSS: Flexbox and CSS Grid. These systems provide flexible ways to create responsive, modern layouts.",
  },
  {
    name: "Responsive Design & Media Queries",
    topics: tutorial3_chapter3_topics,
    description:
      "In this chapter, we'll explore how to make web pages responsive, so they look great on devices of all screen sizes. Responsive Design uses flexible layouts, media queries, and scalable content to ensure a seamless user experience across various devices.",
  },
];

const tutorial4_chapter1_topics = [
  {
    name: "Variables in JavaScript",
    content: [
      {
        type: "paragraph",
        data: "In JavaScript, variables are used to store data that can be referenced and manipulated later in your program. There are different ways to declare variables, and each has its own scope and use case.",
      },
      {
        type: "h6",
        data: "Declaring Variables:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "var",
            body: "The oldest way to declare a variable, but it has function scope, which can sometimes lead to unexpected behavior.",
          },
          {
            title: "let",
            body: "A more modern way to declare variables, with block-level scope, making it less error-prone.",
          },
          {
            title: "const",
            body: "Used to declare variables that should not be reassigned, offering immutability.",
          },
        ],
      },
      {
        type: "paragraph",
        data: "Exmaple:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `var oldVar = "I am an old variable";
let newVar = "I am a new variable";
const constantVar = "I can't be reassigned";`,
        },
      },
      {
        type: "h6",
        data: "Key Points:",
      },
      {
        type: "bullet",
        data: [
          "Use let for variables that will change.",
          "Use const for variables that won’t change.",
          "Avoid var in modern JavaScript unless absolutely necessary.",
        ],
      },
    ],
  },
  {
    name: "Functions in JavaScript",
    content: [
      {
        type: "paragraph",
        data: "Functions allow you to group a set of instructions and run them as needed. Functions can accept parameters and return values.",
      },
      {
        type: "h6",
        data: "Declaring a Function:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `function greet(name) {
  return ` +
            `Hello, \${name}!;` +
            `
}
`,
        },
      },
      {
        type: "h6",
        data: "Calling a Function:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: 'console.log(greet("Alice"));  // Output: Hello, Alice!',
        },
      },
      {
        type: "h6",
        data: "Key Points:",
      },
      {
        type: "bullet",
        data: [
          "Functions are reusable blocks of code.",
          "They can return values using the return keyword.",
          "Functions can also accept parameters and can be used to perform tasks multiple times.",
        ],
      },
      {
        type: "h6",
        data: "Arrow Functions: A more concise way to write functions (introduced in ES6).",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: "const greet = (name) => `Hello, ${name}!`;",
        },
      },
    ],
  },
  {
    name: "Arrays in JavaScript",
    content: [
      {
        type: "paragraph",
        data: "An array is an ordered collection of values, which can be of any type. Arrays in JavaScript are indexed, starting from 0.",
      },
      {
        type: "h6",
        data: "Declaring an Array:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `let fruits = ["Apple", "Banana", "Cherry"];`,
        },
      },
      {
        type: "h6",
        data: "Accessing Array Elements:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `console.log(fruits[0]);  // Output: Apple`,
        },
      },
      {
        type: "h6",
        data: "Common Array Methods:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: ".push()",
            body: "Adds an element to the end of the array.",
          },
          {
            title: ".pop()",
            body: "Removes the last element from the array.",
          },
          {
            title: ".shift()",
            body: "Removes the first element.",
          },
          {
            title: ".unshift()",
            body: "Adds an element to the beginning.",
          },
        ],
      },
      {
        type: "h6",
        data: "Example: ",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `fruits.push("Mango");
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry", "Mango"]`,
        },
      },
    ],
  },
  {
    name: "Objects in JavaScript",
    content: [
      {
        type: "paragraph",
        data: "An object is a collection of key-value pairs, where each key is a property, and each value can be any data type. Objects are used to represent real-world entities.",
      },
      {
        type: "h6",
        data: "Declaring an Object:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `let person = {
  name: "John",
  age: 30,
  city: "New York"
};`,
        },
      },
      {
        type: "h6",
        data: "Accessing Object Properties:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `console.log(person.name);  // Output: John
                console.log(person["age"]);  // Output: 30`,
        },
      },
      {
        type: "h6",
        data: "Adding/Updating Object Properties:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `person.age = 31;  // Updates age
              person.job = "Developer";  // Adds a new property`,
        },
      },
      {
        type: "h6",
        data: "Key Points:",
      },
      {
        type: "bullet",
        data: [
          "Objects are used to group related data.",
          "Properties can be accessed using dot notation or bracket notation.",
        ],
      },
    ],
  },
];

const tutorial4_chapter2_topics = [
  {
    name: "Introduction to the DOM",
    content: [
      {
        type: "paragraph",
        data: "The DOM represents the structure of an HTML document as a tree of nodes. JavaScript allows you to access and modify these nodes, which include elements, attributes, and text within the document.",
      },
      {
        type: "h6",
        data: "Key Points:",
      },
      {
        type: "bullet",
        data: [
          "The DOM is a programming interface for web documents.",
          "JavaScript can manipulate the DOM to change content, structure, and style on the page.",
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!DOCTYPE html>
  <html>
    <body>
      <h1 id="myTitle">Hello World</h1>
      <p>This is a paragraph.</p>
    </body>
  </html>`,
        },
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `document.getElementById("myTitle").innerText = "Hello, JavaScript!";`,
        },
      },
    ],
  },
  {
    name: "Selecting Elements in the DOM",
    content: [
      {
        type: "paragraph",
        data: "To manipulate the DOM, you need to first select elements. JavaScript provides several methods to select elements, including getElementById, getElementsByClassName, querySelector, and querySelectorAll.",
      },
      {
        type: "h6",
        data: "Common DOM Selection Methods:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "getElementById(id)",
            body: "Selects an element by its id.",
          },
          {
            title: "getElementsByClassName(className)",
            body: "Selects elements by their class.",
          },
          {
            title: "querySelector(selector)",
            body: "Selects the first matching element (like CSS selectors).",
          },
          {
            title: "querySelectorAll(selector)",
            body: "Selects all matching elements.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Select element by ID\nlet title = document.getElementById("myTitle");\n\n// Select elements by class\nlet paragraphs = document.getElementsByClassName("myParagraph");`,
        },
      },
    ],
  },
  {
    name: "Modifying the DOM",
    content: [
      {
        type: "paragraph",
        data: "Once you've selected elements, you can modify their content, style, or attributes using JavaScript.",
      },
      {
        type: "h6",
        data: "Changing Text Content:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `document.getElementById("myTitle").innerText = "New Title!";`,
        },
      },
      {
        type: "h6",
        data: "Changing HTML Content:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `document.getElementById("myTitle").innerHTML = "<strong>Bold Title</strong>";`,
        },
      },
      {
        type: "h6",
        data: "Changing Styles:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `document.getElementById("myTitle").style.color = "blue";`,
        },
      },
      {
        type: "h6",
        data: "Changing Attributes:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `let image = document.getElementById("myImage");\nimage.src = "newImage.jpg";`,
        },
      },
    ],
  },
  {
    name: "DOM Events",
    content: [
      {
        type: "paragraph",
        data: "Events are actions or occurrences that happen in the browser, such as clicks, form submissions, or keyboard presses. JavaScript allows you to listen for these events and execute code in response.",
      },
      {
        type: "h6",
        data: "Common Event Methods:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "addEventListener()",
            body: "Adds an event listener to an element.",
          },
          {
            title: "onclick",
            body: "A shorthand for click events (not recommended for modern development).",
          },
        ],
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Using addEventListener\ndocument.getElementById("myButton").addEventListener("click", function() {\n  alert("Button clicked!");\n});\n\n// Using onclick (less recommended)\ndocument.getElementById("myButton").onclick = function() {\n  alert("Button clicked!");\n};`,
        },
      },
      {
        type: "h6",
        data: "Event Object:",
      },
      {
        type: "paragraph",
        data: "The event object provides information about the event, such as which element was clicked, key pressed, etc.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `document.getElementById("myButton").addEventListener("click", function(event) {\n  console.log(event.target);  // Logs the element that was clicked\n});`,
        },
      },
    ],
  },
  {
    name: "Event Propagation (Bubbling and Capturing)",
    content: [
      {
        type: "paragraph",
        data: "Event propagation determines the order in which events are triggered on elements. It can bubble up from the target element to its ancestors or be captured before reaching the target.",
      },
      {
        type: "h6",
        data: "Bubbling: The event propagates from the innermost target element outward. Capturing: The event propagates from the outermost element inward.",
      },
      {
        type: "paragraph",
        data: "You can control the behavior using the useCapture parameter in addEventListener().",
      },
      {
        type: "h6",
        data: "Example:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Bubbling\n.document.getElementById("outerDiv").addEventListener("click", function() {\n  alert("Outer Div clicked!");\n}, false);  // false means bubbling\n\n.document.getElementById("innerDiv").addEventListener("click", function() {\n  alert("Inner Div clicked!");\n}, false);\n\n// Capturing\n.document.getElementById("outerDiv").addEventListener("click", function() {\n  alert("Outer Div clicked!");\n}, true);  // true means capturing`,
        },
      },
    ],
  },
];

const tutorial4_chapter3_topics = [
  {
    name: "let and const",
    content: [
      {
        type: "paragraph",
        data: "let and const were introduced to provide better control over variable scope. Before ES6, JavaScript used only var to declare variables, but it had issues with scoping. The introduction of let and const helps solve these problems.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "let",
            body: "Used to declare variables that can be reassigned later.",
          },
          {
            title: "const",
            body: "Used to declare variables that cannot be reassigned after initialization.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `let name = "Alice";
  name = "Bob"; // This is allowed
  
  const age = 25;
  // age = 30; // Error: Assignment to constant variable`,
        },
      },
      {
        type: "bullet",
        data: [
          "let allows for block-level scoping.",
          "const creates read-only variables (but objects declared with const can still have their properties modified).",
        ],
      },
    ],
  },
  {
    name: "Arrow Functions",
    content: [
      {
        type: "paragraph",
        data: "Arrow functions provide a shorter syntax for writing functions. They are more concise and have different behavior for the this keyword.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const sum = (a, b) => a + b;
  console.log(sum(3, 5)); // 8`,
        },
      },
      {
        type: "h6",
        data: "Difference in this Binding:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `function Person(name) {
    this.name = name;
    this.greet = function() {
      console.log(\`Hello, my name is \${this.name}\`);
    };
  }
  
  const john = new Person("John");
  john.greet();  // Hello, my name is John
  
  // Arrow function example
  const johnArrow = {
    name: "John",
    greet: () => {
      console.log(\`Hello, my name is \${this.name}\`); // this refers to global object
    }
  };
  johnArrow.greet(); // undefined`,
        },
      },
      {
        type: "bullet",
        data: [
          "Arrow functions don’t have their own this, they inherit it from the surrounding context.",
          "The syntax is shorter compared to regular functions.",
        ],
      },
    ],
  },
  {
    name: "Destructuring",
    content: [
      {
        type: "paragraph",
        data: "Destructuring is a convenient way to extract values from arrays or objects and assign them to variables in a single step. It improves readability and reduces the need for repetitive code.",
      },
      {
        type: "h6",
        data: "Array Destructuring:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const [x, y] = [1, 2];
  console.log(x); // 1
  console.log(y); // 2`,
        },
      },
      {
        type: "h6",
        data: "Object Destructuring:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const person = { name: "Alice", age: 25 };
  const { name, age } = person;
  console.log(name); // Alice
  console.log(age);  // 25`,
        },
      },
      {
        type: "h6",
        data: "Renaming Variables:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const person = { name: "Alice", age: 25 };
  const { name: fullName, age: yearsOld } = person;
  console.log(fullName);  // Alice
  console.log(yearsOld);  // 25`,
        },
      },
      {
        type: "bullet",
        data: [
          "You can unpack values from arrays and assign them to variables.",
          "You can unpack properties from objects and assign them to variables.",
          "You can rename variables while destructuring.",
        ],
      },
    ],
  },
  {
    name: "Template Literals",
    content: [
      {
        type: "paragraph",
        data: "Template literals provide a cleaner way to concatenate strings. They allow embedded expressions and multi-line strings.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const name = "Alice";
  const greeting = \`Hello, \${name}!\`; // String interpolation
  console.log(greeting); // Hello, Alice!`,
        },
      },
      {
        type: "h6",
        data: "Multi-line Strings:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const message = \`This is a
  multi-line string!\`;
  console.log(message);`,
        },
      },
      {
        type: "bullet",
        data: [
          "Template literals are enclosed in backticks (`).",
          "You can embed expressions within ${}.",
          "Multi-line strings are supported.",
        ],
      },
    ],
  },
  {
    name: "Spread and Rest Operators",
    content: [
      {
        type: "paragraph",
        data: "The spread operator (...) allows you to expand elements of an array or object, while the rest operator (...) allows you to gather multiple elements into a single variable.",
      },
      {
        type: "h6",
        data: "Spread Operator (Array):",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5];
  console.log(newArr); // [1, 2, 3, 4, 5]`,
        },
      },
      {
        type: "h6",
        data: "Rest Operator (Function Parameters):",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6`,
        },
      },
      {
        type: "h6",
        data: "Rest Operator (Object):",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const person = { name: "Alice", age: 25 };
  const { name, ...rest } = person;
  console.log(name); // Alice
  console.log(rest); // { age: 25 }`,
        },
      },
      {
        type: "bullet",
        data: [
          "The spread operator expands elements of an array or object.",
          "The rest operator gathers multiple elements into a single variable.",
          "The rest operator can also be used with object destructuring.",
        ],
      },
    ],
  },
];

const tutorial4_chapters = [
  {
    name: "Variables, Functions, Arrays, Objects",
    topics: tutorial4_chapter1_topics,
    description:
      "In this chapter, we will cover the fundamental building blocks of JavaScript, including variables, functions, arrays, and objects. These concepts are essential for writing efficient and effective JavaScript code.",
  },
  {
    name: "DOM Manipulation & Events",
    topics: tutorial4_chapter2_topics,
    description:
      "In this chapter, we will dive into how JavaScript interacts with the HTML structure of your web page using the Document Object Model (DOM). You'll learn how to manipulate the DOM to change content dynamically and handle user interactions using events.",
  },
  {
    name: "ES6+ Features (let/const, Arrow Functions, Destructuring)",
    topics: tutorial4_chapter3_topics,
    description:
      "In this chapter, we will explore modern JavaScript features introduced in ES6 (ECMAScript 2015) and beyond. These features allow you to write cleaner, more efficient, and more readable code.",
  },
];

const tutorial5_chapter1_topics = [
  {
    name: "What is Git and Why Use It?",
    content: [
      {
        type: "paragraph",
        data: "Git is a distributed version control system used by developers to manage code changes.",
      },
      {
        type: "h6",
        data: "Key Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Track every change in your codebase",
          "Collaborate with others easily",
          "Roll back to previous versions if needed",
        ],
      },
    ],
  },
  {
    name: "Installing Git and Setting Up",
    content: [
      {
        type: "paragraph",
        data: "To get started:",
      },
      {
        type: "bullet",
        data: [
          "Download and install Git from git-scm.com",
          "Open your terminal or Git Bash",
        ],
      },
      {
        type: "h6",
        data: "Initial Setup (run these once):",
      },
      {
        type: "code",
        language: "bash",
        data: [
          'git config --global user.name "Your Name"',
          'git config --global user.email "your@email.com"',
        ],
      },
    ],
  },
  {
    name: "Creating and Initializing a Repository",
    content: [
      {
        type: "numbered",
        data: [
          "Create a folder for your project.",
          "Open terminal inside that folder.",
          "Run:",
        ],
      },
      {
        type: "code",
        language: "bash",
        data: ["git init"],
      },
      {
        type: "paragraph",
        data: "✅ Now Git is tracking this folder!",
      },
      {
        type: "code",
        language: "bash",
        data: ["git status"],
      },
    ],
  },
  {
    name: "Tracking Changes",
    content: [
      {
        type: "paragraph",
        data: "To track and save your code versions:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "git add filename      # Stage a file",
          "git add .             # Stage everything",
          'git commit -m "Initial commit"  # Save a version',
        ],
      },
      {
        type: "paragraph",
        data: "You can see the history with:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git log"],
      },
    ],
  },
  {
    name: "GitHub Basics",
    content: [
      {
        type: "paragraph",
        data: "GitHub is a remote hosting service for Git repositories.",
      },
      {
        type: "h6",
        data: "Steps:",
      },
      {
        type: "numbered",
        data: [
          "Create a new repository on github.com",
          "Connect your local repo:",
        ],
      },
      {
        type: "code",
        language: "bash",
        data: [
          "git remote add origin https://github.com/username/repo-name.git",
        ],
      },
      {
        type: "paragraph",
        data: "3.Push your code:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git push -u origin main"],
      },
    ],
  },
];
const tutorial5_chapter2_topics = [
  {
    name: "Cloning a Repository",
    content: [
      {
        type: "paragraph",
        data: "Cloning means making a local copy of a GitHub repo on your computer so you can work on it.",
      },
      {
        type: "h6",
        data: "Command:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git clone https://github.com/username/repo-name.git"],
      },
      {
        type: "paragraph",
        data: "🔽 This creates a folder repo-name/ with the project files and Git history.",
      },
    ],
  },
  {
    name: "Making Changes and Saving",
    content: [
      {
        type: "numbered",
        data: [
          "Open the project folder",
          "Edit or create a file (e.g., hello.js)",
          "Save the changes",
        ],
      },
      {
        type: "h6",
        data: "✅ Git Commands:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "git status           # Check changes",
          "git add hello.js     # Stage the file",
          'git commit -m "Add hello.js file"  # Save it locally',
        ],
      },
    ],
  },
  {
    name: "Pushing Changes to GitHub",
    content: [
      {
        type: "h6",
        data: "🚀 Push Local Changes to GitHub:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git push origin main"],
      },
      {
        type: "bullet",
        data: [
          "📦 origin = the GitHub repo",
          "🛤️ main = the branch you’re pushing to",
          "🔐 First time? You’ll be asked to log in with your GitHub credentials or token.",
        ],
      },
    ],
  },
  {
    name: "Forking vs. Cloning",
    content: [
      {
        type: "h6",
        data: "🔁 Fork:",
      },
      {
        type: "paragraph",
        data: "Creates a copy under your GitHub account — used for contributing to others' projects.",
      },
      {
        type: "h6",
        data: "📥 Clone:",
      },
      {
        type: "paragraph",
        data: "Creates a local copy on your computer.",
      },
      {
        type: "paragraph",
        data: "You fork public repos → clone them → push to your fork → make a pull request.",
      },
    ],
  },
  {
    name: "What is a Pull Request (PR)?",
    content: [
      {
        type: "paragraph",
        data: "A Pull Request (PR) asks a repository maintainer to pull your changes into the main project.",
      },
      {
        type: "h6",
        data: "✨ Use Case:",
      },
      {
        type: "bullet",
        data: [
          "You're contributing to an open-source project",
          "You want your code reviewed before merging",
        ],
      },
    ],
  },
  {
    name: "Creating a Pull Request",
    content: [
      {
        type: "numbered",
        data: ["Fork and clone a repo", "Create a new branch:"],
      },
      {
        type: "code",
        language: "bash",
        data: ["git checkout -b fix-typo"],
      },
      {
        type: "numbered",
        data: ["Make changes & commit", "Push to your GitHub fork:"],
      },
      {
        type: "code",
        language: "bash",
        data: ["git push origin fix-typo"],
      },
      {
        type: "numbered",
        data: [
          "On GitHub, click “Compare & Pull Request”",
          'Add a title + description, and click "Create Pull Request"',
        ],
      },
    ],
  },
  {
    name: "Reviewing and Merging a Pull Request",
    content: [
      {
        type: "bullet",
        data: [
          "Go to Pull Requests tab",
          "Review code changes",
          "Add comments or request changes if needed",
          "Click Merge Pull Request when ready",
        ],
      },
      {
        type: "paragraph",
        data: "🧹 Optionally delete the branch after merging.",
      },
    ],
  },
  {
    name: "Recap & What's Next",
    content: [
      {
        type: "bullet",
        data: [
          "How to clone a GitHub repo",
          "How to push changes to GitHub",
          "How pull requests help with collaboration",
        ],
      },
      {
        type: "paragraph",
        data: "📘 Next Chapter: Branching & Merge Conflicts — You'll dive into working with branches and resolving common issues when two people work on the same code.",
      },
    ],
  },
];
const tutorial5_chapter3_topics = [
  {
    name: "What is Branching in Git?",
    content: [
      {
        type: "paragraph",
        data: "Branching lets you work on different features or fixes without affecting the main codebase (usually the main or master branch).",
      },
      {
        type: "h6",
        data: "🧠 Why Use Branches?",
      },
      {
        type: "bullet",
        data: [
          "Work on new features safely",
          "Test code independently",
          "Collaborate without breaking the main app",
        ],
      },
      {
        type: "h6",
        data: "💡 Analogy:",
      },
      {
        type: "paragraph",
        data: "Think of your project like a tree — main is the trunk, and branches are where new ideas grow.",
      },
    ],
  },
  {
    name: "Creating and Switching Branches",
    content: [
      {
        type: "h6",
        data: "✨ Common Commands:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "# Create a new branch",
          "git branch feature-1",
          "",
          "# Switch to that branch",
          "git checkout feature-1",
          "",
          "# OR combine both in one command",
          "git checkout -b feature-1",
        ],
      },
      {
        type: "paragraph",
        data: "✅ Result: You're now on feature-1 branch. Any changes you make here won’t affect the main branch unless you merge.",
      },
    ],
  },
  {
    name: "Merging Branches",
    content: [
      {
        type: "paragraph",
        data: "Once your feature is ready, you’ll merge it back into the main branch.",
      },
      {
        type: "h6",
        data: "✅ Steps to Merge:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "# Switch to the main branch",
          "git checkout main",
          "",
          "# Merge your feature branch into main",
          "git merge feature-1",
        ],
      },
      {
        type: "h6",
        data: "🔁 Types of Merge:",
      },
      {
        type: "bullet",
        data: [
          "Fast-forward merge (no changes in main)",
          "Three-way merge (if both branches have new commits)",
        ],
      },
    ],
  },
  {
    name: "What are Merge Conflicts?",
    content: [
      {
        type: "h6",
        data: "😬 When Do Conflicts Happen?",
      },
      {
        type: "paragraph",
        data: "Conflicts occur when two branches change the same part of a file differently.",
      },
      {
        type: "h6",
        data: "💥 Example:",
      },
      {
        type: "bullet",
        data: [
          "You change app.js line 5 in main",
          "Your teammate also changes line 5 in feature-1",
          "Git won’t know which one to keep when merging",
        ],
      },
    ],
  },
  {
    name: "How to Resolve Merge Conflicts",
    content: [
      {
        type: "h6",
        data: "⚔️ Conflict Markers:",
      },
      {
        type: "paragraph",
        data: "When a conflict happens, Git shows it like this in the file:",
      },
      {
        type: "code",
        language: "js",
        data: [
          "<<<<<<< HEAD",
          'console.log("Code from main");',
          "=======",
          'console.log("Code from feature-1");',
          ">>>>>>> feature-1",
        ],
      },
      {
        type: "h6",
        data: "✍️ Fix It Manually:",
      },
      {
        type: "bullet",
        data: [
          "Choose the correct line (or combine both)",
          "Delete the <<<<<<<, =======, and >>>>>>> markers",
        ],
      },
      {
        type: "paragraph",
        data: "✅ Then run:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git add .", 'git commit -m "Resolved merge conflict"'],
      },
    ],
  },
  {
    name: "Deleting a Branch (Optional Cleanup)",
    content: [
      {
        type: "paragraph",
        data: "After merging, you can delete the feature branch:",
      },
      {
        type: "code",
        language: "bash",
        data: ["git branch -d feature-1"],
      },
      {
        type: "paragraph",
        data: "👉 Use -D instead of -d if the branch wasn’t merged but you still want to delete it.",
      },
    ],
  },
  {
    name: "Recap & Practice",
    content: [
      {
        type: "bullet",
        data: [
          "How to create and switch Git branches",
          "How to merge branches",
          "What merge conflicts are and how to resolve them",
        ],
      },
      {
        type: "h6",
        data: "🔍 Practice Challenge:",
      },
      {
        type: "numbered",
        data: [
          "Create a new branch bugfix",
          "Make a change to a file",
          "Switch back to main, make a conflicting change",
          "Merge and resolve the conflict",
        ],
      },
    ],
  },
];

const tutorial5_chapters = [
  {
    name: "Introduction to Git and GitHub",
    topics: tutorial5_chapter1_topics,
    description:
      "In this chapter, we will explore the fundamentals of Git and GitHub. Learn how to install and set up Git, create and manage repositories, track changes, and collaborate using GitHub. These essential version control skills are crucial for any developer.",
  },
  {
    name: "Collaborating with Git and GitHub: Workflows and Best Practices",
    topics: tutorial5_chapter2_topics,
    description:
      "In this chapter, we explore essential workflows and best practices for collaborating on projects using Git and GitHub. Learn how to clone repositories, manage changes, use pull requests, and understand the difference between forking and cloning. These skills are vital for effective collaboration in software development. Next, we'll dive into branching and resolving merge conflicts.",
  },
  {
    name: "Branching, Merging, and Merge Conflicts",
    topics: tutorial5_chapter3_topics,
    description:
      "In this chapter, we will explore the essential concepts of branching, merging, and resolving merge conflicts in Git. These operations are crucial for managing collaborative development workflows effectively.",
  },
];

const tutorial6_chapter1_topics = [
  {
    name: "What is React?",
    content: [
      {
        type: "h6",
        data: "React Overview",
      },
      {
        type: "bullet",
        data: [
          "React is a JavaScript library for building user interfaces, developed by Meta (Facebook).",
          "It helps developers create fast and interactive frontends using components.",
        ],
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Component-based architecture",
          "Reusable UI elements",
          "Fast updates with Virtual DOM",
        ],
      },
    ],
  },
  {
    name: "What is a Component?",
    content: [
      {
        type: "h6",
        data: "Understanding Components",
      },
      {
        type: "bullet",
        data: [
          "A component is a self-contained piece of UI, similar to a function that returns HTML.",
        ],
      },
      {
        type: "h6",
        data: "Functional Component Example",
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
        },
      },
      {
        type: "bullet",
        data: [
          "You can use components like this: <Welcome />",
          "All React apps are made by combining such components.",
        ],
      },
    ],
  },
  {
    name: "JSX – JavaScript + XML",
    content: [
      {
        type: "h6",
        data: "Introduction to JSX",
      },
      {
        type: "bullet",
        data: [
          "JSX lets you write HTML-like code in JavaScript.",
          "JSX makes code readable and easier to visualize UI.",
        ],
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `const element = <h1>Hello, JSX!</h1>;`,
        },
      },
    ],
  },
  {
    name: "Rendering Components",
    content: [
      {
        type: "h6",
        data: "How Components Render",
      },
      {
        type: "bullet",
        data: ["Components are rendered inside a root element using ReactDOM."],
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`,
        },
      },
      {
        type: "bullet",
        data: ["App is your main component that holds others."],
      },
    ],
  },
  {
    name: "Nesting Components",
    content: [
      {
        type: "h6",
        data: "Component Composition",
      },
      {
        type: "bullet",
        data: [
          "You can use components inside other components (also called composition).",
          "This is the core of how UIs are built in React — by nesting components.",
        ],
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}`,
        },
      },
    ],
  },
];
const tutorial6_chapter2_topics = [
  {
    name: "What are Props?",
    content: [
      {
        type: "h6",
        data: "Props Overview",
      },
      {
        type: "bullet",
        data: [
          "Props (short for properties) are used to pass data from parent to child components.",
        ],
      },
      {
        type: "h6",
        data: "Example",
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />`,
        },
      },
      {
        type: "bullet",
        data: ["Think of props as function arguments for components."],
      },
    ],
  },
  {
    name: "What is State?",
    content: [
      {
        type: "h6",
        data: "State Overview",
      },
      {
        type: "bullet",
        data: [
          "State holds data that can change during a component’s lifecycle.",
        ],
      },
      {
        type: "h6",
        data: "Example",
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`,
        },
      },
      {
        type: "bullet",
        data: ["React automatically updates the UI when state changes."],
      },
    ],
  },
  {
    name: "Introducing Hooks",
    content: [
      {
        type: "h6",
        data: "Hooks Overview",
      },
      {
        type: "bullet",
        data: [
          "Hooks are special functions that let you 'hook into' React features from functional components.",
        ],
      },
      {
        type: "h6",
        data: "Common Hooks",
      },
      {
        type: "bullet",
        data: [
          "useState() – manage state",
          "useEffect() – run code on side effects (like fetching data)",
        ],
      },
    ],
  },
  {
    name: "useEffect Explained",
    content: [
      {
        type: "h6",
        data: "useEffect Overview",
      },
      {
        type: "bullet",
        data: ["useEffect() runs after the component renders."],
      },
      {
        type: "h6",
        data: "Example",
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `import { useEffect } from 'react';

useEffect(() => {
  console.log('Component mounted!');
}, []);`,
        },
      },
      {
        type: "bullet",
        data: [
          "The empty array [] means it runs only once (like componentDidMount).",
        ],
      },
      {
        type: "h6",
        data: "Another Example",
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `useEffect(() => {
  // code runs when "count" changes
}, [count]);`,
        },
      },
    ],
  },
  {
    name: "Props vs State",
    content: [
      {
        type: "h6",
        data: "Comparison",
      },
      {
        type: "table",
        data: {
          headers: ["Feature", "Props", "State"],
          rows: [
            [
              "Data Direction",
              "Passed from parent",
              "Managed within component",
            ],
            ["Mutable?", "❌ Immutable", "✅ Mutable"],
            ["Purpose", "Configuration", "Local dynamic data"],
          ],
        },
      },
      {
        type: "bullet",
        data: [
          "Use props to pass data, and state to manage data that can change.",
        ],
      },
    ],
  },
];
const tutorial6_chapter3_topics = [
  {
    name: "Setting Up a React App",
    content: [
      {
        type: "h6",
        data: "Using Vite (Recommended for Speed)",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev`,
        },
      },
      {
        type: "h6",
        data: "Using Create React App (CRA)",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `npx create-react-app my-app
cd my-app
npm start`,
        },
      },
      {
        type: "bullet",
        data: [
          "This will create a basic React app with essential files, including:",
          "App.jsx (main component)",
          "index.html (entry point)",
          "index.js (renders the app)",
        ],
      },
    ],
  },
  {
    name: "Folder Structure Overview",
    content: [
      {
        type: "h6",
        data: "React App Folder Structure",
      },
      {
        type: "bullet",
        data: [
          "The React app folder structure typically looks like this:",
          "• my-app/",
          "  • public/ → Static files (e.g., index.html)",
          "  • src/ → Application source code",
          "    • App.jsx → Main component",
          "    • main.jsx → React entry point (renders the app)",
          "    • components/ → Reusable UI components",
          "    • Header.jsx",
          "    • Footer.jsx",
          "    • pages/ → Page components (Home, About, etc.)",
          "    • Home.jsx",
          "    • About.jsx",
          "  • package.json → Dependencies and scripts",
        ],
      },
    ],
  },
  {
    name: "What is Routing?",
    content: [
      {
        type: "h6",
        data: "Routing Overview",
      },
      {
        type: "bullet",
        data: [
          "Routing allows navigation between pages without reloading the entire website, a key feature in SPAs.",
        ],
      },
      {
        type: "h6",
        data: "Install react-router-dom for Routing",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `npm install react-router-dom`,
        },
      },
    ],
  },
  {
    name: "Creating Routes",
    content: [
      {
        type: "h6",
        data: "Set Up Basic Routes",
      },
      {
        type: "bullet",
        data: [
          "Set up basic routes using BrowserRouter, Routes, and Route components.",
        ],
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
        },
      },
      {
        type: "bullet",
        data: [
          "BrowserRouter: Enables routing.",
          "Route: Maps URL paths to components.",
        ],
      },
    ],
  },
  {
    name: "Navigation with Links",
    content: [
      {
        type: "h6",
        data: "Using <Link> for Navigation",
      },
      {
        type: "bullet",
        data: ["Use <Link> to navigate without reloading the page."],
      },
      {
        type: "code",
        data: {
          language: "jsx",
          code: `import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>
    </nav>
  );
}`,
        },
      },
      {
        type: "bullet",
        data: ["Tip: Replace <a> tags with <Link> for faster navigation."],
      },
    ],
  },
];

const tutorial6_chapters = [
  {
    name: "React, Components, JSX, Rendering, Nesting",
    topics: tutorial6_chapter1_topics,
    description:
      "In this chapter, we will introduce key React concepts, including components, JSX, rendering, and nesting. These foundational elements are essential for building efficient and interactive React applications.",
  },
  {
    title: "Props, State, and Hooks in React",
    description:
      "In this chapter, we explore the essential concepts of Props, State, and Hooks in React. These are fundamental for building dynamic and interactive user interfaces. Props allow data to flow from parent to child components, while State manages data that changes within a component. Hooks provide a way to use React features in functional components, with useState for state management and useEffect for handling side effects. Understanding Props vs State is crucial for effective React development.",
    topics: tutorial6_chapter2_topics,
  },
  {
    title: "React App Setup & Routing Essentials",
    topics: tutorial6_chapter3_topics,
    description:
      "In this chapter, we will cover essential topics for setting up and navigating a React application. This includes setting up a React app using different tools, understanding the folder structure, implementing routing, and creating navigation links. These concepts are fundamental for building and navigating modern React applications effectively.",
  },
];

const tutorial7_chapter1_topics = [
  {
    name: "Understanding Servers",
    content: [
      {
        type: "h6",
        data: "What is Server?",
      },
      {
        type: "bullet",
        data: [
          "A server is a system (software or hardware) that responds to requests from clients (such as browsers, apps, etc.).",
          "It can provide resources like web pages, data, or media.",
        ],
      },
      {
        type: "h6",
        data: "Types of Servers:",
      },
      {
        type: "bullet",
        data: [
          "Web Servers: Handle HTTP requests and responses.",
          "Application Servers: Run backend logic and serve dynamic content (e.g., Node.js with Express).",
        ],
      },
      {
        type: "h6",
        data: "Client-Server Architecture:",
      },
      {
        type: "bullet",
        data: [
          "Client sends a request to the server.",
          "Server processes the request and sends a response back.",
        ],
      },
    ],
  },
  {
    name: "HTTP Basics",
    content: [
      {
        type: "h6",
        data: "What is HTTP?",
      },
      {
        type: "bullet",
        data: [
          "HTTP (HyperText Transfer Protocol) is the protocol used for communication between clients (like browsers) and servers.",
        ],
      },
      {
        type: "h6",
        data: "How HTTP Works:",
      },
      {
        type: "bullet",
        data: [
          "A client (browser) sends an HTTP request to the server.",
          "	The server processes the request and sends back an HTTP response.",
        ],
      },
      {
        type: "h6",
        data: "HTTP Methods:",
      },
      {
        type: "bullet",
        data: [
          "	GET: Retrieve data.",
          "POST: Submit data to the server.",
          "	PUT: Update data.",
          "DELETE: Remove data.",
        ],
      },
      {
        type: "h6",
        data: "•	HTTP Response Status Codes:",
      },
      {
        type: "bullet",
        data: [
          "200 OK: Successful request.",
          "404 Not Found: Resource not found.",
          "500 Internal Server Error: Server-side error.",
        ],
      },
    ],
  },
  {
    name: "Introduction to Express.js",
    content: [
      {
        type: "h6",
        data: "What is Express.js?",
      },
      {
        type: "paragraph",
        data: "Express.js is a minimal, unopinionated web framework for Node.js that simplifies the creation of web servers and APIs. It helps handle routing, middleware, and HTTP requests easily.",
      },
      {
        type: "h6",
        data: "Installing Express Server Setup",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: "npm install express",
        },
      },
    ],
  },
  {
    name: "Creating a Simple Server with Express",
    content: [
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log("Server running at http://localhost:` +
            "${port}" +
            `");
})}`,
        },
      },
    ],
  },
  {
    name: "Routing and Handling Requests",
    content: [
      {
        type: "h6",
        data: "Defining Router",
      },
      {
        type: "paraghraph",
        data: "Use app.get(), app.post(), etc., to define routes that handle specific HTTP methods.",
      },

      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/about', (req, res) => { res.send('About Page');});`,
        },
      },
      {
        type: "h6",
        data: "Route Parameters: Handle dynamic data in the URL",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send("User ID: ` +
            "${userId}" +
            `");
});`,
        },
      },
    ],
  },
  {
    name: "Middleware in Express.js",
    content: [
      {
        type: "h6",
        data: "What is Middleware?",
      },
      {
        type: "paragraph",
        data: "Middleware functions are functions that have access to the request, response, and the next middleware function.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `app.use((req, res, next) => {
  console.log("` +
            "${req.method}" +
            ` request to ` +
            "${req.url}" +
            `");
  next();
});`,
        },
      },
      {
        type: "h6",
        data: "Built-in Middleware:",
      },
      {
        type: "bullet",
        data: [
          "express.json(): Parse incoming JSON requests.",
          "express.static(): Serve static files like images, CSS, etc.",
        ],
      },
    ],
  },
];
const tutorial7_chapter2_topics = [
  {
    name: "Introduction to APIs",
    content: [
      {
        type: "h6",
        data: "What is an API?",
      },
      {
        type: "bullet",
        data: [
          "An API (Application Programming Interface) is a set of rules that allows software applications to communicate with each other.",
          "It defines methods and data formats for requests and responses between client and server.",
        ],
      },
      {
        type: "h6",
        data: "Types of APIs:",
      },
      {
        type: "bullet",
        data: [
          "REST (Representational State Transfer): A stateless, lightweight architecture based on HTTP.",
          "SOAP (Simple Object Access Protocol): A protocol for exchanging structured information, generally more complex than REST.",
        ],
      },
      {
        type: "h6",
        data: "API Endpoints:",
      },
      {
        type: "bullet",
        data: [
          "An endpoint is a URL where a client can access a resource or send a request to the server.",
          "Example: GET /users to fetch all users.",
        ],
      },
    ],
  },
  {
    name: "Creating Your First API with Express",
    content: [
      {
        type: "h6",
        data: "Setting Up the API:",
      },
      {
        type: "paragraph",
        data: "Start by setting up an Express app to handle API routes.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `const express = require('express');
    const app = express();
    const port = 3000;
    
    app.use(express.json());  // Middleware to parse JSON request bodies
    
    app.get('/', (req, res) => {
      res.send('Welcome to the API!');
    });
    
    app.listen(port, () => {
      console.log(\`API server running at http://localhost:` +
            "${port}" +
            `\`);
    });
              `,
        },
      },
      {
        type: "h6",
        data: "Handling GET Requests:",
      },
      {
        type: "paragraph",
        data: "You can define routes that handle different HTTP methods.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products', (req, res) => {
      const products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 },
      ];
      res.json(products);
    });
              `,
        },
      },
    ],
  },
  {
    name: "Handling POST Requests",
    content: [
      {
        type: "h6",
        data: "Creating Resources with POST:",
      },
      {
        type: "paragraph",
        data: "	POST is used to send data to the server to create a resource.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.post('/api/products', (req, res) => {
      const newProduct = req.body;
      newProduct.id = Date.now();  // Assigning a unique ID
      res.status(201).json(newProduct);  // Respond with the created product
    });
              `,
        },
      },
      {
        type: "h6",
        data: "Example JSON Request Body:",
      },
      {
        type: "code",
        data: {
          language: "json",
          code: `{
      "name": "Tablet",
      "price": 300
    }`,
        },
      },
    ],
  },
  {
    name: "Handling PUT and DELETE Requests",
    content: [
      {
        type: "h6",
        data: "PUT Request:",
      },
      {
        type: "paragraph",
        data: "PUT is used to update an existing resource.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.put('/api/products/:id', (req, res) => {
      const { id } = req.params;
      const updatedProduct = req.body;
      updatedProduct.id = id;  // Ensure the ID remains the same
      res.json(updatedProduct);
    });
              `,
        },
      },
      {
        type: "h6",
        data: "DELETE Request:",
      },
      {
        type: "paragraph",
        data: "DELETE is used to remove a resource.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code:
            `app.delete('/api/products/:id', (req, res) => {
      const { id } = req.params;
      res.send(\`Product with ID ` +
            "${id}" +
            ` deleted.\`);
    });
              `,
        },
      },
    ],
  },
  {
    name: "Validating API Requests",
    content: [
      {
        type: "h6",
        data: "Validating Input:",
      },
      {
        type: "paragraph",
        data: "Before processing requests, it’s essential to validate the input.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const validateProduct = (req, res, next) => {
      const { name, price } = req.body;
      if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
      }
      next();
    };
    
    app.post('/api/products', validateProduct, (req, res) => {
      const newProduct = req.body;
      newProduct.id = Date.now();
      res.status(201).json(newProduct);
    });
              `,
        },
      },
      {
        type: "h6",
        data: "Middleware for Validation:",
      },
      {
        type: "bullet",
        data: [
          "The validateProduct middleware checks the incoming request for required fields and responds with a 400 error if validation fails.",
        ],
      },
    ],
  },
  {
    name: "Sending JSON Responses",
    content: [
      {
        type: "h6",
        data: "Responding with JSON:",
      },
      {
        type: "bullet",
        data: [
          "Express’s res.json() method automatically converts an object into JSON format for the response.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products', (req, res) => {
      const products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 },
      ];
      res.json(products);
    });
              `,
        },
      },
      {
        type: "h6",
        data: "Status Codes:",
      },
      {
        type: "bullet",
        data: [
          "200 OK: Successful request.",
          "201 Created: Resource created.",
          "400 Bad Request: Invalid request.",
          "404 Not Found: Resource not found.",
        ],
      },
    ],
  },
  {
    name: "Testing Your API",
    content: [
      {
        type: "h6",
        data: "Testing Tools:",
      },
      {
        type: "bullet",
        data: [
          "Use tools like Postman or Insomnia to send requests to your API and view the responses.",
          "curl is also a command-line tool for testing APIs.",
        ],
      },
      {
        type: "h6",
        data: "Testing with curl:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: "curl -X GET http://localhost:3000/api/products",
        },
      },
    ],
  },
];
const tutorial7_chapter3_topics = [
  {
    name: "Introduction to Routing",
    content: [
      {
        type: "h6",
        data: "What is Routing?",
      },
      {
        type: "bullet",
        data: [
          "Routing defines how an application responds to client requests for specific endpoints.",
          "It maps HTTP requests (GET, POST, PUT, DELETE) to server-side functions that handle these requests.",
        ],
      },
      {
        type: "h6",
        data: "Basic Routing with Express:",
      },
      {
        type: "bullet",
        data: [
          "Express makes routing simple using HTTP methods like app.get(), app.post(), etc.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products', (req, res) => {
      res.send('Get all products');
    });
    
    app.post('/api/products', (req, res) => {
      res.send('Create a new product');
    });`,
        },
      },
      {
        type: "h6",
        data: "Dynamic Routing:",
      },
      {
        type: "bullet",
        data: [
          "You can define dynamic routes with parameters to capture values from the URL.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products/:id', (req, res) => {
      const { id } = req.params;
      res.send(\`Get product with ID: \${id}\`);
    });`,
        },
      },
    ],
  },
  {
    name: "Handling Multiple Routes",
    content: [
      {
        type: "h6",
        data: "Defining Multiple Routes for One Path:",
      },
      {
        type: "bullet",
        data: [
          "You can chain route handlers together to handle different HTTP methods for the same path.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.route('/api/products')
      .get((req, res) => {
        res.send('List of products');
      })
      .post((req, res) => {
        res.send('Create a new product');
      });`,
        },
      },
      {
        type: "h6",
        data: "Route Parameters:",
      },
      {
        type: "bullet",
        data: [
          "Dynamic parameters are useful when you need to capture values from the URL.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products/:productId', (req, res) => {
      const productId = req.params.productId;
      res.send(\`Product ID: \${productId}\`);
    });`,
        },
      },
    ],
  },
  {
    name: "Middleware in Express.js",
    content: [
      {
        type: "h6",
        data: "What is Middleware?",
      },
      {
        type: "bullet",
        data: [
          "Middleware functions are functions that have access to the request, response, and the next function in the application’s request-response cycle.",
          "They are often used to modify the request or response objects, end the request-response cycle, or call the next middleware function.",
        ],
      },
      {
        type: "h6",
        data: "Using Built-in Middleware:",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Using express.json() middleware to parse incoming JSON data
    app.use(express.json());
    
    // Serving static files from the "public" folder
    app.use(express.static('public'));`,
        },
      },
    ],
  },
  {
    name: "Custom Middleware",
    content: [
      {
        type: "h6",
        data: "Creating Custom Middleware:",
      },
      {
        type: "bullet",
        data: [
          "You can write your own middleware to perform custom operations.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const logRequestDetails = (req, res, next) => {
      console.log(\`Request Method: \${req.method}\`);
      console.log(\`Request URL: \${req.url}\`);
      next();  // Call the next middleware or route handler
    };
    
    app.use(logRequestDetails);`,
        },
      },
      {
        type: "h6",
        data: "Order of Middleware:",
      },
      {
        type: "bullet",
        data: [
          "Middleware functions are executed in the order in which they are defined. The next() function must be called to move to the next middleware or route handler.",
        ],
      },
    ],
  },
  {
    name: "Error Handling Middleware",
    content: [
      {
        type: "h6",
        data: "Basic Error Handling:",
      },
      {
        type: "bullet",
        data: [
          "Express allows you to define an error-handling middleware function by specifying four arguments: err, req, res, and next.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.use((err, req, res, next) => {
      console.error(err.message);
      res.status(500).send('Something went wrong!');
    });`,
        },
      },
      {
        type: "h6",
        data: "Catching Errors in Routes:",
      },
      {
        type: "bullet",
        data: [
          "In case of an error in a route handler, call next() to pass the error to the error-handling middleware.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.get('/api/products', (req, res, next) => {
      const products = null; // Simulating a failure
      if (!products) {
        const error = new Error('Products not found');
        next(error);  // Passing error to error handler
      }
    });`,
        },
      },
    ],
  },
  {
    name: "Route Grouping and Modularization",
    content: [
      {
        type: "h6",
        data: "Route Grouping:",
      },
      {
        type: "bullet",
        data: [
          "You can group similar routes using Router objects in Express to keep your code modular.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
      res.send('Get all products');
    });
    
    router.post('/', (req, res) => {
      res.send('Create a new product');
    });
    
    app.use('/api/products', router);  // Prefix all routes with /api/products`,
        },
      },
      {
        type: "h6",
        data: "Modularizing Routes:",
      },
      {
        type: "bullet",
        data: [
          "Use multiple route files to separate concerns and make the codebase more maintainable.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// productsRoute.js
    const express = require('express');
    const router = express.Router();
    
    router.get('/', (req, res) => {
      res.send('Get all products');
    });
    
    module.exports = router;
    
    // app.js
    const productsRoute = require('./productsRoute');
    app.use('/api/products', productsRoute);`,
        },
      },
    ],
  },
  {
    name: "Advanced Routing Techniques",
    content: [
      {
        type: "h6",
        data: "Route Path Matching:",
      },
      {
        type: "bullet",
        data: [
          "Express supports dynamic route paths with optional parameters, wildcards, and regular expressions.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `// Optional parameter
    app.get('/api/products/:id?', (req, res) => {
      const id = req.params.id;
      if (id) {
        res.send(\`Product ID: \${id}\`);
      } else {
        res.send('All Products');
      }
    });
    
    // Wildcards and Regex
    app.get('/api/*', (req, res) => {
      res.send('Wildcard Route');
    });`,
        },
      },
      {
        type: "h6",
        data: "Chaining Routes with Middleware:",
      },
      {
        type: "bullet",
        data: [
          "You can chain middleware functions to routes for more fine-grained control.",
        ],
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `app.route('/api/products')
      .all((req, res, next) => {
        console.log('This middleware runs for all HTTP methods');
        next();
      })
      .get((req, res) => {
        res.send('Get all products');
      })
      .post((req, res) => {
        res.send('Create a new product');
      });`,
        },
      },
    ],
  },
];

const tutorial7_chapters = [
  {
    name: "Express.js & HTTP Fundamentals",
    topics: tutorial7_chapter1_topics,
    description:
      "This chapter covers essential server-side concepts, including servers, HTTP basics, and working with Express.js. Learn how to set up servers, handle routing, and use middleware to manage requests effectively. These foundational topics are crucial for building robust web applications.",
  },
  {
    name: "APIs and Express Fundamentals",
    topics: tutorial7_chapter2_topics,
    description:
      "This chapter covers the essentials of working with APIs and Express in JavaScript. Learn about API types, creating and handling different HTTP requests, validation, JSON responses, and testing your API. These concepts are crucial for building robust backend services.",
  },
  {
    name: "Routing in Express.js",
    topics: tutorial7_chapter3_topics,
    description:
      "This chapter covers essential concepts of routing in Express.js, including basic routing, dynamic routes, middleware, error handling, route grouping, and advanced techniques. Learn how to create efficient and modular routes for your applications.",
  },
];

const tutorial8_chapter1_topics = [
  {
    name: "What is MongoDB?",
    content: [
      {
        type: "paragraph",
        data: "MongoDB is an open-source, NoSQL (non-relational) database. Unlike traditional SQL databases that store data in rows and columns, MongoDB stores data as flexible, JSON-like documents. Each document can have different fields, and you don’t need to define a strict schema beforehand. This makes MongoDB great for rapidly evolving applications.",
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Schema-less structure",
          "High performance for read/write operations",
          "Scales easily across many servers",
          "Stores data in BSON (Binary JSON)",
        ],
      },
    ],
  },
  {
    name: "NoSQL vs. SQL - Understanding the Difference",
    content: [
      {
        type: "table",
        data: {
          headers: ["Feature", "SQL (Relational)", "NoSQL (MongoDB)"],
          rows: [
            [
              "Structure",
              "Tables with rows and columns",
              "Collections of documents",
            ],
            ["Schema", "Fixed and predefined", "Flexible and dynamic"],
            [
              "Relationships",
              "Complex joins supported",
              "Embedding and referencing used",
            ],
            ["Scalability", "Vertical (scale up)", "Horizontal (scale out)"],
            ["Data Format", "Tabular", "JSON-like documents (BSON)"],
            [
              "Use Case Examples",
              "Banking, ERP systems",
              "Social media, blogs, IoT, real-time apps",
            ],
          ],
        },
      },
    ],
  },
  {
    name: "MongoDB Core Terminologies",
    content: [
      {
        type: "paragraph",
        data: "MongoDB introduces a different terminology compared to SQL databases:",
      },
      {
        type: "bullet",
        data: [
          "Database: Contains collections (like a container for all your data).",
          "Collection: Equivalent to a table in SQL. Groups related documents.",
          "Document: The smallest unit in MongoDB. Similar to a row, but in JSON format.",
          "_id: Unique identifier for each document (auto-generated if not provided).",
        ],
      },
      {
        type: "h6",
        data: "Example Document",
      },
      {
        type: "code",
        data: {
          language: "json",
          code: `{
  "_id": "64a1abc23d6f4a76b9c1",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin",
  "isActive": true,
  "createdAt": "2025-04-14T10:30:00Z"
}`,
        },
      },
    ],
  },
  {
    name: "Why Choose MongoDB?",
    content: [
      {
        type: "paragraph",
        data: "MongoDB is particularly well-suited for modern web applications due to:",
      },
      {
        type: "bullet",
        data: [
          "Schema Flexibility: Fields can be added anytime without breaking the database.",
          "Document-Oriented: Store entire objects (like user profiles) in one document.",
          "Scalability: Handles huge amounts of data efficiently.",
          "Real-time Use: Great for fast-paced, data-rich applications.",
        ],
      },
      {
        type: "h6",
        data: "Example Use Cases",
      },
      {
        type: "bullet",
        data: [
          "Blogs with varied article structures",
          "E-commerce stores with dynamic product attributes",
          "Chat applications with nested message threads",
        ],
      },
    ],
  },
  {
    name: "Setting Up MongoDB Locally",
    content: [
      {
        type: "paragraph",
        data: "To run MongoDB on your system:",
      },
      {
        type: "h6",
        data: "Step 1: Download MongoDB",
      },
      {
        type: "bullet",
        data: [
          "Visit: https://www.mongodb.com/try/download/community",
          "Choose your OS and install the MongoDB Community Server.",
        ],
      },
      {
        type: "h6",
        data: "Step 2: Run MongoDB",
      },
      {
        type: "bullet",
        data: [
          "Open terminal or command prompt.",
          "Start the database using: `mongod`",
        ],
      },
      {
        type: "h6",
        data: "Step 3: Use the Mongo Shell",
      },
      {
        type: "bullet",
        data: [
          "Run: `mongo`",
          "This gives access to the MongoDB shell for managing your database directly.",
        ],
      },
    ],
  },
  {
    name: "Using MongoDB Compass (GUI Tool)",
    content: [
      {
        type: "paragraph",
        data: "MongoDB Compass is a graphical interface for managing MongoDB databases.",
      },
      {
        type: "h6",
        data: " With Compass, you can:",
      },
      {
        type: "bullet",
        data: [
          "View databases, collections, and documents",
          "Create, update, or delete data visually",
          "Write and test queries easily",
          "Analyze indexes and performance metrics",
        ],
      },
      {
        type: "h6",
        data: "Great for beginners and non-coders working with MongoDB.",
      },
    ],
  },
  {
    name: "How MongoDB is Used in Real-World Projects",
    content: [
      {
        type: "paragraph",
        data: "MongoDB is widely used in production environments. It plays a key role in popular web development stacks like MERN (MongoDB, Express, React, Node.js).",
      },
      {
        type: "bullet",
        data: ["Used by: Uber, Lyft, eBay, Forbes, and more."],
      },
      {
        type: "h6",
        data: "Real-world examples",
      },
      {
        type: "bullet",
        data: [
          "Storing user profiles in a social app",
          "Managing product listings in an online shop",
          "Saving sensor data from IoT devices",
          "Logging user activities for analytics",
        ],
      },
    ],
  },
];
const tutorial8_chapter2_topics = [
  {
    name: "What is Mongoose?",
    content: [
      {
        type: "paragraph",
        data: "Mongoose is a Node.js library that provides a simple way to work with MongoDB. It helps you define data structures (schemas) and simplifies querying, validation, and relationships in MongoDB databases.",
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Works as a bridge between MongoDB and Node.js",
          "Simplifies data management with models and schemas",
          "Provides powerful query helpers",
          "Supports data validation and relationships",
        ],
      },
    ],
  },
  {
    name: "Connecting to MongoDB with Mongoose",
    content: [
      {
        type: "paragraph",
        data: "Before using MongoDB, you must connect your Node.js app to the MongoDB server. Mongoose provides a .connect() method to establish this connection.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            const mongoose = require('mongoose');
            mongoose.connect('mongodb://localhost:27017/myAppDB')
              .then(() => console.log('MongoDB Connected!'))
              .catch(err => console.log(err));
          `,
        },
      },
      {
        type: "paragraph",
        data: "Replace 'myAppDB' with your own database name. If it doesn't exist, MongoDB will create it.",
      },
    ],
  },
  {
    name: "Defining a Schema and Model",
    content: [
      {
        type: "paragraph",
        data: "Schemas define the structure of your documents (like a blueprint). A model is created from the schema and used to interact with the MongoDB collection.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            const userSchema = new mongoose.Schema({
              name: String,
              email: String,
              isActive: Boolean,
              createdAt: { type: Date, default: Date.now }
            });
            
            const User = mongoose.model('User', userSchema);
          `,
        },
      },
      {
        type: "paragraph",
        data: "Think of Schema as a form, and Model as the tool to fill, save, or search forms in the database.",
      },
    ],
  },
  {
    name: "Create Operation",
    content: [
      {
        type: "paragraph",
        data: "To add data to your database, you use the Create operation. Mongoose provides new Model().save() or Model.create() to do this.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            const newUser = new User({
              name: "Alice",
              email: "alice@example.com",
              isActive: true
            });
            
            newUser.save();
          `,
        },
      },
      {
        type: "h6",
        data: "Or",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.create({
              name: "Bob",
              email: "bob@example.com",
              isActive: false
            });
          `,
        },
      },
      {
        type: "paragraph",
        data: "Creating records is like filling out a form and submitting it to the database.",
      },
    ],
  },
  {
    name: "Read Operation",
    content: [
      {
        type: "paragraph",
        data: "To view or retrieve data from the database, use the Read operation. Mongoose provides .find() for all documents and .findOne() for a single one.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.find(); // fetch all users
            User.findOne({ email: "alice@example.com" }); // single user
          `,
        },
      },
      {
        type: "paragraph",
        data: "Reading data helps display or process user info, logs, etc.",
      },
    ],
  },
  {
    name: "Update Operation",
    content: [
      {
        type: "paragraph",
        data: "To modify existing data, use the Update operation. Mongoose provides .updateOne() or .findByIdAndUpdate() for direct editing.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.updateOne(
              { email: "bob@example.com" },
              { $set: { isActive: true } }
            );
          `,
        },
      },
      {
        type: "h6",
        data: "Or",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.findByIdAndUpdate("id_here", { name: "Updated Name" });
          `,
        },
      },
      {
        type: "paragraph",
        data: "Updates allow correcting or modifying stored information (like changing email, password, or profile name).",
      },
    ],
  },
  {
    name: "Delete Operation",
    content: [
      {
        type: "paragraph",
        data: "To remove data from the database, use the Delete operation. Use .deleteOne() or .findByIdAndDelete() to remove documents.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.deleteOne({ email: "bob@example.com" });
          `,
        },
      },
      {
        type: "h6",
        data: "Or",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            User.findByIdAndDelete("id_here");
          `,
        },
      },
      {
        type: "paragragh",
        data: "Deletion is useful when a user closes an account or when cleaning up unwanted records.",
      },
    ],
  },
  {
    name: "Bonus – Validations in Schema",
    content: [
      {
        type: "paragraph",
        data: "Mongoose lets you define rules (validations) in the schema, ensuring your data stays clean, safe, and consistent.",
      },
      {
        type: "code",
        data: {
          language: "js",
          code: `
            const userSchema = new mongoose.Schema({
              name: { type: String, required: true, minlength: 3 },
              email: { type: String, required: true, unique: true },
              isActive: Boolean
            });
          `,
        },
      },
      {
        type: "paragraph",
        data: "Validation prevents things like empty names or duplicate emails from being saved.",
      },
    ],
  },
  {
    name: "CRUD Summary Table",
    content: [
      {
        type: "table",
        data: {
          headers: ["Operation", "Method", "Description"],
          rows: [
            ["Create", ".create() / .save()", "Add new data to DB"],
            ["Read", ".find() / .findOne()", "Retrieve data from DB"],
            [
              "Update",
              ".updateOne() / .findByIdAndUpdate()",
              "Modify existing data",
            ],
            [
              "Delete",
              ".deleteOne() / .findByIdAndDelete()",
              "Remove unwanted documents",
            ],
          ],
        },
      },
      {
        type: "pragraph",
        data: "CRUD operations are the foundation of interacting with any database.",
      },
    ],
  },
];
const tutorial8_chapter3_topics = [
  {
    name: "Project Folder Structure (Simple Format)",
    content: [
      {
        type: "paragraph",
        data: "Keeping your files organized makes your project scalable and easy to manage. Below is a simple, beginner-friendly folder structure for MongoDB integration in Node.js:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `
my-app/
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── config/
│   └── db.js
├── app.js
└── package.json
`,
        },
      },
      {
        type: "bullet",
        data: [
          "models/ = MongoDB Schemas",
          "routes/ = API endpoints",
          "controllers/ = Logic for API routes",
          "config/ = DB connection file",
        ],
      },
    ],
  },
  {
    name: "Setting Up MongoDB Connection",
    content: [
      {
        type: "paragraph",
        data: "Use a separate db.js file to handle your database connection. This keeps your main app.js clean.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `
// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myAppDB');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;
`,
        },
      },
    ],
  },
  {
    name: "Setting Up app.js",
    content: [
      {
        type: "paragraph",
        data: "This is your main entry point. It sets up Express, connects to MongoDB, and loads routes.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `
// app.js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`,
        },
      },
    ],
  },
  {
    name: "Defining a User Schema",
    content: [
      {
        type: "paragraph",
        data: "Create a simple user schema to store data like name and email.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: Boolean
});

module.exports = mongoose.model('User', userSchema);
`,
        },
      },
    ],
  },
  {
    name: "Creating User Controller",
    content: [
      {
        type: "paragraph",
        data: "Controllers handle logic for each route like creating or listing users.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `
// controllers/userController.js
const User = require('../models/User');

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
`,
        },
      },
    ],
  },
  {
    name: "Defining Routes",
    content: [
      {
        type: "paragraph",
        data: "Routes connect URL paths to controller functions.",
      },
      {
        type: "code",
        data: {
          language: "javascript",
          code: `
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);

module.exports = router;
`,
        },
      },
    ],
  },
  {
    name: "Testing Everything with Postman",
    content: [
      {
        type: "paragraph",
        data: "Use Postman or any API client to test the routes:",
      },
      {
        type: "bullet",
        data: [
          "POST http://localhost:3000/api/users",
          "Body (JSON):",
          {
            type: "code",
            data: {
              language: "json",
              code: `{
  "name": "Alice",
  "email": "alice@example.com",
  "isActive": true
}`,
            },
          },
          {
            type: "paragraph",
            data: "GET http://localhost:3000/api/users Should return the list of users from your MongoDB.",
          },
        ],
      },
    ],
  },
  {
    name: "Recap & What's Next",
    content: [
      {
        type: "paragraph",
        data: "You’ve Learned:",
      },
      {
        type: "bullet",
        data: [
          "How to connect Node.js with MongoDB",
          "How to organize code using MVC structure",
          "How to perform basic CRUD operations using Express routes and controllers",
        ],
      },
      {
        type: "paragraph",
        data: "🔜 Next, you'll learn how to secure your API, validate inputs, and possibly integrate authentication.",
      },
    ],
  },
];

const tutorial8_chapters = [
  {
    name: "MongoDB Fundamentals and Applications",
    topics: tutorial8_chapter1_topics,
    description:
      "In this chapter, we explore the fundamentals of MongoDB, including its features, comparison with SQL databases, core terminologies, and practical setup. We also delve into real-world applications and use cases, providing a comprehensive understanding for developers.",
  },
  {
    name: "Mongoose Fundamentals: CRUD Operations and Schema Management",
    topics: tutorial8_chapter2_topics,
    description:
      "This chapter covers the essential concepts of working with Mongoose in Node.js, including connecting to MongoDB, defining schemas and models, and performing CRUD (Create, Read, Update, Delete) operations. It also explores schema validations and provides a summary of key operations for interacting with a MongoDB database.",
  },
  {
    name: "Setting Up a Node.js Project with MongoDB",
    topics: tutorial8_chapter3_topics,
    description:
      "Learn how to set up and organize a Node.js project with MongoDB integration. This chapter covers project structure, database connection, MVC pattern implementation, and basic CRUD operations. You'll also learn how to test your API endpoints using Postman.",
  },
];

export const WebDevelopmentTutorials = [
  {
    title: "Introduction to Web Development",
    description:
      "This tutorial introduces web development, covering frontend (HTML, CSS, JavaScript), backend (server logic, databases, APIs), and full-stack development. It explains different web types like static, dynamic, and hybrid websites, highlighting the roles and collaboration of web developers in building successful web applications.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment1.png",
    category: "Web Development",
    chapters: tutorial1_chapters,
    quiz: [
      {
        question:
          "Which of the following is NOT a major category of web development?",
        options: [
          "Frontend Development",
          "Backend Development",
          "Database Management",
          "Full-Stack Development",
        ],
        answer: "Database Management",
      },
      {
        question:
          "What is the primary role of a Security Specialist in web development?",
        options: [
          "Implementing encryption and firewalls",
          "Designing web layouts and navigation",
          "Writing API endpoints",
          "Optimizing website speed",
        ],
        answer: "Implementing encryption and firewalls",
      },
      {
        question:
          "Which of the following is a characteristic of a static website?",
        options: [
          "Content changes in real-time based on user interaction",
          "It requires a backend server for content generation",
          "Content does not change unless manually edited",
          "It uses databases to fetch content",
        ],
        answer: "Content does not change unless manually edited",
      },
      {
        question:
          "Which of the following technologies is commonly used in backend development?",
        options: ["HTML", "JavaScript", "Node.js", "CSS"],
        answer: "Node.js",
      },
      {
        question: "What is a key advantage of being a full-stack developer?",
        options: [
          "Specializing in only frontend development",
          "Understanding and handling both frontend and backend systems",
          "Limiting focus to backend logic only",
          "Working exclusively on server-side technologies",
        ],
        answer: "Understanding and handling both frontend and backend systems",
      },
    ],
  },
  {
    title: "HTML Basics: Building Blocks of the Web",
    description:
      "Learn the core structure of webpages with HTML. This tutorial covers essential syntax, tags, forms, tables, media embedding, and semantic markup. Perfect for beginners, you'll also pick up best practices and accessibility tips to write clean, meaningful, and user-friendly HTML.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment2.png",
    category: "Web Development",
    chapters: tutorial2_chapters,
    quiz: [
      {
        question:
          "Which of the following is the correct basic structure of an HTML document?",
        options: [
          "<doctype html>\n<html>\n  <head></head>\n  <body></body>\n</html>",
          "<!DOCTYPE html>\n<html>\n  <head></head>\n  <body></body>\n</html>",
          "<html>\n  <head></head>\n  <body></body>\n</html>",
          "<html>\n  <body></body>\n  <head></head>\n</html>",
        ],
        answer:
          "<!DOCTYPE html>\n<html>\n  <head></head>\n  <body></body>\n</html>",
      },
      {
        question:
          "Which tag is semantic and used to represent a block of navigational links?",
        options: ["<div>", "<span>", "<nav>", "<section>"],
        answer: "<nav>",
      },
      {
        question: "What is the purpose of the <label> tag in a form?",
        options: [
          "It creates a clickable button.",
          "It provides a caption for an input field.",
          "It submits the form.",
          "It adds styling to the input.",
        ],
        answer: "It provides a caption for an input field.",
      },
      {
        question:
          "Which attribute is used to specify the source file of an image?",
        options: ["href", "src", "alt", "target"],
        answer: "src",
      },
      {
        question: "Why should you avoid using inline styles in HTML?",
        options: [
          "Inline styles make pages load faster",
          "They are easier to maintain",
          "They keep the HTML clean and separate from design",
          "They are required by HTML5",
        ],
        answer: "They keep the HTML clean and separate from design",
      },
      {
        question: "Which HTML tag defines the largest heading?",
        options: ["<head>", "<h6>", "<h1>", "<title>"],
        answer: "<h1>",
      },
      {
        question:
          "Which attribute is used in the <a> tag to specify the link destination?",
        options: ["src", "link", "href", "action"],
        answer: "href",
      },
    ],
  },

  {
    title: "CSS Mastery: From Fundamentals to Responsive Layouts",
    description:
      "This tutorial is your complete guide to mastering modern CSS. Whether you're a beginner or brushing up on your skills, you'll learn how to style HTML elements using selectors, understand the box model, and control element display. Dive deep into powerful layout techniques with Flexbox and CSS Grid, and finish strong by learning how to build fully responsive web designs with media queries. By the end, you'll be able to create clean, flexible, and professional-looking websites that adapt beautifully to all screen sizes.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment3.png",
    category: "Web Development",
    chapters: tutorial3_chapters,
    quiz: [
      {
        question: "What is the main purpose of media queries in CSS?",
        options: [
          "To apply animations",
          "To define hover effects",
          "To apply styles based on screen size or device type",
          "To add scripts to a webpage",
        ],
        answer: "To apply styles based on screen size or device type",
      },
      {
        question: "Which of the following is a valid media query syntax?",
        options: [
          "@responsive screen and (width < 600px)",
          "@media screen and (max-width: 600px)",
          "@screen media (600px max-width)",
          "media-query: (max: 600px)",
        ],
        answer: "B) @media screen and (max-width: 600px)",
      },
      {
        question:
          "What unit is commonly used for screen width in media queries?",
        options: ["cm", "em", "px", "rem"],
        answer: "px",
      },
      {
        question:
          "What happens if no media query is defined for a smaller screen?",
        options: [
          "Styles are removed",
          "Default desktop styles apply, which may break layout",
          "Page auto-adjusts perfectly",
          "The page shows an error",
        ],
        answer: "Default desktop styles apply, which may break layout",
      },
      {
        question: "What is a breakpoint in responsive design?",
        options: [
          "A browser crash",
          "A comment in code",
          "A point where your design needs to adjust for different screen widths",
          "A tool in Chrome DevTools",
        ],
        answer:
          "A point where your design needs to adjust for different screen widths",
      },
      {
        question:
          "Which of the following breakpoints is commonly used for tablets?",
        options: [
          "max-width: 480px",
          "max-width: 768px",
          "max-width: 1024px",
          "max-width: 1440px",
        ],
        answer: "max-width: 768px",
      },
      {
        question:
          "True or False: Mobile-first design starts with styles for desktop and scales down.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Which meta tag is essential for responsive design on mobile devices?",
        options: [
          '<meta charset="UTF-8">',
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          '<meta http-equiv="refresh" content="30">',
          '<meta name="mobile-optimized" content="true">',
        ],
        answer:
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      },
      {
        question:
          "What layout system is often combined with media queries for responsive design?",
        options: ["CSS Grid", "Tables", "Inline styles", "CSS Sprites"],
        answer: "A) CSS Grid",
      },
      {
        question: "True or False: Media queries only work on modern browsers.",
        options: ["True", "False"],
        answer: "False",
      },
    ],
  },
  {
    title: "Mastering JavaScript Fundamentals & DOM Interactions",
    description:
      "This tutorial covers essential JavaScript concepts including variables, functions, arrays, and objects, followed by powerful DOM manipulation techniques and modern ES6+ features like arrow functions, destructuring, and template literals. Ideal for building dynamic and interactive web pages with clean and efficient code.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment4.png",
    category: "Web Development",
    chapters: tutorial4_chapters,
    quiz: [
      {
        question:
          "What is the main difference between let and const in JavaScript?",
        options: [
          "let allows reassigning values, while const does not.",
          "const allows reassigning values, while let does not.",
          "let is used for numbers, while const is used for strings.",
          "Both let and const behave the same way.",
        ],
        answer: "let allows reassigning values, while const does not.",
      },
      {
        question:
          "Which of the following is the correct way to declare an array in JavaScript?",
        options: [
          'let fruits = "Apple", "Banana", "Cherry";',
          'let fruits = ["Apple", "Banana", "Cherry"];',
          'let fruits = ("Apple", "Banana", "Cherry");',
          "let fruits = {Apple, Banana, Cherry};",
        ],
        answer: 'let fruits = ["Apple", "Banana", "Cherry"];',
      },
      {
        question:
          "How would you access the second item in an array called fruits?",
        options: ["fruits[2]", "fruits[1]", "fruits.get(1)", "fruits(2)"],
        answer: "fruits[1]",
      },
      {
        question:
          "What is the purpose of the return keyword in a JavaScript function?",
        options: [
          "It stops the function from executing.",
          "It outputs a value from the function to be used elsewhere.",
          "It defines the parameters of the function.",
          "It declares a new variable in the function.",
        ],
        answer: "It outputs a value from the function to be used elsewhere.",
      },
      {
        question: "What does the addEventListener() method do in JavaScript?",
        options: [
          "It adds an event handler to an element.",
          "It removes an event handler from an element.",
          "It creates a new event.",
          "It updates the content of an element.",
        ],
        answer: "It adds an event handler to an element.",
      },
      {
        question:
          "What is the correct syntax for an arrow function that adds two numbers?",
        options: [
          "const sum = (a, b) -> a + b;",
          "const sum = (a, b) => a + b;",
          "const sum = (a, b) = a + b;",
          "const sum = a, b => a + b;",
        ],
        answer: "const sum = (a, b) => a + b;",
      },
      {
        question:
          "In JavaScript, how do you clone an array using the spread operator?",
        options: [
          "let newArr = arr.clone();",
          "let newArr = arr.copy();",
          "let newArr = [...arr];",
          "let newArr = arr[];",
        ],
        answer: "let newArr = [...arr];",
      },
      {
        question:
          "What is the default behavior of events in JavaScript (e.g., a click event)?",
        options: [
          "Events bubble up from the target element.",
          "Events are captured from the outermost element.",
          "Events do not propagate.",
          "Events are ignored unless specified.",
        ],
        answer: "Events bubble up from the target element.",
      },
      {
        question:
          "How can you destructure an object to get the name property in JavaScript?",
        options: [
          "const name = person.name;",
          "const { name } = person;",
          'const name = person["name"];',
          "All of the above.",
        ],
        answer: "All of the above.",
      },
    ],
  },
  {
    title:
      "Mastering Git & GitHub: A Developer’s Guide to Version Control and Collaboration",
    description:
      "This comprehensive tutorial introduces developers to Git and GitHub—essential tools for version control and collaborative development. Through three focused chapters, you’ll learn how to set up Git, manage repositories, and track changes. You’ll also explore effective collaboration techniques using workflows, pull requests, and forking. Finally, you’ll gain hands-on experience with branching, merging, and resolving merge conflicts, empowering you to contribute confidently to any development project.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment5.png",
    category: "Web Development",
    chapters: tutorial5_chapters,
    quiz: [
      {
        question: "What is the primary purpose of Git?",
        options: [
          "To edit code",
          "To manage and track changes in code",
          "To deploy code to production",
          "To test code",
        ],
        answer: "To manage and track changes in code",
      },
      {
        question: "How do you clone a repository from GitHub using Git?",
        options: [
          "git push https://github.com/username/repo-name.git",
          "git fetch https://github.com/username/repo-name.git",
          "git clone https://github.com/username/repo-name.git",
          "git pull https://github.com/username/repo-name.git",
        ],
        answer: "git clone https://github.com/username/repo-name.git",
      },
      {
        question:
          "Which command is used to initialize a Git repository in your project folder?",
        options: ["git start", "git init", "git create", "git setup"],
        answer: "git init",
      },
      {
        question: "What does the command git commit -m 'message' do?",
        options: [
          "Saves your file to the repository without any changes.",
          "Stages your changes for the first time.",
          "Adds a message to the changes you made.",
          "Pushes your changes to GitHub.",
        ],
        answer: "Adds a message to the changes you made",
      },
      {
        question:
          "Which command is used to check the status of your files in Git?",
        options: ["git status", "git log", "git check", "git track"],
        answer: "git status",
      },
      {
        question:
          "How do you connect your local Git repository to a GitHub repository?",
        options: [
          "git remote add origin [URL]",
          "git connect [URL]",
          "git add remote [URL]",
          "git link [URL]",
        ],
        answer: "git remote add origin [URL]",
      },
      {
        question: "What does a 'merge conflict' occur in Git?",
        options: [
          "When you try to push to GitHub without being logged in.",
          "When you make changes to a file, and Git cannot determine which version to keep.",
          "When a branch is not found.",
          "When you commit an empty file.",
        ],
        answer:
          "When you make changes to a file, and Git cannot determine which version to keep",
      },
      {
        question:
          "What should you do when resolving a merge conflict in a file?",
        options: [
          "Ignore the conflict and continue.",
          "Manually choose the correct code or combine the changes and delete conflict markers.",
          "Delete the conflicting file.",
          "Use the git resolve command.",
        ],
        answer:
          "Manually choose the correct code or combine the changes and delete conflict markers",
      },
      {
        question: "Which command is used to create a new branch in Git?",
        options: [
          "git create branch branch-name",
          "git branch branch-name",
          "git checkout -b branch-name",
          "git switch branch branch-name",
        ],
        answer: "git checkout -b branch-name",
      },
      {
        question:
          "What is the difference between forking and cloning a repository?",
        options: [
          "Forking creates a local copy, while cloning creates a copy under your GitHub account.",
          "Forking creates a copy under your GitHub account, while cloning creates a local copy on your computer.",
          "Cloning and forking are the same in Git.",
          "Forking is for pulling requests, and cloning is for pushing changes.",
        ],
        answer:
          "Forking creates a copy under your GitHub account, while cloning creates a local copy on your computer",
      },
      {
        question: "What is the purpose of a Pull Request (PR) on GitHub?",
        options: [
          "To ask GitHub to push your changes to a live server.",
          "To ask a repository maintainer to review and merge your changes into the main project.",
          "To pull your code to a different repository.",
          "To clone a repository to your local machine.",
        ],
        answer:
          "To ask a repository maintainer to review and merge your changes into the main project",
      },
    ],
  },
  {
    title: "Foundations of React: From Components to Routing",
    description:
      "This tutorial is designed to guide you through the core concepts of React, one of the most popular JavaScript libraries for building user interfaces. You’ll start with the basics—components, JSX, rendering, and nesting. Then, you’ll dive into dynamic UI development using Props, State, and Hooks. Finally, you’ll learn how to set up a React application, structure your project, implement routing, and enable navigation. By the end, you’ll have a strong foundation to build powerful and scalable React apps.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment6.png",
    category: "Web Development",
    chapters: tutorial6_chapters,
    quiz: [
      {
        question: "What is React?",
        options: [
          "A programming language",
          "A JavaScript library for building user interfaces",
          "A database management system",
          "A web server",
        ],
        answer: "A JavaScript library for building user interfaces",
      },
      {
        question: "What is the main purpose of components in React?",
        options: [
          "To handle the backend logic",
          "To create reusable UI elements",
          "To handle server requests",
          "To define styles for the app",
        ],
        answer: "To create reusable UI elements",
      },
      {
        question: "What is JSX in React?",
        options: [
          "JavaScript extended with HTML-like syntax",
          "A JavaScript function for making API calls",
          "A special style language for React apps",
          "A method for database connections",
        ],
        answer: "JavaScript extended with HTML-like syntax",
      },
      {
        question: "How do you declare a functional component in React?",
        options: [
          "function Component() { return 'Hello World'; }",
          "const Component = function() { return <h1>Hello World</h1>; }",
          "const Component = () => { return <h1>Hello World</h1>; }",
          "All of the above",
        ],
        answer: "const Component = () => { return <h1>Hello World</h1>; }",
      },
      {
        question: "What does the useState() hook do in React?",
        options: [
          "It is used to manage global state",
          "It defines a state variable and provides a function to update it",
          "It initializes props for a component",
          "It manages the lifecycle of a component",
        ],
        answer:
          "It defines a state variable and provides a function to update it",
      },
      {
        question:
          "How do you pass data from a parent component to a child component in React?",
        options: [
          "Using state",
          "Using props",
          "Using functions",
          "Using hooks",
        ],
        answer: "Using props",
      },
      {
        question:
          "Which of the following is used to navigate between pages in a React app?",
        options: [
          "window.location",
          "<a> tags",
          "react-router-dom package",
          "history.pushState",
        ],
        answer: "react-router-dom package",
      },
      {
        question: "How do you set up a new React project using Vite?",
        options: [
          "npm create vite@latest my-app --template react",
          "npx create-react-app my-app",
          "npm init vite my-app",
          "npx react-create-app my-app",
        ],
        answer: "npm create vite@latest my-app --template react",
      },
      {
        question: "What does the useEffect() hook do in React?",
        options: [
          "It performs side effects such as fetching data after the component mounts",
          "It stores state variables",
          "It is used for conditional rendering of components",
          "It allows for event handling",
        ],
        answer:
          "It performs side effects such as fetching data after the component mounts",
      },
      {
        question: "Which of the following is NOT a feature of React?",
        options: [
          "Component-based architecture",
          "Reusable UI elements",
          "Automatic handling of HTTP requests",
          "Virtual DOM for fast updates",
        ],
        answer: "Automatic handling of HTTP requests",
      },
    ],
  },
  {
    title: "Backend Development with Express.js: From Servers to APIs",
    description:
      "This tutorial introduces the fundamentals of backend web development using Express.js. You’ll begin with core concepts like servers, HTTP, and middleware. Then, you’ll dive into building and handling APIs, learning how to manage requests, responses, and validation. Finally, you'll explore advanced routing techniques to create clean, scalable, and maintainable server-side applications. Perfect for developers looking to master backend development with Node.js and Express.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment7.png",
    category: "Web Development",
    chapters: tutorial7_chapters,
    quiz: [
      {
        question: "What is a server?",
        options: [
          "A system that processes requests and responds with resources",
          "A client that sends requests to a server",
          "A programming language used for backend development",
          "A web browser",
        ],
        answer: "A system that processes requests and responds with resources",
      },
      {
        question: "Which HTTP method is used to retrieve data from a server?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: "GET",
      },
      {
        question: "What does the HTTP status code 404 indicate?",
        options: [
          "Successful request",
          "Resource not found",
          "Server-side error",
          "Resource created",
        ],
        answer: "Resource not found",
      },
      {
        question:
          "Which of the following is a framework that simplifies backend development with Node.js?",
        options: ["React.js", "Express.js", "Angular.js", "Vue.js"],
        answer: "Express.js",
      },
      {
        question: "What is the purpose of middleware in Express.js?",
        options: [
          "To define routes",
          "To handle requests and modify the request/response objects",
          "To run SQL queries",
          "To listen for server errors",
        ],
        answer: "To handle requests and modify the request/response objects",
      },
      {
        question: "How can you install Express.js in a Node.js project?",
        options: [
          "npm install express",
          "npm init express",
          "install express",
          "yarn express",
        ],
        answer: "npm install express",
      },
      {
        question:
          "Which HTTP method is used to create new resources on the server?",
        options: ["GET", "PUT", "POST", "DELETE"],
        answer: "POST",
      },
      {
        question:
          "In Express.js, how do you define a route that listens for GET requests on the root URL ('/')?",
        options: [
          "app.get('/', function(req, res) {...})",
          "app.listen('/', function(req, res) {...})",
          "app.route('/', function(req, res) {...})",
          "app.on('/', function(req, res) {...})",
        ],
        answer: "app.get('/', function(req, res) {...})",
      },
      {
        question:
          "What is the purpose of the express.json() middleware in an Express app?",
        options: [
          "To serve static files",
          "To parse incoming JSON data",
          "To log request details",
          "To handle errors",
        ],
        answer: "To parse incoming JSON data",
      },
      {
        question:
          "Which HTTP method is used to update an existing resource on the server?",
        options: ["POST", "PUT", "DELETE", "PATCH"],
        answer: "PUT",
      },
    ],
  },
  {
    title:
      "Mastering MongoDB with Node.js: From Fundamentals to Full-Stack Integration",
    description:
      "This tutorial provides a practical guide to working with MongoDB and Mongoose in Node.js applications. You'll begin by understanding the core concepts of MongoDB and how it differs from traditional SQL databases. Then, you'll dive into Mongoose to manage schemas and perform CRUD operations efficiently. Finally, you’ll learn how to structure and integrate MongoDB into a real Node.js project using the MVC pattern, including hands-on API testing with Postman. Ideal for developers looking to build robust and scalable backend systems.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment8.png",
    category: "Web Development",
    chapters: tutorial8_chapters,
    quiz: [
      {
        question: "What is MongoDB?",
        options: [
          "A relational database",
          "A NoSQL database",
          "A programming language",
          "A web framework",
        ],
        answer: "A NoSQL database",
      },
      {
        question: "What data format does MongoDB store data in?",
        options: ["XML", "JSON", "BSON", "CSV"],
        answer: "BSON",
      },
      {
        question: "Which of the following is NOT a feature of MongoDB?",
        options: [
          "Schema-less structure",
          "High performance for read/write operations",
          "Requires predefined schema",
          "Scalability across many servers",
        ],
        answer: "Requires predefined schema",
      },
      {
        question: "In MongoDB, what is the equivalent of a table in SQL?",
        options: ["Collection", "Document", "Field", "Row"],
        answer: "Collection",
      },
      {
        question:
          "What is the purpose of Mongoose in MongoDB integration with Node.js?",
        options: [
          "It is used for MongoDB schema validation.",
          "It connects Node.js to a MongoDB database.",
          "It provides an easy way to work with the MongoDB shell.",
          "It defines routes for the database.",
        ],
        answer: "It connects Node.js to a MongoDB database.",
      },
      {
        question:
          "Which command is used to connect to a MongoDB database using Mongoose in Node.js?",
        options: [
          "mongoose.connect()",
          "mongo.connect()",
          "mongoose.link()",
          "db.connect()",
        ],
        answer: "mongoose.connect()",
      },
      {
        question: "How do you create a new document in MongoDB using Mongoose?",
        options: ["User.save()", "User.create()", "User.add()", "Both A and B"],
        answer: "Both A and B",
      },
      {
        question:
          "Which method is used to fetch all users from the MongoDB database using Mongoose?",
        options: [
          "User.getAll()",
          "User.findAll()",
          "User.find()",
          "User.get()",
        ],
        answer: "User.find()",
      },
      {
        question: "What does the .updateOne() method in Mongoose do?",
        options: [
          "It updates all documents in the collection.",
          "It updates a single document matching the specified criteria.",
          "It creates a new document.",
          "It deletes a document.",
        ],
        answer: "It updates a single document matching the specified criteria.",
      },
      {
        question:
          "What is the function of the controllers/ folder in the suggested project structure?",
        options: [
          "Defines the database connection",
          "Stores MongoDB schema definitions",
          "Contains logic for handling routes",
          "Contains static files for the frontend",
        ],
        answer: "Contains logic for handling routes",
      },
    ],
  },
];

export const WebDevelopmentCourse = {
  title: "Web Development",
  description:
    "This comprehensive web development course takes you from the fundamentals to advanced topics, equipping you with the skills to build modern, responsive, and full-stack web applications. Starting with an introduction to web development and the roles of frontend, backend, and full-stack developers, you’ll dive into essential technologies including HTML, CSS, and JavaScript. You’ll master HTML structure and semantic markup, style visually engaging layouts with CSS (including Flexbox and Grid), and bring interactivity to your pages using JavaScript and the DOM. The course also covers powerful tools like Git and GitHub for version control and collaboration. Advancing further, you’ll explore React for building dynamic UIs, Express.js for backend development, and MongoDB with Mongoose for database integration. By the end, you’ll have a solid foundation to create scalable, efficient, and user-friendly web applications.",
  thumbnail:
    "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/WebDevelopment.png",
  category: "Web Development",
  path: [],
  tutorials: WebDevelopmentTutorials,
};
