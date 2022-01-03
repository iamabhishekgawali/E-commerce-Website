const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/ordercontroller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// Creating new Order
router.route("/orders/new").post(isAuthenticatedUser, newOrder);
router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router.route("/orders/allorders").get(isAuthenticatedUser, getAllOrders);
router.route("/orders/update/:id").put(isAuthenticatedUser, updateOrder);
router.route("/orders/delete/:id").delete(isAuthenticatedUser, deleteOrder);

module.exports = router;
