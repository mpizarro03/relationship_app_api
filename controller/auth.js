const model = require('../models/users')

const handleError = (result) => {
    return { status: result.status, message: result.errors }
}

const createUser = (req, res, next) => {
  const { displayName, email } = req.body
  if (!displayName || !email) return next({ status: 400, message: `Fields displayName and email are required` })

  const user = { display_name: displayName, email, reminder_freq: '7' }
  model.createUser(user).then( data => {
    if (data.constraint) {
      res.send({message: 'User already exists in db'})
    } else {
    res.send({message: 'User successfully added'})
    }
  })
}



module.exports = {
  createUser,
}
