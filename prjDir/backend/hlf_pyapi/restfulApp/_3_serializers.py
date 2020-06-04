from rest_framework import serializers
"""
모델 데이터 --> JSON 형식에 맞춰주기
"""
from ._1_models import Model_test1
class Model1_Serializer(serializers.ModelSerializer):
	class Meta:
		model = Model_test1
		fields = (
			'id',
			'title',
			'content',
		)
"""
하이퍼링크 관계 --> RESTful 연결
"""
from ._1_models import Student
class Student_Serializer_link(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Student
		fields = (
			'id',
			'year_in_school'
		)
