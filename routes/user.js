const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const connectDB = require("../mysql.js");

router.post("/", (req, res) => {
	const name = req.body.name;
	connectDB.query(
		`SELECT * FROM waldo_db.users WHERE username = "${name}"`,
		(err, results) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(`The answer is ${JSON.stringify(results)}`);
		}
	);
});

module.exports = router;
