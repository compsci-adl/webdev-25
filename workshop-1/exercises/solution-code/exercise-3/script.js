window.onload = function () {
      // Play audio file on page load
      let audio = new Audio("i-am-steve.mp3");
      audio.play();

      // Date of Minecraft's release (November 18, 2011)
      const releaseDate = new Date("2011-11-18");

      // Current date
      const currentDate = new Date();

      // Calculate the difference in time (in milliseconds)
      const timeDifference = currentDate - releaseDate;

      // Convert time difference to years and days
      const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const yearsSinceRelease = Math.floor(totalDays / 365);
      const remainingDays = totalDays % 365;

      // Display the result
      const displayElement = document.getElementById("daysSinceRelease");
      displayElement.textContent = `Time since Minecraft was released: ${yearsSinceRelease} years and ${remainingDays} days`;
};

// Change all instances of "Steve" to "Jack Black" when the button is clicked
document.getElementById("changeName").addEventListener("click", function () {
    // Change name in the header
    document.querySelector("h1").innerText = document
        .querySelector("h1")
        .innerText.replace("Steve", "Jack Black");

    // Change name in paragraphs
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.innerText = paragraph.innerText.replace(/Steve/g, "Jack Black");
    });

    // Change name in the title
    document.title = document.title.replace("Steve", "Jack Black");
});
