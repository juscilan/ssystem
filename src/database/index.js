const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/ss-api')

module.exports = mongoose