from django.db import models
from django.conf import settings
from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.


class Message(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=50, blank=True, null=True)
    content = models.TextField(max_length=280, verbose_name='留言')
    submit_date = models.DateTimeField(auto_now_add=True, verbose_name='提交时间')

    class Meta:
        ordering = ['-submit_date']
        verbose_name = '留言'  # 指定后台显示模型名称
        verbose_name_plural = '留言列表'  # 指定后台显示模型复数名称
        db_table = 'message'  # 数据库表

    def __str__(self):
        return '%s 留言: %s' % (self.user_name, self.content)

