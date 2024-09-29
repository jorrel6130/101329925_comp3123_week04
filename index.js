// Lab 4
// Jorrel Tigbayan
// 101329925

const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 9925;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1><a href="./hello">Hello</a></h1>
            </body>
        </html>
        `)
})

app.get('/hello', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Hello Express JS!</h1>
                <h2><a href="./user">/user</a></h2>
                <h2><a href="./user?firstname=Jorrel&lastname=Tigbayan">/user?firstname=Jorrel&lastname=Tigbayan</a></h2>
            </body>
        </html>
        `);
})

app.get('/user', (req, res) => {
    
    let firstname = req.query.firstname || "Pritesh";
    let lastname = req.query.lastname || "Patel";

    res.send(`<h1>Hello ${firstname} ${lastname}!</h1>`);

})

app.post('/user/:firstname/:lastname', (req, res) => {
    
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.send(`Hello ${firstname} ${lastname}! POST version`);

})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})