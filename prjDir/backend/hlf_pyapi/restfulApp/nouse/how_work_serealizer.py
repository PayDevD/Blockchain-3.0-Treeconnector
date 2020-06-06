"""
byte 스트림 <--> JSON 변환
"""
import io
from rest_framework.parsers import JSONParser

bytestream = io.BytesIO(json)
jsonData = JSONParser().parse(bytestream)
serializer = Comment_Srializer(data=data)
if serializer.is_valid():
	return serializer.validated_data

"""
직접만든 serializer 클래스
"""
from rest_framework import serializers

class Comment_Srializer(serializer.Serializer):
	email = serializers.EmailField()
	content = serializers.CharField(max_length=200)
	created = serializers.DateField()

	def post(self, validated_data):
		return Comment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        update old instance + with validated_data
        """
        instance.email = validated_data.get('email', instance.email)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
