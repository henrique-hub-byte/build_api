const CarroService = require("../servicess/CarroService");
const carroService = require("../servicess/CarroService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let carros = await carroService.buscarTodos();

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
      });
    }
    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let carro = await CarroService.buscarUm(codigo);

    if (carro) {
      json.result = carro;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let modelo = req.body.modelo;
    let placa = req.body.placa;
    console.log(modelo);
    if (modelo && placa) {
      let CarroCodido = await CarroService.inserir(modelo,placa);
      json.result = {
        codigo: CarroCodido,
        modelo,
        placa
      };
    }else {
        json.error = 'Campos não enviados ' + CarroCodido;
    }

    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (codigo && modelo && placa) {
        /* passando os 3 parametros */
      await CarroService.alterar(codigo, modelo, placa);
      json.result = {
        codigo,
        modelo,
        placa
      };
    }else {
        json.error = 'Campos não enviados ' ;
    }

    res.json(json);
  },

  deletar: async (req, res) => {
    let json = { error: "", result: {} };

    await CarroService.deletar(req.params.codigo);
   
    res.json(json + 'foi excluido');
  }

};
