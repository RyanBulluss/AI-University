const express = require('express');
const router = express.Router();
const teachersCtrl = require('../../controllers/api/teachers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/teachers/
router.post('/', teachersCtrl.create);

router.get('/', teachersCtrl.getAll);

router.get('/:id', teachersCtrl.getOne);

router.put('/:id', teachersCtrl.update);

router.post('/:id', teachersCtrl.remove);

router.post('/ai', teachersCtrl.removeAI);

module.exports = router;