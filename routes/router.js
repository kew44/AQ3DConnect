const { Router } = require('express');
const router = Router();
const handler = require('../handlers/MainHandler');

router.get('/', handler.index);
router.get('/login', handler.login);

module.exports = router;