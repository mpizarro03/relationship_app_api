const model = require('../models/users')

const handleError = (result) => {
    return { status: result.status, message: result.errors }
}


const getUser = (req, res, next) => {
  const id = req.params.id
  const result = model.getUser(id)

  if (result.errors){ next(handleError(result))}
  else {res.status(200).json({ data: result })}

}



module.exports = {
  getUser
}
