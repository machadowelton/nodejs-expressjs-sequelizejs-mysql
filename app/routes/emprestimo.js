const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimo');

router.route('/usuario/:id_usuario/emprestimo/:id_emprestimo')
    .get(emprestimoController.findById)
    .delete(emprestimoController.delete);

router.route('/usuario/:id_usuario/emprestimo')
    .get(emprestimoController.findAll)
    .post(emprestimoController.save)
    .put(emprestimoController.update);

module.exports = router;