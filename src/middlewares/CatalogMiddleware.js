const catalogUtils = require('../utils/Catalog')

const middleWareCatalog = (req, res, next) => {
  const TOKEN = process.env.TOKEN || 'LOCAL'
  if(catalogUtils.isAutenticatedMethod(req.method)){
    if(req.headers.authorization) {
      if(req.headers.authorization === TOKEN) {
        next()
      }else {
        return res.status(401).json({ errorMessage: 'Forbidden'})
      }
    }else {
      return res.status(401).json({ errorMessage: 'Forbidden'})
    }
  }else {
    next()
  }
}

module.exports = middleWareCatalog
