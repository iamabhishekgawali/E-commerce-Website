
const express = require("express")
const app = express();

app.use(express.json())

// Importing Routes
const product = require('./routes/productRoute');
app.use("/api/v1",product);

app.get("/",(req,res)=>{
    console.log("Hello world")
})

module.exports = app;