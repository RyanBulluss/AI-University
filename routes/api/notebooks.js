const express = require('express');
const router = express.Router();
const notebooksCtrl = require('../../controllers/api/notebooks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/notebooks
router.post('/', notebooksCtrl.createNotebook);

router.get('/:id', notebooksCtrl.getBooksByUser);

router.get('/open/:id', notebooksCtrl.getBooksById);

router.post('/:id', notebooksCtrl.deleteBookById);

module.exports = router;