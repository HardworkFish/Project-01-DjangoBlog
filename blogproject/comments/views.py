from django.shortcuts import render, get_object_or_404, redirect
from blog.models import Post
from .models import Comment
from .forms import CommentForm

# Create your views here.
# redict 对 HTTP 请求进行重定向 

def post_comment(request,post_pk):
    post = get_object_or_404(Post,pk=post_pk) # 如果文章详情页面出现错误，自动返回 404 页面
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid(): # 自动检查用户评论格式正误
            comment = form.save(commit=False)  # commit=False利用表单的数据生成 Comment 模型类的实例，不保存评论数据到数据库。
            comment.post = post
            comment.save()
            return redirect(post)
        else:
            comment_list = post.comment_set.all() # 反向查询全部评论
            context = {'post':post,
                       'form':form,
                       'comment_list':comment_list
                       }
            return render(request,'blog/detail.html',context=context)
    return redirect(post)

