from django.db import models
import datetime

class Diary(models.Model):
    title = models.CharField(max_length=256)
    content = models.TextField(default="Today is a great day of my life")
    date = models.DateTimeField(default=datetime.datetime.now)