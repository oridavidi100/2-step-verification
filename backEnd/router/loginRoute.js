const express = require('express');
const { login } = require('../contrroler/login');
const router = express.Router();
router.get('/login/:username/:password', login);
module.exports = router;
