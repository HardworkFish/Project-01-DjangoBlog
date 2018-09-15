from django import template
from ..forms import MessageForm
from ..models import Message

register = template.Library()


@register.simple_tag
def generate_form_for():
    form = MessageForm()
    return form


@register.simple_tag
def get_message_list_of():
    return Message.objects.all()


@register.simple_tag
def get_message_user_count(Message):
    user_list = []
    for message in Message.objects.all():
        if not message.user in user_list:
            user_list.append(message.user)
    return len(user_list)


