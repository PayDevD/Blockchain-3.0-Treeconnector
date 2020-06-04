from . import _4_views
from rest_framework import routers
"""
라우터 클래스에 뷰를 등록 --> URL 구조는 자동으로 설정됨
"""
router = routers.DefaultRouter()
router.register(r'students', _4_views.Student_Viewset)
router.register(r'Model_test1', _4_views.Model1_DetailView)

from django.urls import path, include
from django.contrib import admin
"""
JSON으로 전송할 객체(view)의 경로 지정 --> 앱 수준에서 일단 설정하고, 나중에 장고폴더에서 참조함
"""
urlpatterns = [
	path('', include(router.urls)),

]
