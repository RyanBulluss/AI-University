const express = require('express');
const router = express.Router();
const teachersCtrl = require('../../controllers/api/teachers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', teachersCtrl.create);

router.get('/', teachersCtrl.getAll);

router.get('/:id', teachersCtrl.getOne);

router.put('/:id', teachersCtrl.update);

router.post('/:id', teachersCtrl.remove);

module.exports = router;