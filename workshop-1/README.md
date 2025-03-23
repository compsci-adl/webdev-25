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

Alternatively, you can use the VS Code extension **Live Server** and open the file with Live Server, which will open the file in your browser.

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

## JavaScript
