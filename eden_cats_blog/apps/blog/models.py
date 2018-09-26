from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now
from mdeditor.fields import MDTextField
from django.urls import reverse
# Create your models here.
# 所有数据库表列 Id 自动创建
# 创建四个表：Category（分类）、Post（文章）、Tag（标签）、Links（友情链接）


from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


# 用户模型.
# 第一种：采用的继承方式扩展用户信息（本系统采用）
# 扩展：关联的方式去扩展用户信息

class User(AbstractUser):
    nickname = models.CharField(max_length=30, blank=True, null=True, verbose_name='昵称')
    qq = models.CharField(max_length=20, blank=True, null=True, verbose_name='QQ号码')
    url = models.URLField(max_length=100, blank=True, null=True, verbose_name='个人网页地址')
    avatar = ProcessedImageField(upload_to='avatar',
                                 default='avatar/default.jpg',
                                 verbose_name='头像',
                                 #图片将处理成85x85的尺寸
                                 processors=[ResizeToFill(85, 85)],
                                 format='JPEG',
                                 options={'quality': 60})

    class Meta:
        # db_table = 'user'
        verbose_name = '用户'
        verbose_name_plural = verbose_name
        ordering = ['-id']

    def __str__(self):
        return self.username


# 访问网站 ip 地址和次数
class UserIp(models.Model):
    ip = models.CharField(verbose_name='IP地址', max_length=50)  # ip地址
    count = models.PositiveIntegerField(verbose_name='访问次数', default=0)  # 该 ip 访问次数
    visit_time = models.DateField(verbose_name='最近访问时间',blank=True, null=True, default=now)

    def __str__(self):
        return self.ip

    class Meta:
        verbose_name = '访问用户信息'
        verbose_name_plural = '访问用户列表'


# 网站访问总次数
class VisitCount(models.Model):
    count = models.PositiveIntegerField(verbose_name='网站访问总次数', default=0)  # 网站访问总次数

    def __str__(self):
        return str(self.count)

    class Meta:
        verbose_name = '网站访问总次数'
        verbose_name_plural = verbose_name


class About(models.Model):
    # 信息模块：如关于我，关于博客
    title = models.CharField(verbose_name='信息板块标题', max_length=100)
    # 板块内容
    content = MDTextField(verbose_name='详细内容', blank=True)
    # content = models.TextField(verbose_name='详细信息', blank=True, null=True)
    # priority
    priority = models.PositiveIntegerField(verbose_name='优先级', default=10000)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['priority']
        verbose_name = 'About'
        verbose_name_plural = 'About模块列表'
        db_table = 'about'


# 设置页面基本信息
class BaseInfo(models.Model):
    website_title = models.CharField(verbose_name='网站名称', max_length=300, blank=True, null=True)
    small_website_title = models.CharField(verbose_name='网站小标题', max_length=300, blank=True, null=True)
    avatar = models.ImageField(upload_to='avatar', blank=True, null=True)
    user_name = models.CharField(verbose_name='用户昵称', max_length=100)
    slogan = models.TextField(verbose_name='用户标语', blank=True, null=True)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    modified_time = models.DateField(verbose_name='修改时间', default=now)

    def __str__(self):
        return '用户基本信息'

    class Meta:
        ordering = ['created_time']
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息设置'
        db_table = 'base_info'


# 设置友情链接
class FriendsLinks(models.Model):
    # 文章状态
    STATUS_CHOICES = (
        ('hide', '隐藏'),
        ('show', '显示'),
    )
    name = models.CharField(verbose_name='网站名称', max_length=100)
    url = models.CharField(verbose_name='链接地址', max_length=300)
    remark = models.TextField(verbose_name='备注信息', blank=True, null=True)
    created_time = models.DateField(verbose_name='创建时间', default=now)
    # 友情链接状态
    status = models.CharField(verbose_name='显示状态', max_length=10, choices=STATUS_CHOICES, default='hide')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = '友情链接'
        verbose_name_plural = '友情链接列表'
        db_table = 'friend_links'


# 类名
class Category(models.Model):
    name = models.CharField(verbose_name='类别', max_length=100, unique=True)
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
    name = models.CharField(verbose_name='标签名', max_length=100, unique=True)
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
    name = models.CharField(verbose_name='专栏类别', max_length=100, unique=True)
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
    name = models.CharField(verbose_name='博客专栏', max_length=100, unique=True)
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
    # 文章状态
    status = models.CharField(verbose_name='文章状态', max_length=10, choices=STATUS_CHOICES, default='publish')
    # 文章创建时间
    created_time = models.DateTimeField(verbose_name='创建时间', default=now)
    # 文章发布时间
    public_time = models.DateTimeField(verbose_name='发布时间', blank=True, null=True)
    # 文章最后一次修改时间
    modified_time = models.DateTimeField(verbose_name='修改时间', default=now)
    # 文章标题
    title = models.CharField(verbose_name='标题', max_length=100)
    # 文章标语 slogan blank=True 表示数值可为空
    slogan = models.CharField(verbose_name='标语', blank=True, null=True, max_length=300)
    # 文章摘要
    digest = MDTextField(verbose_name='文章摘要', max_length=500, blank=True)  # blank 为 True，字段可以为空
    # 文章正文内容
    # content = models.TextField(verbose_name='正文', blank=True, null=True)
    content = MDTextField(verbose_name='正文', blank=True, null=True)
    # 文章字数
    words = models.PositiveIntegerField(verbose_name='文章字数', default=0)
    # 文章阅读时长
    time = models.PositiveIntegerField(verbose_name='阅读时长', default=0)
    # 文章阅读量
    views = models.PositiveIntegerField(verbose_name='访问量', default=0)
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

    # 文章绝对路径
    def get_absolute_url(self):
        return reverse('apps.blog:detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.title

    class Meta:  # 按文章创建日期降序排序
        ordering = ['-public_time']
        verbose_name = '文章'  # 指定后台显示模型名称
        verbose_name_plural = '文章列表'  # 指定后台显示模型复数名称
        db_table = 'article'  # 数据库表
        get_latest_by = 'created_time'

