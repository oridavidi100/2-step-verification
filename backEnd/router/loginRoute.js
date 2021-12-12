const express = require('express');
const { login, updateVerify } = require('../contrroler/login');
const { verify } = require('../contrroler/verify');

const router = express.Router();
router.get('/twoPass/:username/:num', updateVerify);
router.get('/verify/:secret/:num', verify);
router.get('/:username/:password', login);
module.exports = router;
