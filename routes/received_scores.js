const express = require('express')
const router = express.Router()
const ctrl = require('../controller/received_scores')

router.get('/users/:id/received_scores/:type', ctrl.getScores)


module.exports = router
