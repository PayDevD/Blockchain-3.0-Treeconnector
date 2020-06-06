from rest_framework.status import is_client_error, is_success
"""
모델 클래스의 딕셔너리 데이터 + 직렬화 포맷팅(serializer_class) --> JSON으로 전송할 객체
"""
from rest_framework import viewsets
from . import _3_serializers
"""
class Tree_Viewset(viewsets.ViewSet):
    
	serializer_class = _3_serializers.Tree_Serializer

	def list(self, request, response):
		serializer = _3_serializers.Tree_Serializer(many=True)
		return Response(serializer.data)

	def create(self, request):
		serializers = Tree_Serializer(data=request.data)
		if serializers.is_valid(raise_exception=True):
			serializers.save()
			return Response(serializers.data)

	def update(self, request):
		serializers = Tree_Serializer(data=request.data)
		if serializers.is_valid(raise_exception=True):
			serializers.save()
			return Response(serializers.data)
"""
