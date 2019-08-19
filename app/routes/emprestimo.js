const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimo');

router.route('/usuario/:id_usuario/emprestimo/:id_emprestimo')
    .get(emprestimoController.findById)
    .delete(emprestimoController.delete)

router.get('/emprestimo/usuario', emprestimoController.findAllWithUser);
router.get('/emprestimo/livros', emprestimoController.findAllWithLivros);

router.route('/usuario/:id_usuario/emprestimo')
    .get(emprestimoController.findAllByUser)
    .post(emprestimoController.save)
    .put(emprestimoController.update);

module.exports = router;