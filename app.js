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

// establish mysql connection
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

connection.query("SELECT 1 + 1 AS solution", (err, results) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`The answer is ${results[0].solution}`);
});

// establish routes
app.use("/api/user", userRouter);
app.use("/api/session", sessionRouter);
app.use("/api/character", characterRouter);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
