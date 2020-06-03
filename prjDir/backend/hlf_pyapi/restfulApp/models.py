from django.db import models
"""
데이터 전용 객체들 : 필드 형식(Char,Text..)별로 정의
"""
class Model_test1(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()

	def __str__(self):
		return self.title
