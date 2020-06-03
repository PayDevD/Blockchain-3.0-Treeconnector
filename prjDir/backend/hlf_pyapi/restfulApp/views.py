from django.shortcuts import render
from rest_framework import generics
"""
모델 클래스의 데이터(queryset) + 직렬화 포맷팅(serializer_class) --> JSON으로 전송할 객체
"""
from .models import Model_test1
from .serializers import Model1_Serializer

class ListApp(generics.ListCreateAPIView):
	queryset = Model_test1.objects.all()
	serializer_class = Model1_Serializer

class DetailApp(generics.RetrieveUpdateDestroyAPIView):
	queryset = Model_test1.objects.all()
	serializer_class = Model1_Serializer

"""
restful API 쿼리를 브라우저로 확인 가능하도록
"""
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

class TestAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({
            'message': 'some',
            'some': 'data'
        })
