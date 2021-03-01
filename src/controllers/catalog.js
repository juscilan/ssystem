const Catalog = require('./../models/catalog')

module.exports.create = async (req, res) => {
  try {
    await Catalog.create(req.body)
    res.status(201).end()
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.getAll = async (_, res) => {
  try {
    res.status(200).json(await Catalog.find())
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.getById = async (req, res) => {
  const catalogId = req.params.id
  try {
    res.status(200).json(await Catalog.findOne({ _id: catalogId }))
  }
  catch(error) {
    console.log(error)
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.delete = async (req, res) => {
  const catalogId = req.params.id
  try {
    await Catalog.deleteOne({ _id: catalogId })
    res.status(200).end()
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
    const doc = (await Catalog.findOne({ _id: catalogId }))
    if(!doc) {
      res.status(400).json({ errorMessage: 'Catalog ID not found!' })
    }
    await doc.updateOne(catalogBody)
    res.status(200).end()
  }
  catch(error) {
    res.status(500).json({ errorMessage: error })
  }
}

module.exports.delete = async (req, res) => {
  const catalogId = req.params.id
  try {
    res.status(200).json(await Catalog.deleteOne({ _id: catalogId }))
  }
  catch(error) {
    console.log(error)
    res.status(500).json({ errorMessage: error })
  }
}

