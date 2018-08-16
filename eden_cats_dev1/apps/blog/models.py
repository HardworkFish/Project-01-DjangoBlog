from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

# Create your models here.
# 所有数据库表列 Id 自动创建
# 创建四个表：Category（分类）、Post（文章）、Tag（标签）、Links（友情链接）


class Category(models.Model):
    # 类名
    name = models.CharField(verbose_name='类别', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)


class Tag(models.Model):
    # 标签名
    name = models.CharField(verbose_name='标签名', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)


class Article(models.Model):
    # 文章状态
    STATUS_CHOICES = (
        ('draft', '草稿'),
        ('publish', '发表'),
    )
    # 文章标题
    title = models.CharField(verbose_name='标题', max_length=100)
    # 文章正文内容
    body = models.TextField(verbose_name='正文', blank=True, null=True)
    # 文章创建时间
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    # 文章发布时间
    public_time = models.DateTimeField(verbose_name='发布时间', blank=True, null=True)
    # 文章最后一次修改时间
    modified_time = models.DateTimeField(verbose_name='修改时间', default=now)
    # 文章字数
    words = models.PositiveIntegerField(verbose_name='文章字数', default=0)
    # 文章阅读时长
    time = models.DateTimeField(verbose_name='阅读时长', default=0)
    # 文章阅读量
    views = models.PositiveIntegerField(verbose_name='访问量', default=0)
    # 文章标语 slogan blank=True 表示数值可为空
    slogan = models.TextField(verbose_name='标语', blank=True, null=True)
    # 文章摘要
    excerpt = models.CharField(max_length=200, blank=True)
    # 文章与分类的关联,多对一
    category = models.ForeignKey(Category, verbose_name='分类', on_delete=models.CASCADE, blank=False, null=False)
    # 文章与标签的关联，多对多
    tag = models.ManyToManyField(Tag, verbose_name='标签', blank=True)
    # 文章与作者的关系，多对一
    author = models.ForeignKey(User, verbose_name='作者', on_delete=models.CASCADE, blank=False, null=False)

    # 更新文章浏览量
    def viewed(self):
        self.views += 1
        self.save(update_fields=['views'])

    # 上一篇
    # id 比当前 id 小，状态为已发布， 发布内容不为空
    def last_article(self):
        return Article.objects.filter(id__lt=self.id, status='public', public_time__isnull=False).first()

    def next_article(self):
        return Article.objects.filter(id__gt=self.id, status='public', public_time__isnull=False).first()

    class Meta: # 按文章创建日期降序排序
        ordering = ['-pub_time'] 
        verbose_name = '文章' # 指定后台显示模型名称
        verbose_name_plural = '文章列表' # 指定后台显示模型复数名称
        db_table = 'article' #数据库表
        get_latest_by = 'created_time'
