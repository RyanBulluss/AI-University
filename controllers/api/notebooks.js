const Notebook = require("../../models/notebook");
const Note = require("../../models/note");
const User = require("../../models/user");


async function createNotebook(req, res) {
    // req.body = { userId: user._id, title: 'my notes', icon: '📘' }
    // notes = [], (favorite = false);
    try {
        const { title, icon } = req.body;
        const notebook = await Notebook.create({ user: req.user._id, title: title, icon: icon, notes: [] })
        res.json(notebook);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getBooksByUser(req, res) {
    console.log(req.params.id)
    try {
        const notebooks = await Notebook.find({ user: req.params.id }).populate('notes')
        res.json(notebooks);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getBooksById(req, res) {
    try {
        const notebooks = await Notebook.findById( req.params.id )
        res.json(notebooks);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function deleteBookById(req, res) {
    try {
        const notebook = await Notebook.findById(req.params.id).populate('notes');
        await Note.deleteMany({ _id: { $in: notebook.notes } })
        const result = await Notebook.deleteOne({ _id: req.params.id })
        res.json(result);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getLibrary(req, res) {
    try {
        console.log(1)
        const books = await Notebook.find({ published: true })
        .populate('user')
        .populate('notes');

        res.json(books)
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getAllBooks(req, res) {
    try {
        const books = await Notebook.find({})

        res.json(books)
    } catch (e) {
        res.status(400).json(e);
    }
}

async function publish(req, res) {
    console.log(req.params)
    try {
        const book = await Notebook.findById(req.params.id);
        book.published = !book.published;
        await book.save()
        const books = await Notebook.find({ user: req.user._id }).populate('notes')
        res.json(books)
    } catch (e) {
        res.status(400).json(e);
    }
}


module.exports = {
    createNotebook,
    getBooksByUser,
    deleteBookById,
    getBooksById,
    getLibrary,
    getAllBooks,
    publish
};
  