
const express =  require('express');
const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails, createProductReview , deleteReview, getProductReviews } = require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

const router =  express.Router();

router.route("/products").get(getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route("/product/:id").put(isAuthenticatedUser,updateProduct).delete(isAuthenticatedUser,deleteProduct).get(getProductDetails)
router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/review/delete").delete(deleteReview);
router.route("/allreview").get(getProductReviews)
module.exports = router


