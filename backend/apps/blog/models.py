from datetime import datetime
from django.conf import settings
from django.db import models

class Post(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="posts", on_delete=models.CASCADE)
  title = models.CharField(max_length=50)
  body = models.TextField()
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(blank=True, null=True)

  class Meta:
    ordering = ("-created",)

  def save(self, *args, **kwargs):
    if self.pk:
      self.updated = datetime.now()

    super().save(*args, **kwargs)

class Comment(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="comments", on_delete=models.CASCADE)
  post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
  body = models.TextField()
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(blank=True, null=True)

  class Meta:
    ordering = ("created",)

  def save(self, *args, **kwargs):
    if self.pk:
      self.updated = datetime.now()

    super().save(*args, **kwargs)
