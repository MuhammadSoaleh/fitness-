const express = require('express');
const control = require('../controllers/auth-controller');

const router = express.Router();


router.get("/",control.home)
router.post("/register",control.register);
router.post("/login",control.login);


module.exports = router;