from django.urls import path

from . import views

urlpatterns = [
	path('', views.ListApp.as_view()),
	path('<int:pk>/', views.DetailApp.as_view()),
]
