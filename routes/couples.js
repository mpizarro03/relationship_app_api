const express = require('express')
const router = express.Router()
const ctrl = require('../controller/couples')

router.post('/', ctrl.createCouple)
router.delete('/', ctrl.deleteCouple)


module.exports = router
