from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    posted_at = models.DateTimeField('date published')
    like = models.IntegerField(default=0)

class Comment(models.Model):
    text = models.TextField()
    posted_at = models.DateTimeField('date published')
    article = models.ForeignKey(Article, related_name="comments", on_delete=models.CASCADE)
