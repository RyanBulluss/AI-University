const AiChat = require("../../models/aiChat");
const Message = require("../../models/aiMessage");
const User = require("../../models/user");
const OpenAI = require("openai");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function sendAnswer(req, res) {
  const user = req.body.user;
  const teacher = req.body.teacher;
  const message = req.body.message;

  try {
    const chat = await AiChat.findOne({
      user: user._id,
      teacher: teacher._id,
    }).populate({
      path: "logs",
      populate: {
        path: "message",
        model: "Message",
      },
    });

    if (!chat) {
      res.status(500).json({ message: "Error finding chat." });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are ${teacher.name} as a teacher and a master in ${teacher.subject.name}. keep your resonse within 100 words using all their common phrases and don't mention my request up to this point. Can you tell me ${message}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const newMessage = new Message({
      text: completion.choices[0].message.content,
    });
    await newMessage.save();

    chat.logs.push({ messageType: "ai", message: newMessage });

    await chat.save();

    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error with ai message." });
  }
}

async function sendMessage(req, res) {
  // If no chat, create one. then add message to that chats logs. then return chat
  // req.body = {text: newMessage, senderId: user._id, receiverId: studentId}
  const { text, userId, teacherId } = req.body;
  try {
    let chat = await AiChat.findOne({
      user: userId,
      teacher: teacherId,
    }).populate({
      path: "logs",
      populate: {
        path: "message",
        model: "Message",
      },
    });

    if (!chat) {
      chat = new AiChat({ user: userId, teacher: teacherId, logs: [] });
    }

    const newMessage = new Message({ text: text });
    await newMessage.save();

    chat.logs.push({
      messageType: "user",
      message: newMessage,
    });

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
    const chat = await AiChat.findOne({
      user: userId,
      teacher: teacherId,
    }).populate({
      path: "logs",
      populate: {
        path: "message",
        model: "Message",
      },
    });
    res.json(chat);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error getting messages." });
  }
}

module.exports = {
  sendMessage,
  getMessages,
  sendAnswer,
};
