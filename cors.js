const express = require('express');
const app = express();
const cors = require('cors');

// Enable All CORS Requests
// app.use(cors());

// app.get('/products/:id', (req, res, next) => {
//     res.json({msg: 'This is CORS-enabled for all origins!'});
// });

// app.listen(80, () => {
//     console.log('CORS-enabled web server listening on port 80');
// });


//Enable CORS for a Single Route

app.get('/products/:id', cors(), function(req, res, next){
    res.json({msg: 'This is CORS-enabled for a single route'});
});

app.listen(80, function(){
    console.log('CORS-enabled web server listening on port 80');
});