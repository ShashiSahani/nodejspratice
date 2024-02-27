require('dotenv').config();
const express=require('express');
require('./connection')
const router=require('./router/mens')
const app=express();
const port=process.env.PORT || 3000;
console.log("myname",process.env.myname)
app.use(express.json())

app.use(router)

app.listen(port,()=>{
  console.log(`connection is live at port no. ${port}`)
})
