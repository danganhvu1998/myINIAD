from django.db import models

class Diary(models.Model):
    title = models.CharField(max_length=256)