const UserChat = require("../../models/userChat");
const UserMessage = require("../../models/userMessage");
const User = require("../../models/user");

module.exports = {
  sendMessage,
  getMessages,
};

async function sendMessage(req, res) {
  // If no chat, create one. then add message to that chats logs. then return chat
  // req.body = {text: newMessage, senderId: user._id, receiverId: studentId}
  const { text, senderId, receiverId } = req.body;
  try {
    let chat = await UserChat.findOne({
      $or: [
        { user1: senderId, user2: receiverId },
        { user1: receiverId, user2: senderId },
      ],
    }).populate("logs");

    if (!chat) {
      chat = new UserChat({ user1: senderId, user2: receiverId, logs: [] });
    }

    const newMessage = new UserMessage({ sender: senderId, text: text });
    await newMessage.save();

    chat.logs.push(newMessage);

    await chat.save();

    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error sending message." });
  }
}

async function getMessages(req, res) {
  const { senderId, receiverId } = req.params;
  try {
    let chat = await UserChat.findOne({
      $or: [
        { user1: senderId, user2: receiverId },
        { user1: receiverId, user2: senderId },
      ],
    }).populate("logs");

    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error getting messages." });
  }
}
