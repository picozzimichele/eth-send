import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export default function Welcome() {
    const connectWallet = async () => {};
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
                    <div className="eth-card white-glassmorpism p-3 justify-end items-start flex-col rounded-xl h-40 w-full sm:w-72 my-5"></div>
                </div>
            </div>
        </div>
    );
}
