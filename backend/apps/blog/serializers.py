from rest_framework import serializers

from .models import (
  Comment,
  Post,
)


class CommentSerializer(serializers.ModelSerializer):
  created = serializers.DateTimeField(
    format='%H:%M %d.%m.%Y',
    read_only=True
  )

  updated = serializers.DateTimeField(
    format='%H:%M %d.%m.%Y',
    read_only=True
  )

  class Meta:
    model = Comment
    fields = ['pk', 'user', 'post', 'body', 'created', 'updated']


class PostSerializer(serializers.ModelSerializer):
  created = serializers.DateTimeField(
    format='%H:%M %d.%m.%Y',
    read_only=True
  )

  updated = serializers.DateTimeField(
    format='%H:%M %d.%m.%Y',
    read_only=True
  )

  class Meta:
    model = Post
    fields = ['pk', 'user', 'title', 'body', 'created', 'updated']
