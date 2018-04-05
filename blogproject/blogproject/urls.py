"""blogproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
#from django.conf.urls import url
from django.conf.urls import url, include
from django.contrib import admin

#这里导入了一个 include 函数，然后利用这个函数把 blog 应用下的 urls.py 文件包含了进来。此外 include 前还有一个 r''，
#这是一个空字符串。这里也可以写其它字符串，Django 会把这个字符串和后面 include 的 urls.py 文件中的 URL 拼接。比如说如
#果我们这里把 r'' 改成 r'blog/'，而我们在 blog.urls 中写的 URL 是 r'^$'，即一个空字符串。#那么 Django 最终匹配的就
#是 blog/ 加上一个空字符串，即 blog/

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('blog.urls')),
    url(r'', include('comments.urls')),
]
