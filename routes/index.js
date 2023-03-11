const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies.js")
const usersRouter = require("./user.js")

router.use(moviesRouter);
router.use(usersRouter);

module.exports = router;