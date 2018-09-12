from django.forms import ModelForm
from .models import User


class UserDetailForm(ModelForm):
    class Meta:
        # 关联数据库模型，此处为用户模型
        model = User
        # 前端显示、可以修改的字段
        fields = ('nickname', 'qq', 'url', 'avatar')
