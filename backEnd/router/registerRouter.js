const { addNewUser } = require('../contrroler/register');
const express = require('express');
const router = express.Router();
router.post('/', addNewUser);
module.exports = router;
