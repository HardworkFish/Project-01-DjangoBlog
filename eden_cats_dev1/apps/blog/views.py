from django.shortcuts import render
from apps.blog.models import Article, Category, Tag
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.http import Http404
from django.conf import settings
from django.views.generic import ListView, DetailView
# from django.http import HttpResponse
# Create your views here.

categories = Category.objects.all()  # 获取全部分类对象
tags = Tag.objects.all()  # 获取全部的标签对象
months = Article.objects.datetimes('public_time', 'month', order='DESC')


def index(request):
    return render(request, 'index.html', context={
        'title': '我的博客首页',
        'welcome': '欢迎访问我的博客首页'
    })


# 主页
def home(request):
    posts = Article.objects.all().filter(status='public', public_time__isnull=False)   # 获取主页的全部 Article 对象, 状态为已发布，发布时间不为空
    paginator = Paginator(posts, settings.PAGE_NUM, 2)  # 每页显示数量，对应settings.py中的PAGE_NUM， 当只有2时候，合并为上一页
    page = request.GET.get('page')  # 获取URL中page参数的值
    try:
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)
    return render(request, 'home.html', context={'post_list': post_list, 'category_list': categories, 'months': months})


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
        'next_post': next_post,
        'prev_post': prev_post,
        'months': months
    })




# class IndexView(ListView):
#     model = Article
#     template_name = 'home.html'
#     context_object_name = 'post_list'
#     paginate_by = 3
#
#     def get_context_data(self, **kwargs):
#         context = super(IndexView, self).get_context_data(**kwargs)
#         paginator = context.get('paginator')
#         page = context.get('page_obj')
#         is_paginated = context.get('is_paginated')
#
#         pagination_data = self.pagination_data(paginator, page, is_paginated)
#         context.update(pagination_data)
#         return context
#
#     @staticmethod
    # def pagination_data(self, paginator, page, is_paginated):
    #     if not is_paginated:
    #         return {}
    #
    #     当前页左边连续的页码号， 初值为空
        # left = []
        #
        # 右边页码号， 初值为空
        # right = []
        #
        # 判断是否需要省略号
        # left_has_more = False
        #
        # right_has_more = False
        #
        # first = False
        # last = False
        # page_number = page.number
        # total_pages = paginator.num_pages
        # page_range = paginator.page_range
        #
        # if page_number == 1:
        #     right = page_range[page_number:page_number + 2]
        #     if right[-1] < total_pages - 1:
        #         right_has_more = True
        #
        #     if right[-1] < total_pages:
        #         last = True
        # elif page_number == total_pages:
        #     left = page_range[(page_number - 3) if (page_number - 3) > 0 else 0:page_number - 1]
        #
        #     if left[0] > 2:
        #         left_has_more = True
        #
        #     if left[0] > 1:
        #         first = True
        # else:
        #     left = page_range[(page_number - 3) if (page_number - 3) > 0 else 0:page_number - 1]
        #     right = page_range[page_number:page_number + 2]
        #
        #     if right[-1] < total_pages - 1:
        #         right_has_more = True
        #     if right[-1] < total_pages:
        #         last = True
        #
        #     if left[0] > 2:
        #         left_has_more = True
        #     if left[0] > 1:
        #         first = True
        #
        # data = {
        #     'left': left,
        #     'right': right,
        #     'left_has_more': left_has_more,
        #     'right_has_more': right_has_more,
        #     'first': first,
        #     'last': last,
        # }
        #
        # print(data)
    # return data
#