
const mongose=require("mongoose")

const userSchema = new mongose.Schema({
    username: {
        type: String,
      },
      Gender:{
        type:String
      },
      City:{
        type:String
      }
})
const userDB = mongose.model("myinfo",userSchema)

module.exports = userDB

