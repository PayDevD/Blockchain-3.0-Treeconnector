"""
모델 클래스의 데이터(queryset) + 직렬화 포맷팅(serializer_class) --> JSON으로 전송할 객체
"""
from rest_framework import viewsets
"""
뷰(get, put) 여러 개 --> 뷰set(read, update) 하나로 합치기
list뷰(list, create) + detail뷰(retrieve, update, destroy) 기능 모두 지원
"""
from ._1_models import Model_test1
from ._3_serializers import Model1_Serializer
class Model1_DetailView(viewsets.ModelViewSet):
	queryset = Model_test1.objects.all()
	serializer_class = Model1_Serializer
"""
HyperlinkedModelSerializer
"""
from ._1_models import Student
from ._3_serializers import Student_Serializer_link
class Student_Viewset(viewsets.ModelViewSet):
	queryset = Student.objects.all()
	serializer_class = Student_Serializer_link
