from django.urls import path, include
from rest_framework.routers import DefaultRouter

from playerWeb import views
from playerWeb.functions import upload

router = DefaultRouter()
router.register('music', views.MusicViewSet)
router.register('user', views.UserApi, basename='userapi')
urlpatterns = [
    path('', include(router.urls)),
    path('upload/', upload.upload_file, name='upload_file'),
]