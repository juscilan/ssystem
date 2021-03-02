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
  if(exports.isAutenticatedMethod(req.method)){
    if(req.headers.authorization) {
      if(req.headers.authorization === TOKEN) {
        next()
      }else {
        return res.status(401).json({ errorMessage: 'Forbidden'})
      }
    }else {
      return res.status(401).json({ errorMessage: 'Forbidden'})
    }
  }
}

module.exports = middleWareCatalog
