sudo docker container run -it --rm \
-v /docker-volumes/pwp/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/pwp/etc/lib/letsencrypt:/var/lib/letsencrypt \
-v $(pwd)/public_html:/data/letsencrypt \
-v "/docker-volumes/pwp/var/log/:/var/log/letsencrypt" \
certbot/certbot \
certonly --webroot \
--webroot-path=/data/letsencrypt \
--agree-tos  --no-eff-email \
--email jlmathieus@gmail.com
-d mariposabeautyabq.com -d www.mariposabeautyabq.com