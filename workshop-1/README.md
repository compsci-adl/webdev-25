# Workshop 1: Introduction to Web Development

Learn to build websites with HTML, CSS, and JavaScript!

---

## HTML

### What is HTML?

Hypertext Markup Language (HTML) is a markup language (in simple terms, a language that defines structure) for displaying content in a web browser. Basically every website you visit uses HTML.

### HTML elements

Elements in HTML are the building blocks of our web page. It provides the skeleton, the backbone of how our page will be structured and the content it will contain.

Here is an example of a simple HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

Paste this snippet of HTML into the provided `index.html` file and view the file in your browser. You can do this by copying the absolute file path of the file and pasting it into your browser's address bar.

Alternatively, you can use the VS Code extension **Live Server** and open the file with Live Server, which will open the file in your browser. This also saves you from having to refresh the page on update manually as Live Server automatically does it for you!

You should see the text "Hello, World!" on the page.


When creating your HTML files, it's important to name your main file `index.html`. This is a convention used by web servers to serve the default page when a directory is accessed. For example, when you visit `http://example.com/`, the server looks for a file named `index.html` in the root directory to display.

But what do these elements mean? Let's break it down.

### Starting your HTML document

HTML elements are defined by tags. Tags are typically composed of pairs, with an opening tag and a closing tag, and some content within them. However, you may also encounter "self-closing" tags which only consist of one tag. Tags can also have *attributes*, but we'll get to those later.

Here are examples of tags:

```html
<head></head>
<body></body>
<h1>Hello, World!</h1>
<p>Lorem ipsum</p>
<meta />
<img />
```

Now, let's explain the HTML snippet from before.

```html
<!DOCTYPE html>
```

All HTML documents must start with a `<!DOCTYPE>` declaration. Technically speaking, this is *not* an HTML tag, but rather, it is to tell the browser that the document type is HTML. Note that the `<!DOCTYPE>` declaration is *not* case sensitive.

```html
<html lang="en">
</html>
```

The `<html>` tag denotes the root of the document. It contains all of the other HTML elements (apart from the DOCTYPE declaration). You can also see the `lang="en"` in the `<html>` tag. This is called an *attribute*, and the `lang` attribute tells the browser what the language of the web page is (in this case, English).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Content -->
</head>
<body>
    <!-- Content -->
</body>
</html>
```

Within the `<html>` tag, we have the `<head>` and `<body>` tags. The `<head>` tag stores the metadata for the document, and **is not displayed on the web page**. On the other hand, the `<body>` tag stores the content that will be displayed on the web page.

```html
<head>
    <meta charset="UTF-8">
    <title>My Title</title>
</head>
```

If we first look at the `<head>` tag, we see a `<meta>` tag, which is a self-closing tag that tells the browser that the page is encoded using the UTF-8 character set. We also have the `<title>` tag, which sets the text that is shown in the browser tab.

```html
<body>
    <h1>Hello, World!</h1>
</body>
```

Finally, in the `<body>` tag, we have a Heading 1 tag, or `<h1>`. You'll learn more about this next.

### Text

#### Headings
HTML provides six levels of headings, from `<h1>` (the largest) to `<h6>` (the smallest):

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>
```

#### Paragraphs
Paragraphs are defined using the `<p>` tag:
```html
<p>This is a paragraph of text.</p>
```

### Lists
HTML supports two types of lists:

#### Ordered Lists
An ordered list `<ol>` displays items `<li>` with numbers:

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

#### Unordered Lists
An unordered list `<ul>` displays items `<li>` with bullet points:
```html
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>
```

### Links and Images

#### Links
Links are created using the `<a>` tag. The `href` attribute specifies the URL of the page the link goes to:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

#### Images
Images are embedded using the `<img>` tag. The `src` attribute specifies the path to the image, and the `alt` attribute provides alternative text for the image:

```html
<img src="path/to/image.jpg" alt="Description of image">
```

### Inputs

HTML forms allow users to input data. The `<input>` tag is used to create various types of input fields:

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```
### Divs and Spans

#### Divs
The `<div>` tag is a block-level element used to group other elements together. It is often used for styling purposes with CSS or for scripting with JavaScript.

```html
<div>
    <h2>Title</h2>
    <p>Some content goes here.</p>
</div>
```

#### Spans
The `<span>` tag is an inline element used to group text or other inline elements. It is typically used for styling a part of the text.

```html
<p>This is a <span style="color: red;">red</span> word.</p>
```

### Block and Inline Elements

#### Block Elements
Block elements take up the full width available and start on a new line. Examples include `<div>`, `<h1>`, `<p>`, and `<section>`.

```html
<div>
    <h2>Block Element Example</h2>
    <p>This is a block element.</p>
</div>
```

#### Inline Elements
Inline elements only take up as much width as necessary and do not start on a new line. Examples include `<span>`, `<a>`, and `<img>`.

```html
<p>This is an <span>inline</span> element.</p>
```

### Semantic HTML

Semantic HTML introduces meaning to the web page rather than just presentation. These elements help with accessibility, SEO, and code readability.

```html
<header>
    <h1>Page Title</h1>
</header>

<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<main>
    <section>
        <h2>Section Title</h2>
        <p>Some content goes here.</p>
    </section>
    
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here.</p>
    </article>
</main>

<footer>
    <p>&copy; 2025 Your Name</p>
</footer>
```

These elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`) provide a clearer structure for your HTML documents.

---

## CSS

### What is CSS?

CSS stands for Cascading Style Sheets. It can be thought of as how we customise the appearance of the basic structures defined in the corresponding HTML sheet.

### Where to put CSS?
There are many styles that can be used to customise the HTML content. Like key-value pairs, a "property" followed by its value.

```css
color: yellow;
```

### Selector

#### Class
Given to multiple tags, meaning multiple elements can be selected.

```css
.class {
	/* Your styles go here */
}
```

#### ID
Meant to be unique, meaning you should only assign one element to a particular id.

```css
#id {
	/* Your styles go here */
}
```

#### Element
Applies the styling to all elements of the same type.

```css
div {
	/* Your styles go here */
}
```

### Colours

```css
h1 {
	color: white; /* Text colour */
	background: #fb2c36; /* Background styling, including colour */
    background-color: rgb(0, 0, 0); /* Only background colour */
}
```

Types:

- Named colours
- Hexadecimal colours
- RGB colours
- HSL

### Styling Text

CSS allows you to style text in various ways to enhance the appearance of your web page. Here are some common properties used to style text:

- `color`: Sets the color of the text.
- `font-weight`: Sets the weight (or boldness) of the text.
- `font-size`: Sets the size of the text.
- `font-family`: Sets the font of the text.
- `text-align`: Sets the horizontal alignment of the text.
- `text-decoration`: Adds decoration to the text, such as underline.
- `font-style`: Sets the style of the text, such as italic.

```css
p {
	font-weight: bold;
	font-size: 16px;
	font-family: Arial, sans-serif;
	text-align: center;
	text-decoration: underline;
	fonts-style: italic;
	/* etc. */
}
```

### Box Model

The box model is a fundamental concept that describes how elements are structured and displayed on a web page. It consists of four main components:

1. **Content**: The actual content of the element, such as text or images.
2. **Padding**: The space between the content and the border. Padding is transparent and can be used to create space inside the element.
3. **Border**: The border surrounds the padding (if any) and the content. It can be styled with different colors, widths, and styles.
4. **Margin**: The space outside the border. Margins are transparent and can be used to create space between elements.

You can use CSS properties to control each part of the box model:

- `width` and `height`: Set the size of the content area.
- `padding`: Adds space inside the element, around the content.
- `border`: Adds a border around the padding and content.
- `margin`: Adds space outside the border, separating the element from others.

Example:

```css
div {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

In this example, the `div` element will have a content area of 200px by 100px, 20px of padding, a 5px solid black border, and a 10px margin around it.

### Layouts

- Flex: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
- Grid: <https://css-tricks.com/snippets/css/complete-guide-grid/>

### Read More

- Naming conventions: <https://getbem.com/naming/>
- CSS Tricks: <https://css-tricks.com/>
- Tailwind CSS: <https://tailwindcss.com/>

## JavaScript

### What is JavaScript?

JavaScript is a programming language (not the same as java) that allows you to create dynamic and interactive web content. It is an essential part of web development, alongside HTML and CSS. Built into most browsers and runs client side.

### The Console

The console is a tool that developers use to log information as their code runs. You can access the console in most web browsers by pressing `F12` or `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (Mac).

```javascript
console.log("Hello, World!");
```

### Variables
Variables are used to store data that can be used and manipulated throughout your code. You can declare variables using `var`, `let`, or `const`. Variables declared with `const` cannot be changed.

```javascript
let name = "John";
const age = 30;
var isStudent = true;
```

### Control Flows
Control flow statements allow you to control the execution of your code based on certain conditions.

#### For Loops
```javascript
for (let i = 0; i < 5; i++>) {
    console.log(i);
}
```

#### While Loops
```javascript
while (i < 5) {
    console.log(i);
    i++;
}
```

#### If-Else Statements
```javascript
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}
```

#### Switch Statements
```javascript
switch (day) {
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Weekday";
}

console.log(dayName);
```

### Functions
Functions are reusable blocks of code that perform a specific task. You can define functions using the `function` keyword or as arrow functions.
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice"));
```

### Promises
Promises are used to handle asynchronous operations in JavaScript. They are like a guaranteed that something will happen in the future. Promises can either be pending, fulfilled, or rejected.

```javascript
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation was successful.");
    } else {
        reject("Operation failed.");
    }
});
```

Promises can perform actions based on the result of the promise.

```javascript
promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
```

### Fetch API
The Fetch API goes well with promises, fetched can return a promise that you can wait for.
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

We will discuss more about promises and the Fetch API in our Intro to React workshop.
