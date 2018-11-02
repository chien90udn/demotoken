const HDWalletProvider = require("truffle-hdwallet-provider");
// Bạn cũng có thể sử dụng 'dotenv' để lưu biến môi trường từ '.env' sang 'process.env'
// và tương ứng bổ sung process.env.MNENOMIC & process.env.INFURA_API_KEY
// Mặc định truffle-hdwallet-provider sẽ chọn account đầu tiên của Metamask, bạn có thể chọn account khác trong Metamask bằng cách truyền vào index (số thứ tự tính từ 0 của account trong Metamask).
// Điều đó có nghĩa new HDWalletProvider( .., "https://ropsten.infura.io/v3/" +  INFURA_API_KEY) 
// tương đương với new HDWalletProvider( .., "https://ropsten.infura.io/v3/" +  INFURA_API_KEY, 0)
MNENOMIC = "elite cost goose bachelor toss enroll enemy arctic clerk system help flag"// Thay ABC bằng seed word của account bạn muốn dùng vào đây.
INFURA_API_KEY = "806b3adbbbe0416f8b48066e99331254"// Thay 123 bằng API KEY của Infura vào đây

module.exports = {
  networks: {
    development: {
      host: "localhost", // Random IP for example purposes (do not use)
      port: 8545,
      network_id: 3,        // Ethereum public network
      gas: 470000,
      gasPrice: 100000000000,
      from: '0x35200293156792026c97670b35f565197d0e8995',
       // Match any network id
    },
    live: {
      host: '54.95.196.101',
      port: 8545,
      network_id: '*',
      gas: 470000,
      gasPrice: 2000000,
      from:'0x437aeffa148fc863977ce904ed666179a8760590'
      
    },
    // testnets
    // properties
    // network_id: định nghĩa từ vào network
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://ropsten.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 3,
      gas: 470000,
      gasPrice: 21
    },
    kovan: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://kovan.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 42,
      gas: 470000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://rinkeby.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 4,
      gas: 470000,
      gasPrice: 21
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => new HDWalletProvider( MNENOMIC, "https://mainnet.infura.io/v3/" +  INFURA_API_KEY),
      network_id: 1,
      gas: 470000,
      gasPrice: 21
    }
  }
}