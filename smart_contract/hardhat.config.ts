// https://eth-goerli.g.alchemy.com/v2/mhbZdqPax4TshI4wRX8_VGSF36YjJjMG

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
    solidity: "0.8.19",
};

module.exports = {
    solidity: "0.8.19",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/mhbZdqPax4TshI4wRX8_VGSF36YjJjMG",
            accounts: ["b217203eef0c7e423519dc1871df1054857a9c67fc4b8c54625d01c154ea5dd6"],
        },
    },
};
