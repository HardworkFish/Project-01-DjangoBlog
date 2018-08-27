from django import template
from apps.blog.models import ColumnCategory
register = template.Library()


@register.simple_tag
def get_column_info():
    return ColumnCategory.objects.all()