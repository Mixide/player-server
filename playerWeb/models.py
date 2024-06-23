from django.db import models


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
    username = models.CharField(max_length=10,default="test")
    password = models.CharField(max_length=10,default="password")
    photo = models.URLField(max_length=256, blank=True)
