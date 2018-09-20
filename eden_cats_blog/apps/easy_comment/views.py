from .forms import CommentForm
from .models import Comment, Like
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View
from django.shortcuts import get_object_or_404
from django.contrib.contenttypes.models import ContentType

from .models import Favour
from apps.blog.models import Article
from . import handlers

# Create your views here.


@require_POST
def submit_comment(request, id):
    form = CommentForm(data=request.POST)
    # print(request.POST)
    if form.is_valid():
        # print('success')
        new_comment = form.save(commit=False)
        new_comment.user = request.user
        new_comment.user_name = request.user.username
        new_comment.save()
        location = "#c" + str(new_comment.id)
        return JsonResponse({'msg': 'success!', 'new_comment': location})
    return JsonResponse({'msg': '评论出错!'})


@require_POST
def like(request):
    comment_id = request.POST.get('id')
    action = request.POST.get('action')
    if comment_id and action:
        try:
            comment = Comment.objects.get(id=comment_id)
            obj, created = Like.objects.get_or_create(user=request.user, comment=comment)
            if action == 'like':
                if not created:
                    obj.status = True
                    obj.save()
            if action == 'cancel-like' or action == 'cancel-dislike':
                obj.delete()
            if action == 'dislike':
                obj.status = False
                obj.save()
            return JsonResponse({'msg': 'OK'})
        except Comment.DoesNotExist:
            return JsonResponse({"msg": "KO"})
    return JsonResponse({"msg": "KO"})


@method_decorator(csrf_exempt, name='dispatch')
class PostFavourView(View):

    def post(self, request, post_id):
        post = get_object_or_404(Article, id=post_id)
        post_type = ContentType.objects.get_for_model(post)
        object, created = Favour.objects.get_or_create(content_type=post_type, object_id=post_id, user=request.user)
        action = request.POST.get('action')
        update = 1
        if not created:
            if action == 'like':
                object.liked = True
            else:
                object.liked = False
                update = -1
            object.save()
        count = post.favour_count(update=update)
        return JsonResponse({'count': count})

    def get(self, request, post_id):
        post = get_object_or_404(Article, id=post_id)
        count = post.favours.filter(liked=True).count()
        status = -1
        """
        也可以这样写，需要在post模型里的GenericRelation里添加related_query_name='posts'
        count = Favour.objects.filter(posts__id=post_id, liked=True).count()
        """
        if request.user.is_authenticated:
            user_favour = Favour.objects.filter(posts__id=post_id, user=request.user, liked=True)
            status = 1 if user_favour.exists() else 0
        return JsonResponse({'status': status, 'count': count})
