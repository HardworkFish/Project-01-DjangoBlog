from django.shortcuts import render, reverse
from apps.blog.visit_info import refresh_visit_count  # 当网站被访问，更新网站访问次数
from .models import Message
from django.http import HttpResponse, HttpResponseRedirect
from .forms import MessageForm
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from apps.message import models
# Create your views here.
# 文章详情页

#
# def submit_message(request):
#     refresh_visit_count(request)
#     message = Message.objects.all()
#     paginator = Paginator(message, 15, 2)  # 每页显示数量，对应settings.py中的PAGE_NUM， 当只有2时候，合并为上一页
#     page = request.GET.get('page')  # 获取URL中page参数的值
#     try:
#         message_list = paginator.page(page)
#     except PageNotAnInteger:
#         message_list = paginator.page(1)
#     except EmptyPage:
#         message_list = paginator.page(paginator.num_pages)
#
#     return render(request, 'message/message.html', context={
#         'message_list': message_list,
#
#     })


def submit_message(request):
    message_list = models.Message.objects.all()
    if request.method == 'POST'and request.POST.get("message"):
       content = request.POST.get("message")
       user = request.user
       user_name = request.user.username
       models.Message.objects.create(
           user_name=user_name,
           user=user,
           content=content,
       )
       return render(request, "message/message.html", {'message_list': message_list})
    return render(request, "message/message.html", {'message_list': message_list})


#
# def submit_message(request):
#     if request.method == 'GET':
#         form = MessageForm()
#         message_list = Message.objects.all()
#         return render(request, 'message/message.html', context={
#             'form': form,
#             'message_list': message_list,
#
#         })
#     elif request.method == 'POST':
#         if request.POST['message'] == '':
#             return render(request, "message/message.html", context={'alert': '请输入内容'})
#         else:
#             form = MessageForm(data=request.POST)
#             if form.is_valid():
#                 # new_msg = form.save(content=False)
#                 print("data", form.cleaned_data)
#                 new_msg = Message(content=request.POST['message'], done=False)
#                 new_msg.user = request.user
#                 new_msg.user_name = request.user.username
#                 new_msg.save()
#                 print("yes")
#                 return JsonResponse({'msg': 'success!'})
#
#             return JsonResponse({'msg': '评论出错!'})
#






# def get_content(request):
#     if request.method == 'POST':
#         content = request.POST.get('message', '')
#         # 实例化对象
#         o_message = Message()
#         o_message.text = content
#         # 调用save方法保存数据
#         o_message.save()
#         return HttpResponse('<h2>保存成功！</h2>')
#     else:
#         return render(request, 'message/message.html')