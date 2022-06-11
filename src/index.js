const express = require("express")
const app =  express()
const bodyParser = require("body-parser")
const path = 8081
const db = require("./data/db")
const user = require("./models/users")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
require("./controllers/userController.js")(app)

console.log("[Server]: Synchronizing models...")
db.sync({force:true})
console.log("[Server]: All models are synchronized successfully!")



app.listen(path, (err) => {
  
    console.log("[Server]: ok!")
    
   
    
})