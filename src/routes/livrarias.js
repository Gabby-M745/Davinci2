var express = require("express");
var router = express.Router();

var livrariaController = require("../controllers/livrariaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    livrariaController.cadastrar(req, res);
})
router.get("/listar", function (req, res) {
  livrariaController.listar(req, res);
});

/*
router.get("/buscar", function (req, res) {
    livrariaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  livrariaController.buscarPorId(req, res);
});
*/

module.exports = router;