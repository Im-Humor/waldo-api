const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3000;
const userRouter = require(__dirname + "/routes/user.js");
const sessionRouter = require(__dirname + "/routes/session.js");
const characterRouter = require(__dirname + "/routes/character.js");

app.use(cors());
app.use(express.json());

// establish mysql connection
const connectDB = require("./mysql.js");

connectDB.connect((err) => {
	if (err) {
		console.error("Error connecting to mySQL");
		return;
	}
	console.log("Connected to mySQL");
});

connectDB.query("SHOW tables", (err, results) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`The answer is ${JSON.stringify(results)}`);
});

// establish routes
app.use("/api/user", userRouter);
app.use("/api/session", sessionRouter);
app.use("/api/character", characterRouter);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
