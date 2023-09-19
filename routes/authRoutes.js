const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleWare = require("../middlewares/authMiddleWare");

const router = express.Router();

//routes

//Register || POST
router.post('/register', registerController);

//Login || POST
router.post('/login', loginController);

//Get current user || GET
router.get('/current-user', authMiddleWare, currentUserController )

module.exports = router;