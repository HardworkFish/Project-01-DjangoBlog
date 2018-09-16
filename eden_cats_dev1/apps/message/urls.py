from django.conf.urls import url
from . import views
from django.urls.conf import path, re_path

app_name = 'message'
urlpatterns = [
    # re_path(r'^submit-comment/$', views.submit_message, name='submit_message'),
    path('messages/', views.submit_message, name='submit_message'),
    path('delete_message/', views.delete_message, name='delete_message')
]

