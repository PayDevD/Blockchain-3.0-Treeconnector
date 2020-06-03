from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
from django.shortcuts import render

from .models import AppToCall_1
from .serializers import AppToCallSerializer

class TestAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({
            'message': 'some',
            'some': 'data'
        })

class ListApp(generics.ListCreateAPIView):
	queryset = AppToCall_1.objects.all()
	serializer_class = AppToCallSerializer

class DetailApp(generics.RetrieveUpdateDestroyAPIView):
	queryset = AppToCall_1.objects.all()
	serializer_class = AppToCallSerializer

class signin(request):
	if request.method == "POST":
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username, password)

		if user is not None:
			login(request, user)
			return redirect('index')
		else:
			return HttpResponse("faild to login..try again!")
	else:
		return "서버사이드 HTML 렌더링"
