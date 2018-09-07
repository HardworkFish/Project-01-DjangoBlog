from django.conf.urls import url
from . import views
from django.urls.conf import re_path

app_name = 'easy_comment'
urlpatterns = [
    re_path(r'^post/(?P<id>[0-9]+)/submit-comment/$', views.submit_comment, name='submit_comment'),
    re_path(r'^comment/like/$', views.like, name='like'),
]

