var express = require('express');
var router = express.Router();

router.use('/products', require('./products'));
router.use('/tags', require('./tags'));
router.use('/subscription', require('./subscription')); // TODO

module.exports = router;
