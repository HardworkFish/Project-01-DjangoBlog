FROM ubuntu:18.04
ENV PYTHONBUFFERED 1

ENV LC_CTYPE en_US.UTF-8
ENV LANG en_US.UTF-8

RUN apt-get -y update
RUN apt-get -y upgrade

RUN apt-get install  --no-install-recommends -y language-pack-en

RUN mkdir /eden_cats_blog
#设置工作目录
RUN mkdir /eden_cats_blog/dockermysql

WORKDIR /eden_cats_blog
#将当前目录加入到工作目录中
ADD . /eden_cats_blog/

RUN apt-get install -y python-dev python3-dev python3-pip

RUN pip3 install --upgrade pip

#install any needed pacakges in requirements.txt，你要把所有需要安装的Python模块加到这文件中。

#RUN pip install MySQL-python

ADD requirements.txt /eden_cats_blog/
#RUN pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

RUN pip3 install -r requirements.txt
RUN pip3 install django-mdeditor
RUN pip3 install django-jet
RUN pip3 install django-notifications
RUN pip3 install django-notifications-hq
RUN pip3 install django-allauth
RUN pip3 install django-crispy-forms
#RUN pip3 install django-extensions
RUN pip3 install pilkit
RUN pip3 install django-imagekit
RUN pip3 install pillow

#对外暴露端口
#EXPOSE 80 8088 
#设置环境变量
ENV SPIDER=/eden_cats_blog
