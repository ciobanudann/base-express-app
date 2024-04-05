const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
}
)


const PORT = 3001;


const run = () => {
	app.listen(PORT, () => {
		console.log("Server is running on port", PORT)
	})
}

run()
