const UserChat = require('../../models/userChat');
const UserMessage = require('../../models/userMessage');

module.exports = {
    sendMessage
}

async function sendMessage(req, res) {
// req.body = {text: newMessage, senderId: user._id, receiverId: studentId}

    console.log(req.body)
}