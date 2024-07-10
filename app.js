require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ethers } = require('ethers');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/generate-wallet', (req, res) => {
    const wallet = ethers.Wallet.createRandom();
    res.json({
        address: wallet.address,
        privateKey: wallet.privateKey
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
