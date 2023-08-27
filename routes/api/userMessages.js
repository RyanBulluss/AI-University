const express = require('express');
const router = express.Router();
const userChatsCtrl = require('../../controllers/api/userChats');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All routes start with /api/user/chats
router.post('/', userChatsCtrl.sendMessage);

module.exports = router;