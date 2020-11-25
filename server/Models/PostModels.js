const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    selectedFile: String,
    // tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Memories = mongoose.model('memories', postSchema);
module.exports = Memories;
