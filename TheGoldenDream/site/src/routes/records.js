var express = require("express");
var router = express.Router();

var recordsController = require("../controllers/recordsController");

router.get("/obterDadosGrafico1", function (req, res) {
    recordsController.obterDadosGrafico1(req, res);
})

module.exports = router;