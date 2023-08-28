const AiChat = require("../../models/aiChat");
const Message = require("../../models/aiMessage");
const User = require("../../models/user");

module.exports = {
  sendMessage,
  getMessages,
};

async function sendMessage(req, res) {
  // If no chat, create one. then add message to that chats logs. then return chat
  // req.body = {text: newMessage, senderId: user._id, receiverId: studentId}
  const { text, userId, teacherId } = req.body;
  try {
    let chat = await AiChat.findOne({ user: userId, teacher: teacherId }).populate('logs.messageDoc');


    if (!chat) {
      chat = new AiChat({ user: userId, teacher: teacherId, logs: [] });
    }

    const newMessage = new Message({ text: text });
    await newMessage.save();

    chat.logs.push({
        messageType: 'user',
        message: newMessage._id
    });

    // Open AI Api logic here

    await chat.save();

    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error sending message." });
  }
}

async function getMessages(req, res) {
  const { userId, teacherId } = req.params;
  try {
    const chat = await AiChat.findOne({ user: userId, teacher: teacherId }).populate('logs.messageDoc');
    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error getting messages." });
  }
}
