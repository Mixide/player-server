from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request
from playerweb.models import Music,RelUserMusic,User
from playerweb.serializer import MusicSerializer,UserSerializer


class MusicViewSet(viewsets.ModelViewSet):
    queryset = RelUserMusic.objects.all()
    serializer_class = MusicSerializer

    def list(self, request):
        userid = request.GET.get('userid', None)
        if userid:
            musicid = [item['musicid'] for item in list(self.queryset.filter(userid=userid).values('musicid'))]
        print(musicid)
        self.queryset = Music.objects.filter(id__in=musicid)
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data)

class UserApi(viewsets.ViewSet):
    # 只有两个参数，默认路由后缀为方法名，可以添加第三个参数url_path='login'指定
    @action(methods=['post'], detail=False)
    def login(self, request):
        # 对象使用.获取，字典使用['key']获取
        password = User.objects.filter(username=request.data['username']).first().password
        result = {
            "code": 200,
            "msg": "登录成功",
            "userinfo":"",
        }
        if password == request.data['password']:
            serializer = UserSerializer(User.objects.filter(username=request.data['username']).first())
            result['userinfo'] = serializer.data
            return Response(result)
        else:
            result['msg'] = "登陆失败，请检查用户名和密码"
            result['code'] = -1
            return Response(result)
    
    @action(methods=['post'], detail=False)
    def register(self, request):
        username = request.data['username']
        password = request.data['password']
        User.objects.create(username=username, password=password)
        result = {
            "code": 200,
            "msg": "注册成功",
            "body": ""
        }
        return Response(result)
