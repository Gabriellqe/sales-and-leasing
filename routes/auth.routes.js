const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  deleteUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  refreshToken,
} = require("../controllers/auth.controller");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:resetToken").put(resetPassword);
router.route("/refresh-token").post(refreshToken);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;

/* 
POST /api/auth/register
Description: Register a new user.
Request body: User registration information (e.g., name, email, password)
Response: Success message or user object

POST /api/auth/login
Description: Authenticate a user and generate an access token.
Request body: User login credentials (e.g., email, password)
Response: Access token or error message

GET /api/auth/me
Description: Get the currently logged-in user's profile.
Access: Authenticated user
Response: User profile object or error message

POST /api/auth/logout
Description: Invalidate the current access token and log out the user.
Access: Authenticated user
Response: Success message or error message

POST /api/auth/refresh-token
Description: Generate a new access token using a refresh token.
Request body: Refresh token
Response: New access token or error message

POST /api/auth/forgot-password
Description: Request a password reset email for a user.
Request body: User's email address
Response: Success message or error message

POST /api/auth/reset-password
Description: Reset a user's password using a password reset token.
Request body: Password reset token and new password
Response: Success message or error message */
