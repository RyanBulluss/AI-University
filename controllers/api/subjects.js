const Subject = require('../../models/subject');

module.exports = {
    create,
    remove,
    update,
    getOne, 
    getAll
}

async function create(req, res) {
    try {
        const subject = await Subject.create(req.body);
        res.json(subject);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function remove(req, res) {
    try {
        const subject = await Subject.deleteOne({_id: req.params.id});
        res.json(subject);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const subject = await Subject.updateOne( {_id: req.params.id}, {name: req.body.name} );
        res.json(subject);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getOne(req, res) {
    try {
        const subject = await Subject.findById( {_id: req.params.id} );
        res.json(subject);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getAll(req, res) {
    try {
        const subjects = await Subject.find({});
        res.json(subjects);
    } catch (err) {
        res.status(400).json(err);
    }
}