const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.get("/", (req, res) => {
	res.send({status: "alive"});
}
)


const PORT = 3001;


const run = () => {
	app.listen(PORT, () => {
		console.log("Server is running on Ubuntu for port", PORT)
	})
}

run()
