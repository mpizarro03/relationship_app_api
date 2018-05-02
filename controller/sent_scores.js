const model = require('../models/sent_scores')


const getScores = (req, res, next) => {
  const {user_id, type } = req.params
  const is_loved = type === "loved" ? true : false
console.log(req.params);
  model.getScores(user_id, is_loved).then((result)=> {
      if (result.errors){ next(handleError(result))}
      else {res.status(200).json({ data: result })}
    })
}

const createScores = (req, res, next) => {
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
  getScores,
  createScores
}
