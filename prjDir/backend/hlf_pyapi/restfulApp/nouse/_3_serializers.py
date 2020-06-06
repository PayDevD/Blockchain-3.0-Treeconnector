from rest_framework import serializers
"""
딕셔너리형 데이터를 파싱할 serializer
"""
from . import _1_models
"""
나무 정보
"""
class Tree_Serializer(serializers.Serializer):
	treeID = serializers.CharField(max_length=20)
	ownerID = serializers.CharField(max_length=20)
	location = serializers.CharField(max_length=20)
	treeType = serializers.CharField(max_length=20)
	birthday = serializers.DateField()

	def get(self, request, *args, **kw):
		get_arg1 = request.GET.get('arg1', None)
		get_arg2 = request.GET.get('arg2', None)

		myData = _1_models.Tree(get_arg1, get_arg2, *args, **kw)
		result = myData.data_func()
		response = Response(result, status=status.HTTP_200)
		return response

	def post(self, validated_data):
		return _1_models.Tree(id=None,**validated_data)

	def update(self, instance, validated_data):
		for field, value in validated_data.items():
			setattr(instance, field, value)
			return instance

"""
진료 요청

class Diagnose_Serializer(serializers.Serializer):
	location = serializers.CharField(max_length=10)
	symptom =  serializers.CharField(max_length=10)
	treeID =  serializers.CharField(max_length=20)
	doctorID =  serializers.CharField(max_length=20)
	userID =  serializers.CharField(max_length=10)
	date =  serializers.DateField()
"""
