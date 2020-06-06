from rest_framework.status import is_client_error, is_success
from rest_framework import viewsets
"""
특정 Viewset(같은 URL)로 들어온 요청 --> HTTP method에 따라 분리하여 응답 반환
- list() : 모든 자원들의 목록(many=True)
- retrieve() : 주어진 자원 보기
- create() : 새 자원 생성
- update() : 자원 업데이트
- destroy() : 자원 삭제
"""
from . import _1_user, _2_tree, _3_diagnose

class User_Viewset(viewsets.ViewSet):

	def __init__(self):
		slef._UserManage = _1_user.UserManage()

	def list(self, request, response):
		return self._UserManage.getAllUser()

	def retrieve(self, request, response):
		userName = request['userName']
		return self._UserManage.getOneUser(userName)

	def create(self, request, response):
		userName = request['userName']
		return self._UserManage.enrollUser(userName)

	def update(self, request, response):
		userName = request['userName']
		return self._UserManage.updateUser(userName)

	def destroy(self, request, response):
		userName = request['userName']
		return self._UserManage.delUser(userName)

class Tree_Viewset(viewsets.ViewSet):

	def list(self, request, response):

		return response

	def retrieve(self, request, response):

		return response

	def create(self, request, response):

		return response

	def update(self, request, response):

		return response

	def destroy(self, request, response):

		return response

class Diagnose_Viewset(viewsets.ViewSet):

	def list(self, request, response):

		return response

	def retrieve(self, request, response):

		return response

	def create(self, request, response):

		return response

	def update(self, request, response):

		return response

	def destroy(self, request, response):

		return response
