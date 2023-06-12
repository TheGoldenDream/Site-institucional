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

function obterDadosGrafico2(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico2().then(function (resultado) {
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

function obterDadosGrafico3(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico3().then(function (resultado) {
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

function obterDadosGrafico4(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico4().then(function (resultado) {
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

function obterDadosGrafico5(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico5().then(function (resultado) {
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

function obterDadosGrafico6(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    recordsModel.obterDadosGrafico6().then(function (resultado) {
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
    obterDadosGrafico2,
    obterDadosGrafico3,
    obterDadosGrafico4,
    obterDadosGrafico5,
    obterDadosGrafico6,
}