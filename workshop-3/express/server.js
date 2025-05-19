const express = require("express");
const app = express();

// Define a simple GET route for /
app.get("/", (req, res) => {
	res.send("Hello from Express!");
});

// Define a simple GET route for /duck
app.get("/duck", (req, res) => {
	res.send("Quack!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
