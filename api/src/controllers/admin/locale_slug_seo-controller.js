const db = require("../../models");
const Locale_slug_seo = db.locales_slug_seo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.relParent || !req.body.slug ) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const Locale_slug_seo = {
        localeSeoId: req.body.localeSeoId,
        language: req.body.language,
        relParent: req.body.relParent,
        slug: req.body.slug,
        key: req.body.key,
        parentSlug: req.body.parentSlug,
        title: req.body.title,
        keywords: req.body.keywords,
        description: req.body.description,
    };

    Locale_slug_seo.create(locale_slug_seo).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    const ubication = req.query.ubication;
    var condition = type ? { [Op.and]: [{type: { [Op.like]: `%${ubication}%` }, deletedAt: null }]} : {deletedAt: null};
 
    Locale_slug_seo.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Locale_slug_seo.findByPk(id, {where: {deletedAt: null}}).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Locale_slug_seo.update(req.body, {
        where: { [Op.and]: [{id: id} , {deletedAt: null}] }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualizar la id=" + id
        });
    });
};

exports.delete = (req, res) => {

  const id = req.params.id;

    Locale_slug_seo.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};