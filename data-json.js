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
    },

{
    category: "JavaScript",
    title: "Convert a string to an array of characters",
    trick: "Array.from('hello')",
    description: "Converts a string into an array where each character becomes an item."
},
{
    category: "JavaScript",
    title: "Check if a value is null or undefined",
    trick: "value == null",
    description: "Checks for both null and undefined using loose equality."
},
{
    category: "JavaScript",
    title: "Use nullish coalescing",
    trick: "const name = userName ?? 'Guest'",
    description: "Uses Guest only when userName is null or undefined, not when it is an empty string or zero."
},
{
    category: "JavaScript",
    title: "Get a random integer between two numbers",
    trick: "Math.floor(Math.random() * (max - min + 1)) + min",
    description: "Generates a random whole number between min and max, including both limits."
},
{
    category: "JavaScript",
    title: "Capitalize the first letter",
    trick: "str.charAt(0).toUpperCase() + str.slice(1)",
    description: "Converts the first character to uppercase and keeps the rest of the string unchanged."
},
{
    category: "JavaScript",
    title: "Check whether a string contains text",
    trick: "str.includes('hello')",
    description: "Returns true if the string contains the given text."
},
{
    category: "JavaScript",
    title: "Repeat a string multiple times",
    trick: "'ha'.repeat(3)",
    description: "Repeats a string the specified number of times. The result here is hahaha."
},
{
    category: "JavaScript",
    title: "Remove spaces from both ends",
    trick: "str.trim()",
    description: "Removes whitespace from the beginning and end of a string."
},
{
    category: "JavaScript",
    title: "Replace text in a string",
    trick: "str.replace('old', 'new')",
    description: "Replaces the first matching occurrence of old with new."
},
{
    category: "JavaScript",
    title: "Split a sentence into words",
    trick: "sentence.split(' ')",
    description: "Breaks a sentence into an array using spaces as separators."
},
{
    category: "JavaScript",
    title: "Sort numbers in ascending order",
    trick: "arr.sort((a, b) => a - b)",
    description: "Sorts numbers from smallest to largest. Without a compare function, sort treats values as strings."
},
{
    category: "JavaScript",
    title: "Sort numbers in descending order",
    trick: "arr.sort((a, b) => b - a)",
    description: "Sorts numbers from largest to smallest."
},
{
    category: "JavaScript",
    title: "Calculate the sum of an array",
    trick: "arr.reduce((total, num) => total + num, 0)",
    description: "Adds all numbers in an array and returns their total."
},
{
    category: "JavaScript",
    title: "Find the first matching item",
    trick: "arr.find(item => item.active)",
    description: "Returns the first item whose active property is truthy."
},
{
    category: "JavaScript",
    title: "Check if at least one item matches",
    trick: "arr.some(num => num > 10)",
    description: "Returns true if at least one array item is greater than 10."
},
{
    category: "JavaScript",
    title: "Create a shallow copy of an array",
    trick: "const copy = [...arr]",
    description: "Creates a new array with the same elements. Nested objects are not deeply copied."
},
{
    category: "JavaScript",
    title: "Create a shallow copy of an object",
    trick: "const copy = { ...user }",
    description: "Copies the top-level properties of an object into a new object."
},
{
    category: "JavaScript",
    title: "Get the current timestamp",
    trick: "Date.now()",
    description: "Returns the current time in milliseconds since January 1, 1970."
},
{
    category: "JavaScript",
    title: "Convert JSON text into an object",
    trick: "JSON.parse(jsonString)",
    description: "Parses valid JSON text and converts it into a JavaScript value."
},
{
    category: "JavaScript",
    title: "Convert an object into JSON text",
    trick: "JSON.stringify(user)",
    description: "Converts a JavaScript object into a JSON string."
},
{
    category: "JavaScript",
    title: "Check the type of a value",
    trick: "typeof value",
    description: "Returns the basic type of a value, such as string, number, boolean or undefined."
},
{
    category: "JavaScript",
    title: "Check if a number is an integer",
    trick: "Number.isInteger(value)",
    description: "Returns true if the value is an integer number."
},
{
    category: "JavaScript",
    title: "Convert a value to a number safely",
    trick: "Number.isNaN(Number(value))",
    description: "Checks whether converting a value to a number produces NaN."
},
{
    category: "JavaScript",
    title: "Get unique values from multiple arrays",
    trick: "[...new Set([...arr1, ...arr2])]",
    description: "Combines two arrays and removes duplicate values."
},
{
    category: "JavaScript",
    title: "Get the keys and values of an object",
    trick: "Object.entries(user)",
    description: "Returns an array of key-value pairs from an object's own enumerable properties."
},
{
    category: "JavaScript",
    title: "Freeze an object",
    trick: "Object.freeze(user)",
    description: "Prevents changes to an object's existing properties at the top level."
},
{
    category: "JavaScript",
    title: "Get today's date in ISO format",
    trick: "new Date().toISOString()",
    description: "Returns the current date and time in a standard ISO string format."
},
{
    category: "JavaScript",
    title: "Use a ternary operator",
    trick: "const status = age >= 18 ? 'Adult' : 'Minor'",
    description: "Writes a simple if-else condition in one line."
},
{
    category: "JavaScript",
    title: "Destructure object properties",
    trick: "const { name, age } = user",
    description: "Extracts selected properties from an object into variables."
},
{
    category: "JavaScript",
    title: "Destructure array values",
    trick: "const [first, second] = arr",
    description: "Stores the first two array elements in separate variables."
},
{
    category: "React",
    title: "Update an object in state",
    trick: "setUser(prev => ({ ...prev, name: 'Alex' }))",
    description: "Updates one object property while preserving the other properties."
},
{
    category: "React",
    title: "Run an effect only when a value changes",
    trick: "useEffect(() => { console.log(count) }, [count])",
    description: "Runs the effect after the initial render and when count changes."
},
{
    category: "React",
    title: "Run code once after the initial render",
    trick: "useEffect(() => { console.log('Mounted') }, [])",
    description: "Runs the effect after the initial render. Development Strict Mode may run an extra setup cycle."
},
{
    category: "React",
    title: "Create a reference without causing a re-render",
    trick: "const inputRef = useRef(null)",
    description: "Stores a value between renders without triggering a re-render when it changes."
},
{
    category: "React",
    title: "Access an input using a ref",
    trick: "inputRef.current.focus()",
    description: "Places the cursor inside an input when the ref is attached to it."
},
{
    category: "React",
    title: "Memoize a calculated value",
    trick: "const result = useMemo(() => calculate(items), [items])",
    description: "Reuses the previous calculation result until the dependencies change."
},
{
    category: "React",
    title: "Create a reusable click handler",
    trick: "const handleClick = () => setCount(prev => prev + 1)",
    description: "Keeps click logic in a separate function that can be passed to an event handler."
},
{
    category: "React",
    title: "Pass a function to a child component",
    trick: "<Child onUpdate={handleUpdate} />",
    description: "Allows a child component to call a function provided by its parent."
},
{
    category: "React",
    title: "Prevent a form from refreshing the page",
    trick: "e.preventDefault()",
    description: "Stops the browser's default form submission behavior."
},
{
    category: "React",
    title: "Render an empty fallback",
    trick: "{items.length === 0 ? <p>No items</p> : <List />}",
    description: "Shows a message when the array is empty and a list otherwise."
},
{
    category: "React",
    title: "Give a component a default state",
    trick: "const [count, setCount] = useState(0)",
    description: "Creates a state variable with an initial value of zero."
},
{
    category: "React",
    title: "Pass data through props",
    trick: "<Profile name='Alex' age={22} />",
    description: "Sends name and age values from a parent component to a child component."
},
{
    category: "React",
    title: "Use a fragment",
    trick: "<><Header /><Main /><Footer /></>",
    description: "Groups multiple JSX elements without adding an extra HTML element."
},
{
    category: "React",
    title: "Give a component a loading state",
    trick: "{loading ? <p>Loading...</p> : <Content />}",
    description: "Displays a loading message until the loading value becomes false."
},
{
    category: "React",
    title: "Update state using a previous value",
    trick: "setCount(prev => prev + 1)",
    description: "Uses the previous state value to calculate the next state correctly."
},
{
    category: "React",
    title: "Handle multiple input fields",
    trick: "setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))",
    description: "Updates the matching property in form state using the input's name."
},
{
    category: "React",
    title: "Create a custom hook",
    trick: "function useCounter() { const [count, setCount] = useState(0); return { count, setCount }; }",
    description: "Creates reusable state logic that can be shared by multiple components."
},
{
    category: "CSS",
    title: "Add a shadow to a box",
    trick: "box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);",
    description: "Adds a soft shadow around an element."
},
{
    category: "CSS",
    title: "Make text bold",
    trick: "font-weight: 700;",
    description: "Sets the text to a bold font weight."
},
{
    category: "CSS",
    title: "Make a circular image",
    trick: "border-radius: 50%; object-fit: cover;",
    description: "Turns a square image into a circle while keeping its proportions."
},
{
    category: "CSS",
    title: "Change cursor on hover",
    trick: "cursor: pointer;",
    description: "Shows a hand cursor when the user moves over an interactive element."
},
{
    category: "CSS",
    title: "Hide an element",
    trick: "display: none;",
    description: "Hides an element and removes its space from the page layout."
},
{
    category: "CSS",
    title: "Hide an element but keep its space",
    trick: "visibility: hidden;",
    description: "Makes an element invisible while keeping its space in the layout."
},
{
    category: "CSS",
    title: "Make a sticky header",
    trick: "position: sticky; top: 0;",
    description: "Keeps an element near the top while scrolling within its scroll container."
},
{
    category: "CSS",
    title: "Prevent text selection",
    trick: "user-select: none;",
    description: "Prevents users from selecting text inside an element."
},
{
    category: "CSS",
    title: "Add a transition effect",
    trick: "transition: all 0.3s ease;",
    description: "Animates changes to supported CSS properties over 0.3 seconds."
},
{
    category: "CSS",
    title: "Make a button change color on hover",
    trick: "button:hover { background-color: black; color: white; }",
    description: "Changes the button's background and text color when the mouse hovers over it."
},
{
    category: "CSS",
    title: "Make an element full screen",
    trick: "width: 100vw; height: 100vh;",
    description: "Makes an element as wide and tall as the viewport."
},
{
    category: "CSS",
    title: "Keep an element inside its container",
    trick: "box-sizing: border-box;",
    description: "Includes padding and border within the declared width and height."
},
{
    category: "CSS",
    title: "Make text responsive",
    trick: "font-size: clamp(1rem, 2vw, 2rem);",
    description: "Changes font size based on viewport width while keeping it within minimum and maximum limits."
},
{
    category: "CSS",
    title: "Create a gradient background",
    trick: "background: linear-gradient(to right, blue, purple);",
    description: "Creates a smooth color transition from blue to purple."
},
{
    category: "CSS",
    title: "Prevent an image from overflowing",
    trick: "max-width: 100%; height: auto;",
    description: "Keeps an image from becoming wider than its parent while preserving its proportions."
},
{
    category: "HTML",
    title: "Add a telephone link",
    trick: '<a href="tel:+911234567890">Call us</a>',
    description: "Creates a clickable link that can open the device's calling app."
},
{
    category: "HTML",
    title: "Add an email link",
    trick: '<a href="mailto:hello@example.com">Email us</a>',
    description: "Opens the user's default email application with a new email."
},
{
    category: "HTML",
    title: "Allow multiple file selection",
    trick: '<input type="file" multiple />',
    description: "Allows users to select more than one file."
},
{
    category: "HTML",
    title: "Add a placeholder to an input",
    trick: '<input type="text" placeholder="Enter your name" />',
    description: "Shows hint text inside an empty input field."
},
{
    category: "HTML",
    title: "Open a link in the same tab",
    trick: '<a href="https://example.com">Visit</a>',
    description: "Navigates to the linked page in the current browser tab by default."
},
{
    category: "HTML",
    title: "Add a tooltip",
    trick: '<button title="Click to save">Save</button>',
    description: "Provides extra information when users hover over an element in browsers that show title tooltips."
},
{
    category: "HTML",
    title: "Make a video show controls",
    trick: '<video src="video.mp4" controls></video>',
    description: "Displays browser controls for playing, pausing and adjusting video."
},
{
    category: "HTML",
    title: "Load an image lazily",
    trick: '<img src="photo.jpg" loading="lazy" alt="Photo" />',
    description: "Allows the browser to delay loading an image until it is near the visible area."
},
{
    category: "HTML",
    title: "Create a dropdown",
    trick: '<select><option>React</option><option>Node.js</option></select>',
    description: "Creates a dropdown menu with selectable options."
},
{
    category: "HTML",
    title: "Open a number input",
    trick: '<input type="number" min="1" max="100" />',
    description: "Creates a numeric input with minimum and maximum allowed values."
},
{
    category: "Node.js",
    title: "Get the current folder path",
    trick: "__dirname",
    description: "Returns the absolute path of the folder containing the current CommonJS file."
},
{
    category: "Node.js",
    title: "Get the current file path",
    trick: "__filename",
    description: "Returns the absolute path of the current CommonJS file."
},
{
    category: "Node.js",
    title: "Read a file",
    trick: "fs.readFile('file.txt', 'utf8', callback)",
    description: "Reads a file asynchronously and provides its contents through a callback."
},
{
    category: "Node.js",
    title: "Write data to a file",
    trick: "fs.writeFile('file.txt', 'Hello', callback)",
    description: "Writes data to a file asynchronously, replacing its previous contents if the file exists."
},
{
    category: "Node.js",
    title: "Create a folder",
    trick: "fs.mkdirSync('uploads', { recursive: true })",
    description: "Creates a folder and any missing parent folders synchronously."
},
{
    category: "Node.js",
    title: "Get a file extension",
    trick: "path.extname('photo.png')",
    description: "Returns the extension of a file path, such as .png."
},
{
    category: "Node.js",
    title: "Create a path safely",
    trick: "path.join(__dirname, 'uploads', 'photo.png')",
    description: "Joins folder and file names using the correct path separator for the operating system."
},
{
    category: "Node.js",
    title: "Get command-line arguments",
    trick: "process.argv",
    description: "Provides an array containing the arguments passed when starting a Node.js process."
},
{
    category: "Node.js",
    title: "Stop a Node.js process",
    trick: "process.exit(0)",
    description: "Stops the current Node.js process with exit code zero, indicating success."
},
{
    category: "Node.js",
    title: "Create a simple Express route",
    trick: "app.get('/users', (req, res) => res.json(users))",
    description: "Creates a GET endpoint that sends users as a JSON response."
},
{
    category: "Node.js",
    title: "Read URL parameters in Express",
    trick: "req.params.id",
    description: "Accesses a route parameter such as the id in a route like /users/:id."
},
{
    category: "Node.js",
    title: "Read query parameters in Express",
    trick: "req.query.search",
    description: "Accesses query string values such as search in /tricks?search=react."
},
{
    category: "Node.js",
    title: "Send a JSON response in Express",
    trick: "res.json({ message: 'Success' })",
    description: "Sends a JavaScript object as a JSON HTTP response."
},
{
    category: "Node.js",
    title: "Handle a missing Express route",
    trick: "res.status(404).json({ message: 'Not found' })",
    description: "Sends a 404 status code with a JSON message when a resource is not found."
},
{
    category: "Git",
    title: "See commit history",
    trick: "git log --oneline",
    description: "Displays recent commits in a short and readable format."
},
{
    category: "Git",
    title: "Create a new branch",
    trick: "git switch -c feature-name",
    description: "Creates a new branch and switches to it."
},
{
    category: "Git",
    title: "Switch branches",
    trick: "git switch main",
    description: "Moves your working directory to the main branch."
},
{
    category: "Git",
    title: "See differences in files",
    trick: "git diff",
    description: "Shows unstaged changes made to tracked files."
},
{
    category: "Git",
    title: "Undo staged changes",
    trick: "git restore --staged file.js",
    description: "Removes a file from the staging area without deleting its changes."
},
{
    category: "Git",
    title: "Download remote changes",
    trick: "git pull",
    description: "Fetches and integrates changes from the remote branch you are tracking."
},
{
    category: "Git",
    title: "Upload commits to GitHub",
    trick: "git push",
    description: "Sends your local commits to the configured remote repository."
},
{
    category: "Git",
    title: "Check remote repositories",
    trick: "git remote -v",
    description: "Shows the remote repository names and their URLs."
},
{
    category: "Git",
    title: "Temporarily save changes",
    trick: "git stash",
    description: "Stores your uncommitted tracked changes temporarily so you can work on something else."
},
{
    category: "Git",
    title: "Restore the latest stash",
    trick: "git stash pop",
    description: "Applies the latest stashed changes and removes that stash entry."
},
{
    category: "npm",
    title: "Install project dependencies",
    trick: "npm install",
    description: "Installs the dependencies listed in package.json and updates node_modules."
},
{
    category: "npm",
    title: "Install a package",
    trick: "npm install express",
    description: "Installs Express and adds it to the project's dependencies."
},
{
    category: "npm",
    title: "Install a development dependency",
    trick: "npm install nodemon --save-dev",
    description: "Installs nodemon as a development-only dependency."
},
{
    category: "npm",
    title: "Start a project script",
    trick: "npm run dev",
    description: "Runs the dev script defined in package.json."
},
{
    category: "npm",
    title: "See installed packages",
    trick: "npm list --depth=0",
    description: "Displays the top-level packages installed in the current project."
},
{
    category: "npm",
    title: "Check for outdated packages",
    trick: "npm outdated",
    description: "Shows which installed packages have newer versions available."
},
{
    category: "VS Code",
    title: "Open the command palette",
    trick: "Ctrl + Shift + P",
    description: "Opens the command palette to search for and run VS Code commands."
},
{
    category: "VS Code",
    title: "Open the terminal",
    trick: "Ctrl + `",
    description: "Opens or closes the integrated terminal in VS Code."
},
{
    category: "VS Code",
    title: "Quickly format code",
    trick: "Shift + Alt + F",
    description: "Formats the current file using the configured formatter."
},
{
    category: "VS Code",
    title: "Search across project files",
    trick: "Ctrl + Shift + F",
    description: "Finds matching text across files in your project."
},
{
    category: "VS Code",
    title: "Rename a variable everywhere",
    trick: "F2",
    description: "Renames a symbol and updates its references when supported by the language extension."
},
{
    category: "VS Code",
    title: "Add multiple cursors",
    trick: "Alt + Click",
    description: "Places additional cursors where you click so you can edit multiple locations together."
},
{
    category: "VS Code",
    title: "Duplicate a line",
    trick: "Shift + Alt + Down",
    description: "Duplicates the current line or selected lines below."
},
{
    category: "VS Code",
    title: "Move a line up or down",
    trick: "Alt + Up / Down",
    description: "Moves the current line or selected lines up or down."
},
{
    category: "VS Code",
    title: "Comment or uncomment a line",
    trick: "Ctrl + /",
    description: "Toggles a line comment for the current line or selected lines."
},
{
    category: "VS Code",
    title: "Quickly open a file",
    trick: "Ctrl + P",
    description: "Searches for and opens a file by its name."
}

];

module.exports = tricks;