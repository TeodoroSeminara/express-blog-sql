// CRUD
// Import express
const express = require("express");

// Setting router
const router = express.Router();

// Importo file
const recipeControllers = require("../controllers/recipeControllers");

// index -GET
router.get("/", recipeControllers.index);

// Show -GET
router.get("/:id", recipeControllers.show);

// Store - Create - POST
router.post("/", recipeControllers.store);

// Update - PUT
router.put("/:id", recipeControllers.update);

// Modify - PATCH
router.patch("/:id", recipeControllers.modify);

// Destroy - DELETE
router.delete("/:id", recipeControllers.destroy);

module.exports = router