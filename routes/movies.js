const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js")

router.get("/movies", moviesController.findMovies)
router.get("/movies/:id", moviesController.findByid)
router.post("/movies", moviesController.postMovies)
router.delete("/movies/:id", moviesController.deleteMovies)

module.exports = router;