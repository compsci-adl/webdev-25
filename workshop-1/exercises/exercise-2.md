# Exercise 2: CSS

In this exercise, you'll learn how to style the provided HTML file using CSS to create a visually appealing and functional webpage about Steve.

## Step 1: Basic Setup

1. Create a new CSS file named `styles.css` in the same directory as your HTML file
2. Add a link to the CSS file in the `<head>` section of your HTML file

```html
<link rel="stylesheet" href="styles.css" />
```

3. Start with a CSS reset to ensure consistent styling across browsers

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

## Step 2: Body Styling

1. Set the font family for the entire page
2. Add line height for readability
3. Set background color
4. Add padding and max-width for better spacing

```css
body {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	line-height: 1.6;
	color: #333;
	background-color: #f5f5f5;
	padding: 20px;
	max-width: 800px;
	margin: 0 auto;
}
```

## Step 3: Heading Styles

1. Style the main title (h1)

```css
h1 {
	color: #5d4037;
	font-size: 2.5rem;
	margin-bottom: 20px;
	padding-bottom: 10px;
	border-bottom: 3px solid #7cb342;
	text-align: center;
}
```

2. Style the section headings (h2)

```css
h2 {
	color: #33691e;
	font-size: 1.8rem;
	margin-top: 25px;
	margin-bottom: 15px;
	padding-left: 10px;
	border-left: 4px solid #5d4037;
}
```

## Step 4: Paragraph Styling

1. Add margin and font size for the about section

```css
#about {
	margin-bottom: 20px;
	font-size: 1.1rem;
}
```

## Step 5: Link Styling

Style the links in the content section

```css
a {
	color: #1565c0;
	text-decoration: none;
}
a:hover {
	color: #0d47a1;
	text-decoration: underline;
}
```

## Step 6: List Styling

Style the lists for better visual hierarchy

```css
h2 + ul {
	background-color: #e0e0e0;
	padding: 15px;
	border-radius: 5px;
	list-style-type: none;
}
```

Use flex to center the content and add spacing between items

```css
#content {
	display: flex;
	justify-content: center;
	gap: 1rem;
}
```

## Step 7: Image Styling

Style the image to fit responsively

```css
img {
	max-width: 100%;
	height: auto;
	border: 3px solid #5d4037; /* Brown border */
	border-radius: 5px;
	margin: 10px 0;
}
```

## Step 8: Responsive Design

Add media queries for smaller screens

```css
@media (max-width: 600px) {
	body {
		padding: 10px;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}
}
```

## Final Step: Testing and Validation

1. Open the HTML file (or use live server) in a web browser to see your styled page
2. Test responsiveness by resizing the browser window
3. Validate your CSS using a CSS validator tool

## Tips for Success

- Use consistent naming conventions for your CSS classes and IDs
- Comment your code to explain complex styles
- Use browser developer tools to inspect elements and debug your CSS
- Consider using CSS variables for consistent color management
- Test your design on multiple devices and browsers

By following these steps, you've created a well-structured, visually appealing webpage about Steve with proper styling for different content elements and responsive design considerations.
