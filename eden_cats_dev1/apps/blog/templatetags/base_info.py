from django import template
from apps.blog.models import ColumnCategory, Article, Category, Tag, BaseInfo, FriendsLinks
from eden_cats_dev1.settings import MEDIA_URL
from django.db import models
register = template.Library()


@register.simple_tag
def get_column_info():
    return ColumnCategory.objects.all()


@register.simple_tag
def get_media_path():
    return MEDIA_URL


#  统计文章信息
@register.simple_tag
def get_total_article():
    return Article.objects.all()


# 统计分类信息
@register.simple_tag
def get_total_category():
    return Category.objects.all()


# 统计标签信息
@register.simple_tag
def get_total_tag():
    return Tag.objects.all()


# 设置用户基本显示信息
@register.simple_tag
def get_base_info():
    return BaseInfo.objects.all()


# 获取友情链接
@register.simple_tag
def get_friends_links():
    return FriendsLinks.objects.filter(status='show')
