#조회 기능
'''
시스템 내의 나무들을 조회하는 API 필요

=> req { 
		location
		kind
}
req에서 아무 조건 없으면 그냥 가능한거 다 보내기	

res

tree {
	id(String), ----> treeID로 바꿈
	ownerId(String),
	birthday(Date),
	location(String),
	kind(String)   ----> treetype으로 바꿈
	
	diagnosis {
		date(Date),
		doctorId(String),
		Contents(String)
	}[]

	treatment {
		date(Date),
		therapistId(String),
		Contents(String)
	}[]
	
}
'''

#개인 나무 관리
'''
나무에 소유자를 등록해서 이력 관리
사용자의 나무들을 불러오는 API
req {
	userId
}

res tree {
	id(String),
	ownerId(String),
	birthday(Date),
	locatoin(String),
	kind(String)
	
	diagnosis {
		date(Date),
		doctorId(String),
		Contents(String)
	}[]

	treatment {
		date(Date),
		therapistId(String),
		Contents(String)
	}[]
	
}[]

새로운 나무를 등록하는 API(소유자ID와 생애, 품종 등 기본 정보 입력), 성공 실패 여부
=> req 
tree {
	id(String),
	ownerId(String),
	birthday(Date),
	locatoin(String),
	kind(String)
	
	diagnosis {
		date(Date),
		doctorId(String),
		Contents(String)
	}[]

	treatment {
		date(Date),
		therapistId(String),
		Contents(String)
	}[]
	
}

res {
	flag
}
나무 수정하는 API(변경점 입력해서 넘겨주면 수정), 성공 실패 여부
=> req 
tree {
	id(String),
	ownerId(String),
	birthday(Date),
	locatoin(String),
	kind(String)
	
	diagnosis {
		date(Date),
		doctorId(String),
		Contents(String)
	}[]

	treatment {
		date(Date),
		therapistId(String),
		Contents(String)
	}[]
	
}

res {
	flag
}
나무 삭제하는 API, 성공 실패 여부
=> req {
	 userId,
	 treeId
}

res {
	flag
}
'''

#나무 진료
'''
나무 진료 신청(지역과 나무 ID, 증상 등 넘겨주면 진료 신청 완료), 성공 실패 여부
=> req :
	{
		location,
		id,
		symptom,
		doctorId,
		userId,
		Date
	}
  res {
		flag
	}
나무 진단서 작성(나무 ID에 연동된 진단서 목록에 진단서 등록), 성공 실패 여부
req 
{
		date(Date),
		doctorId(String),
		Contents(String)
	}

res {
	flag
}
나무 치료 이력 작성(나무 ID를 따라 치료 내역 등록), 성공 실패 여부
req {
		date(Date),
		therapistId(String),
		Contents(String)
}

res {
	flag
}
	
'''

#멤버쉽 관련
'''
조직 등록, 회원 등록, 인증 등 필요

'''


#블록체인 나무 필드
'''
tree {
	id(String),
	ownerId(String),
	birthday(Date),
	locatoin(String),
	kind(String)
	
	diagnosis {
		date(Date),
		doctorId(String),
		Contents(String)
	}[]

	treatment {
		date(Date),
		therapistId(String),
		Contents(String)
	}[]
	
}

'''

