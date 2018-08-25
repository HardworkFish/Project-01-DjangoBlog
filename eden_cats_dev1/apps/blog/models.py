from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from mdeditor.fields import MDTextField
# Create your models here.
# 所有数据库表列 Id 自动创建
# 创建四个表：Category（分类）、Post（文章）、Tag（标签）、Links（友情链接）


class About(models.Model):
    # 信息模块：如关于我，关于博客
    title = models.CharField(verbose_name='信息板块标题', max_length=100)
    # 板块内容
    content = MDTextField(verbose_name='详细内容', blank=True)
    # content = models.TextField(verbose_name='详细信息', blank=True, null=True)
    # priority
    priority = models.PositiveIntegerField(verbose_name='优先级', default=10000)
    # 图片
    image = models.ImageField(upload_to='photos', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['priority']
        verbose_name = 'About'
        verbose_name_plural = 'About模块列表'
        db_table = 'about'


class Category(models.Model):
    # 类名
    name = models.CharField(verbose_name='类别', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = '类别名称'
        verbose_name_plural = '分类列表'
        db_table = 'category'   # 数据库表名


class Tag(models.Model):
    # 标签名
    name = models.CharField(verbose_name='标签名', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)

    # 使对象在后台显示更加友好
    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = '标签名称'   # 指定后台显示模型名称
        verbose_name_plural = '标签列表'   # 指定后台显示模型复数
        db_table = 'tag'    # 数据库表名

# 一级菜单
class ColumnCategory(models.Model):
    name = models.CharField(verbose_name='专栏类别', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'column_category'
        verbose_name = '专栏类别'
        verbose_name_plural = '专栏分类列表'



class Column(models.Model):
    # 博客专栏
    name = models.CharField(verbose_name='博客专栏', max_length=100)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)
    category = models.ForeignKey(ColumnCategory, verbose_name='专栏列表', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = '专栏名称'
        verbose_name_plural = '专栏列表'
        db_table = 'column'  # 数据库表名


class Article(models.Model):
    # 文章状态
    STATUS_CHOICES = (
        ('draft', '草稿'),
        ('publish', '发表'),
    )
    # 文章标题
    title = models.CharField(verbose_name='标题', max_length=100)
    # 文章正文内容
    # content = models.TextField(verbose_name='正文', blank=True, null=True)
    content = MDTextField(verbose_name='正文', blank=True, null=True)
    # 文章状态
    status = models.CharField(verbose_name='文章状态', max_length=10, choices=STATUS_CHOICES, default='publish')
    # 文章创建时间
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    # 文章发布时间
    public_time = models.DateTimeField(verbose_name='发布时间', blank=True, null=True)
    # 文章最后一次修改时间
    modified_time = models.DateTimeField(verbose_name='修改时间', default=now)
    # 文章字数
    words = models.PositiveIntegerField(verbose_name='文章字数', default=0)
    # 文章阅读时长
    time = models.PositiveIntegerField(verbose_name='阅读时长', default=0)
    # 文章阅读量
    views = models.PositiveIntegerField(verbose_name='访问量', default=0)
    # 文章标语 slogan blank=True 表示数值可为空
    slogan = models.TextField(verbose_name='标语', blank=True, null=True)
    # 文章摘要
    digest = MDTextField(verbose_name='文章摘要', max_length=500, blank=True)  # blank 为 True，字段可以为空
    # 文章与分类的关系,多对一
    category = models.ForeignKey(Category, verbose_name='分类', on_delete=models.CASCADE, blank=False, null=False)
    # 文章与标签的关系，多对多
    tags = models.ManyToManyField(Tag, verbose_name='标签', blank=True)
    # 文章与作者的关系，多对一
    author = models.ForeignKey(User, verbose_name='作者', on_delete=models.CASCADE, blank=False, null=False)
    # 文章专栏 文章与专栏的关系，多对一
    column = models.ForeignKey(Column, verbose_name='专栏', on_delete=models.CASCADE, blank=True, null=True)

    # 更新文章浏览量
    def viewed(self):
        self.views += 1
        self.save(update_fields=['views'])

    # 上一篇
    # id 比当前 id 小，状态为已发布， 发布内容不为空
    def prev_article(self):
        return Article.objects.filter(id__lt=self.id, status='publish', public_time__isnull=False).first()

    # 下一篇
    def next_article(self):  # id比当前id大，状态为已发布，发布时间不为空
        return Article.objects.filter(id__gt=self.id, status='publish', public_time__isnull=False).first()

    def __str__(self):
        return self.title

    class Meta:  # 按文章创建日期降序排序
        ordering = ['-public_time']
        verbose_name = '文章'  # 指定后台显示模型名称
        verbose_name_plural = '文章列表'  # 指定后台显示模型复数名称
        db_table = 'article'  # 数据库表
        get_latest_by = 'created_time'


# 统计博客信息
class Counts(models.Model):
    blog_nums = models.IntegerField(verbose_name='博客数目', default=0)
    category_nums = models.IntegerField(verbose_name='分类数目', default=0)
    tag_nums = models.IntegerField(verbose_name='标签数量', default=0)
    visit_nums = models.IntegerField(verbose_name='网站访问量', default=0)

    class Meta:
        verbose_name = '数目统计'
        verbose_name_plural = verbose_name

