from rest_framework import serializers
from .models import AppToCall_1

class AppToCallSerializer(serializers.ModelSerializer):
	class Meta:
		model = AppToCall_1
		fields = (
			'id',
			'title',
			'content',
		)
