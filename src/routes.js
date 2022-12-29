const express = require('express'); 
const router = express.Router();

/* passando o arquivo de rota enxerga o controller */
const CarroController = require('./controllers/CarroController');

/* criando o end point */
router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro',CarroController.inserir);
router.put('/carro/:codigo',CarroController.alterar);
router.delete('/carro/:codigo',CarroController.deletar);

module.exports = router;