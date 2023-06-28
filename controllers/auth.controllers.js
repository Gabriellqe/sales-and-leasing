const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const sendTokenCookie = require("../utils/jwtToken");

/*     user_id serial PRIMARY KEY,
    user_name varchar(50) NOT NULL,
    user_email varchar(50) NOT NULL,
    user_password varchar(50) NOT NULL,
    user_role varchar(50) NOT NULL,
    user_active_status boolean NOT NULL default true
 */

const createUser = asyncHandler(async (req, res, next) => {
  /* 
POST /api/auth/register
Description: Register a new user.
Request body: User registration information (e.g., name, email, password)
Response: Success message or user object
*/
});

const getUser = asyncHandler(async (req, res, next) => {
  /* GET /api/auth/me
Description: Get the currently logged-in user's profile.
Access: Authenticated user
Parameters: User ID
Response: User profile object or error message */
});

const deleteUser = asyncHandler(async (req, res, next) => {
  /* 
DELETE /api/auth/:id
Description: Delete a user.
Access: Admin
Parameters: User ID
Response: Success message or error message */
});

const loginUser = asyncHandler(async (req, res, next) => {
  /* 
POST /api/auth/login
Description: Authenticate a user and generate an access token.
Request body: User login credentials (e.g., email, password)
Response: Access token or error message */
});

const logoutUser = asyncHandler(async (req, res, next) => {
  /* 
    POST /api/auth/logout
Description: Invalidate the current access token and log out the user.
Cookies: Access token cookie
Access: Authenticated user
Response: Success message or error message */
});

const forgotPassword = asyncHandler(async (req, res, next) => {
  /* 
POST /api/auth/forgot-password
Description: Request a password reset email for a user.
Parameters: User ID
Request body: User's email address
Response: Success message or error message */
});

const resetPassword = asyncHandler(async (req, res, next) => {
  /*
POST /api/auth/reset-password
Description: Reset a user's password using a password reset token.
Parameters: Password reset token
Request body: Password reset token and new password
Response: Success message or error message */
});

const refreshToken = asyncHandler(async (req, res, next) => {
  /* 
POST /api/auth/refresh-token
Description: Generate a new access token using a refresh token.
Request body: Refresh token
Response: New access token or error message */
});

module.exports = {
  createUser,
  getUser,
  deleteUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  refreshToken,
};
