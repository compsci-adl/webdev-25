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

### Inputs

### Page Layout

---

TODO: introduce web servers later, talk about importance of naming it 'index.html'

## CSS

## JavaScript
