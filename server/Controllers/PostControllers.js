const mongoose = require('mongoose');
const Memories = require('../Models/PostModels');

const postControllers = {};
postControllers.updatePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('your id not valid');
    }
    const data = req.body;
    try {
        const updatedPostData = await Memories.findByIdAndUpdate(
            _id,
            { ...data, _id },
            { new: true }
        );
        res.status(201).send(updatedPostData);
        console.log(updatedPostData);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

postControllers.createPost = async (req, res) => {
    const data = req.body;
    const newMemories = new Memories(data);
    try {
        const postData = await newMemories.save();
        res.status(201).send(postData);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

postControllers.getPostData = async (req, res) => {
    try {
        const postData = await Memories.find();
        res.send(postData);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

module.exports = postControllers;
