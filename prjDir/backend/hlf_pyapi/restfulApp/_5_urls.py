from . import _4_views
from rest_framework import routers
"""
라우터 클래스에 뷰를 등록 --> URL 구조는 자동으로 설정됨
- list() : 목록 --> /api/<basename>
- retrieve() : 하나 보기 --> /api/<basename>/<pk번호>
- create() : 생성 --> /api/<basename>/<pk번호>
- update() : 업데이트 --> /api/<basename>/<pk번호>
- destroy() : 삭제 --> /api/<basename>/<pk번호>
"""
router = routers.DefaultRouter()
router.register(r'user', _4_views.User_Viewset, basename='user')
router.register(r'tree', _4_views.Tree_Viewset, basename='tree')
router.register(r'diagnose', _4_views.Diagnose_Viewset, basename='diagnose')

from django.urls import path, include
from django.contrib import admin
"""
앱 수준에서 일단 설정하고, 나중에 장고폴더에서 참조함
"""
urlpatterns = [
	path('', include(router.urls)),

]
