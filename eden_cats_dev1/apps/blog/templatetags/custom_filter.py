# -*- coding: utf-8 -*-

import re
import markdown
from django import template
from django.template.defaultfilters import stringfilter
from django.utils.safestring import mark_safe

register = template.Library()  # 自定义filter时必须加上


@register.filter(is_safe=True)  # 注册template filter
@stringfilter                   # 希望字符串作为参数
def custom_markdown(value):
    content = mark_safe(markdown.markdown(value, extensions=['markdown.extensions.fenced_code',
                                                             'markdown.extensions.codehilite',
                                                             'markdown.extensions.tables',
                                                             'markdown.extensions.toc'],
                                          safe_mode=True, enable_attributes=False))

    # Prism 代码高亮查件 需要将所有的
    # markdown转换的代码:<pre><code class="python">import *** </code></pre>
    # 转换为
    # <pre class="line-numbers"><code class="language-python">import *** </code></pre>
    # line-numbers 为显示行号
    # code_list = re.findall(r'<pre><code class="(.*)">', content, re.M)
    # for code in code_list:
    #     content = re.sub(r'<pre><code class="(.*)">',
    #                      '<pre class="line-numbers"><code class="language-{code}">'.format(code=code.lower()), content,
    #                      1)
    # content = re.sub(r'<pre>\s?<code>', '<pre class="line-numbers"><code class="language-python">', content)
    return content


if __name__ == '__main__':
    pass