from django.contrib import admin
"""
모델 클래스 등록
"""
from ._1_models import Model_test1

admin.site.register(Model_test1)
admin.site.register(Student)
