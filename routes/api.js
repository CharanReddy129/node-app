const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/greet', apiController.greet);

module.exports = router;
