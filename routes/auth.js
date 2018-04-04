const express = require('express')
const router = express.Router()
const ctrl = require('../controller/auth')

router.post('/', ctrl.createUser)

module.exports = router;
