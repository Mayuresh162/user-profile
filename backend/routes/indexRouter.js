const express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

//user
router.get('/getuser', userController.getUsers);
router.post('/adduser', userController.addUser);
router.post('/edituser', userController.editUser);
router.delete('/deleteuser', userController.deleteUser);

module.exports = router;
