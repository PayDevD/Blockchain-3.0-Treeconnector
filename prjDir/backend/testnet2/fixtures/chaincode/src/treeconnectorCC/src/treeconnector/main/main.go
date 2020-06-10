package main

import (
	"fmt"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"treeconnector"
	"treeconnector/chaincode"
)

func main() {
	// interface checking
	var _ treeconnector.TreeConnector = (*chaincode.TreeConnectorCC)(nil)

	err := shim.Start(new(chaincode.TreeConnectorCC))

	if err != nil {
		fmt.Printf("Error in chaincode process: %s", err)
	}
}
