const Teacher = require('../../models/teacher');

module.exports = {
    create,
    remove,
    update,
    getOne, 
    getAll
}

async function create(req, res) {
    console.log(req.body)
    try {
        const teacher = await Teacher.create(req.body);
        res.json(teacher);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function remove(req, res) {
    try {
        const teacher = await Teacher.deleteOne({_id: req.params.id});
        res.json(teacher);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const teacher = await Teacher.updateOne( {_id: req.params.id}, {name: req.body.name} );
        res.json(teacher);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getOne(req, res) {
    try {
        const teacher = await Teacher.findById( {_id: req.params.id} );
        res.json(teacher);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getAll(req, res) {
    try {
        const teachers = await Teacher.find({}).populate('subject');
        res.json(teachers);
    } catch (err) {
        res.status(400).json(err);
    }
}