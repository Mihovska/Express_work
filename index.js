const express = require('express');
const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/', (req, res) => res.json({ username: 'Flavio' }));

app.get('/uppercase/:theValue', (req, res) => res.send(req.params.theValue.toUpperCase()));




app.listen(3000, () => console.log('Server ready'));