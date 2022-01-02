
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken")
const User = require("../model/userModel")

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies;

    if (token == "logout") {
        return next(new ErrorHandler("Please Login to access this resource"))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id)

    next();
})

exports.authorizeRoles = (...roles) => {

    return (req, res, next) => {

        console.log(req.user.role)
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403));
        }
 
        next();
    }
}