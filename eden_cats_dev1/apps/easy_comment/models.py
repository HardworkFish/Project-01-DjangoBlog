from django.db import models
from django.conf import settings
from mptt.models import TreeForeignKey, MPTTModel
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
# Create your models here.

class Favour(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='favours', on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    date_created = models.DateTimeField(auto_now_add=True)
    liked = models.BooleanField(default=True, verbose_name='是否喜欢')

    class Meta:
        ordering = ('-date_created',)
        unique_together = ('user', 'content_type', 'object_id')

    def __str__(self):
        if self.liked:
            return "{} 喜欢了文章 {}|链接：/article/{}/".format(self.user.username, self.content_object.title, self.object_id)
        else:
            return "{} 取消了喜欢文章 {}|链接：/article/{}/".format(self.user.username, self.content_object.title,
                                        self.object_id)


# 评论
class Comment(MPTTModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=50, blank=True, null=True)
    post = models.ForeignKey(settings.COMMENT_ENTRY_MODEL, verbose_name='文章', on_delete=models.CASCADE)
    parent = TreeForeignKey('self', blank=True, null=True, verbose_name='父级评论', on_delete=models.CASCADE)
    content = RichTextUploadingField(verbose_name='评论', config_name='default')
    submit_date = models.DateTimeField(auto_now_add=True, verbose_name='提交时间')

    class MPTTMeta:
        order_insertion_by = ['-submit_date']

    def __str__(self):
        if self.parent is not None:
            return '%s 回复 %s' % (self.user_name, self.parent.user_name)
        return '%s 评论文章 post_%s' % (self.user_name, str(self.post.id))


# 为评论点赞
class Like(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)

    class Meta:
        verbose_name = '点赞'
        verbose_name_plural = verbose_name

    def __str__(self):
        if self.status:
            return '%s 赞了 %s的评论' % (self.user.username, self.comment.user_name)
        return '%s 踩了 %s的评论' % (self.user.username, self.comment.user_name)
