const express = require('express');
const control = require('../controllers/auth-controller');

const router = express.Router();


router.get("/",control.home)
router.get("/register",control.register);
router.get("/login",control.login);


module.exports = router;