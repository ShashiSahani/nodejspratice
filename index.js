

const express = require("express");
const {connectMongoDB}=require('./connection')
const {logReqRes} =require('./middlewares')

const userRouter=require('./routes/user')

const app = express();
const port = 3030;

//conection 
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
  console.log("MongoDB connected")
})

// Middleware -plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users",userRouter)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
