const knex = require('../knex')

const getUser = (id)=> {
  const user = users.find(user => {
  return user.id == id})

  if (!user) return { status: 404, errors: `Could not find user with id of ${id}` }

  return user
}

const createUser = (user) => {
  return knex('users')
    .insert(user)
    .then(function(data){
      return data
    })
    .catch((err)=> {
      return err
    })
}

const deleteUser = (userEmail) => {
    return knex('users')
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
  getUser,
  createUser,
  deleteUser,
}
