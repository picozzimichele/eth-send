import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import logo from "../../images/logo.png";

const NabarItem = ({ title, classProps }: { title: string; classProps: any }) => {
    return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((title, index) => (
                    <NabarItem key={title + index} title={title} classProps="text-white" />
                ))}
                <li className="bg-[#2952E3] py-2 px-7 mx-4 cursor-pointer rounded-full hover:bg-[#2546bd]">Login</li>
            </ul>
            <div className="flex relative">
                {toggleMenu ? (
                    <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                ) : (
                    <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <ul className="blue-glassmorphism z-10 flex flex-col justify-start items-end rounded-md fixed top-0 right-0 p-3 w-[70%] h-screen shadow-2xl md:hidden list-none text-white animate-slide-in">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose className="hover:cursor-pointer hover:text-gray-300" onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((title, index) => (
                            <NabarItem key={title + index} title={title} classProps="text-white my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
