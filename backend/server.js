
const app = require('./app')
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

// Config
dotenv.config({ path: "backend/config/config.env"})

app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on ${process.env.PORT}`)
})

// Connecting to Database
connectDatabase()