from django import template
from ..forms import MessageForm
from ..models import Message
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage

register = template.Library()


@register.simple_tag
def generate_form_for():
    form = MessageForm()
    return form


@register.simple_tag
def get_messages():
    return Message.objects.all()


@register.simple_tag
def get_message_list_of(request):
    messages = Message.objects.all()

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


