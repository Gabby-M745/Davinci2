  var database = require("../database/config");

  /*function buscarPorId(id) {
    var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

    return database.executar(instrucaoSql);
  }*/

  function listar() {
    var instrucaoSql = `SELECT titulo, autor,compraPr, vendaPr, quantidade, fkGenero FROM livro`;
    //var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

    return database.executar(instrucaoSql);
  }

  /*function buscarPorCnpj(cnpj) {
    var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

    return database.executar(instrucaoSql);
  }*/

  function cadastrar(titulo, autor, compraPr, vendaPr, quantidade, fkGenero ) {
    var instrucaoSql = `INSERT INTO livro (titulo, autor,compraPr, vendaPr, quantidade, fkGenero ) VALUES ('${titulo}', '${autor}' , '${compraPr}', '${vendaPr}', '${quantidade}', '${fkGenero}')`;

    return database.executar(instrucaoSql);
  }

  module.exports = {listar, cadastrar};
