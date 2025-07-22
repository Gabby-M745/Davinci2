var livrariaModel = require("../models/livrariaModel");

/*function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  livrariaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}


function buscarPorId(req, res) {
  var id = req.params.id;

  livrariaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}*/
function listar(req, res) {
  livrariaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

/*tituloServer: tituloVar,
        nomeServer: nomeVar,
        compraServer: compraVar,
        vendaServer: vendaVar,
        quantServer: quant */
function cadastrar(req, res) {
  var titulo = req.body.tituloServer;
  var nome = req.body.nomeServer;
  var compra = req.body.compraServer;
  var venda = req.body.vendaServer;
  var quantidade = req.body.quantServer;
  var fkGenero = req.body.generoServer; // generoServer=> veio do html

if (titulo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
 else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (compra == undefined) {
        res.status(400).send("Seu compra está undefined!");
    } else if (venda == undefined) {
        res.status(400).send("Sua venda está undefined!");
    } else if (quantidade == undefined) {
        res.status(400).send("A quantidade está undefined!");
    } else if (fkGenero == undefined) {
        res.status(400).send("O  genero do livro está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo livrariaModel.js
        livrariaModel.cadastrar(titulo, nome, compra, venda, quantidade, fkGenero)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
listar,
  cadastrar
};
