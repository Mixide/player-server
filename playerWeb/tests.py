from django.test import TestCase, Client
from rest_framework.test import APIClient
from playerWeb.models import Music, User, RelUserMusic
from playerWeb.functions.serializer import MusicSerializer, UserSerializer

class MusicViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.music1 = Music.objects.create(name='Music 1')
        self.music2 = Music.objects.create(name='Music 2')
        self.user = User.objects.create(username='testuser', password='testpassword')
        RelUserMusic.objects.create(userid=self.user.id, musicid=self.music1.id)
        RelUserMusic.objects.create(userid=self.user.id, musicid=self.music2.id)

    def test_music_list(self):
        response = self.client.get(f'/api/music/?userid={self.user.id}')
        self.assertEqual(response.status_code, 200)
        data = response.data
        self.assertEqual(len(data), 2)
        self.assertEqual(data[0]['name'], 'Music 1')
        self.assertEqual(data[1]['name'], 'Music 2')

class DiscoverViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.music1 = Music.objects.create(name='Music 1')
        self.music2 = Music.objects.create(name='Music 2')

    def test_discover_list(self):
        response = self.client.get('/api/discover/')
        self.assertEqual(response.status_code, 200)
        data = response.data
        self.assertEqual(len(data), 2)

class UserApiTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create(username='testuser', password='testpassword')

    def test_login(self):
        response = self.client.post('/api/user/login/', {'username': 'testuser', 'password': 'testpassword'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['code'], 200)
        self.assertEqual(response.data['msg'], '登录成功')

    def test_register(self):
        response = self.client.post('/api/user/register/', {'username': 'newuser', 'password': 'newpassword'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['code'], 200)
        self.assertEqual(response.data['msg'], '注册成功')
