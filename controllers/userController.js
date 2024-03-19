
const userDB = require("../models/usermodels")

const postData =  async(req,res)=>{
    try{
        const {username} = req.body
        const userdata = new userDB({username})
        await userdata.save()
        res.json({
            username:userdata
        })
    }
    catch(error){
            message: error.message
    }
}

const getData=async()=>{
   const detail= await userDB.find()
   res.json({
    message:detail
   })
}

const editData=async(req,res)=>{
  try{const {username}=req.body
    const id= req.params.id
   const updatedData= await userDB.findByIdAndUpdate(id,{username},{new:true})
   res.json({
    username:updatedData
   })
  }
  catch(error){
    message:"update", error.message

  }
}

const delteData=async(req,res)=>{
    try{
    const id=req.params.id
   const deletedDAta=await userDB.findByIdAndDelete(id)
   res.json({ 
    deletedData:deletedDAta
    } )
}
catch(error){
    message:error.message
}
}

module.exports={postData,getData,editData,delteData}
