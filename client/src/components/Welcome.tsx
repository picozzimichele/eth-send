import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({
    placeholder,
    name,
    type,
    value,
    handleChange,
}: {
    placeholder: string;
    value: any;
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
    const connectWallet = async () => {};
    const handleSubmit = async () => {};
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-gradient text-3xl sm:text-5xl text-white py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light w-11/2 md:w-9/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto
                    </p>
                    <button
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] hover:bg-[#2546bd] p-3 rounded-full cursor-pointer"
                        type="button"
                        onClick={connectWallet}
                    >
                        <p className="text-white text-base font-bold">Connect Wallet</p>
                    </button>
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
                        <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>Security</div>
                        <div className={`rounded-none sm:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
                        <div className={`rounded-none sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
                        <div className={`sm:rounded-none rounded-bl-2xl ${commonStyles}`}>Low fees</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-start items-center w-full md:mt-0 mt-10">
                    <div className="eth-card white-glassmorpism p-3 justify-end items-start flex-col rounded-xl h-40 w-full sm:w-72 my-5">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="flex w-10 h-10 rounded-full border-2 border-white justify-center items-center">
                                    <SiEthereum fontSize={20} className="text-white" />
                                </div>
                                <BsInfoCircle fontSize={17} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">Wallet Address</p>
                                <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="blue-glassmorphism p-5 sm:w-96 w-full flex flex-col justify-start items-center">
                        <Input placeholder="Address To" value={""} name="addressTo" type="text" handleChange={() => {}} />
                        <Input placeholder="Amount (ETH)" value={""} name="amount" type="number" handleChange={() => {}} />
                        <Input placeholder="Keyword (GIF)" value={""} name="keyword" type="text" handleChange={() => {}} />
                        <Input placeholder="Enter Message" value={""} name="message" type="text" handleChange={() => {}} />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {true ? (
                            <Loader />
                        ) : (
                            <button
                                className="text-white w-full mt-2 p-2 border-[1px] border-[#3d4f7c] rounded-full cursor-pointer"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
