const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/notebooks
router.post('/', notesCtrl.createNote);

router.get('/:id', notesCtrl.getNote);

router.post('/:notebookId/:noteId', notesCtrl.deleteNote);

module.exports = router;