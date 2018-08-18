from django.shortcuts import render
from apps.blog.models import Article
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import Http404
from django.conf import settings
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'index.html', context={
        'title': '我的博客首页',
        'welcome': '欢迎访问我的博客首页'
    })


# 主页
def home(request):
    posts = Article.objects.all()   # 获取主页的全部 Article 对象
    paginator = Paginator(posts, settings.PAGE_NUM)  # 每页显示数量，对应settings.py中的PAGE_NUM
    page = request.GET.get('page')  # 获取URL中page参数的值
    try:
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)
    return render(request, 'home.html')


# 文章详情页
def detail(request, id):
    try:
        post = Article.objects.get(id=str(id))
        post.viewed()  # 更新文章浏览次数
        tags = post.tags.all()  #获取文章对应的所有标签
    except Article.DoesNotExist:
        raise Http404
    return render(request, 'post.html', {'post': post, 'tags': tags})


