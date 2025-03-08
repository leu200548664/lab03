/***********************************************************
* index.js 
* Description: Server to execute basic calculations
* Date: 03/07/2025
* Students: Leonardo Mendonça / Werner Hansen
************************************************************/

// instance connect
const connect = require('connect');
const url = require('url');

// function to calculation
function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;

    if (isNaN(x) || isNaN(y)) {
        res.end('Invalid numbers. Please provide valid x and y values.');
        return;
    }

    switch (method) {
        case 'add':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case 'subtract':
            result = `${x} - ${y} = ${x - y}`;
            break;
        case 'multiply':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Division by zero is not allowed.');
                return;
            }
            result = `${x} / ${y} = ${x / y}`;
            break;
        default:
            res.end('Invalid method. Please use add, subtract, multiply, or divide.');
            return;
    }

    res.end(result);
}

const app = connect();
app.use('/lab3', calculate);

// Starting server port 3000.
const http = require('http');
http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000/lab3');
});
