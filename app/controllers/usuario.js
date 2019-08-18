const { Usuario } = require('../models');

module.exports = {
    findById(req, res) {
        return Usuario.findByPk(req.params.id_usuario)
            .then((usuario) => {
                if(!usuario) res.status(404).json({mensagen:'Nao encontrado'});
                res.json(usuario);
            })
            .catch((err) => {
                res.status(505).json(err);
            });
    },
    findAll(req, res) {
        return Usuario.findAll()
            .then((usuarios) => {
                if(!usuarios) res.status(404).json({mensagem: 'Nao encontrado'});
                res.json(usuarios);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    save(req, res) {
        const usuarioBody = req.body;
        return Usuario.create(usuarioBody)
            .then((usuarioSave) => {
                if(!usuarioSave) res.status(500).json({mensagem: 'Nao criado'});
                res.json({mensagem: 'Criado', usuario: usuarioSave});
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro, nao atualizado'});
            });
    },
    update(req, res) {
        const usuarioBody = req.body;
        return Usuario.findByPk(usuarioBody.id)
            .then((usuarioResult) => {
                if(!usuarioResult) res.status(404).json({mensagem: 'Nao encontrado'});
                usuarioResult.update(usuarioBody)
                    .then((usuarioUpdate) => {
                        if(!usuarioUpdate) res.status(500).json({mensagem:'Nao atualizado'});
                        res.json({mensagem: 'Atualizado', usuario: usuarioUpdate});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Erro, nao atualizado'});
                    });
            })
            .catch((err) => {
                res.status(500).json({mensagem: 'Erro, nao atualizado'});
            });
    },
    delete(req, res) {
        return Usuario.findByPk(req.params.id_usuario)
            .then((usuarioResult) => {
                if(!usuarioResult) res.status(404).json({mensagem: 'Nao encontrado'});
                usuarioResult.destroy()
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

