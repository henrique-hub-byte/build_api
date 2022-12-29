/* responsavel pela conexão */

const { off } = require('../dbconn');
const db = require('../dbconn');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from carros', (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from carros where codigo = ?', [codigo],(error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
                if(results.length > 0 ){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo,placa) => {
        return new Promise((aceito, rejeitado) => {

             db.query('insert into carros (modelo, placa) values (?,?)', [modelo,placa],
             (error, results)=>{
                if(error) {rejeitado(error + "deu ruim"); return; }
                aceito(results.insertCodigo);
            });
        });
    },

    alterar: (codigo, modelo,placa) => {
        return new Promise((aceito, rejeitado) => {

             db.query('update carros set modelo = ?, placa = ? where codigo = ?', 
             [modelo, placa, codigo],
             (error, results)=>{
                if(error) {rejeitado(error + "deu ruim"); return; }
                aceito(results);
            });
        });
    },

    deletar: (codigo) => {
        return new Promise((aceito, rejeitado) => {

             db.query('delete from carros where codigo = ?',[codigo], 
             (error, results)=>{
                if(error) {rejeitado(error + "deu ruim"); return; }
                aceito(results);
            });
        });
    }
};