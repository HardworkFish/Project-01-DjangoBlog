# blog/urls.py
# 注意这里网址是用正则表达式写的，Django 会用这个正则表达式去匹配用户实际输入的网址，如果匹配成功，就会调用其后面的视图函数做相应的处理。
# 比如说我们本地开发服务器的域名是 http://127.0.0.1:8000，那么当用户输入网址 http://127.0.0.1:8000 后，Django 首先会把协议 http、域名 127.0.0.1 和端口号 8000 去掉，此时只剩下一个空字符串，而 r'^$' 的模式正是匹
# 配一个空字符串（这个正则表达式的意思是以空字符串开头且以空字符串结尾），于是二者匹配，Django 便会调用其对应的 views.index 函数。

from django.conf.urls import url

from . import views

# 当用户访问 <网站域名>/post/1/ 时，显示的是第一篇文章的内容，而当用户访问 <网站域名>/post/2/ 时，显示的是第二篇文章的内容，这里数字代表了第几篇文章，也就是数据库中 Post 记录的 id 值
# 相当于 detail(request, pk=255)

app_name = 'blog'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^archives/(?P<year>[0-9]{4})/(?P<month>[0-9]{1,2})/$', views.archives, name='archives'),
    url(r'^category/(?P<pk>[0-9]+)/$', views.category, name='category'),
]
