// https://eth-sepolia.g.alchemy.com/v2/FJjj4AH0REpuIwmTQkKME4_yxp7D2IkS

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
    solidity: "0.8.19",
};

module.exports = {
    solidity: "0.8.19",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/FJjj4AH0REpuIwmTQkKME4_yxp7D2IkS",
            accounts: ["b217203eef0c7e423519dc1871df1054857a9c67fc4b8c54625d01c154ea5dd6"],
        },
    },
};
