import { useState, useEffect, createContext, ReactNode } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext<any>({});

const { ethereum } = window as any;

//0x50A08995a5Eec9A49632a09E41BCeaECbf151f18

export const TransactionProvider = ({ children }: { children: any }) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

    //good practice when interacting with forms
    const handleChange = (e: any, name: string) => {
        setFormData((prevState: any) => ({ ...prevState, [name]: e.target.value }));
    };

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                return alert("Please install MetaMask");
            }
            const accounts = await ethereum.request({ method: "eth_accounts" });
            console.log({ accounts });
            if (accounts.length !== 0) {
                const account = accounts[0];
                setCurrentAccount(account);
                //getAllTransactions
            } else {
                console.log("No account found");
            }
        } catch (error) {
            console.log({ error });
            throw new Error("No ethereum object found");
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask");
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log({ error });

            throw new Error("No ethereum object found");
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask");
            const { addressTo, amount, keyword, message } = formData;
            const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

            //parsed amount is not in the correct format
            const parsedAmout = ethers.parseEther(amount);

            console.log(parsedAmout, "parsedAmout");

            //checks if the addressTo is valid
            ethers.getAddress(addressTo);

            //sends money from address A to addressTo
            await signer.sendTransaction({
                to: addressTo,
                value: parsedAmout,
            });

            // adds the transaction to the blockchain
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmout, message, keyword);
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());

            //get data from form
        } catch (error) {
            console.log({ error });

            throw new Error("No ethereum object found");
        }
    };

    const exportObject: any = {
        connectWallet,
        currentAccount,
        handleChange,
        formData,
        setFormData,
        sendTransaction,
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);
    return <TransactionContext.Provider value={exportObject}>{children}</TransactionContext.Provider>;
};
