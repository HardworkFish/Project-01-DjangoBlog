# Generated by Django 2.0.5 on 2018-08-19 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20180818_1742'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='excerpt',
            field=models.CharField(blank=True, max_length=500, verbose_name='文章摘要'),
        ),
        migrations.AlterField(
            model_name='article',
            name='time',
            field=models.PositiveIntegerField(default=0, verbose_name='阅读时长'),
        ),
    ]