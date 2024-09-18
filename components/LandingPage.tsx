import React from "react";
import Score from "./Score";
import { IoPersonOutline } from "react-icons/io5";
import TapButton from "./TapButton";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function LandingPage() {
    return (

        <div
            className=" bg-transparent rounded-t-[36px] pt-1 px-2">
            <div className="flex justify-between px-2 mt-4 gap-x-1">
                <div className="flex gap-2 items-center">
                    <IoPersonOutline className=" text-white" size={18} />
                    <p className=" text-white text-xs font-semibold">AFA</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className=" text-white rounded-full  py-1 sm:px-2 text-[10px] sm:text-lg w-[100px] sm:w-auto shadow-xl  bg-[#341355] font-semibold">
                        Deposit / Withdraw
                    </button>

                </div>
                <TonConnectButton />
            </div>
            <Score />
            <TapButton />
        </div>
    );
}
