const express = require('express');
const router = express.Router();
const notebooksCtrl = require('../../controllers/api/notebooks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/notebooks
router.get('/library', notebooksCtrl.getLibrary);

router.get('/', notebooksCtrl.getAllBooks);

router.post('/', notebooksCtrl.createNotebook);

router.post('/publish/:id', notebooksCtrl.publish); 

router.get('/:id', notebooksCtrl.getBooksByUser);

router.get('/open/:id', notebooksCtrl.getBooksById);

router.post('/:id', notebooksCtrl.deleteBookById);


module.exports = router;