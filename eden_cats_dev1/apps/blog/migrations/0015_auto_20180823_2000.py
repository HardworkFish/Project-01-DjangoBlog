# Generated by Django 2.0.5 on 2018-08-23 12:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_auto_20180823_1954'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='about',
            options={'ordering': ['priority'], 'verbose_name': 'About', 'verbose_name_plural': 'About模块列表'},
        ),
    ]