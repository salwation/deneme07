/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

export default function InviteFriend() {
    const [copied, setCopied] = useState<string>("");
    const copyToClipboard = () => {
        try {
            const url = "https://t.me/taptether_bot?start=";
            navigator.clipboard.writeText(url);
            setCopied(url);
            console.log("Copied");
            setTimeout(() => {
                setCopied("");
                console.log("Reset copied state");
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex flex-col justify-between min-h-screen gap-4 pt-4">
            {copied && (
                <div className="absolute top-2 left-[40%]">
                    <p className="bg-[#259F7B] text-white flex items-center justify-center rounded-lg p-2 w-fit gap-2">
                        <Image src={"/img/successfull.svg"} alt="" width={20} height={20} /> Successful
                    </p>
                </div>
            )}
            <div>
                <p className="text-white text-xl sm:text-2xl font-bold">Invite friends!</p>
                <p className="text-gray-400 text-xs sm:text-sm">You will also earn 10% of the referral's income.</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-white text-xs sm:text-sm font-semibold">List of your friends (0)</p>
                    <TfiReload size={15} color="white" className="cursor-pointer" />
                </div>
                <div className="flex flex-col justify-center items-center rounded-lg bg-[#ffffff35] gap-1 py-2 sm:py-4 mt-4">
                    <p className="text-white text-xl sm:text-2xl font-bold">0 friends!</p>
                    <p className="text-gray-400 text-xs sm:text-sm">You and your friend will receive bonuses</p>
                </div>
            </div>
            <div className="flex gap-2 mb-20">
                <button className="bg-[#341355] shadow-xl text-xs sm:text-lg text-white rounded-lg w-full flex items-center justify-center py-1 sm:py-2 gap-2 font-semibold">
                    <AiOutlinePlus size={18} />
                    Invite a friend
                </button>
                <button className="bg-[#341355] shadow-xl text-white rounded-lg p-2" onClick={() => copyToClipboard()}>
                    <IoCopyOutline size={18} />
                </button>
            </div>
        </div>
    );
}
