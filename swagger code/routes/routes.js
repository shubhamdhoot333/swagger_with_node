const express = require('express');
const router = express.Router();
const { welcome} = require('../controller/usercontroller.js');

router.post('/welcome',  welcome);

module.exports = router;
