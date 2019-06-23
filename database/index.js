const mongoose = require('mongoose');

/**
 * Initializes the database connection
 */
module.exports = () => mongoose.connect("mongodb+srv://admin:artixentertainment@cluster0-k58im.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'));


