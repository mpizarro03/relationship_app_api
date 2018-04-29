const knex = require('../knex')

const createFeelings = (user1,user2) => {
  return knex('couples')
    .insert(couple)
    .then(function(data){
      return data
    })
    .catch((err)=> {
      return err
    })
}

const deleteFeelings = (couple) => {
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

const updateFeelings = () => {

}

module.exports = {
  createFeelings,
  deleteFeelings,
  updateFeelings
}
