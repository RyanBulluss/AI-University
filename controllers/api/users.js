const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    updateImage,
    getAll,
    getOne,
    updateLevel
};


async function updateImage(req, res) {
    try {
        await User.updateOne({ _id: req.user._id }, { image: req.body.imageUrl });
        const user = await User.findOne({ _id: req.user._id });
        console.log(req.body.imageUrl)
        res.json(user);
    } catch {
        res.status(400).json('Bad Image');
    }
}

async function updateLevel(req, res) {

    try {
        await User.updateOne({ _id: req.user._id }, { level: req.body.level });
        const user = await User.findOne({ _id: req.user._id });
        console.log(req.body.level)
        res.json(user);
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

async function login(req, res) {

    console.log(req.body.email)  
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user)  
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }

async function create(req, res) {
    try {
        const user = await User.create(req.body);
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