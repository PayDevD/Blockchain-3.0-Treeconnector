from rest_framework import serializers
"""
모델 데이터 --> JSON 형식에 맞춰주기
"""
from .models import Model_test1
class Model1_Serializer(serializers.ModelSerializer):
	class Meta:
		model = Model_test1
		fields = (
			'id',
			'title',
			'content',
		)
