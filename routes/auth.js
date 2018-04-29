const express = require('express')
const router = express.Router()
const ctrl = require('../controller/auth')

router.post('/', ctrl.createUser)
router.delete('/', ctrl.deleteUser)

module.exports = router
