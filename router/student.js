const express=require('express');

const router=new express.Router();

router.get('/api/student',(req,res)=>{
    res.send("Hello from student Page!!")
})

router.get('/',(req,res)=>{
    res.send("This home page use valid route to navigate")
})

module.exports=router; 