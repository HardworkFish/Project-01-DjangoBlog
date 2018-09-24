FROM nginx:alpine

EXPOSE 80 8088

ADD nginx.conf  /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf && mkdir -p /usr/share/nginx/html/static &&  mkdir -p /usr/share/nginx/html/media
