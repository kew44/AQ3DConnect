const { Router } = require('express');
const router = Router();
const handler = require('../handlers/MainHandler');

router.get('/', handler.login);
router.post('/login', handler.auth);
router.get('/index', handler.index);
router.get('/signup', handler.signup);
router.post('/signup', handler.signupAuth);
router.post('/addItem', handler.addItem);
module.exports = router;
//export router module
