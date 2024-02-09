const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const port = 3000;
const userRouter = require(__dirname + "/routes/user.js");
const sessionRouter = require(__dirname + "/routes/session.js");
const characterRouter = require(__dirname + "/routes/character.js");

app.use(cors());

// establish routes
app.use("/api/user", userRouter);
app.use("/api/session", sessionRouter);
app.use("/api/character", characterRouter);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
