const mongoose =require("mongoose")
const url="mongodb://localhost:27017/socialmedia"
const dbConnect= async ()=>{
     await mongoose.connect(url,{

    }).then(()=>console.log("db connect"))
    .catch(error=>{
        console.log("db not connected")
        console.log(error)
        process.exit(1);
    })
}
module.exports = dbConnect;