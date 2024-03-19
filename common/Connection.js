const mongoose=require("mongoose")

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://krishna43835:8DUBpl74kBIyidDY@cluster0.0lubpbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("MongoDB connected successfully");
      }).catch((err)=>{
        console.log("error",err)
      })
}

module.exports = connectDB;

