# Exercise 3: JavaScript

In this exercise, you'll learn how to add interactivity to the personal profile website we made in Exercise 2.

## Set Up

Create a new JavaScript file named `script.js` in the same directory as your HTML file and add a script tag to the JavaScript file at the end of the `<body>` section of your HTML file.

```html
<body>
    ...
    <script src="script.js"></script>
<body>
```

We have now linked our JS file to our HTML file.

Why not in the `<head>` section? Placing the `<script>` tag at the end of the `<body>` ensures that the HTML content is fully loaded before the JavaScript code runs. This prevents errors caused by trying to access DOM elements that haven't been rendered yet.

Also, copy the `i-am-steve.mp3` file to your directory.

## Getting Started
In `index.html`, add the paragraph and button at the end of the `<body>` section:

```html
<body>
    ...
    <p id="daysSinceRelease"></p>
    <button id="changeName">Change Name to Jack Black</button>
<body>
```

Add the following to `styles.css`:
```css
#changeName {
    background-color: #7cb342;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px auto;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    text-align: center;
}

#changeName:hover {
    background-color: #33691e;
}

#daysSinceRelease {
    font-size: 1.2rem;
    color: #5d4037;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
}
```

## Exercises

### 1. Play an Audio File on Page Load
In `script.js`, we'll add code to play the `i-am-steve.mp3` audio file when the page loads. Note you may have to enable audio autoplay in your browser for this to work.

<details>
  <summary>Play Audio on Page Load Hint</summary>

  What does the `window.onload` event do in this code?

  - Executes the function as soon as the page finishes loading  
  - Executes the function every time the page is resized  
  - Runs the function only when the user clicks a button  
  - Stops the audio from playing after it starts  
</details>

<details>
  <summary>Audio Object Hint</summary>

  What is the purpose of the `new Audio('i-am-steve.mp3')` line?

  - Creates a new audio object and links it to the 'i-am-steve.mp3' file  
  - Plays the audio immediately  
  - Sets the volume of the audio  
  - Loads the image file for the page  
</details>

### 2. Calculate Years and Days Since A Date
We'll calculate how many years and days have passed since Minecraft was released on November 18, 2011.

<details>
  <summary>Days Since Date Hint</summary>

  What is the purpose of the `const releaseDate = new Date("2011-11-18")` line?

  - Creates a new date object representing the release date of Minecraft (November 18, 2011)  
  - Calculates the number of days since Minecraft's release  
  - Formats the release date for display in the browser  
  - Sets the current date to the release date of Minecraft  

</details>

<details>
  <summary>Time Difference Calculation Hint</summary>

  How do you calculate the difference in time between the current date and Minecraft's release date?

  - Subtracts the release date from the current date, returning the difference in milliseconds  
  - Use the `Date.now()` method to get the difference in time  
  - Call the `.getTime()` method on both dates and compares the results  
  - Add the current date to the release date  
</details>

<details>
  <summary>Convert Time Difference to Days Hint</summary>

  How is the time difference converted into days?

  - By dividing the time difference (in milliseconds) by the number of milliseconds in a day (1000 * 60 * 60 * 24)  
  - By multiplying the difference in time by the number of seconds in a day  
  - By using the `.toLocaleDateString()` method on the time difference  
  - By using the `.getDay()` method on the difference  
</details>

<details>
  <summary>Displaying the Result Hint</summary>

  Why does the code use `displayElement.textContent` instead of `innerHTML`?

  - To safely update the text content of an element without risking HTML injection  
  - To allow HTML tags to be added to the content  
  - To prevent text from being displayed and hide the element  
  - To remove the element from the DOM  
</details>


### 3. DOM Manipulation
Let's change all instances of "Steve" to "Jack Black" when we click on the button.

<details>
  <summary>Element Selection Hint</summary>

  What does `document.getElementById('changeName')` do?

  - Selects the HTML element with the ID `changeName` so that you can interact with it.
  - Changes the text inside the element with the ID `changeName`.
  - Selects all elements with the same class as `changeName`.
  - Waits for the page to load before selecting the element.
</details>

<details>
  <summary>Event Listener Hint</summary>

  What does `addEventListener('click', function())` do in this context?

  - Attaches a function that will run when the user clicks on the element with ID `changeName`.
  - Sets the content of the element with ID `changeName` to "click".
  - Waits for the page to load and automatically changes the text.
  - Listens for keyboard events, not clicks.
</details>

<details>
  <summary>Text Replacement in the Header Hint</summary>

  What does `document.querySelector('h1').innerText.replace('Steve', 'Jack Black')` do?

  - Finds the first `h1` element and replaces the word "Steve" with "Jack Black" in its text content.
  - Finds all `h1` elements and changes their text to "Jack Black".
  - Replaces the entire content of the `h1` element with "Steve".
  - Changes the font style of the `h1` element to match "Jack Black".
</details>

<details>
  <summary>Looping through Paragraphs Hint</summary>

  What is the purpose of `let paragraphs = document.querySelectorAll('p'); paragraphs.forEach(paragraph => {...})`?

  - Selects all `p` elements on the page and performs the text replacement for each paragraph.
  - Loops through all paragraphs and removes them from the page.
  - Replaces the paragraphs with new `h1` elements.
  - Applies a new style to the paragraphs without changing the text.
</details>

<details>
  <summary>Text Replacement in Paragraphs Hint</summary>

  What does `paragraph.innerText = paragraph.innerText.replace(/Steve/g, 'Jack Black');` do?

  - Replaces all occurrences of "Steve" with "Jack Black" in each paragraph's text.
  - Removes the word "Steve" from all paragraphs.
  - Adds the word "Steve" to each paragraph.
  - Changes the color of the word "Steve" to "Jack Black".
</details>
