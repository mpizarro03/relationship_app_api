const express = require('express')
const router = express.Router()
const ctrl = require('../controller/feelings')

router.get('/users/:id/feelings/:type', ctrl.getFeelings)

router.post('/users/:id/feelings/:type', ctrl.createFeelings)

router.patch('/users/:id/feelings/:type', ctrl.updateFeelings)




module.exports = router
