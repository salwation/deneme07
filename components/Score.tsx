import Image from "next/image";
import React from "react";

export default function Score() {
    return (
        <div className="mt-4">
            <div className="flex items-center justify-between gap-2">
                <div className={`bg-[#F5F5F5] bg-[#ffffff35] shadow-xl rounded-lg flex flex-col justify-center items-center w-full  py-1 sm:py-2 `}>
                    <p className=" text-white text-[12px] sm:text-[24px] font-bold">Profit per click</p>
                    <p className="text-white  font-semibold text-xs sm:text-lg flex items-center gap-1">
                        {/* <Image src={"/img/usdt-logo.png"} alt="" width={20} height={20} /> +0.000002 */}
                        <Image src={"/img/bull.png"} alt="" width={20} height={20} /> +0.000002
                    </p>
                    <p className="text-white  font-semibold text-xs sm:text-lg flex items-center gap-1">
                        {/* <Image src={"/img/usdt-gold.png"} alt="" width={20} height={20} /> */}
                        <Image src={"/img/bull.png"} alt="" width={20} height={20} />
                        +0.000037
                    </p>
                </div>
                <div className={`bg-[#F5F5F5] bg-[#ffffff35] shadow-xl rounded-lg flex flex-col justify-center items-center w-full  py-1 sm:py-2 `}>
                    <p className=" text-white text-[12px] sm:text-[24px] font-bold">Profit per hour</p>
                    <p className="text-white  font-semibold text-xs sm:text-lg flex items-center gap-1">
                        {/* <Image src={"/img/usdt-logo.png"} alt="" width={20} height={20} /> */}
                        <Image src={"/img/bull.png"} alt="" width={20} height={20} />
                        +0
                    </p>
                    <p className="text-white font-semibold text-xs sm:text-lg flex items-center gap-1">
                        {/* <Image src={"/img/usdt-gold.png"} alt="" width={20} height={20} /> */}
                        <Image src={"/img/bull.png"} alt="" width={20} height={20} />
                        +0
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4 justify-center  relative">
                <p className="text-[20px] font-bold text-white flex items-center gap-2">
                    {" "}
                    {/* <Image src={"/img/usdt-logo.png"} alt="" width={50} height={50} /> */}
                    <Image src={"/img/bull.png"} alt="" width={50} height={50} />
                    0.005606
                </p>
                <p className="text-[18px] font-semibold text-white flex items-center gap-2">
                    {" "}
                    {/* <Image src={"/img/usdt-gold.png"} alt="" width={30} height={30} /> */}
                    <Image src={"/img/bull.png"} alt="" width={30} height={30} />
                    0.103711
                </p>
            </div>
        </div>
    );
}
