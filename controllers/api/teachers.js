const Teacher = require("../../models/teacher");
const axios = require('axios');
const fs = require('fs');
const OpenAI = require("openai");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports = {
  create,
  remove,
  update,
  getOne,
  getAll,
  removeAI,
};

const openai = new OpenAI(OPENAI_API_KEY);



async function create(req, res) {
  try {
    // try{
    //     if (req.body.image.length < 1) {
    //         const reponse = await openai.images.generate({ prompt: `A medium range (waist and above) realistic portrait style shot of ${req.body.name} capturing their iconic look, with golden hour lighting. 4k` });
    //         const imageUrl = reponse.data[0].url;
    //         const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    //         const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    //         fs.writeFileSync(`${req.body.name}_pic.jpg`, imageBuffer);
    //         req.body.aiImage = `${req.body.name}_pic.jpg`
    //     }
    // } catch (error) {
    //     if (error.response) {
    //       console.log(error.response.status);
    //       console.log(error.response.data);
    //     } else {
    //       console.log(error.message);
    //     }
    //   }
    const teacher = await Teacher.create(req.body);
    res.json(teacher);
  } catch (err) {
    res.status(400).json({"Message": "Image failed"});
  }
}

async function remove(req, res) {
  try {
    const teacher = await Teacher.deleteOne({ _id: req.params.id });
    res.json(teacher);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function removeAI(req, res) {
  try {
    // Delete all documents where the aiImage key exists
    const result = await Teacher.deleteMany({ aiImage: { $exists: true } });
    
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting documents.' });
  }
}

async function update(req, res) {
  try {
    const teacher = await Teacher.updateOne(
      { _id: req.params.id },
      { name: req.body.name }
    );
    res.json(teacher);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getOne(req, res) {
  console.log(req.params.id);
  try {
    const teacher = await Teacher.findById({ _id: req.params.id }).populate(
      "subject"
    );
    res.json(teacher);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAll(req, res) {
  try {
    const teachers = await Teacher.find({}).populate("subject");
    res.json(teachers);
  } catch (err) {
    res.status(400).json(err);
  }
}
