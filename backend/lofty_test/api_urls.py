
from django.urls import include, path
from rest_framework import routers

from apps.blog.urls import router as blog_router
from apps.users.urls import router as user_router


router = routers.DefaultRouter()
router.registry.extend(blog_router.registry)
router.registry.extend(user_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]
