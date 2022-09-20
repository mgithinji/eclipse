// Alchemy HTTP URI - https://eth-goerli.g.alchemy.com/v2/-uI2gU4YejoiAekx6e0ExgBd-v_t4Tkx

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/-uI2gU4YejoiAekx6e0ExgBd-v_t4Tkx",
      accounts: [ '86fdecd7a2426f34968bea5b2b0c1aa3665227ef6ece7d2fb5560dff525f6d7d' ]
    }
  }
};

export default config;
