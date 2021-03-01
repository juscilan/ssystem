module.exports.isAutenticatedMethod = method => {
  const methods = [
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  ]

  return !!methods.filter(item => method === item).length
}

const middleWareCatalog = (req, res, next) => {
  const TOKEN = process.env.TOKEN || 'LOCAL'
  if(exports.isAutenticatedMethod(req.method) && req.headers.authorization ==! TOKEN)
    return res.status(401).json({ errorMessage: 'Forbidden'})

  next()
}

module.exports = middleWareCatalog
