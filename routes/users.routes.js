const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');



router.use('/users/register', userController.userRegisterController);
router.use('./users/login', userController.userLoginController);


module.exports = router;