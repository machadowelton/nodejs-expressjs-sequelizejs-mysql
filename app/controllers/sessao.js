const { Sessao } = require('../models');

module.exports = {
    findById(req, res) {
        return Sessao.findByPk(req.params.id_sessao)
            .then((sessao) => {
                if(!sessao) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(sessao);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    findAll(req, res) {
        return Sessao.findAll()
            .then((sessoes) => {
                if(!sessoes) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(sessoes);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    findAllWithLivros(req, res) {
        return Sessao.findAll({
            include: ['livros']
        })
            .then((sessoeslivros) => {
                if(!sessoeslivros) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(sessoeslivros);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    save(req, res) {
        const sessaoBody = req.body;
        return Sessao.create(sessaoBody)
            .then((sessaoResult) => {
                if(!sessaoResult) res.status(404).json({mensagem: 'Nao criado'});
                res.json({mensagem: 'Criado', sessao: sessaoResult});
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    update(req, res) {
        const sessaoBody = req.body;
        return Sessao.findByPk(sessaoBody.id)
            .then((sessaoResult) => {
                if(!sessaoResult) res.status(404).json({mensagem: 'Nao encontrado'});
                sessaoResult.update()
                    .then((sessaoUpt) => {
                        res.json({mensagem: 'Atualizado', sessao: sessaoUpt});
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
        return Sessao.findByPk(req.params.id_sessao)
        .then((sessao) => {
            if(!sessao) res.status(404).json({mensagem: 'Nao encontrado'});
            sessao.destroy()
                .then(() => {
                    res.json({mensagem:'Deletado'})
                })
                .catch((err) => {
                    res.status(500).json({mensagem: 'Erro'});
                });
        })
        .catch((err) => {
            res.status(500).json({mensagem: 'Erro'});
        });
    }
};