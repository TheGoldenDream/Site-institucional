var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/guardarNoBanco", function (req, res) {
    pontuacaoController.guardarNoBanco(req, res);
})

router.get("/obterDadosGrafico", function (req, res) {
    pontuacaoController.obterDadosGrafico(req, res);
})

module.exports = router;