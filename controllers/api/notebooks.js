const Notebook = require("../../models/notebook");
const Note = require("../../models/note");
const User = require("../../models/user");


async function createNotebook(req, res) {
    // req.body = { userId: user._id, title: 'my notes', icon: '📘' }
    // notes = [], (favorite = false);
    try {
        const { userId, title, icon } = req.body;
        const notebook = await Notebook.create({ user: userId, title: title, icon: icon, notes: [] })
        res.json(notebook);
    } catch (e) {
        res.status(400).json(err);
    }
}

async function getBooksByUser(req, res) {
    try {
        const notebooks = await Notebook.find({ user: req.params.id })
        res.json(notebooks);
    } catch (e) {
        res.status(400).json(err);
    }
}

async function getBooksById(req, res) {
    try {
        const notebooks = await Notebook.findById( req.params.id )
        res.json(notebooks);
    } catch (e) {
        res.status(400).json(err);
    }
}

async function deleteBookById(req, res) {
    try {
        const result = await Notebook.deleteOne({ _id: req.params.id })
        res.json(result);
    } catch (e) {
        res.status(400).json(err);
    }
}




module.exports = {
    createNotebook,
    getBooksByUser,
    deleteBookById,
    getBooksById,
};
  