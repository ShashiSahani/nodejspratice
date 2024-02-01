
const mongoose=require("mongoose");


async function connectMongoDB(url){
  return  mongoose.connect(url)

}
// yaha humne mongodb ka connection kiya hai
 module.exports={
    connectMongoDB,
 }