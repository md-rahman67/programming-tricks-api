const tricks = [
    {
        category: "JavaScript",
        title: "Swap two variables without a temporary variable",
        trick: "[a, b] = [b, a]",
        description: "Swap the values of two variables using array destructuring."
    },
    {
        category: "JavaScript",
        title: "Remove duplicate values from an array",
        trick: "[...new Set(arr)]",
        description: "Set automatically keeps unique values. Spread converts it back into an array."
    },
    {
        category: "JavaScript",
        title: "Use optional chaining",
        trick: "user?.address?.city",
        description: "Access nested object properties safely without getting an error if an intermediate value is null or undefined."
    },
    {
        category: "JavaScript",
        title: "Set a default value",
        trick: "const name = userName || 'Guest'",
        description: "Use Guest when userName is a falsy value. Use ?? instead if you only want to handle null or undefined."
    },
    {
        category: "JavaScript",
        title: "Merge two objects",
        trick: "const merged = { ...obj1, ...obj2 }",
        description: "Combine properties from two objects. If both have the same key, the second object's value wins."
    },
    {
        category: "JavaScript",
        title: "Get the last array element",
        trick: "arr.at(-1)",
        description: "Access the last item without calculating the array length."
    },
    {
        category: "JavaScript",
        title: "Create a range of numbers",
        trick: "Array.from({ length: 5 }, (_, i) => i + 1)",
        description: "Creates an array containing numbers from 1 to 5."
    },
    {
        category: "JavaScript",
        title: "Count occurrences of an item",
        trick: "arr.filter(item => item === value).length",
        description: "Counts how many times a particular value appears in an array."
    },
    {
        category: "JavaScript",
        title: "Convert an array into a string",
        trick: "arr.join(', ')",
        description: "Combines array elements into one string separated by commas."
    },
    {
        category: "JavaScript",
        title: "Generate a random array item",
        trick: "arr[Math.floor(Math.random() * arr.length)]",
        description: "Picks one random item from a non-empty array."
    },
    {
        category: "JavaScript",
        title: "Remove falsy values",
        trick: "arr.filter(Boolean)",
        description: "Removes false, 0, empty strings, null, undefined and NaN from an array."
    },
    {
        category: "JavaScript",
        title: "Check whether every item passes a condition",
        trick: "arr.every(num => num > 0)",
        description: "Returns true only when every array item is greater than zero."
    },
    {
        category: "JavaScript",
        title: "Find an item in an array",
        trick: "users.find(user => user.id === 5)",
        description: "Returns the first matching item from an array, or undefined if no match is found."
    },
    {
        category: "React",
        title: "Update an array in state",
        trick: "setItems(prev => [...prev, newItem])",
        description: "Add a new item while keeping the previous items. Avoid changing the original state array directly."
    },
    {
        category: "React",
        title: "Remove an item from state",
        trick: "setItems(prev => prev.filter(item => item.id !== id))",
        description: "Creates a new array without the item whose ID matches the given ID."
    },
    {
        category: "React",
        title: "Toggle a boolean state",
        trick: "setIsOpen(prev => !prev)",
        description: "Switches a true value to false and a false value to true."
    },
    {
        category: "React",
        title: "Show content conditionally",
        trick: "{isLoggedIn && <Dashboard />}",
        description: "Displays Dashboard only when isLoggedIn is true."
    },
    {
        category: "React",
        title: "Give a default prop value",
        trick: "function Welcome({ name = 'Guest' })",
        description: "Uses Guest when the name prop is missing or undefined."
    },
    {
        category: "React",
        title: "Handle input changes",
        trick: "onChange={e => setName(e.target.value)}",
        description: "Updates state whenever the user types into an input field."
    },
    {
        category: "React",
        title: "Render a list",
        trick: "{items.map(item => <p key={item.id}>{item.name}</p>)}",
        description: "Creates an element for each item. Use a stable unique key to help React track list items."
    },
    {
        category: "CSS",
        title: "Center an element using Flexbox",
        trick: "display: flex; justify-content: center; align-items: center;",
        description: "Centers child elements horizontally and vertically inside a flex container."
    },
    {
        category: "CSS",
        title: "Create a responsive grid",
        trick: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",
        description: "Automatically fits as many columns as possible while keeping each column at least 200px wide."
    },
    {
        category: "CSS",
        title: "Add smooth scrolling",
        trick: "html { scroll-behavior: smooth; }",
        description: "Makes navigation to page sections scroll smoothly."
    },
    {
        category: "CSS",
        title: "Make an image fit its container",
        trick: "img { width: 100%; height: 100%; object-fit: cover; }",
        description: "Fills the image container without stretching the image. Some parts may be cropped."
    },
    {
        category: "HTML",
        title: "Open a link in a new tab safely",
        trick: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>',
        description: "Opens a link in a new tab and prevents the new page from accessing the original page through window.opener."
    },
    {
        category: "HTML",
        title: "Make an input mandatory",
        trick: '<input type="email" required />',
        description: "Prevents a form from being submitted when the required input is empty or invalid."
    },
    {
        category: "Node.js",
        title: "Read environment variables",
        trick: "process.env.PORT",
        description: "Accesses a value stored in your environment, such as the server port."
    },
    {
        category: "Node.js",
        title: "Import a built-in module",
        trick: "const path = require('path')",
        description: "Loads Node.js's path module to work with file and folder paths."
    },
    {
        category: "Git",
        title: "Check changed files",
        trick: "git status",
        description: "Shows which files are new, modified, deleted, or ready to be committed."
    },
    {
        category: "Git",
        title: "Save your changes",
        trick: "git add . && git commit -m 'your message'",
        description: "Stages your current changes and saves them in a Git commit."
    }
];

module.exports = tricks;