from django.urls import path, include
from rest_framework import routers
from .views import (
    CommentViewSet,
    PostViewSet,
)

# Blog API
router = routers.DefaultRouter()
router.trailing_slash = '/?'

router.register(r'blog/comments', CommentViewSet)
router.register(r'blog/posts', PostViewSet)
