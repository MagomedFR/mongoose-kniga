const { Router } = require("express");
const { authorsController } = require("../controllers/Authors.controller");
const route = Router()

route.post("/authors", authorsController.addAuthor)

module.exports = route