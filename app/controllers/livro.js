const { Livro } = require('../models');

module.exports = {
    findById(req, res) {
        return Livro.findByPk(req.params.id_livro)
            .then((livro) => {
                if(!livro) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(livro);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    findAll(req, res) {
        console.log('aqui');
        return Livro.findAll()
            .then((livros) => {
                if(!livros) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(livros);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    findAllWithEmprestimo(req, res) {
        return Livro.findAll({
            include: ['emprestimo']
        })
            .then((livros) => {
                if(!livros) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(livros);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    save(req, res) {
        const livroBody = req.body;
        return Livro.create(livroBody)
            .then((livroSave) => {
                if(!livroSave) res.status(404).json({mensagem: 'Nao criado'});
                res.json({mensagem: 'criado', livro: livroSave});
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    update(req, res) {
        const livroBody = req.body;
        return Livro.findByPk(livroBody.id)
            .then((livroResult) => {
                if(!livroResult) res.status(404).json({mensagem: 'Nao encontrado'});
                livroResult.update(livroBody)
                    .then((livroUpt) => {
                        if(!livroUpt) res.status(404).json({mensagem: 'Nao atualizado'});
                        res.json({mensagem:'Atualizado', livro: livroUpt});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Erro'});
                    });
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    delete(req, res) {
        return Livro.findByPk(req.params.id_livro)
            .then((livro) => {
                if(!livro) res.status(404).json({mensagem: 'Nao encontrado'});
                livro.destroy()
                    .then(() => {
                        res.json({mensagem: 'Deletado'});
                    })
                    .catch((err) => {

                    });
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    }
};