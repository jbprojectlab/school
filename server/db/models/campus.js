const Sequelize = require('sequelize')
const db = require('../database')

const Campus = db.define("campus", {
  name: Sequelize.TEXT,
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://via.placeholder.com/150'
  },
  address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT
	}
});

module.exports = {
	Campus
}
