const express = require('express');
const { getPostData, createPost } = require('../Controllers/PostControllers');

const postRouter = express.Router();

postRouter.post('/', createPost);
postRouter.get('/', getPostData);

module.exports = postRouter;
