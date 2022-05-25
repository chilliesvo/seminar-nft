require("dotenv").config();

require("@nomiclabs/hardhat-ethers")

require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-etherscan"); 

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: { count: 10 }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.DEPLOY_ACCOUNT],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "deploy",
    deployments: "deployments",
  }
}