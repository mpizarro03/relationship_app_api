const knex = require('../knex')

const createCouple = (user1,user2) => {
  return knex('couples')
    .insert(couple)
    .then(function(data){
      return data
    })
    .catch((err)=> {
      return err
    })
}

const deleteCouple = (couple) => {
    return knex('couples')
      .where('email', userEmail)
      .del()
      .then(function(data){
        return data
      })
      .catch((err)=> {
        return err
      })
}

module.exports = {
  createCouple,
  deleteCouple,
}
