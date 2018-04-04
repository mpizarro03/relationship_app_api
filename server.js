const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const couplesRoutes = require('./routes/couples')
const feelingsRoutes = require('./routes/feelings')
const receivedScoresRoutes = require('./routes/received_scores')
const sentScoresRoutes = require('./routes/sent_scores')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(cors())
app.use('/api/auth',authRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/couples',authRoutes)
app.use('/api/feelings',couplesRoutes)
app.use('/api/received_scores',receivedScoresRoutes)
app.use('/api/sent_scores',sentScoresRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Page not found' }})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
