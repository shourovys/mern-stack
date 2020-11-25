const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRouter = require('./Routers/PostRouters');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// eslint-disable-next-line prettier/prettier
const url = 'mongodb+srv://readRight:readRight@cluster0.vb8a7.mongodb.net/datastore?retryWrites=true&w=majority';

mongoose
    .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(port, () => console.log(`your app is listen on ${port}`)))
    .catch((err) => console.log(err));

app.use('/posts', postRouter);
