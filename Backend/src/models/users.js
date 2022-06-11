const db = require("../data/db")
const sequelize = require("sequelize")

const user = db.define('User',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    user:{
        type: sequelize.STRING

    },
    pass:{
        type: sequelize.STRING
    }
})
module.exports = user 