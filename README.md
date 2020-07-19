### 1. Add the following lines into `/etc/hosts`

```
127.0.0.1   www.pob.com pob.com api.pob.com
```

### 2. Replace `/etc/nginx/sites-available/default` file with:

```
# Client side
server {
	listen 80;
	listen [::]:80;

	server_name www.pob.com pob.com;

	location / {
		proxy_pass http://127.0.0.1:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}

}

# Server side
server {
	listen 80;
	listen [::]:80;

	server_name api.pob.com;

	location / {
		proxy_pass http://127.0.0.1:4000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}

}

```

Then, run these commands

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Note: nginx simple guide: https://medium.com/moving-cubes/guide-set-up-open-source-ssl-for-nginx-on-linux-726867d11b6
