from rest_framework import viewsets

from playerweb.models import Music
from playerweb.serializer import MusicSerializer


class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer