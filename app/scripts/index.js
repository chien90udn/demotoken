
// import { express as app } from 'express' 
// const HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "elite cost goose bachelor toss enroll enemy arctic clerk system help flag"; // 12 word mnemonic
// var provider = new HDWalletProvider(mnemonic, "http://54.95.196.101:8545");


const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = ["c6fbe1bc141bd504c1c2fc81601e71eef136a6756889a64640bf3cdfc621416e"]; // private keys
const provider = new HDWalletProvider(privKeys, "http://54.95.196.101:8545");

var fs = require('fs');

var keythereum = require("keythereum");


// Import the page's CSS. Webpack will know what to do with it.
import '../styles/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import demooken_artifacts from '../../build/contracts/DEMOToken.json'


var parsed = JSON.parse(JSON.stringify(demooken_artifacts));
var abi = parsed.abi;


// MetaCoin is our usable abstraction, which we'll use through the code below.
const DEMOToken = contract(demooken_artifacts)

const YourContract = new web3.eth.contract(abi, "0x437aeffa148fc863977ce904ed666179a8760590");

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts
let account

const App = {
  start: function () {
    const self = this

    // Bootstrap the MetaCoin abstraction for Use.
    
    DEMOToken.setProvider(web3.currentProvider)
    console.log();
    web3.eth.getAccounts((err, accounts) => {
      if (err) {
        return console.log(err);
      }
      console.log(accounts);
      console.log(accounts.length);
      accounts = accounts
      account = accounts[0];
      web3.eth.defaultAccount
    });


      // DEMOToken.deployed().then(function(contractInstance) {
      //       contractInstance.totalSupply.call().then(function(v) {
      //           $("#total-token").html(v.toString());
      //       });
      //       contractInstance.balanceOf.call('0x437aeffa148fc863977ce904ed666179a8760590').then(function(v) {
      //           $("#creator-token").html(v.c[0]);
      //       });
      //   })

 


    console.log(YourContract);
    // YourContract.methods.balanceOf('0x437aeffa148fc863977ce904ed666179a8760590').call()
    // .then(function(result){
    //     //the result holds your Token Balance that you can assign to a var
    //     var myTokenBalance = result;
    //     console.log(myTokenBalance);

    //     return result;
    // });

    // YourContract.deployed().then(function(contractInstance) {
    //         contractInstance.totalSupply.call().then(function(v) {
    //             $("#total-token").html(v.toString());
    //         });
    //         contractInstance.balanceOf.call('0x437aeffa148fc863977ce904ed666179a8760590').then(function(v) {
    //             $("#creator-token").html(v.c[0]);
    //         });
    // })


    // var getTransactionCount = web3.eth.getTransactionCount("0x437aeffa148fc863977ce904ed666179a8760590");
    // console.log(getTransactionCount);

    // var demotokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"inputs":[],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"payable":false,"type":"fallback","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
    // var demotoken = demotokenContract.new(
    //    {
    //      from: web3.eth.accounts[0], 
    //      data: '0x60a0604052600460608190527f48312e3000000000000000000000000000000000000000000000000000000000608090815261003e9160069190610103565b50341561004757fe5b5b600160a060020a03331660009081526020818152604091829020612710908190556002558151808301909252600e8083527f44656d6f20546f6b656e20303032000000000000000000000000000000000000929091019182526100ad91600391610103565b506004805460ff191690556040805180820190915260078082527f44454d4f3030320000000000000000000000000000000000000000000000000060209092019182526100fc91600591610103565b505b6101a3565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014457805160ff1916838001178555610171565b82800160010185558215610171579182015b82811115610171578251825591602001919060010190610156565b5b5061017e929150610182565b5090565b6101a091905b8082111561017e5760008155600101610188565b5090565b90565b610a05806101b26000396000f300606060405236156100935763ffffffff60e060020a60003504166306fdde0381146100a9578063095ea7b31461013957806318160ddd1461016c57806323b872dd1461018e578063313ce567146101c757806354fd4d50146101ed57806370a082311461027d57806395d89b41146102ab578063a9059cbb1461033b578063cae9ca511461036e578063dd62ed3e146103e5575b341561009b57fe5b6100a75b60006000fd5b565b005b34156100b157fe5b6100b9610419565b6040805160208082528351818301528351919283929083019185019080838382156100ff575b8051825260208311156100ff57601f1990920191602091820191016100df565b505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014157fe5b610158600160a060020a03600435166024356104a7565b604080519115158252519081900360200190f35b341561017457fe5b61017c610512565b60408051918252519081900360200190f35b341561019657fe5b610158600160a060020a0360043581169060243516604435610518565b604080519115158252519081900360200190f35b34156101cf57fe5b6101d761060c565b6040805160ff9092168252519081900360200190f35b34156101f557fe5b6100b9610615565b6040805160208082528351818301528351919283929083019185019080838382156100ff575b8051825260208311156100ff57601f1990920191602091820191016100df565b505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561028557fe5b61017c600160a060020a03600435166106a3565b60408051918252519081900360200190f35b34156102b357fe5b6100b96106c2565b6040805160208082528351818301528351919283929083019185019080838382156100ff575b8051825260208311156100ff57601f1990920191602091820191016100df565b505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034357fe5b610158600160a060020a0360043516602435610750565b604080519115158252519081900360200190f35b341561037657fe5b604080516020600460443581810135601f8101849004840285018401909552848452610158948235600160a060020a03169460248035956064949293919092019181908401838280828437509496506107fa95505050505050565b604080519115158252519081900360200190f35b34156103ed57fe5b61017c600160a060020a03600435811690602435166109ac565b60408051918252519081900360200190f35b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b505050505081565b600160a060020a03338116600081815260016020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b60025481565b600160a060020a0383166000908152602081905260408120548290108015906105685750600160a060020a0380851660009081526001602090815260408083203390941683529290522054829010155b80156105745750600082115b1561060057600160a060020a0380841660008181526020818152604080832080548801905588851680845281842080548990039055600183528184203390961684529482529182902080548790039055815186815291519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3506001610604565b5060005b5b9392505050565b60045460ff1681565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b505050505081565b600160a060020a0381166000908152602081905260409020545b919050565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b505050505081565b600160a060020a0333166000908152602081905260408120548290108015906107795750600082115b156107eb57600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a350600161050c565b50600061050c565b5b92915050565b600160a060020a03338116600081815260016020908152604080832094881680845294825280832087905580518781529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a383600160a060020a031660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e019050604051809103902060e060020a9004338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a0316815260200182805190602001908083836000831461094c575b80518252602083111561094c57601f19909201916020918201910161092c565b505050905090810190601f1680156109785780820380516001836020036101000a031916815260200191505b5094505050505060006040518083038160008761646e5a03f19250505015156109a15760006000fd5b5060015b9392505050565b600160a060020a038083166000908152600160209081526040808320938516835292905220545b929150505600a165627a7a72305820d4f202a72351eeb95ea36f6bf01e6f7d5d60ed0a7367813a05345d637b630d140029', 
    //      gas: '4700000'
    //    }, function (e, contract){
    //     console.log(e, contract);
    //     if (typeof contract.address !== 'undefined') {
    //          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    //     }
    //  })

    // Get the initial account balance so it can be displayed.
    // console.log(web3.eth);

    // var getTransactionCount = web3.eth.getTransactionCount("0x437aeffa148fc863977ce904ed666179a8760590");
    // console.log(getTransactionCount);

  },

    setStatus: function (message) {
        const status = document.getElementById('status')
        status.innerHTML = message
    },

    refreshBalance: function () {
        const self = this
        // let meta
        // DEMOToken.deployed().then(function (instance) {
        //   meta = instance
        //   return meta.getBalance.call(account, { from: account })
        // }).then(function (value) {
        //   const balanceElement = document.getElementById('balance')
        //   balanceElement.innerHTML = value.valueOf()
        // }).catch(function (e) {
        //   console.log(e)
        //   self.setStatus('Error getting balance; see log.')
        // })

        DEMOToken.deployed().then(function(contractInstance) {
            contractInstance.totalSupply.call().then(function(v) {
                $("#total-token").html(v.toString());
            });
            contractInstance.balanceOf.call('0x437aeffa148fc863977ce904ed666179a8760590').then(function(v) {
                $("#creator-token").html(v.c[0]);
            });
        })


       
    },

    sendCoin: function () {
        const self = this

        const amount = parseInt(document.getElementById('amount').value)
        const receiver = document.getElementById('receiver').value

        this.setStatus('Initiating transaction... (please wait)')

        let meta
        DEMOToken.deployed().then(function (instance) {
          meta = instance
          return meta.sendCoin(receiver, amount, { from: account })
        }).then(function () {
          self.setStatus('Transaction complete!')
          self.refreshBalance()
        }).catch(function (e) {
          console.log(e)
          self.setStatus('Error sending coin; see log.')
        })
        }
    }

window.App = App

window.sendToken = function(dest) {
    const self = this

    let val = $("#numberToken").val();
    let val_address = $("#addressReceive").val();
    try {
        var msg = "Send " + val + " token from 0x437aeffa148fc863977ce904ed666179a8760590 to " + val_address;
        $("#msg").html(msg)
        $("#numberToken").val("");
        $("#addressReceive").val("");
        {
            DEMOToken.deployed().then(function(contractInstance) {
                contractInstance.transfer(val_address, val, { from: '0x437aeffa148fc863977ce904ed666179a8760590' }).then(function(v) {
                console.log(v);
                //  contractInstance.transfer(val_address, val, { from: '0x7AFB21548A7F9F8f37BF684DaE73aefC300e6b18' }).then(function(v) {
                // console.log(v);
              });
            });
        }
    } catch (err) {
        console.log(err);
    }
}

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn(
          'Using web3 detected from external source.' +
          ' If you find that your accounts don\'t appear or you have 0 MetaCoin,' +
          ' ensure you\'ve configured that source properly.' +
          ' If using MetaMask, see the following link.' +
          ' Feel free to delete this warning. :)' +
          ' http://truffleframework.com/tutorials/truffle-and-metamask'
        )
        // Use Mist/MetaMask's provider
        // window.web3 = new Web3(new Web3.providers.HttpProvider('http://54.95.196.101:8545'))
        // window.web3 = new Web3();
        // window.web3.setProvider(provider);


        console.log("zo day 1");
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://54.95.196.101:8545"));
        const ContractDemo = web3.eth.contract(abi);

        var keyObject = '{"address":"437aeffa148fc863977ce904ed666179a8760590","crypto":{"cipher":"aes-128-ctr","ciphertext":"c4a4a2a4df439fea99271b965a5663780d8aabff500dd2c95311776b3b8a430e","cipherparams":{"iv":"da3fd9364e2f1e91f3db039ce57d123f"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"83cdb37b8f4f15fc46b0df74e7d60b3ca8970b30b4142093357ad00051476522"},"mac":"1055eb1289ae5c7404e078eebcee2d88e894dfd9420d3fe2449dc356a54ea4cc"},"id":"a14bbaa7-7490-40ea-ae08-4829f998bd2c","version":3}';
        keyObject = JSON.parse(keyObject);
        // private_key = web3.personal.accounts.decrypt(encrypted_key, 'correcthorsebatterystaple');

        // console.log(web3.eth.accounts.create("123456"));
        console.log(web3);
        // web3.personal.newAccount("123456");

        // console.log(web3.shh.getPrivateKey('83cdb37b8f4f15fc46b0df74e7d60b3ca8970b30b4142093357ad00051476522'))
    
        var privateKey = keythereum.recover("chien123456", keyObject);
        console.log("private_key:" + privateKey.toString('hex'));
        // Asynchronous
        keythereum.recover("chien123456789", keyObject, function (privateKey) {
          console.log("private_key 2:" + privateKey.toString('hex'));
        });

         

        // 
        // web3.eth.personal.unlockAccount("0x437aeffa148fc863977ce904ed666179a8760590", 'chien123456', 1)

        const contractInstance = ContractDemo.at('0x8e3ee419aece76bdb32b3281cc6322a5f2765007');

        console.log(contractInstance);

        web3.personal.unlockAccount('0x437aeffa148fc863977ce904ed666179a8760590', 'chien123456', 600);

       
        // contractInstance.balanceOf.call('0x437aeffa148fc863977ce904ed666179a8760590').then(function(v) {
        //     console.log(v);
        // });

        // contractInstance.totalSupply.call().then(function(v) {
        //        console.log(v.toString());
        //     });

        console.log("Total: " + contractInstance.totalSupply.call().toString())

        console.log("0x437aeffa148fc863977ce904ed666179a8760590: " + contractInstance.balanceOf.call('0x437aeffa148fc863977ce904ed666179a8760590').toString())

        console.log("balance:" + web3.eth.getBalance("0x437aeffa148fc863977ce904ed666179a8760590"));
       
        contractInstance.transfer("0x5037239f158db3599bab1ec9907f3cf6f5b7786c", 1, { from: '0x437aeffa148fc863977ce904ed666179a8760590' });

        console.log("0x5037239f158db3599bab1ec9907f3cf6f5b7786c: " + contractInstance.transfer.call("0x5037239f158db3599bab1ec9907f3cf6f5b7786c", 150, { from: '0x437aeffa148fc863977ce904ed666179a8760590' }).toString())


        console.log("0x5037239f158db3599bab1ec9907f3cf6f5b7786c: " + contractInstance.balanceOf.call('0x5037239f158db3599bab1ec9907f3cf6f5b7786c').toString())
          // contractInstance.transferFrom("0x437aeffa148fc863977ce904ed666179a8760590", "0x5037239f158db3599bab1ec9907f3cf6f5b7786c", 1);
        // contractInstance.transferFrom.call("0x437aeffa148fc863977ce904ed666179a8760590", "0x5037239f158db3599bab1ec9907f3cf6f5b7786c", 1);


        console.log("0x01e74f2296f34b114cf51beba98d8ecc6bddb931: " + contractInstance.balanceOf.call('0x01e74f2296f34b114cf51beba98d8ecc6bddb931').toString())

        

        
         // window.web3 = new Web3(web3.currentProvider);

    } else {
        console.warn(
          'No web3 detected. Falling back to http://127.0.0.1:9545.' +
          ' You should remove this fallback when you deploy live, as it\'s inherently insecure.' +
          ' Consider switching to Metamask for development.' +
          ' More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
        )
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
    }
    App.start()
})


// // 
// // get current faucet info
// app.get('/admin', function(req, res) {
//     console.log("zo em i");
// });

