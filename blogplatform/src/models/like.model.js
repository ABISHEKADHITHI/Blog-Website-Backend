const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Like = sequelize.define("Like", {})

module.exports = Like