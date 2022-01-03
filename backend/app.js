
const express = require("express")
const app = express();
const cookieParser =  require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

// Importing Routes

const product = require('./routes/productRoute');
const user =  require('./routes/userRoute');
const order =  require('./routes/orderRoute')

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

// Middle ware for error

const errorMiddleware = require('./middleware/error')
app.use(errorMiddleware)

app.get("/",(req,res)=>{
    console.log("Hello world")
})


module.exports = app;