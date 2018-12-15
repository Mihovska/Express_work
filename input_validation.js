const express = require('express');
const app = express();
const { check } = require('express-validator/check');

app.use(express.json());

app.post('/form', [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
], 
(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
});


// Default error overridden
app.post('/form', [
    check('name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 10 })
        .withMessage('Must be at least 10 chars long')
], 
(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
});






// Use custom validator
// app.post('/form', [
//     check('name').isLength({ min: 3 }),
//     check('email').custom(email => {
//         if (alreayHaveEmail(email)){
//             throw new Error('Email already registered');
//         }
//     })
// ], 
// (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const age = req.body.age;
// });