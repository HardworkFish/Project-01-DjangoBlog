from django.db import models
from django.utils.six import python_2_unicode_compatible

# Create your models here.

@python_2_unicode_compatible 
class Comment(models.Model):
    name = models.CharField(max_length=100)  # 评论用用户
    email = models.EmailField(max_length=255)# 用户 Enail
    url = models.URLField(blank=True) # 用户网站
    text = models.TextField() # 用户评论
    created_tye = models.DateTimeField(auto_now_add=True)

    Post=models.ForeignKey('blog.Post')


    def __str__(self):
        return self.text[:20]
