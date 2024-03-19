 
const express = require("express")
const route = express.Router()
const {postData,getData,editData,delteData}
= require("../controllers/userController")

route.use(express.json())

route.post("/post",postData)

route.get("/get",getData)

 route.put("/Edit/:id",editData)

 route.delete("/delete/:id",delteData)

module.exports = route


