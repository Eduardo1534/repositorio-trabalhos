const express = require("express")
const router = express.Router
const users = require("../models/users")

router.post("/register", (req,res)=>{
    const {email}
})


module.exports = (app) => app.use("/auth", router)