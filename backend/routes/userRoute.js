
const express =  require('express');
const { registerUser, loginuser, logout, forgotPassword, resetPassword,  getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router =  express.Router();

router.route('/register').post(registerUser);
router.route("/login").post(loginuser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser,updateProfile);
router.route("/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser)
router.route("/users/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser)
router.route("/users/updaterole/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole)
router.route("/users/delete/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser)

module.exports = router;