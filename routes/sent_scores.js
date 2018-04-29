const express = require('express')
const router = express.Router()
const ctrl = require('../controller/sent_scores')

router.get('/users/:id/sent_scores/:type', ctrl.getScores)
router.post('/users/:id/sent_scores/:type', ctrl.createScores)


module.exports = router
