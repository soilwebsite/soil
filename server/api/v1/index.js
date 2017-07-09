var express = require('express');
var router = express.Router();

router.use('/products', require('./products'));
router.use('/tags', require('./tags'));
router.post('/subscription', require('./subscription'));

module.exports = router;
