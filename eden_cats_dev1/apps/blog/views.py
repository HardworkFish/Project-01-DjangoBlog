from django.shortcuts import render
from apps.blog.models import Article, Category, Tag
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import Http404
from django.conf import settings
from django.db.models import Q
from django.views.generic import ListView, DetailView
# from django.http import HttpResponse
# Create your views here.

categories = Category.objects.all()  # 获取全部分类对象
tags = Tag.objects.all()  # 获取全部的标签对象
months = Article.objects.datetimes('public_time', 'month', order='DESC')
years = Article.objects.datetimes('public_time', 'year', order='DESC')

def index(request):
    return render(request, 'index.html', context={
        'title': '我的博客首页',
        'welcome': '欢迎访问我的博客首页'
    })



# 主页
def home(request):
    posts = Article.objects.all().filter(status='publish', public_time__isnull=False)   # 获取主页的全部 Article 对象, 状态为已发布，发布时间不为空
    paginator = Paginator(posts, settings.PAGE_NUM, 2)  # 每页显示数量，对应settings.py中的PAGE_NUM， 当只有2时候，合并为上一页
    page = request.GET.get('page')  # 获取URL中page参数的值
    try:
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)
    return render(request, 'home.html', context={'post_list': post_list, 'category_list': categories, 'months': months})


# 博客归类页
def category_show(request):
    try:
        posts = Article.objects.all().filter(status='publish', public_time__isnull=False)
    except Category.DoesNotExist:
        return Http404
    return render(request, 'categories.html', {
        'category_list': categories,
        'post_list': posts,
    })


# 文章详情页
def detail(request, id):
    try:
        post = Article.objects.get(id=str(id))
        post.viewed()  # 更新文章浏览次数
        tags = post.tags.all()  # 获取文章对应的所有标签
        next_post = post.next_article()  # 下一篇文章对象
        prev_post = post.prev_article()  # 上一篇文章对象
    except Article.DoesNotExist:
        raise Http404
    return render(request, 'post.html', {
        'post': post,
        'tags': tags,
        'category_list': categories,
        'next_post': next_post,
        'prev_post': prev_post,
        'months': months
    })


# 分类搜索
def search_category(request, id):
    posts = Article.objects.filter(category_id=str(id))
    category = categories.get(id=str(id))
    paginator = Paginator(posts, 8)  # 每页显示数量
    try:
        page = request.GET.get('page')  # 获取 URL 中 Page 的参数值
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)
    return render(request, 'category.html', {
        'post_list': post_list,
        'category_list': categories,
        'category': category,
        'months': months
    })


# 标签云
def tags_cloud(request):
    try:
        posts = Article.objects.all().filter(status='publish', public_time__isnull=False)
    except Tag.DoesNotExist:
        return Http404
    return  render(request, 'tags.html', {
        'tags_list': tags,
        'post_list': posts,
    })


# 标签搜索
def search_tag(request, tag):
    posts = Article.objects.filter(tags__name__contains=tag)
    paginator = Paginator(posts, 10)
    try:
        page = request.GET.get('page')
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)
    return render(request, 'tag.html', {
        'post_list': post_list,
        'category': categories,
        'tag': tag,
        'months': months
    })


def archives(request):
# def archives(request, year, month):
        posts = Article.objects.filter(status='publish', public_time__isnull=False).order_by('-public_time')
        # posts = Article.objects.filter(public_time__year=year, public_time__month=month).order_by('-public_time')
        paginator = Paginator(posts, 8)
        try:
            page = request.GET.get('page')
            post_list = paginator.page(page)
        except PageNotAnInteger:
            post_list = paginator.page(1)
        except EmptyPage:
            post_list = paginator.page(paginator.num_pages)
        return render(request, 'archives.html', {
            'posts': posts,
            'post_list': post_list,
            'category_list': categories,
            'months': months,
            'years': years
            # 'year_month': year + '年' + month + '月'
        })


def search(request):
    q = request.GET.get('q')
    error_message = ''

    if not q:
        error_message = "请输入关键字"
        return render(request, 'search.html', {'error_message': error_message})

    post_list = Article.objects.filter(Q(title__icontains=q) | Q(content__icontains=q))
    return render(request, 'search.html', {
        'error_message': error_message,
        'post_list': post_list,
    })
