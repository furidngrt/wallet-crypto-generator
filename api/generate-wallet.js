const { ethers } = require('ethers');

module.exports = (req, res) => {
    const wallet = ethers.Wallet.createRandom();
    res.json({
        address: wallet.address,
        privateKey: wallet.privateKey
    });
};
