A simple website that can automatically generate Ethereum wallets using the `ethers.js` library.

You can develop further by adding other features as needed.


#### Deploy on your VPS

```
sudo apt update
sudo apt upgrade
```

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
```

```
sudo npm install -g pm2
```

```
git clone https://github.com/furidngrt/wallet-crypto-generator.git
cd your_repository
```

```
cd your_repository
npm install
```

#### Start app

```
pm2 start app.js
```

```
pm2 startup
pm2 save
```

#### Configurasi Nginx

```
sudo apt install nginx
```

```
sudo nano /etc/nginx/sites-available/default
```

```
server {
    listen 80;

    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```
sudo systemctl restart nginx
```

Now, your Node.js/Express.js application should be accessible through your domain or VPS IP.
