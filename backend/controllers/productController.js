
const Product = require("../model/productModel")
const ErrorHandler = require("../utils/errorhandler")
const catchasyncerros = require('../middleware/catchAsyncErrors')
const ApiFeatures = require("../utils/apifeatures")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

// Create Product
exports.createProduct = catchasyncerros( async (req, res, next) => {

    req.body.user = req.user.id
    const product = await Product .create(req.body)
    res.status(201).json({ success: true, product })
})

// Get All products
exports.getAllProducts = catchasyncerros(async (req, res) => {

    const resultperPage = 5;
    const productCount = await Product.countDocuments()
    const apifeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultperPage);
    const products = await apifeatures.query;
    res.status(200).json({ success: true, products,productCount })
})

// Update Product
exports.updateProduct = catchasyncerros((async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    console.log("Request Recieved")

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        product,
    });
}));

// Delete Product
exports.deleteProduct = catchasyncerros( async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted Sucessfully"
    });
})


// Get Product Details
exports.getProductDetails = catchasyncerros( async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        product
    });
})

// Logout User
exports.logout = catchAsyncErrors(async(req,res,next)=>{

    req.cookie("token",null,{
        expires : new Date(Date.now()),
        httpOnly : true,
    })

    res.status(200).json({
        success : true,
        message : "Logged Out"
    });
});
