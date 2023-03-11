const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js")


router.get("/users", usersController.findUsers)
router.get("/users/:id", usersController.findByid)
router.delete("/users/:id", usersController.deleteUsers)

module.exports = router;