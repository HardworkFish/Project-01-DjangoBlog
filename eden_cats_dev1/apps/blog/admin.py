from django.contrib import admin
from .models import Category, Tag, Article
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.


admin.site.register(Category)
admin.site.register(Tag)
#  admin.site.register(Article)


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content', )  # 给 content 字段添加富文本

admin.site.register(Article, PostAdmin)
