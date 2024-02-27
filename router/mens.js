const express=require('express')
const MensRanking=require('../modules/mens')
const router=new express.Router();

router.post("/mens",async(req,res)=>{
    try {
      const addingMensRecords=new MensRanking(req.body)
      console.log(req.body)
    
     const insertMen=await addingMensRecords.save();
     res.status(201).send(insertMen)
    } catch (error) {
      if(error.code===11000 && error.keyPattern && error.keyPattern.ranking){
      res.status(400).send("Duplicate ranking value. Please provide a unique ranking.");
        } else {
          console.error("Error adding men's ranking record:", error);
          res.status(500).send("Internal Server Error");
    }
    }
    })
    
    //Making get request  and fetch all the mens  from database
    router.get("/mens",async(req,res)=>{
      try {
        console.log(MensRanking)
        const getMens= await MensRanking.find({}).sort()
        res.status(200).send(getMens)
      } catch (error) {
        console.error("Somithing went Wrong!!",error)
        res.status(400).send(error)
      }
    })
    
    //display a specific men's ranking using their ID
    router.get("/mens/:id",async(req,res)=>{
      try {
        // Etract the Id from the request parameter
        const _id=req.params.id;
        //find the men's ranking in the database based on the provided ID
        const getMens=await MensRanking.findById({_id})
        //send the retrievd men's ranking as a response
        res.send(getMens)
        //log the retrived men's ranking as a response
        console.log(getMens)
      } catch (error) {
        //handle any error that may occur during the process
        console.error("Error  :",error);
        res.status(400).send(error)
      }
    })
    router.patch('/mens/:id',async(req,res)=>{
      try {
        const _id=req.params.id;
        const updatedData=req.body;
        console.log("This is req. body:",req.body)
        const getMen=await MensRanking.findByIdAndUpdate(_id,updatedData,{new:true});
        res.send(getMen);
        console.log("user update",getMen)
    
      } catch (error) {
        res.status(500).send(error);
      }
    })
    router.delete('/mens/:id',async(req,res)=>{
      try {
        const _id=req.params.id;
        const deleteMens=await MensRanking.findByIdAndDelete(_id)
        res.send(deleteMens)
        console.log("Deleted successdully!!")
      } catch (error) {
        res.status(500).send(error);
      }
    })
module.exports=router;
