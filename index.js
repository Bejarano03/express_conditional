const express = require('express');
const app = express();
const port = 3000;

function randomNum(max) {
    return Math.floor(Math.random() * max);
}

app.get('/foo', (req, res) => {
    let num = randomNum(2);
    console.log(num)
    if (num === 1) {
        res.send('sometimes this');
    }
    else {
        res.send('and sometimes that');
    }
});

app.get('*', (req, res) => {
    res.send('404 - Not Found')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});