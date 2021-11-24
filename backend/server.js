


const app = require('./app')
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")


// Handling Uncaugth error



// Config
dotenv.config({ path: "backend/config/config.env"})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on ${process.env.PORT}`)
})

// Handling uncaught Exception
process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Server is terminating  ... ")
    server.close(()=>{
        process.exit();
    })
})

// UnHandled Promise Rejection
process.on('unhandledRejection',(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Server is terminating  ... ")
    server.close(()=>{
        process.exit();
    })
})

// Connecting to Database
connectDatabase()

