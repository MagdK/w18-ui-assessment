const port = 9000;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const pathToDocs = path.join(__dirname, '../docs');
const pathToPublic = path.join(pathToDocs, 'pub');
const pathToBeers = path.join(pathToPublic, 'data.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(pathToDocs, 'index.html'));
});

// data.json file
app.get('/data', (req, res) => {
    res.sendFile(pathToBeers);
});

app.use('/pub', express.static(pathToPublic));



app.listen(9000, () => {
	console.log(`http://127.0.01:${port}`);
});