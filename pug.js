const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/about', (req, res) => {
    res.render('about', {name: 'Violeta'});
});

app.listen(3000, () => console.log('Server ready'));