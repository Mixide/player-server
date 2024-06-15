from django.db import models
from django.contrib.auth.models import User as BaseUser
class Music(models.Model):
    id = models.AutoField(primary_key=True)
    artist = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=256)

class RelUserMusic(models.Model):
    userid = models.IntegerField()
    musicid = models.IntegerField()

class User(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    photo = models.URLField(max_length=256, blank=True)
