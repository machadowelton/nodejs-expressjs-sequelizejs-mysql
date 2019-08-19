const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.route('/usuario/:id_usuario([0-9]+)')
    .get(usuarioController.findById)
    .delete(usuarioController.delete);

router.get('/usuario/:id_usuario/full', usuarioController.findByIdFull);
router.route('/usuario')
    .post(usuarioController.save)
    .get(usuarioController.findAll)
    .put(usuarioController.update);
    
module.exports = router;