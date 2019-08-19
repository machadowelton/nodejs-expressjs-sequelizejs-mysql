const { Emprestimo } = require('../models');

module.exports = {
    findById(req, res) {
        return Emprestimo.findAll({
            where: {
                UsuarioId: req.params.id_usuario,
                id: req.params.id_emprestimo
            }
        })
            .then((emprestimo) => {
                if(!emprestimo) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(emprestimo[0]);
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro'});
            });
    },
    findAllByUser(req, res) {
        return Emprestimo.findAll({
            where: {
                usuarioId: req.params.id_usuario
            }
        })
            .then((emprestimos) => {
                if(!emprestimos) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(emprestimos);
            })
            .catch((err) => {
                res.status(505).json({mensagem: 'Erro'});
            });
    },
    findAllWithUser(req ,res) {
        return Emprestimo.findAll({
            include: 'usuario'
        })
            .then((emprestimos) => {
                if(!emprestimos) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(emprestimos);
            })
            .catch((err) => {
                res.status(505).json({mensagem: 'Erro'});
            });
    },
    findAllWithLivros(req, res) {
        return Emprestimo.findAll({
            include: ['livros']
        })
            .then((emprestimos) => {
                if(!emprestimos) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(emprestimos);
            })
            .catch((err) => {
                res.status(505).json({mensagem: 'Erro'});
            });
    },
    save(req, res) {
        const emprestimoBody = req.body;
        return Emprestimo.create(emprestimoBody)
            .then((emprestimoSave) => {
                if(!emprestimoSave) res.status(500).json({mensagem: 'Erro, nao salvou'});
                res.json({mensagem: 'Salvou', emprestimo: emprestimoSave});
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro,nao criou'});
            });
    },
    update(req, res) {
        const emprestimoBody = req.body;
        return Emprestimo.findAll({
            where: {
                UsuarioId: emprestimoBody.UsuarioId,
                id: emprestimoBody.id
            }
        })
            .then((emprestimoResult) => {
                if(!emprestimoResult) res.status(404).json({mensagem: 'Nao encontrado'});
                emprestimoResult[0].update(emprestimoBody)
                    .then((emprestimoUpd) => {
                        if(!emprestimoUpd) res.status(404).json({mensagem: 'Nao atualizado'});
                        res.json({mensagem: 'Atualizado', emprestimo: emprestimoUpd});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Erro, nao tualizado'});
                    });
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro, nao tualizado'});
            });
    },
    delete(req, res) {
        return Emprestimo.findAll({
            where: {
                UsuarioId: req.params.id_usuario,
                id: req.params.id
            }
        })
            .then((emprestimoResult) => {
                if(!emprestimoResult) res.status(404).json({mensagem: 'Nao encontrado'});
                emprestimoResult[0].destroy()
                    .then(() => {
                        res.json({mensagem: 'Deletado'});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Erro, nao deletado'});
                    });
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro, nao deletado'});
            });
    },
};