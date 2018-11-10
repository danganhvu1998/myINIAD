from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    posted_at = models.DateTimeField('date published')
    like = models.IntegerField(default=0)
