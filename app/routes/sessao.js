const express = require('express');
const router = express.Router();
const sessaoController = require('../controllers/sessao');

router.route('/sessao/:id_sessao([0-9]+)')
    .get(sessaoController.findById)
    .delete(sessaoController.delete);

router.get('/sessao/livros', sessaoController.findAllWithLivros);

router.route('/sessao')
    .get(sessaoController.findAll)
    .post(sessaoController.save)
    .put(sessaoController.update);

module.exports = router;