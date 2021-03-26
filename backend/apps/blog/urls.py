from django.urls import path, include
from rest_framework import routers
from .views import PostViewSet

# Blog API
router = routers.DefaultRouter()
router.trailing_slash = '/?'

router.register(r'blog/posts', PostViewSet)
