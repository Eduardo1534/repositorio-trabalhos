const Sequelize  = require("sequelize")
const db = new Sequelize("users","root","potato153467",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = db