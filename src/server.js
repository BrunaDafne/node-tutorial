const express = require('express');
const bodyParser = require('body-parser');

const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const authenticateMiddleware = require("./middlewares/authenticate");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/auth", AuthController)
app.use("/admin", authenticateMiddleware, AdminController)

app.listen(3000, () => {
    console.log('Server is running')
})