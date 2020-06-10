package treeconnector

import (
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"time"
)

type User struct {
	Id   string
	Name string
	Role string
}

type Tree struct {
	Id      string
	OwnerId string
	Kind    string
}

type Diagnosis struct {
	Id        string
	TreeId    string
	DoctorId  string
	Content   string
	Timestamp time.Time
}

type Treatment struct {
	Id          string
	TreeId      string
	TherapistId string
	Content     string
	Timestamp   time.Time
}

type TreeConnector interface {
	AddUser(shim.ChaincodeStubInterface, *User) error
	GetUser(shim.ChaincodeStubInterface, string) (*User, error)
	UpdateUser(shim.ChaincodeStubInterface, *User) error
	ListUsers(shim.ChaincodeStubInterface) ([]*User, error)

	AddTree(shim.ChaincodeStubInterface, *Tree) error
	GetTree(shim.ChaincodeStubInterface, string) (*Tree, error)
	UpdateTree(shim.ChaincodeStubInterface, *Tree) error
	ListTrees(shim.ChaincodeStubInterface) ([]*Tree, error)

	AddDiagnosis(shim.ChaincodeStubInterface, *Diagnosis) error
	GetDiagnosis(shim.ChaincodeStubInterface, string) (*Diagnosis, error)
	UpdateDiagnosis(shim.ChaincodeStubInterface, *Diagnosis) error
	ListDiagnoses(shim.ChaincodeStubInterface) ([]*Diagnosis, error)

	AddTreatment(shim.ChaincodeStubInterface, *Treatment) error
	GetTreatment(shim.ChaincodeStubInterface, string) (*Treatment, error)
	UpdateTreatment(shim.ChaincodeStubInterface, *Treatment) error
	ListTreatments(shim.ChaincodeStubInterface) ([]*Treatment, error)
}
