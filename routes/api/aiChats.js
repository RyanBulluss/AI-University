const express = require('express');
const router = express.Router();
const aiChatsCtrl = require('../../controllers/api/aiChats');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/ai/chats
router.get('/:userId/:teacherId', aiChatsCtrl.getMessages);

router.post('/', aiChatsCtrl.sendMessage);

module.exports = router;


