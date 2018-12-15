const express = require('express');
const app = express();

app.get('/', (req, res) => res.download('./Invoice_157915096.pdf', 'user-facing-filename.pdf'));

app.listen(3000, () => console.log('Server ready'));