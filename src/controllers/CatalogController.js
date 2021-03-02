const CatalogModel = require('../models/CatalogModel')

module.exports.create = async (req, res) => {
  try {
    await CatalogModel.create(req.body)
    res.status(201).end()
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.getAll = async (req, res) => {
  try {

    const page = +req.query.page || 1;

    const limit = +req.query.limit || 10;

    const jump = (page - 1) * limit;

    const catalog = await CatalogModel.find().skip(jump).limit(limit);

    res.status(200).json(catalog);
  }
  catch(error) {
    console.log(error)
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.getById = async (req, res) => {
  const catalogId = req.params.id
  try {
    const product = await CatalogModel.findOne({ _id: catalogId })
    res.status(200).json(product ? product : { message: 'Product not found'})
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.update = async (req, res) => {
  const catalogBody = req.body
  const catalogId = req.body._id
  try {
    const doc = (await CatalogModel.findOne({ _id: catalogId }))
    if(!doc) {
      return res.status(400).json({ message: 'Product not found!' })
    }
    await doc.updateOne(catalogBody)
    return res.status(200).json({name: catalogBody.name})
  }
  catch(error) {
    return res.status(500).json({ errorMessage: error })
  }
}

module.exports.delete = async (req, res) => {
  const catalogId = req.params.id
  try {
    await CatalogModel.deleteOne({ _id: catalogId })
    res.status(200).end()
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

