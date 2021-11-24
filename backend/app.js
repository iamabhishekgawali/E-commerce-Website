
const express = require("express")
const app = express();

app.use(express.json())

// Importing Routes
const product = require('./routes/productRoute');
app.use("/api/v1",product);

// Middle ware for error

const errorMiddleware = require('./middleware/error')
app.use(errorMiddleware)

app.get("/",(req,res)=>{
    console.log("Hello world")
})


module.exports = app;