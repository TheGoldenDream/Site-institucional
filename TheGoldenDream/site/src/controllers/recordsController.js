var recordsModel = require("../models/recordsModel");

function obterDadosGrafico1(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico1().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos resultados", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterDadosGrafico1,
}