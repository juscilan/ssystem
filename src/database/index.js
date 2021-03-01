const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/ss-api')

mongoose.Promise = global.Promise

module.exports = mongoose