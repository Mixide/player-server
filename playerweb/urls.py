from django.urls import path, include
from rest_framework.routers import DefaultRouter

from playerweb import views
from playerweb import upload

router = DefaultRouter()
router.register('music', views.MusicViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('upload/', upload.upload_file, name='upload_file'),
]