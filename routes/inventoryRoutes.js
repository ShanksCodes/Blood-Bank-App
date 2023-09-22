const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWare");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//Add inventory || post
router.post("/create-inventory", authMiddleWare, createInventoryController);

//Get all blood records
router.get("/get-inventory", authMiddleWare, getInventoryController);

module.exports = router;
