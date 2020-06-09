package chaincode_test

import (
	"github.com/hyperledger/fabric/common/util"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
	"github.com/stretchr/testify/assert"
	"testing"
	"treeconnector/chaincode"
)

// type User struct {
// 	Id   string
// 	Name string
// 	Role string
// }

// type Tree struct {
// 	Id      string
// 	OwnerId string
// 	Kind    string
// }

// type Diagnosis struct {
// 	Id        string
// 	TreeId    string
// 	DoctorId  string
// 	Content   string
// 	Timestamp time.Time
// }

// type Treatment struct {
// 	Id          string
// 	TreeId      string
// 	TherapistId string
// 	Content     string
// 	Timestamp   time.Time
// }

const (
	alice   = `{"Id":"1", "Name":"Alice", "Role":"User"}`
	bob     = `{"Id":"2", "Name":"Bob", "Role":"Doctor"}`
	charlie = `{"Id":"3", "Name":"Charlie", "Role":"Therapist"}`

	emptyUsers = "[]"
	oneUsers   = "[" + alice + "]"
	twoUsers   = "[" + alice + "," + bob + "]"

	timestamp = `"2018-01-01T12:34:56Z"`

	tree1 = `{"Id":"1", "OwnerId":"1", "Kind":"Pine"}`
	tree2 = `{"Id":"2", "OwnerId":"1", "Kind":"Birch"}`

	oneTrees = "[" + tree1 + "]"
	twoTrees = "[" + tree1 + "," + tree2 + "]"

	diagnosis1 = `{"Id":"1", "TreeId":"1", "DoctorId":"2", "Content":"Content1", "Timestamp":` + timestamp + `}`
	diagnosis2 = `{"Id":"2", "TreeId":"2", "DoctorId":"2", "Content":"Content2", "Timestamp":` + timestamp + `}`

	oneDiagnoses = "[" + diagnosis1 + "]"
	twoDiagnoses = "[" + diagnosis1 + "," + diagnosis2 + "]"

	treatment1 = `{"Id":"1", "TreeId":"1", "TherapistId":"3", "Content":"Content1", "Timestamp":` + timestamp + `}`
	treatment2 = `{"Id":"2", "TreeId":"2", "TherapistId":"3", "Content":"Content2", "Timestamp":` + timestamp + `}`

	oneTreatments = "[" + treatment1 + "]"
	twoTreatments = "[" + treatment1 + "," + treatment2 + "]"

	one = `"1"`
	two = `"2"`
)

//
// test utilities
//

// custom assertion that checks if the response is OK.
func responseOK(res pb.Response) func() bool {
	return func() bool { return res.Status < shim.ERRORTHRESHOLD }
}

// custom assertion that checks if the response is FAIL.
func responseFail(res pb.Response) func() bool {
	return func() bool { return res.Status >= shim.ERRORTHRESHOLD }
}

// Convert function name and arguments into a byte format that MockStub accepts.
// This fucntion is copied and slightly modified from that in mockstub.go.
func getBytes(function string, args ...string) [][]byte {
	bytes := make([][]byte, 0, len(args)+1)
	bytes = append(bytes, []byte(function))
	for _, s := range args {
		bytes = append(bytes, []byte(s))
	}

	return bytes
}

//
// Testcases
//

// OK1: normal Init()
func TestInit(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) {
		res := stub.MockInit(util.GenerateUUID(), nil)
		assert.Condition(t, responseOK(res))
	}
}

// NG1: unknown method Invoke()
func TestInvoke(t *testing.T) {
	// instanttiation check
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("BadMethod"))
		assert.Condition(t, responseFail(res))
	}
}

// User

// OK1: success
func TestAddUser_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", alice))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListUsers"))
		assert.Condition(t, responseOK(res))
		assert.JSONEq(t, oneUsers, string(res.Payload))
	}
}

// NG1: less arguments
func TestAddUser_NG1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser"))
		assert.Condition(t, responseFail(res))
	}
}

// NG2: illegal JSON argument
func TestAddUser_NG2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", "bad"))
		assert.Condition(t, responseFail(res))
	}
}

// OK1: 1 user
func TestListUsers_OK1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", alice))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListUsers"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, oneUsers, string(res.Payload))
		}
	}
}

// OK2: 2 users
func TestListUsers_OK2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", alice))
		assert.Condition(t, responseOK(res))
		res = stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", bob))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListUsers"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, twoUsers, string(res.Payload))
		}
	}
}

// func OK
func TestGetUser_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", alice))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("GetUser", one))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, alice, string(res.Payload))
		}
	}
}

// Tree
// OK1: success
func TestAddTree_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTrees"))
		assert.Condition(t, responseOK(res))
		assert.JSONEq(t, oneTrees, string(res.Payload))
	}
}

// NG1: less arguments
func TestAddTree_NG1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree"))
		assert.Condition(t, responseFail(res))
	}
}

// NG2: illegal JSON argument
func TestAddTree_NG2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", "bad"))
		assert.Condition(t, responseFail(res))
	}
}

// OK1: 1 user
func TestListTrees_OK1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTrees"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, oneTrees, string(res.Payload))
		}
	}
}

// OK2: 2 trees
func TestListTrees_OK2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree1))
		assert.Condition(t, responseOK(res))
		res = stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree2))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTrees"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, twoTrees, string(res.Payload))
		}
	}
}

// func OK
func TestGetTree_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("GetTree", one))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, tree1, string(res.Payload))
		}
	}
}

// Diagnosis
// OK1: success
func TestAddDiagnosis_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {

		stub.MockInvoke(util.GenerateUUID(), getBytes("AddUser", bob))
		stub.MockInvoke(util.GenerateUUID(), getBytes("AddTree", tree1))
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", diagnosis1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListDiagnoses"))
		assert.Condition(t, responseOK(res))
		assert.JSONEq(t, oneDiagnoses, string(res.Payload))
	}
}

// NG1: less arguments
func TestAddDiagnosis_NG1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis"))
		assert.Condition(t, responseFail(res))
	}
}

// NG2: illegal JSON argument
func TestAddDiagnosis_NG2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", "bad"))
		assert.Condition(t, responseFail(res))
	}
}

// OK1: 1 Diagnosis
func TestListDiagnoses_OK1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", diagnosis1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListDiagnoses"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, oneDiagnoses, string(res.Payload))
		}
	}
}

// OK2: 2 Diagnoses
func TestListDiagnoses_OK2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", diagnosis1))
		assert.Condition(t, responseOK(res))
		res = stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", diagnosis2))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListDiagnoses"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, twoDiagnoses, string(res.Payload))
		}
	}
}

// func OK
func TestGetDiagnosis_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddDiagnosis", diagnosis1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("GetDiagnosis", one))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, diagnosis1, string(res.Payload))
		}
	}
}

// Treatment
// OK1: success
func TestAddDTreatment_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", treatment1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTreatments"))
		assert.Condition(t, responseOK(res))
		assert.JSONEq(t, oneTreatments, string(res.Payload))
	}
}

// NG1: less arguments
func TestAddTreatment_NG1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment"))
		assert.Condition(t, responseFail(res))
	}
}

// NG2: illegal JSON argument
func TestAddTreatment_NG2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", "bad"))
		assert.Condition(t, responseFail(res))
	}
}

// OK1: 1 Treatment
func TestListTreatments_OK1(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", treatment1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTreatments"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, oneTreatments, string(res.Payload))
		}
	}
}

// OK2: 2 Treatmenst
func TestListTreatments_OK2(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", treatment1))
		assert.Condition(t, responseOK(res))
		res = stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", treatment2))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("ListTreatments"))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, twoTreatments, string(res.Payload))
		}
	}
}

// func OK
func TestGetTreatment_OK(t *testing.T) {
	stub := shim.NewMockStub("treeconnector", new(chaincode.TreeConnectorCC))
	if assert.NotNil(t, stub) &&
		assert.Condition(t, responseOK(stub.MockInit(util.GenerateUUID(), nil))) {
		res := stub.MockInvoke(util.GenerateUUID(), getBytes("AddTreatment", treatment1))
		assert.Condition(t, responseOK(res))

		res = stub.MockInvoke(util.GenerateUUID(), getBytes("GetTreatment", one))
		if assert.Condition(t, responseOK(res)) {
			assert.JSONEq(t, treatment1, string(res.Payload))
		}
	}
}
