import { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";

import Loader from "./Loader";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({
    placeholder,
    name,
    type,
    value,
    handleChange,
}: {
    placeholder: string;
    value?: any;
    type: string;
    name: string;
    handleChange: (e: any, name: any) => void;
}) => (
    <input
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        step={"0.0001"}
        onChange={(e) => handleChange(e, name)}
    />
);

export default function Welcome() {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { addressTo, amount, keyword, message } = formData;
        if (!addressTo || !amount || !keyword || !message) return alert("Please fill all fields");
        sendTransaction();
    };
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-gradient text-3xl sm:text-5xl text-white py-1">
                        Send ETH <br /> with a beautiful GIF
                    </h1>
                    <p className="text-left mt-5 text-white font-light w-11/2 md:w-9/12 text-base">
                        Connect <b>metamask</b> and use the <b>Sepolia</b> network. This is a test contract to store stransaction and gifs on the blockchain.
                    </p>
                    {!currentAccount && (
                        <button
                            className="flex flex-row justify-center items-center my-5 bg-[#1D5D9B] hover:bg-[#387096] p-3 rounded-md cursor-pointer"
                            type="button"
                            onClick={connectWallet}
                        >
                            <p className="text-white text-base font-bold">Connect Wallet</p>
                        </button>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
                        <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>Security</div>
                        <div className={`rounded-none sm:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
                        <div className={`rounded-none sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
                        <div className={`sm:rounded-none rounded-bl-2xl ${commonStyles}`}>Low fees</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-start items-center w-full mf:mt-0 mt-10">
                    <div className="eth-card white-glassmorpism p-3 justify-end items-start flex-col rounded-xl w-full aspect-video sm:max-w-sm my-5">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="flex w-10 h-10 rounded-full border-2 border-white justify-center items-center">
                                    <SiEthereum fontSize={20} className="text-white" />
                                </div>
                                <BsInfoCircle fontSize={17} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">{shortenAddress(currentAccount)}</p>
                                <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="blue-glassmorphism p-5 sm:w-96 w-full flex flex-col justify-start items-center">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button className="text-white w-full mt-2 p-2 border-[1px] border-[#3d4f7c] rounded-full cursor-pointer" type="submit">
                                Send Now
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
