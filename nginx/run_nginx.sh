#!/usr/bin/env bash
echo Nginx start at $BACK_HOST:$BACK_PORT
export DOLLAR='$'
envsubst < /home_nginx/nginx.conf.$PROTOCOL.template > /etc/nginx/nginx.conf # /etc/nginx/conf.d/default.conf
cat /etc/nginx/nginx.conf
nginx -g "daemon off;"
