const express = require('express');
const router = express.Router();
const subjectsCtrl = require('../../controllers/api/subjects');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/students/
router.post('/', subjectsCtrl.create);

router.get('/', subjectsCtrl.getAll);

router.get('/:id', subjectsCtrl.getOne);

router.put('/:id', subjectsCtrl.update);

router.post('/:id', subjectsCtrl.remove);

module.exports = router;