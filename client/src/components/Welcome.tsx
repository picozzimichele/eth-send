import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

export default function Welcome() {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-gradient text-3xl sm:text-5xl text-white py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light w-11/2 md:9/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto
                    </p>
                </div>
            </div>
        </div>
    );
}
