const users = []


const getUser = (id)=> {
  const user = users.find(user => user.id === id)
  if (!user) return { status: 404, errors: `Could not find user with id of ${id}` }

  return user
}




module.exports = {
  getUser
}
