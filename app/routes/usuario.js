const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.route('/usuario/:id_usuario')
    .get(usuarioController.findById)
    .delete(usuarioController.delete);
router.route('/usuario')
    .post(usuarioController.save)
    .get(usuarioController.findAll)
    .put(usuarioController.update);
    
module.exports = router;