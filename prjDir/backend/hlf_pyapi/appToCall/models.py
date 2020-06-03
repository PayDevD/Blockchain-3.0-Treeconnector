from django.db import models

class AppToCall_1(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()

	def __str__(self):
		return self.title
