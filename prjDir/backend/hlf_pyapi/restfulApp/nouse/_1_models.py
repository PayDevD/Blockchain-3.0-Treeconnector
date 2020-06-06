"""
db.model 임포트 안하고, 순수 파이썬으로 딕셔너리형 데이터 class 생성
--> 만약 frontend에서 바로 JSON을 줘서 바로 hyperledger로 넘기면, 이조차도 필요없어짐
"""
	
class Tree(object):
	def __init__(self, **kwargs):
		for field in ('id','name','owner','status'):
			setattr(self, field, kwargs.get(field, None))

	def data_func(self):
		"데이터 생성"
		dataset = {
			1 : Data(id=1, name="111",owner="1111", status="1"),
			2 : Data(id=2, name="222",owner="2222", status="2"),
			}
		return dataset
