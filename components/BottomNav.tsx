import React, { useContext, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessage2, TbRewindForward10, TbTools } from "react-icons/tb";
import { Context } from "./Context";
import { MdOutlineElectricBolt } from "react-icons/md";

interface ActiveContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}
export default function BottomNav() {
    const { active, setActive } = useContext<ActiveContextType>(Context);
    console.log("🚀 ~ BottomNav ~ active:", active);
    const tabs = [
        {
            img: <IoHomeOutline size={18} />,
            title: "Home",
        },
        {
            img: <TbTools size={18} />,
            title: "Mine",
        },
        {
            img: <AiOutlineUsergroupAdd size={18} />,
            title: "Referrals",
        },
        {
            img: <TbRewindForward10 size={18} />,
            title: "Reward",
        },
    ];
    return (
        <div className="flex justify-center relative w-full z-40">
            <div className="fixed bottom-0 w-full px-2">
                {active === "Home" && (
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <MdOutlineElectricBolt color="#259F7B" size={20} />
                        <p className={`text--[#1A1F24] text-white`}>1000</p>
                        <p className={`text--[#1A1F24] text-white`}>/</p>
                        <p className={`text--[#1A1F24] text-white`}>1000</p>
                    </div>
                )}
                <div className="flex justify-between items-center gap-1 bg-[#1a1f246c] p-2 rounded-lg sm:w-full">
                    {tabs.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${active === item?.title ? "bg-[#ffffff76] text-[#FFFFFF]" : "bg-[#ffffff35] text-[#C2C7C5]"
                                } rounded-lg flex flex-row sm:flex-col justify-center items-center gap-x-1 px-1 py-1 sm:py-2 cursor-pointer text-xs sm:text-lg  hover:bg-[#ffffff76] hover:text-white w-full`}
                            onClick={() => setActive(item.title)}
                        >
                            {item.img}
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
