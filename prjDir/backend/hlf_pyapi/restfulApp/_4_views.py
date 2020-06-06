from rest_framework.status import is_client_error, is_success
"""
응답 포맷 맞출수도 있음(시간상 적용하지는 않음)
is_success(response.status_code)
is_client_error(response.status_code)
"""
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
		self._UserManage = _1_user.UserManage()

	def list(self, request, response):
		response = self._UserManage.getAllUser()
		return response

	def retrieve(self, request, response):
		userName = request['userID']
		response = self._UserManage.getOneUser(userName)
		return response

	def create(self, request, response):
		userName = request['userID']
		response = self._UserManage.enrollUser(userName)
		return response

	def update(self, request, response):
		userName = request['userID']
		response = self._UserManage.updateUser(userName)
		return response

	def destroy(self, request, response):
		userName = request['userID']
		response = self._UserManage.delUser(userName)
		return response

class Tree_Viewset(viewsets.ViewSet):

	def __init__(self):
		self._TreeManage = _2_tree.TreeManage()

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

	def __init__(self):
		self._DiagnoseManage = _2_diagnose.DiagnoseManage()

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
