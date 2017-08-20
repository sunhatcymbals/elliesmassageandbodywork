# Ellies Massage & Bodywork

## Server Installation Instructions

```bash
sudo apt-get update # updates your package manager
sudo apt-get install nginx # installs a web server (nginx) for request routing
sudo ufw allow 'Nginx HTTP' # allow port 80
sudo ufw allow 'Nginx HTTPS' # allow port 443
sudo ufw enable # turn on firewall (in case it is off)
sudo vim /etc/nginx/sites-enabled/default # edit the config file for your nginx server
```

### NGINX config file
* located at /etc/nginx/sites-enabled/default
```nginx
server {
	listen 80 default_server;
	#listen [::]:80 default_server;
	root /home/Ellie/elliesmassageandbodywork/public;

	# Add index.php to the list if you are using PHP
	index index.html index.htm index.nginx-debian.html;

	#server_name 35.199.185.125;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}
}
```

```bash
sudo service nginx restart # to let nginx changes take effect
```

## Domain (DNS) Setup
1. go to [google domains](https://domains.google.com/registrar)
2. select `DNS`
3. add your server IP address to the `registered hosts` and `custom resource records` sections
4. wait a few minutes for changes to propagate

## Making changes to your code
1. commit your code changes and push to the remote repo
```bash
git add --all
git commit -m "some stuff changed"
git push
```

2. log into your server
```bash
gcloud compute --project "groovy-momentum-177320" ssh --zone "us-west1-b" "ellie-mae-server"
```

3. navigate to your website directory
```bash
cd ./elliesmassageandbodywork
```

4. pull your new changes in
```
git pull
```
