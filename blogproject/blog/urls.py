# blog/urls.py
# 注意这里网址是用正则表达式写的，Django 会用这个正则表达式去匹配用户实际输入的网址，如果匹配成功，就会调用其后面的视图函数做相应的处理。
# 比如说我们本地开发服务器的域名是 http://127.0.0.1:8000，那么当用户输入网址 http://127.0.0.1:8000 后，Django 首先会把协议 http、域名 127.0.0.1 和端口号 8000 去掉，此时只剩下一个空字符串，而 r'^$' 的模式正是匹
# 配一个空字符串（这个正则表达式的意思是以空字符串开头且以空字符串结尾），于是二者匹配，Django 便会调用其对应的 views.index 函数。

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]