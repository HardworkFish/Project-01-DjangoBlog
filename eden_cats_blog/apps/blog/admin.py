from django.contrib import admin
from .models import Category, Tag, Article, About, Column, ColumnCategory, FriendsLinks, BaseInfo,VisitCount, UserIp, User
from django.db import models
from mdeditor.widgets import MDEditorWidget
# from mptt.admin import MPTTModelAdmin
# from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


admin.site.register(Category)
admin.site.register(Tag)
# admin.site.register(Article)


# class PostAdmin(SummernoteModelAdmin):
#     summernote_fields = ('content', )  # 给 content 字段添加富文本

# admin.site.register(Article, PostAdmin)

class ExampleModelAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': MDEditorWidget}
    }

# admin.site.register(About, PostAdmin)
# admin.site.register(About)
admin.site.register(About, ExampleModelAdmin)
# admin.site.register(Article, ExampleModelAdmin)


class ArticleAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': MDEditorWidget}
    }
    list_display = ('id', 'title', 'author', 'created_time', 'category', 'column')
    # list_per_page设置每页显示多少条记录，默认是100条
    list_per_page = 50
    # ordering设置默认排序字段，负号表示降序排序
    ordering = ('-public_time',)
    # list_editable 设置默认可编辑字段
    list_editable = ['category', 'column', ]
    # 主要常用的3个后台筛选器
    list_filter = ('title', 'public_time', 'author', 'category')  # 过滤器
    # search_fields = ('title', 'content', 'category')  # 搜索字段
    date_hierarchy = 'public_time'  # 详细时间分层筛选
    # 设置哪些字段可以点击进入编辑界面
    list_display_links = ('id', 'title')

admin.site.register(Article, ArticleAdmin)


# class CountsAdmin(admin.ModelAdmin):
#     list_display = ['blog_nums', 'category_nums', 'tag_nums', 'visit_nums']
#
# admin.site.register(Counts, CountsAdmin)

class ColumnCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_time')

admin.site.register(ColumnCategory, ColumnCategoryAdmin)


class ColumnAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_time', 'category')
    list_editable = ['category', ]

admin.site.register(Column, ColumnAdmin)

admin.site.register(BaseInfo)
admin.site.register(FriendsLinks)
admin.site.register(UserIp)
admin.site.register(VisitCount)
admin.site.register(User)
