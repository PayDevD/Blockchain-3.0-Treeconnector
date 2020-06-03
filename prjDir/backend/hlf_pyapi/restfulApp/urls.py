from django.urls import path
"""
JSON으로 전송할 객체(view)의 경로 지정 --> 앱 수준에서 일단 설정하고, 나중에 장고폴더에서 참조함
"""
from . import views

urlpatterns = [
	path('', views.ListApp.as_view(), name='lists'),
	path('<int:pk>/', views.DetailApp.as_view(), name='details'),
]
