// ExpressJS Setup
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// Constants
const PORT = 8080;
const HOST = '127.0.0.1';


// Hyperledger Bridge
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname, '..', '..', 'network', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Create user handle
app.post('/api/adduser/', async (req, res) => {
  try {
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), '../javascript/wallet');
    const wallet = new FileSystemWallet(walletPath);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists('user1');
    if (!userExists) {
      console.log('An identity for the user "user1" does not exist in the wallet');
      console.log('Run the registerUser.js application before retrying');
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork('mychannel');

    // Get the contract from the network.
    const contract = network.getContract('treeconnector');
    
    // Submit the specified transaction.
    await contract.submitTransaction('AddUser', JSON.stringify(req.body));
    console.log('Transaction has been submitted');

    // Disconnect from the gateway.
    await gateway.disconnect();

    res.status(200).json({ response: 'Transaction has been submitted' });

  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    res.status(400).json(error);
  }

});

app.get('/api/listusers', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const result = await contract.evaluateTransaction('ListUsers');

  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

app.get('/api/getuser/:userId', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const DOUBLE_QUOTE = '"'
  const result = await contract.evaluateTransaction('GetUser', DOUBLE_QUOTE + req.params.userId + DOUBLE_QUOTE);

  //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

// create tree handle
app.post('/api/addtree', async (req, res) => {
  try {

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), '../javascript/wallet');
    const wallet = new FileSystemWallet(walletPath);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists('user1');
    if (!userExists) {
      console.log('An identity for the user "user1" does not exist in the wallet');
      console.log('Run the registerUser.js application before retrying');
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork('mychannel');

    // Get the contract from the network.
    const contract = network.getContract('treeconnector');

    // Submit the specified transaction.
    await contract.submitTransaction('AddTree', JSON.stringify(req.body));
    console.log('Transaction has been submitted');

    // Disconnect from the gateway.
    await gateway.disconnect();

    res.status(200).json({ response: 'Transaction has been submitted' });

  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    res.status(400).json(error);
  }

});

app.get('/api/listtrees', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const result = await contract.evaluateTransaction('ListTrees');

  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

app.get('/api/gettree/:treeId', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const DOUBLE_QUOTE = '"'
  const result = await contract.evaluateTransaction('GetTree', DOUBLE_QUOTE + req.params.userId + DOUBLE_QUOTE);

  //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

// create diagnosis handle
app.post('/api/adddiagnosis', async (req, res) => {
  try {

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), '../javascript/wallet');
    const wallet = new FileSystemWallet(walletPath);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists('user1');
    if (!userExists) {
      console.log('An identity for the user "user1" does not exist in the wallet');
      console.log('Run the registerUser.js application before retrying');
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork('mychannel');

    // Get the contract from the network.
    const contract = network.getContract('treeconnector');

    // Submit the specified transaction.
    await contract.submitTransaction('AddDiagnosis', JSON.stringify(req.body));
    console.log('Transaction has been submitted');

    // Disconnect from the gateway.
    await gateway.disconnect();

    res.status(200).json({ response: 'Transaction has been submitted' });

  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    res.status(400).json(error);
  }

});

app.get('/api/listdiagnoses', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const result = await contract.evaluateTransaction('ListDiagnoses');

  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

app.get('/api/getdiagnosis/:diagnosisId', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const DOUBLE_QUOTE = '"'
  const result = await contract.evaluateTransaction('GetDiagnosis', DOUBLE_QUOTE + req.params.userId + DOUBLE_QUOTE);

  //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});


// create treatment handle
app.post('/api/addtreatment', async (req, res) => {
  try {

    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), '../javascript/wallet');
    const wallet = new FileSystemWallet(walletPath);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists('user1');
    if (!userExists) {
      console.log('An identity for the user "user1" does not exist in the wallet');
      console.log('Run the registerUser.js application before retrying');
      return;
    }
    // Create a new gateway for connecting to our peer node.
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

    // Get the network (channel) our contract is deployed to.
    const network = await gateway.getNetwork('mychannel');

    // Get the contract from the network.
    const contract = network.getContract('treeconnector');

    console.log(JSON.stringify(req.body))
    // Submit the specified transaction.
    await contract.submitTransaction('AddTreatment', JSON.stringify(req.body));
    console.log('Transaction has been submitted');

    // Disconnect from the gateway.
    await gateway.disconnect();

    res.status(200).json({ response: 'Transaction has been submitted' });

  } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    res.status(400).json(error);
  }

});

app.get('/api/listreatments', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const result = await contract.evaluateTransaction('ListTreatments');

  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});

app.get('/api/gettreatment/:treatmentId', async (req, res) => {
  const walletPath = path.join(process.cwd(), '../javascript/wallet');
  const wallet = new FileSystemWallet(walletPath);

  // Check to see if we've already enrolled the user.
  const userExists = await wallet.exists('user1');
  if (!userExists) {
    console.log('An identity for the user "user1" does not exist in the wallet');
    console.log('Run the registerUser.js application before retrying');
    return;
  }
  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });

  // Get the network (channel) our contract is deployed to.
  const network = await gateway.getNetwork('mychannel');

  // Get the contract from the network.
  const contract = network.getContract('treeconnector');

  const DOUBLE_QUOTE = '"'
  const result = await contract.evaluateTransaction('GetTreatment', DOUBLE_QUOTE + req.params.userId + DOUBLE_QUOTE);

  //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
  res.status(200).json({ response: JSON.parse(result.toString()) });
});
// server start
app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}`);
