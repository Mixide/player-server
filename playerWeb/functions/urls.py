from django.urls import path, include
from rest_framework.routers import DefaultRouter

from playerWeb import views
from playerWeb.functions import upload,delete

router = DefaultRouter()
router.register('music', views.MusicViewSet)
router.register('user', views.UserApi, basename='userapi')
router.register('discover', views.Discover, basename='discoverapi')
urlpatterns = [
    path('', include(router.urls)),
    path('uploadmusic/', upload.upload_music, name='upload_music'),
    path('uploadimage/', upload.upload_image, name='upload_image'),
    path('deletemusic/', delete.delete_music, name='delete_music')
]