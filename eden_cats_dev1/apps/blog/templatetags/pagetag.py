from django import template
from django.utils.html import format_html
register = template.Library()


@register.filter
def pagination_upper(val):
    print('val from template:', val)
    return val.upper()


@register.simple_tag
def pagination_pages(curr_page, loop_page):
    offset = abs(curr_page - loop_page)
    if offset < 3:
        if curr_page == loop_page:
            page_element = '<span class="page-number current">%s</span>' % loop_page
        else:
            page_element = ' <a class="page-number" href="?page=%s">%s</a>' % (loop_page, loop_page)
        return format_html(page_element)
    else:
        return ''
