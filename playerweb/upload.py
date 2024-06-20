from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from playerweb.models import Music ,RelUserMusic
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, TIT2, TPE1
import os

@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        file = request.FILES['file']
        userid = request.POST.get('userid')
        file_path = os.path.join('playerweb','static','audio', file.name)
        with open(file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        audio = MP3(file_path, ID3=ID3)

        # 获取歌名和歌手信息
        title = audio.get("TIT2", None)
        artist = audio.get("TPE1", None)

        # 打印歌名和歌手信息
        if title:
            print("歌名:", title.text[0])
        else:
            print("歌名: 未找到")

        if artist:
            print("歌手:", artist.text[0])
        else:
            print("歌手: 未找到")
        
        
        new_music = Music.objects.create(artist=artist.text[0],name=title.text[0],url="http://localhost:8000/static/audio/"+file.name)
        RelUserMusic.objects.create(userid=userid,musicid=new_music.id)
        return HttpResponse(status=200)
    return HttpResponse(status=405)  # Method Not Allowed