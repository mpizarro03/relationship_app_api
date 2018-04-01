const express = require('express')
const router = express.Router()
const ctrl = require('../controller/users')



router.get('/:id', ctrl.getUser)

module.exports = router;
