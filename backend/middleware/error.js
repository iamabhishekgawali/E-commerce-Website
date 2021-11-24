
const ErrorHandler = require('../utils/errorhandler')

module.exports = (err,req,res,next)=>{

        console.log("Error Occured")
        err.statusCode = err.statusCode || 500;
        err.message = err.message || "Internal Server Error"

        res.status(err.statusCode).json({
            success: false,
            message :  err.message
        })
}