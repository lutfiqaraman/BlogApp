module.exports = app => {
    const article = require('../controllers/articles.controller');

    app.get("/", (req, res) => {
        res.send('articles backend server ...');
    });
}