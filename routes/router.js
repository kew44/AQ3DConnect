const { Router } = require('express');
const router = Router();
const handler = require('../handlers/MainHandler');

router.get('/', handler.login);
router.get('/index', handler.index);

module.exports = router;
