const knex = require('../knex')


const getScores = (id)=> {
  return knex('received_scores')
  .where('id', id)
  .first()
  .then( (score)=> {
    if (!score) return { status: 404, errors: `Could not find user received scores` }

  return user

  })
}
module.exports = {
  getScores
}
