const { Router } = require('express');
const router = Router();
const handler = require('../handlers/MainHandler');

router.get('/', handler.login);
router.post('/login', handler.auth);
router.get('/index', handler.index);
router.get('/signup', handler.signup);
router.post('/signup', handler.signupAuth);

module.exports = router;
