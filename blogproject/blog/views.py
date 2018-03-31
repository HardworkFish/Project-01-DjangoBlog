# blig/views.py

from django.shortcuts import render
from .models import Post

# 它首先接受了一个名为 request 的参数，这个 request 就是 Django 为我们封装好的 HTTP 请求，
# 它是类 HttpRequest 的一个实例。然后我们便直接返回了一个 HTTP 响应给用户，这个 HTTP 响应
# 也是 Django 帮我们封装好的，它是类 HttpResponse 的一个实例，只是我们给它传了一个自定义的字
# 符串参数。

#浏览器接收到这个响应后就会在页面上显示出我们传递的内容 ：欢迎访问我的博客首页！



"""
请使用下方的模板引擎方式。
def index(request):
    return HttpResponse("欢迎访问我的博客首页！")
"""

"""
请使用下方真正的首页视图函数
def index(request):
    return render(request, 'blog/index.html', context={
        'title': '我的博客首页',
        'welcome': '欢迎访问我的博客首页'
    })
"""


def index(request):
    post_list = Post.objects.all().order_by('-created_time')
    return render(request, 'blog/index.html', context={'post_list': post_list})


