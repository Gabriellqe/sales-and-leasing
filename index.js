const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const notFoundMiddleware = require("./middlewares/not-found.js");
const errorHandlerMiddleware = require("./middlewares/errorHandler.js");

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Error handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
