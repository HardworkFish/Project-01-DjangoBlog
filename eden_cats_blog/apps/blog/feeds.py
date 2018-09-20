from django.contrib.syndication.views import Feed
from django.urls import reverse
from apps.blog.models import Article


class BlogRssFeed(Feed):
    title = "Eden's Cats"
    link = "/rss/"

    def items(self):
        return Article.objects.all()

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.content

    def item_link(self, item):
        return reverse('detail', args=[item.id])




