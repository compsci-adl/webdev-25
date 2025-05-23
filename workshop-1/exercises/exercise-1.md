# Exercise 1: HTML

We will create a simple personal profile website using HTML.

## Set Up

Open a text editor of your choice, create a new empty directory, and navigate to it. Then create a file called `index.html`.

```shell
mkdir workshop-1/exercises/code
cd workshop-1/exercises/code
touch index.html
```

Copy the following boilerplate into `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

> Alternatively, if you're using VS Code, you can quickly insert the boilerplate by typing `!` into the empty HTML file.

## Getting Started

To name our page, we will use a `heading 1` tag (`<h1></h1>`). This tag indicates the main topic on a web page. Insert this heading between the `<body>` tags and write your name between the tags.

```html
...
<body>
    <h1>Steve</h1>
</body>
...
```

To view your webpage's new content, open the directory containing the HTML file with your computer's file explorer and manually click on the `index.html` file. This should open a blank page in your default browser. You should see a large heading with your name. To see updates to your HTML file, refresh the page.

> Alternatively, you can download the Live Server VS Code extension, right-click `index.html` in your file tree in VS Code, and then click "Open with Live Server". This prevents you from having to refresh the page on update as Live Server automatically updates the content for you!

## Exercises

### 1. Create an About Me section

Create a subheading under the title and add a short description under this. Consider which tags would be the most appropriate for this.

<details>
  <summary>Subheading Hint</summary>

  Which of the following tags is most suitable for the subheading:
  
  - `<p>`
  - `<span>`
  - `<h1>`
  - `<h2>`
  - `<h3>`

</details>

<details>
  <summary>Description Hint</summary>

  Which of the following tags is most suitable for this description:
  
  - `<p>`
  - `<span>`
  - `<h2>`
  - `<section>`
  - `<description>`
</details>

### 2. Sections

Next, create sections for hobbies, skills, and one fun fact. Add a relevant image to your fun fact and list your hobbies and skills in an unordered list. Give each section a heading 2.

<details>
  <summary>Hint</summary>

  Use the `<img>` tag and the `<ul>` and `<li>` tags for the list.
</details>

### 3. Content List

Create a content list with quick links to each section (hobbies, skills, and fun fact) right below your bio.

<details>
  <summary>Hint</summary>

  Use `<a>` tags and `<ul>` and `<li>` tags.
</details>

