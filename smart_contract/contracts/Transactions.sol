//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    uint256 public transactionCount = 0;

    event Transfer(address from, address receiver, uint256 amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint256 amount, string memory message, string memory keyword)
        public
    {
        //increment transaction count
        transactionCount++;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {}

    function getTransactionCount() public view returns (uint256) {}

    constructor() {}
}
