from datetime import datetime
from django.conf import settings
from django.db import models

class Post(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  title = models.CharField(max_length=50)
  body = models.TextField()
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(blank=True, null=True)

  def save(self):
    if self.pk:
      self.updated = datetime.now()

    super().save()
