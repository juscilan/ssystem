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

module.exports.getAll = async (_, res) => {
  try {
    res.status(200).json(await CatalogModel.find())
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.getById = async (req, res) => {
  const catalogId = req.params.id
  try {
    res.status(200).json(await CatalogModel.findOne({ _id: catalogId }))
  }
  catch(error) {
    console.log(error)
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.update = async (req, res) => {
  const catalogBody = req.body
  const catalogId = req.body._id
  try {
    const doc = (await CatalogModel.findOne({ _id: catalogId }))
    if(!doc) {
      return res.status(400).json({ errorMessage: 'Catalog ID not found!' })
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

