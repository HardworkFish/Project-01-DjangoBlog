from django import forms
from .models import Message


class MessageForm(forms.Form):
    content = forms.CharField(widget=forms.Textarea)

