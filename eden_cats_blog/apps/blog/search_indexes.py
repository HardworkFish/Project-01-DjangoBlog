from haystack import indexes
from apps.blog.models import Article


class BlogIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)

    def get_model(self):
        return Article

    def index_queryset(self, using=None):
        return self.get_model().objects.all().filter(status='publish', public_time__isnull=False)

