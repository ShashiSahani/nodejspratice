const mongoose=require('mongoose');
const dbURL="mongodb://127.0.0.1:27017/olymics"
mongoose.connect(dbURL).then(()=>{
    console.log("Connected to MongoDB successfully!")
}).catch((error)=>{
    console.log("Error connection to the database:",error)
})

mongoose.connection.on('connected',()=>{
    console.log("MongoDB connection established!");
})

mongoose.connection.on('error',(err)=>{
    console.error('MongoDb connection Error:',err)
})

mongoose.connection.on('disconnected',()=>{
    console.log("MongoDB disconnected");
})

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log("MongoDB connection closed through app termination");
        process.exit(0)
    })
})