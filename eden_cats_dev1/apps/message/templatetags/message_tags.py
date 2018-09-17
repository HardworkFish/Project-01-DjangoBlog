from django import template
from ..forms import MessageForm
from ..models import Message
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

register = template.Library()


@register.simple_tag
def generate_form_for():
    form = MessageForm()
    return form

# 所以留言
@register.simple_tag
def get_all_messages():
    return Message.objects.all()

# 私有留言
@register.simple_tag
def get_private_messages():
    return Message.objects.all()


# 公开留言
@register.simple_tag
def get_public_message():
    return Message.objects.all().filter(status='public')


# 私有
@register.simple_tag
def get_private_message_list_of(request):
    messages = Message.objects.all()
    msg_list = []
    for msg in messages:
        if msg.status == 'public':
            msg_list.append(msg)
        elif msg.status == 'hide' and msg.user == request.user:
            msg_list.append(msg)

    paginator = Paginator(msg_list, 8, 2)
    message = request.GET.get('page')
    try:
        message_list = paginator.page(message)
    except PageNotAnInteger:
        message_list = paginator.page(1)
    except EmptyPage:
        message_list = paginator.page(paginator.num_pages)
    return message_list


# 公有
@register.simple_tag
def get_public_message_list_of(request):
    messages = Message.objects.all().filter(status='public')
    paginator = Paginator(messages, 8, 2)
    message = request.GET.get('page')
    try:
        message_list = paginator.page(message)
    except PageNotAnInteger:
        message_list = paginator.page(1)
    except EmptyPage:
        message_list = paginator.page(paginator.num_pages)
    return message_list


@register.simple_tag
def get_message_user_count():
    user_list = []
    for message in Message.objects.all():
        if not message.user in user_list:
            user_list.append(message.user)
    return len(user_list)


