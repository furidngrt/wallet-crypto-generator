document.getElementById('generateWallet').addEventListener('click', async function() {
    const response = await fetch('/api/generate-wallet');
    const wallet = await response.json();
    
    document.getElementById('address').innerText = wallet.address;
    document.getElementById('privateKey').innerText = wallet.privateKey;
    document.getElementById('walletInfo').style.display = 'block';
});
