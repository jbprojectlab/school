'use strict'

const db = require('./database')
const {Campus, Student} = require('./models')

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).

module.exports = {
  // Include your models in this exports object as well!
  db,
  Campus,
  Student
}
