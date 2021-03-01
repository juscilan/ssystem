const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog