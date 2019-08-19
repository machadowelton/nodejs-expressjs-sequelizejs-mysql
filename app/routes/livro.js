const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livro');

router.route('/livro/:id_livro([0-9]+)')
    .get(livroController.findById)
    .delete(livroController.delete);

//route.get('/livro/:id_livro([0-9]+)/full', livroController.findAllWithEmprestimo);
router.get('/livro/emprestimos', livroController.findAllWithEmprestimo);

router.route('/livro')
    .get(livroController.findAll)
    .post(livroController.save)    
    .put(livroController.update);

module.exports = router;