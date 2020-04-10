const express = require('express');
const path = require('path');
const app = express();
const { PORT } = require('./config');

// app.use(express.static(path.join(__dirname, 'build')));
const BASE_URL = process.env.BASE_URL_BACKEND || 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

app.get('/badges', (req, res) => {
    try {
        return callApi('/badges');
    } catch (error) {
        return error;
    }
});

// app.get('/', function (req, res) {
//     app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     })
// })

app.listen(PORT);