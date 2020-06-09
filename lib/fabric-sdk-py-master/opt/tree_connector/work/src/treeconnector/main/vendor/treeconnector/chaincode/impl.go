package chaincode

import (
	"encoding/json"
	"errors"
	"fmt"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
	"github.com/jinzhu/inflection"
	"treeconnector"
)

//
// utilities
//

func checkLen(logger *shim.ChaincodeLogger, expected int, args []string) error {
	if len(args) < expected {
		mes := fmt.Sprintf(
			"not enough number of arguments %d given, %d expected",
			len(args),
			expected,
		)
		logger.Warning(mes)
		return errors.New(mes)
	}
	return nil
}

type TreeConnectorCC struct {
}

func (this *TreeConnectorCC) Init(stub shim.ChaincodeStubInterface) pb.Response {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("chaincode initialized")
	return shim.Success([]byte{})
}

func (this *TreeConnectorCC) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	logger := shim.NewLogger("treeconnector")

	timestamp, err := stub.GetTxTimestamp()
	if err != nil {
		return shim.Error(fmt.Sprintf("failed to get TX timestamp: %s", err))
	}
	logger.Infof(
		"Invoke called: Tx ID = %s, timestamp = %s",
		stub.GetTxID(),
		timestamp,
	)

	var (
		fcn  string
		args []string
	)

	fcn, args = stub.GetFunctionAndParameters()
	logger.Infof("function name = %s", fcn)

	switch fcn {
	//
	//
	// User
	//
	//
	case "AddUser":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		user := new(treeconnector.User)
		err := json.Unmarshal([]byte(args[0]), user)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal User JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.AddUser(stub, user)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "GetUser":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		var id string
		err := json.Unmarshal([]byte(args[0]), &id)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal the 1st argument: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		user, err := this.GetUser(stub, id)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(user)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal User: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return success value
		return shim.Success(b)

	case "UpdateUser":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		user := new(treeconnector.User)
		err := json.Unmarshal([]byte(args[0]), user)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal User JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.UpdateUser(stub, user)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "ListUsers":
		users, err := this.ListUsers(stub)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(users)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Users: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return a success value
		return shim.Success(b)

		//
		//
		// Tree
		//
		//
	case "AddTree":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		tree := new(treeconnector.Tree)
		err := json.Unmarshal([]byte(args[0]), tree)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal Tree JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.AddTree(stub, tree)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "GetTree":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		var id string
		err := json.Unmarshal([]byte(args[0]), &id)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal the 1st argument: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		tree, err := this.GetTree(stub, id)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(tree)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Tree: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return success value
		return shim.Success(b)
	case "UpdateTree":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		tree := new(treeconnector.Tree)
		err := json.Unmarshal([]byte(args[0]), tree)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal User JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.UpdateTree(stub, tree)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "ListTrees":
		trees, err := this.ListTrees(stub)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(trees)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Trees: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return a success value
		return shim.Success(b)

		//
		//
		// Diagnosis
		//
		//
	case "AddDiagnosis":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		diagnosis := new(treeconnector.Diagnosis)
		err := json.Unmarshal([]byte(args[0]), diagnosis)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal Diagnosis JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.AddDiagnosis(stub, diagnosis)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "GetDiagnosis":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		var id string
		err := json.Unmarshal([]byte(args[0]), &id)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal the 1st argument: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		diagnosis, err := this.GetDiagnosis(stub, id)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(diagnosis)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Diagnosis: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return success value
		return shim.Success(b)
	case "UpdateDiagnosis":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		diagnosis := new(treeconnector.Diagnosis)
		err := json.Unmarshal([]byte(args[0]), diagnosis)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal Diagnosis JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.UpdateDiagnosis(stub, diagnosis)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "ListDiagnoses":
		diagnoses, err := this.ListDiagnoses(stub)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(diagnoses)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Diagnoses: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return a success value
		return shim.Success(b)

		//
		//
		// Treatment
		//
		//
	case "AddTreatment":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		treatment := new(treeconnector.Treatment)
		err := json.Unmarshal([]byte(args[0]), treatment)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal Treatment JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.AddTreatment(stub, treatment)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "GetTreatment":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		var id string
		err := json.Unmarshal([]byte(args[0]), &id)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal the 1st argument: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		treatment, err := this.GetTreatment(stub, id)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(treatment)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Treatment: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return success value
		return shim.Success(b)
	case "UpdateTreatment":
		if err := checkLen(logger, 1, args); err != nil {
			return shim.Error(err.Error())
		}

		// unmarshal
		treatment := new(treeconnector.Treatment)
		err := json.Unmarshal([]byte(args[0]), treatment)
		if err != nil {
			mes := fmt.Sprintf("failed to unmarshal Treatment JSON: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		err = this.UpdateTreatment(stub, treatment)
		if err != nil {
			return shim.Error(err.Error())
		}

		// returns a success value
		return shim.Success([]byte{})
	case "ListTreatments":
		treatments, err := this.ListTreatments(stub)
		if err != nil {
			return shim.Error(err.Error())
		}

		// marshal
		b, err := json.Marshal(treatments)
		if err != nil {
			mes := fmt.Sprintf("failed to marshal Treatments: %s", err.Error())
			logger.Warning(mes)
			return shim.Error(mes)
		}

		// return a success value
		return shim.Success(b)
	}

	// if the function name is unknown
	mes := fmt.Sprintf("Unknown method: %s", fcn)
	logger.Warning(mes)
	return shim.Error(mes)
}

func (this *TreeConnectorCC) AddUser(stub shim.ChaincodeStubInterface, user *treeconnector.User) error {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("AddUser: Id = %s", user.Id)

	// convert to JSON
	b, err := json.Marshal(user)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// creates a composite key
	key, err := stub.CreateCompositeKey("User", []string{user.Id})
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// stores to the State DB
	err = stub.PutState(key, b)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// return successfully
	return nil
}

func (this *TreeConnectorCC) GetUser(stub shim.ChaincodeStubInterface, id string) (*treeconnector.User, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("GetUser: Id = %s", id)

	// create a composite key
	key, err := stub.CreateCompositeKey("User", []string{id})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// loads from the state DB
	jsonBytes, err := stub.GetState(key)
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	if jsonBytes == nil {
		mes := fmt.Sprintf("User with Id = %s was not found", id)
		logger.Warning(mes)
		return nil, errors.New(mes)
	}

	// unmarshal
	user := new(treeconnector.User)
	err = json.Unmarshal(jsonBytes, user)

	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// return successfully
	return user, nil
}

func (this *TreeConnectorCC) UpdateUser(stub shim.ChaincodeStubInterface, user *treeconnector.User) error {
	return errors.New("not implemented yet")
}

func (this *TreeConnectorCC) ListUsers(stub shim.ChaincodeStubInterface) ([]*treeconnector.User, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("ListUsers")

	// executes a range query, which returns an iterator
	iter, err := stub.GetStateByPartialCompositeKey("User", []string{})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// will close the iterator when returned from this method
	defer iter.Close()

	// loops over the iterator
	users := []*treeconnector.User{}

	for iter.HasNext() {
		kv, err := iter.Next()
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}
		user := new(treeconnector.User)
		err = json.Unmarshal(kv.Value, user)
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}

		users = append(users, user)
	}

	// returns successfulyy
	if len(users) > 1 {
		logger.Infof("%d %s found", len(users), inflection.Plural("User"))
	} else {
		logger.Infof("%d %s found", len(users), "User")
	}

	return users, nil
}

func (this *TreeConnectorCC) AddTree(stub shim.ChaincodeStubInterface, tree *treeconnector.Tree) error {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("AddTree: Id = %s", tree.Id)

	// convert to JSON
	b, err := json.Marshal(tree)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// creates a composite key
	key, err := stub.CreateCompositeKey("Tree", []string{tree.Id})
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// stores to the State DB
	err = stub.PutState(key, b)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// return successfully
	return nil
}

func (this *TreeConnectorCC) GetTree(stub shim.ChaincodeStubInterface, id string) (*treeconnector.Tree, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("GetTree: Id = %s", id)

	// create a composite key
	key, err := stub.CreateCompositeKey("Tree", []string{id})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// loads from the state DB
	jsonBytes, err := stub.GetState(key)
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	if jsonBytes == nil {
		mes := fmt.Sprintf("Tree with Id = %s was not found", id)
		logger.Warning(mes)
		return nil, errors.New(mes)
	}

	// unmarshal
	tree := new(treeconnector.Tree)
	err = json.Unmarshal(jsonBytes, tree)

	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// return successfully
	return tree, nil
}

func (this *TreeConnectorCC) UpdateTree(stub shim.ChaincodeStubInterface, tree *treeconnector.Tree) error {
	return errors.New("not implemented yet")
}
func (this *TreeConnectorCC) ListTrees(stub shim.ChaincodeStubInterface) ([]*treeconnector.Tree, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("ListTrees")

	// executes a range query, which returns an iterator
	iter, err := stub.GetStateByPartialCompositeKey("Tree", []string{})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// will close the iterator when returned from this method
	defer iter.Close()

	// loops over the iterator
	trees := []*treeconnector.Tree{}

	for iter.HasNext() {
		kv, err := iter.Next()
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}
		tree := new(treeconnector.Tree)
		err = json.Unmarshal(kv.Value, tree)
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}

		trees = append(trees, tree)
	}

	// returns successfulyy
	if len(trees) > 1 {
		logger.Infof("%d %s found", len(trees), inflection.Plural("Tree"))
	} else {
		logger.Infof("%d %s found", len(trees), "Tree")
	}

	return trees, nil
}

func (this *TreeConnectorCC) AddDiagnosis(stub shim.ChaincodeStubInterface, diagnosis *treeconnector.Diagnosis) error {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("AddDiagnosis: Id = %s", diagnosis.Id)

	// convert to JSON
	b, err := json.Marshal(diagnosis)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// creates a composite key
	key, err := stub.CreateCompositeKey("Diagnosis", []string{diagnosis.Id})
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// stores to the State DB
	err = stub.PutState(key, b)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// return successfully
	return nil
}

func (this *TreeConnectorCC) GetDiagnosis(stub shim.ChaincodeStubInterface, id string) (*treeconnector.Diagnosis, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("GetDiagnosis: Id = %s", id)

	// create a composite key
	key, err := stub.CreateCompositeKey("Diagnosis", []string{id})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// loads from the state DB
	jsonBytes, err := stub.GetState(key)
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	if jsonBytes == nil {
		mes := fmt.Sprintf("Diagnosis with Id = %s was not found", id)
		logger.Warning(mes)
		return nil, errors.New(mes)
	}

	// unmarshal
	diagnosis := new(treeconnector.Diagnosis)
	err = json.Unmarshal(jsonBytes, diagnosis)

	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// return successfully
	return diagnosis, nil
}

func (this *TreeConnectorCC) UpdateDiagnosis(stub shim.ChaincodeStubInterface, diagnosis *treeconnector.Diagnosis) error {
	return errors.New("not implemented yet")
}

func (this *TreeConnectorCC) ListDiagnoses(stub shim.ChaincodeStubInterface) ([]*treeconnector.Diagnosis, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("ListDiagnoses")

	// executes a range query, which returns an iterator
	iter, err := stub.GetStateByPartialCompositeKey("Diagnosis", []string{})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// will close the iterator when returned from this method
	defer iter.Close()

	// loops over the iterator
	diagnoses := []*treeconnector.Diagnosis{}

	for iter.HasNext() {
		kv, err := iter.Next()
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}
		diagnosis := new(treeconnector.Diagnosis)
		err = json.Unmarshal(kv.Value, diagnosis)
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}

		diagnoses = append(diagnoses, diagnosis)
	}

	// returns successfulyy
	if len(diagnoses) > 1 {
		logger.Infof("%d %s found", len(diagnoses), inflection.Plural("Diagnosis"))
	} else {
		logger.Infof("%d %s found", len(diagnoses), "Diagnosis")
	}

	return diagnoses, nil
}

func (this *TreeConnectorCC) AddTreatment(stub shim.ChaincodeStubInterface, treatment *treeconnector.Treatment) error {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("AddTreatment: Id = %s", treatment.Id)

	// convert to JSON
	b, err := json.Marshal(treatment)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// creates a composite key
	key, err := stub.CreateCompositeKey("Treatment", []string{treatment.Id})
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// stores to the State DB
	err = stub.PutState(key, b)
	if err != nil {
		logger.Warning(err.Error())
		return err
	}

	// return successfully
	return nil
}
func (this *TreeConnectorCC) GetTreatment(stub shim.ChaincodeStubInterface, id string) (*treeconnector.Treatment, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("GetTreatment: Id = %s", id)

	// create a composite key
	key, err := stub.CreateCompositeKey("Treatment", []string{id})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// loads from the state DB
	jsonBytes, err := stub.GetState(key)
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	if jsonBytes == nil {
		mes := fmt.Sprintf("Treatment with Id = %s was not found", id)
		logger.Warning(mes)
		return nil, errors.New(mes)
	}

	// unmarshal
	treatment := new(treeconnector.Treatment)
	err = json.Unmarshal(jsonBytes, treatment)

	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// return successfully
	return treatment, nil
}
func (this *TreeConnectorCC) UpdateTreatment(stub shim.ChaincodeStubInterface, treatment *treeconnector.Treatment) error {
	return errors.New("not implemented yet")
}
func (this *TreeConnectorCC) ListTreatments(stub shim.ChaincodeStubInterface) ([]*treeconnector.Treatment, error) {
	logger := shim.NewLogger("treeconnector")
	logger.Infof("ListTreatments")

	// executes a range query, which returns an iterator
	iter, err := stub.GetStateByPartialCompositeKey("Treatment", []string{})
	if err != nil {
		logger.Warning(err.Error())
		return nil, err
	}

	// will close the iterator when returned from this method
	defer iter.Close()

	// loops over the iterator
	treatments := []*treeconnector.Treatment{}

	for iter.HasNext() {
		kv, err := iter.Next()
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}
		treatment := new(treeconnector.Treatment)
		err = json.Unmarshal(kv.Value, treatment)
		if err != nil {
			logger.Warning(err.Error())
			return nil, err
		}

		treatments = append(treatments, treatment)
	}

	// returns successfulyy
	if len(treatments) > 1 {
		logger.Infof("%d %s found", len(treatments), inflection.Plural("Treatment"))
	} else {
		logger.Infof("%d %s found", len(treatments), "Treatment")
	}

	return treatments, nil
}
