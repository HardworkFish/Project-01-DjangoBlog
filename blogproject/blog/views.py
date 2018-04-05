# blig/views.py

from django.shortcuts import render,get_object_or_404
from .models import Post, Category
from comments.forms import CommentForm
import markdown

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
    post_list = Post.objects.all()
    return render(request, 'blog/index.html', context={'post_list': post_list})

# 根据从 URL 捕获的文章 id（也就是 pk，这里 pk 和 id 是等价的）获取数据库中文章 id 为该值的记录，然后传递给模板。注意这里我们用到了从 django.shortcuts 模块导入的 get_object_or_404 方法，其作用就是当传入的 pk 对应的 Post 在数据库存在时，就返回对应的 post，如果不存在，就给用户返回一个 404 错误，表明用户请求的文章不存在。

def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc',
                                  ])
    form = CommentForm() # 创建表单对象
    comment_list = post.comment_set.all() # 获取文章 post 下的全部评论
    # 将文章、表单、以及文章下的评论列表作为模板变量传给 detail.html 模板，以便于渲染相应数据
    # 将文章、表单、以及文章下的评论列表作为模板变量传给 detail.html 模板，以便渲染相应数据。
    context = {'post': post,
               'form': form,
               'comment_list': comment_list
               }
    return render(request, 'blog/detail.html', context=context)

# 归档和分类视图中，使用 filter 来根据条件过滤
def archives(request, year, month):
    post_list = Post.objects.filter(created_time__year=year,
                                    created_time__month=month
                                    )
    return render(request, 'blog/index.html', context={'post_list': post_list})

# 根据传入的 pk 值（也就是被访问的分类的 id 值）从数据库中获取到这个分类
# 通过 filter 函数过滤出了该分类下的全部文章。同样也和首页视图中一样对返回的文章列表进行了排序。
def category(request, pk):
    cate = get_object_or_404(Category, pk=pk)
    post_list = Post.objects.filter(category=cate)
    return render(request, 'blog/index.html', context={'post_list': post_list})

