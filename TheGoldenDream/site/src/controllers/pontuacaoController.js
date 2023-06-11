var pontuacaoModel = require("../models/pontuacaoModel");


function guardarNoBanco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var userId = req.body.userServer;
    var userPontuacao = req.body.pontuacaoUserServer;

    // Faça as validações dos valores
    if (userId == undefined) {
        res.status(400).send("Seu nome de usuario está undefined!");
    } else if (userPontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else {
        
        pontuacaoModel.guardarNoBanco(userId, userPontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao guardar no banco! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDadosGrafico(req, res) {

    console.log(`Recuperando as ultimas pontuações`);

    pontuacaoModel.obterDadosGrafico().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    guardarNoBanco,
    obterDadosGrafico,
}