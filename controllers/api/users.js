const User = require('../../models/user');
const UserChat = require("../../models/userChat");
const UserMessage = require("../../models/userMessage");
const Notebook = require("../../models/notebook");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    updateImage,
    getAll,
    getOne,
    updateLevel,
    toggleAdmin,
    deleteOne,
    premiumUser,
    demo
};


async function updateImage(req, res) {
    try {
        await User.updateOne({ _id: req.user._id }, { image: req.body.imageUrl });
        const user = await User.findOne({ _id: req.user._id });
        

        res.json( createJWT(user) );
    } catch {
        res.status(400).json('Bad Image');
    }
}

async function updateLevel(req, res) {

    try {
        await User.updateOne({ _id: req.user._id }, { level: req.body.level });
        const user = await User.findOne({ _id: req.user._id });
        res.json( createJWT(user) );
    } catch {
        res.status(400).json('Bad Request');
    }
}

async function getAll(req, res) {
    try {
        const users = await User.find({});
        res.json(users);
    } catch {
        res.status(400).json('Bad Request');
    }
}

async function getOne(req, res) {
    console.log(req.params.id)
    try {
        const user = await User.findById( {_id: req.params.id} );
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try {
        const result = await User.deleteOne( {_id: req.params.id} );
        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }

async function demo(req, res) {
    try {
        const user = await User.findOne({ email: 'demoaccount@gmail.com' });
        if (!user) throw new Error();
        const match = bcrypt.compare('password123', user.password);
        if (!match) throw new Error();
        res.json( createJWT(user) );
      } catch {
        res.status(400).json('Bad Credentials');
      }
}

const adminMessage = "Welcome to the AI University! 🎓✨ \n We're thrilled to have you here. Whether you're a seasoned AI enthusiast or just getting started, you've joined a community of passionate learners and innovators. Our mission is to empower you with the knowledge and skills to thrive in the world of artificial intelligence. 🤖 \n Feel free to talk to wide range of advanced AI teachers, other students and don't forget to take notes! ✍️ \n I am the developer of this institute so if you have any issues or suggestions let me know here or at my email @rbulluss2000@gmail.com. \n \n Let's learn, grow, and shape the future of AI together. Enjoy your learning adventure! 🎓"

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const admin = await User.findOne({ admin: true });
        const message = await UserMessage.create({ sender: admin._id, text: adminMessage })
        await UserChat.create( { user1: admin._id, user2: user._id, logs: [message]} )
        const notebook = Notebook.create({ user: user._id, title: 'General Notes', notes: [] })
        console.log(notebook)
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Helper functions

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

async function toggleAdmin(req, res) {
    const user = await User.findById(req.params.id);
    user.admin = !user.admin;
    const result = await user.save()
    res.json(result);
}

async function premiumUser(req, res) {
    try {
        const user = await User.findById(req.user._id);
        user.premium = true;
        await user.save();
        console.log(user)
        res.json( createJWT(user) );
    } catch (e) {
        res.status(400).json(err);
    }
}