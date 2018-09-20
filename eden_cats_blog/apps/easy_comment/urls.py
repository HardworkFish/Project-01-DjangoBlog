from django.conf.urls import url
from . import views
from django.urls.conf import re_path
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required

app_name = 'easy_comment'
urlpatterns = [
    re_path(r'^post/(?P<id>[0-9]+)/submit-comment/$', views.submit_comment, name='submit_comment'),
    re_path(r'^comment/like/$', views.like, name='like'),
    re_path(r'^post/(?P<post_id>\d+)/favours/$', views.PostFavourView.as_view(), name='post_favour_count'),
    re_path(r'^post/(?P<post_id>\d+)/change-favour/$', require_POST(views.PostFavourView.as_view()), name='post_favour'),
]

