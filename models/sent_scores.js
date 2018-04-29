const knex = require('../knex')


const getScores = (id)=> {
  return knex('sent_scores')
  .where('id', id)
  .first()
  .then( (score)=> {
    if (!score) return { status: 404, errors: `Could not find user sent scores` }

  return user

  })
}
module.exports = {
  getScores
}
