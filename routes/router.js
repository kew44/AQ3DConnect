const { Router } = require('express');
const router = Router();
const handler = require('../handlers/MainHandler');

router.get('/', handler.login);
router.post('/', handler.auth);
router.get('/index', handler.index);

module.exports = router;
