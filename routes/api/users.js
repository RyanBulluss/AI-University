const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/users/
router.get('/', usersCtrl.getAll);

router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.put('/image', ensureLoggedIn, usersCtrl.updateImage);

router.put('/level', ensureLoggedIn, usersCtrl.updateLevel);

router.get('/:id', ensureLoggedIn, usersCtrl.getOne);

module.exports = router;