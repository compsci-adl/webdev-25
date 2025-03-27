# Exercise 2: CSS

In this exercise, you'll learn how to use CSS to style the personal profile website we made in Exercise 1.

## Set Up

Create a new CSS file named `styles.css` in the same directory as your HTML file and add a link to the CSS file in the `<head>` section of your HTML file:

```html
<head>
    ...
    <link rel="stylesheet" href="styles.css">
</head>
```

We have now linked our CSS file to our HTML file.

## Getting Started

Let's clean up some of the default styling that comes with HTML by doing a CSS reset to ensure consistent styling across browsers. In the `styles.css` file, use the `*` selector to select all elements on the document. Set all `padding` and `margins` to `0` and add `box-sizing: border-box;`.

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

You should notice that the spacing of the HTML page has now changed.

## Exercises

### 1. Body Styling

Let's improve the styling of the body by changing the font family for the entire page, adding line height for readability, setting the text and background color, and adding padding, margin and max-width for better spacing.

<details>
  <summary>Font Family Hint</summary>

  Which of the following font stacks is best for readability and modern appearance?
  
  - `'Times New Roman', serif`
  - `'Courier New', monospace`
  - `'Arial', sans-serif`
  - `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'`
</details>

<details>
  <summary>Line Height Hint</summary>

  What is the purpose of increasing line height?
  
  - Makes text smaller
  - Improves readability by increasing spacing between lines
  - Changes the font style
  - Makes text bold
</details>

<details>
  <summary>Background Color Hint</summary>

  Which of the following background colors provides a soft, neutral tone for readability?
  
  - `#000000`
  - `#ff0000`
  - `#f5f5f5`
  - `#00ff00`
</details>

<details>
  <summary>Padding & Max-Width Hint</summary>

  Why do we add padding and max-width to the body?
  
  - To make text unreadable
  - To center content and provide spacing around text
  - To remove whitespace
  - To make text smaller
</details>

### 1. Heading Styles

Let's style the main and section headings by using distinct colors, sizes, and borders to create a clear visual hierarchy and improve readability.

<details>
  <summary>Main Heading Color Hint</summary>

  What does the color `#5d4037` represent in the main heading (`h1`)?
  
  - A shade of **blue**
  - A shade of **brown**
  - A shade of **green**
  - A shade of **red**
</details>

<details>
  <summary>Main Heading Border Hint</summary>

  Why is there a `border-bottom: 3px solid #7cb342;` applied to `h1`?
  
  - To add a **decorative underline effect**
  - To increase the **font size**
  - To make the text **bold**
  - To **remove spacing** between elements
</details>

<details>
  <summary>Section Heading Color Hint</summary>

  What is the color `#33691e` used for in `h2`?
  
  - The **text color** of section headings  
  - The **background color** of section headings  
  - The **border color** of section headings  
  - The **padding color** of section headings  
</details>

<details>
  <summary>Section Heading Border Hint</summary>

  What effect does `border-left: 4px solid #5d4037;` have on `h2`?
  
  - Adds a **vertical left border** for emphasis  
  - Changes the **text alignment**  
  - Increases the **font size**  
  - Makes the heading **italic**
</details>

<details>
  <summary>Font Size Hint</summary>

  Why is the `font-size` of `h1` larger than `h2`?
  
  - To create a **clear visual hierarchy**  
  - To **make h2 more readable**  
  - To **align h1 to the left**  
  - To **change the font style**
</details>

### 3. Paragraph Styling
Now it's time to add a margin and font size for the about section.

<details>
  <summary>Hint</summary>

  The `#about` selector is targeting which type of element?  

  - An **ID** (`#about`)  
  - A **class** (`.about`)  
  - An **HTML element** (`about`)  
  - A **pseudo-class** (`:about`)  
</details>

### 4. Link Styling
Let's only show the underline when we hover on the link and adjust the link colour.

<details>
  <summary>Hint</summary>

  Which pseudo-class is used to change the link's appearance when hovered?  

  - `:focus`  
  - `:active`  
  - `:hover`  
  - `::after`  
</details>

### 5. List Styling
Now we'll style the lists for better visual hierarchy. We can use flex to center the content and add spacing between items.

<details>
  <summary>Adjacent Sibling Selector Hint</summary>

  What does `h2 + ul` target in CSS?  

  - **All `ul` elements on the page**  
  - **Only the first `ul` that directly follows an `h2`**  
  - **Every `ul` inside an `h2`**  
  - **All `h2` and `ul` elements**  
</details>

<details>
  <summary>Flexbox Layout Hint</summary>

  What does `display: flex;` do for the `#content` section?  

  - **Aligns child elements in a flexible layout**  
  - **Changes text color**  
  - **Adds padding to the container**  
  - **Increases the font size**  
</details>

<details>
  <summary>Justify Content Hint</summary>

  What does `justify-content: center;` do inside `#content`?  

  - **Centers child elements horizontally**  
  - **Aligns child elements to the left**  
  - **Adds space between elements vertically**  
  - **Changes text alignment**  
</details>

<details>
  <summary>Gap Property Hint</summary>

  What does `gap: 1rem;` control in `#content`?  

  - **Spacing between child elements**  
  - **Padding inside the container**  
  - **Margin around the container**  
  - **Border thickness**  
</details>


### 6. Image Styling

The image seems too big, let's fix it by making the image adjust its size responsively and add some spacing and a decorative border.

<details>
  <summary>Responsive Image Hint</summary>

  What does `max-width: 100%;` do for images?  

  - **Makes the image scale down within its container**  
  - **Increases the image size beyond its original dimensions**  
  - **Fixes the image width to 100px**  
  - **Removes the image border**  
</details>

### 7. Responsive Design
Since websites can be accessed on anything, including desktops and mobile phones, we need to make sure our content works on all screen sizes. To do this, we can use media queries to adjust styles for smaller screens.

<details>
  <summary>Media Query Hint</summary>

  What does the `@media (max-width: 600px)` rule do?  

  - **Applies styles only when the screen width is 600px or smaller**  
  - **Changes the background color of the page**  
  - **Adds a border around the body**  
  - **Increases font sizes on smaller screens**  
</details>

<details>
  <summary>Responsive Font Size Hint</summary>

  Why do we adjust the font size inside the media query for smaller screens?  

  - **To make the text more readable on smaller devices**  
  - **To change the background color**  
  - **To make text bold**  
  - **To increase padding on larger screens**  
</details>
