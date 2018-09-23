FROM alpine:latest AS builder

LABEL maintainer = "TRsky <625310581@qq.com>"

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \ 
        apk update && apk add --no-cache git && rm -rf /var/cache/apk/* && \
	git clone https://github.com/HardworkFish/Project-01-DjangoBlog.git

FROM alpine:latest

COPY ./pip.conf /root/.pip/pip.conf
COPY --from=builder /Project-01-DjangoBlog/eden_cats_blog /var/www/eden_cats_blog
COPY ./settings.py /var/www/eden_cats_blog/eden_cats_blog/settings.py

ENV LIBRARY_PATH=/lib:/usr/lib

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk update && apk add build-base python3-dev py3-cryptography make py3-pip jpeg-dev zlib-dev libffi-dev openssl-dev linux-headers ca-certificates gcc && \
    pip3 install --upgrade pip && pip3 install -r requirements.txt 

RUN pip3 install gunicorn
    
CMD gunicorn eden_cats_blog.wsgi:application -b 0.0.0.0:8088 --reload



