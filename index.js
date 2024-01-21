// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017/mydb";

// async function createCollection() {
//     try {
//         const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//         const db = client.db("mydb");

//         // Create a "customers" collection
//         const collection = db.collection('customers');

//         // Create an object
//         const myobj = [
//             { name: 'John', address: 'Highway 71'},
//             { name: 'Peter', address: 'Lowstreet 4'},
//             { name: 'Amy', address: 'Apple st 652'},
//             { name: 'Hannah', address: 'Mountain 21'},
//             { name: 'Michael', address: 'Valley 345'},
//             { name: 'Sandy', address: 'Ocean blvd 2'},
//             { name: 'Betty', address: 'Green Grass 1'},
//             { name: 'Richard', address: 'Sky st 331'},
//             { name: 'Susan', address: 'One way 98'},
//             { name: 'Vicky', address: 'Yellow Garden 2'},
//             { name: 'Ben', address: 'Park Lane 38'},
//             { name: 'William', address: 'Central st 954'},
//             { name: 'Chuck', address: 'Main Road 989'},
//             { name: 'Viola', address: 'Sideway 1633'}
//           ];
//         // Insert the object into the collection
//         const result = await collection.insertMany(myobj);

//         console.log("Collection created!");
//         console.log(`Inserted document ID: ${result.insertedCount}`);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Call the function to create the collection
// createCollection();

// const fs = require("fs");
// const url = require("url");

// const myServer = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}:${req.method} ${req.url} New request recide\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if(req.method==='GET') res.end('Home page')
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`hi ,${username}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("here are your results for " + search);
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "POST") {
//           res.end("succ");
//         }
//       default:
//         res.end("404 Not Found");
//     }
//   });
// });
// myServer.listen(3000,()=>{
//     console.log("Server is listening on the port 3000")
// });

// const http = require("http");
// const express=require("express");

// const app=express();

// app.get("/" ,(req,res)=>{
//     res.end("hello from home page"+req.query.name)
// })
// app.get("/about",(req,res)=>{
//     res.end("heloo from about")
// })

// const myServer=http.createServer(app);

// myServer.listen(8000,()=>console.log("server start"))

// const express=require('express');

// const users=require('./MOCK_DATA.json');

// const app=express();
// const PORT=8080;
// //Routes
// app.get('/api/users',(req,res)=>{
//     return res.json(users)
// });
// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>

//     ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>

//     `;
//     res.send(html);

// });
// app.get('/api/users/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user);
// });
// app.listen(PORT,()=>console.log("server start "))
// const http=require('http')
// const PORT=8080;

// const fs=require('fs')

// const express=require('express');
// const app=express();
// const myServer=http.createServer(app);

// myServer.listen(8000,()=>console.log("server start"))

// const users=require('./MOCK_DATA.json');
// app.use(express.urlencoded({extended:false}));

// //Routes
// // app.route('/api/user/:id')

// app.get('/api/users',(req,res)=>{
//     // const id=Number(req.params.id);
//     const user=users.find(u=>u.id===parseInt(req.params.id));
//     if(!user) return res.status(404).json({message:"user not found"})
//     // const user=users.find((user)=>user.id===id);
//     return res.json(users)
// })

// app.post('/api/users/:id',(req,res)=>{
//     const body=req.body;
//     console.log("body",body)
//     users.push({...body,id:users.length+1});
//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"success",id:users.length})
//     })

// })

// app.patch('/api/users/:id',(req,res)=>{
//     const user=users.find(u=>u.id===parseInt(req.params.id));
//     if(!user)
//     return res.status(404).json({massage:"user not found"})

//     if(req.bodyname) user.name=req.body.name;
//     res.json(user)
// })
// app.delete('/api/users',(req,res)=>{
//     return res.json({status:"delete user"})
// })
// app.listen(PORT,()=>console.log("server is running"))

// // Get a specific user by ID
// app.get('/api/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user)
//         return res.status(404).json({ message: "User not found" });
//     res.json(user);
// });

// // POST a new user
// app.post('/api/users', (req, res) => {
//     const newUser = { id: users.length + 1, name: req.body.name };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });
































// const express = require("express");
// const mongoose=require("mongoose");

// const fs = require("fs");
// const path = require("path");
// const app = express();
// const port = 3030;




mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("Mongo DB Error",err))
//User Schema
//user ki schema bana hoga jisme hame uski type btana and require vo sari field rakhna hoga

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    require:true,
  }

})

const User =mongoose.model("user",userSchema)
// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dataFilePath = path.join("mock_raw.json");
let users = [];

// Read data from file on startup
try {
  const rawData = fs.readFileSync(dataFilePath);
  users = JSON.parse(rawData);
} catch (error) {
  console.error("Error reading file", error);
}

// Route to get all users
app.get("/api/users", (req, res) => {
  res.setHeader("X-myName","Shashi sahani")
  console.log(req.headers)
  res.json(users);
});

//ager apko setHeader ka response dekhna hai to postman mai jake header option ko select karke 
//usper info icon per cursor le jana tub apko custome header ha option dikhega

// Route to get a specific user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Route to add a new user
app.post("/api/users", (req, res) => {
 
  const body = req.body;
  if(!body|| !body.name){
    return res.status(400).json({msg:"all field are required.."})
  }  
  users.push({ ...body, id: users.length + 1 });

  // Write data to file
  fs.writeFile(dataFilePath, JSON.stringify(users), (error) => {
    if (error) {
      console.error("Error writing file", error);
      return res
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }

    res.json({ status: "success", id: users.length });
  });
});

// update user data by ID
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUserData = req.body;

  //find the user by Id

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  //update user data

  users[userIndex] = { ...users[userIndex], ...updatedUserData };

  //write updated data to file

  fs.writeFile(dataFilePath, JSON.stringify(users), (error) => {
    if (error) {
      console.error("Error writing file", error);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
    res.json({ status: "success", id: userId });
  });
});
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
