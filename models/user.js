
//aquired models
const mongoose = require("mongoose");
//user schema
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        require: true,
      },
    },
    { timestamp: true }
  );
  


  const User=mongoose.model("user",userSchema);
  module.exports=User;