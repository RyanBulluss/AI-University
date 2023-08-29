const Notebook = require("../../models/notebook");
const Note = require("../../models/note");
const User = require("../../models/user");
const note = require("../../models/note");

async function createNote(req, res) {
    // req = { notebookId , title, text, subjectId, credit: 'name' }
    const { notebookId, title, text, subjectId, credit } = req.body;
    try {
        let notebook = await Notebook.findById(notebookId).populate('notes');
        const note = await Note.create({ title: title, text: text, subject: subjectId, credit: credit });
        notebook.notes.push(note);
        await notebook.save();

        res.json(notebook);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        res.json(note);
    } catch (e) {
        res.status(400).json(e);
    }
}

async function deleteNote(req, res) {
    try {
        const deleted = await Note.deleteOne({ _id: req.params.noteId})
        if (!deleted) return res.status(404).json({ message: 'Note not found.' });

        const notebook = await Notebook.findById(req.params.notebookId)
        if (!notebook) return res.status(404).json({ message: 'Notebook not found.' });
        notebook.notes.pull(req.params.noteId);

        await notebook.save();
        res.json(deleted);
    } catch (e) {
        res.status(400).json(e);
    }
}




module.exports = {
    createNote,
    getNote,
    deleteNote,
};