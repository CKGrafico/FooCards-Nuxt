// This file is only for demo purposes
const express = require('express');
const app = express();
const avatarsMiddleware = require('adorable-avatars');

app.get('/', (req, res) => {
    res.json({ it: 'works!' })
})

app.use('/myAvatars', avatarsMiddleware.default);

module.exports = {
    path: '/fakeapi',
    handler: app
}