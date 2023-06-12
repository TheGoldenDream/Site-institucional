var express = require("express");
var router = express.Router();

var recordsController = require("../controllers/recordsController");

router.get("/obterDadosGrafico1", function (req, res) {
    recordsController.obterDadosGrafico1(req, res);
})

router.get("/obterDadosGrafico2", function (req, res) {
    recordsController.obterDadosGrafico2(req, res);
})

router.get("/obterDadosGrafico3", function (req, res) {
    recordsController.obterDadosGrafico3(req, res);
})

router.get("/obterDadosGrafico4", function (req, res) {
    recordsController.obterDadosGrafico4(req, res);
})

router.get("/obterDadosGrafico5", function (req, res) {
    recordsController.obterDadosGrafico5(req, res);
})

router.get("/obterDadosGrafico6", function (req, res) {
    recordsController.obterDadosGrafico6(req, res);
})

module.exports = router;