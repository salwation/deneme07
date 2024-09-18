import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQPage() {
    const [open, setOpen] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpen(open === index ? null : index);
    };

    const faqData = [
        {
            title: "What is TapTether?",
            des: "TapTether is a new project with a revamped Tap-to-Earn mechanic on TON, designed specifically for the crypto community. Here, you can tap to earn one of the most popular stablecoins, USDT, which is easy to withdraw from the platform, and also tUSD – project's native token that will make you eligible for airdrop. Soon, the app will be available not only on TON but also on other networks.",
        },
        {
            title: "How to earn USDT?",
            des: "To start earning USDT, simply activate the Telegram bot and start tapping on the screen. Free access allows users with Telegram Premium to earn 1 USDT per day and 0.2 USDT for users without a premium subscription. Additionaly, you will earn our native token tUSD. Holders of this token will be eligible for future airdrop!",
        },
        {
            title: "How to increase your USDT earnings?",
            des: "You can upgrade your account with special enhancements that increase earnings per tap or hourly passive income while you’re not tapping the screen. Go to the “Mine” section, select your tariff for upgrade, and purchase it to earn more. All purchased items are cumulative, so you can purchase several upgrades to boost your profit.",
        },
        {
            title: "What does income in TapTether consist of?",
            des: "Income in the app consists of active taps and your passive earnings. Your purchased plan is divided into two parts, bringing you two types of income. For example, if your plan has a profitability of $50, you will receive $25 for active taps per day by spending energy in the app, and $25 will be credited to you while you are offline.",
        },
        {
            title: "What is tUSD and how is it integrated into TapTether?",
            des: "tUSD is our new community-based stablecoin that operates without centralized control, setting a standard for true decentralization. It is integrated into TapTether as a reward for tapping and upgrading. For each tap and upgrade you purchase, you earn tUSD tokens in addition to USDT, enhancing your earning potential. This makes tUSD a significant part of our rewards system..",
        },
        {
            title: "What profit can I earn per hour and per click?",
            des: "Your profit consists of passive hourly income and profit per click. These figures depend on the plan you choose. You can check the hourly profit and profit per tap by clicking on the upgrade and reviewing the details before purchasing.",
        },
        {
            title: "What is the referral program?",
            des: "The referral program allows you to invite friends and earn even more on the platform. For each invited friend, you will receive 10% of their earnings on the platform. To invite friends, go to the “Referral” section, copy your link, and send it to your friends. Earned rewards will be credited to your account automatically.",
        },
        {
            title: "How to buy a desired plan?",
            des: `To purchase a plan, go to the "Mine" section and select the appropriate plan for your profile. Click "Buy": a dialog window from your wallet will open, allowing you to connect to the app and confirm the purchase transaction. Wait for the transaction to process and enjoy your enhanced profile!`,
        },
        {
            title: "How to withdraw funds from the platform?",
            des: `Go to the "Home" section. Under your nickname, you will see "Withdraw" button. Click on "Withdraw" and enter the withdrawal amount (minimum amount is 1 USDT). Wait for the transaction to complete, and the funds will be credited to your account.`,
        },
        {
            title: "How long does it take to deposit or withdraw funds, and does it happen automatically?",
            des: "We send transactions automatically and instantly. However, the transaction processing speed depends on the TON blockchain. Wait for it to complete the transaction, and you will be able to receive your funds.",
        },
    ];
    return (
        <div className="bg-[#341355] pt-[5px] rounded-t-[36px] h-full">
            <div className="px-4 py-6 relative">
                <p className="text-white text-2xl font-bold">FAQ</p>
                <p className="text-xs text-white">Find answers to frequently asked questions</p>
                {/* <Image src={"/img/faq.svg"} alt="" width={150} height={150} className="absolute top-[-60px] right-1" /> */}
            </div>
            <div style={{
                background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
            }} className=" rounded-t-[36px] pt-6 px-2 flex flex-col gap-4 pb-[100px]">
                <div className="px-2 flex gap-2 flex-col">
                    {faqData.map((item, idx) => (
                        <div
                            className="bg-[#ffffff35] rounded-lg px-4 py-4 flex flex-col gap-2"
                            key={idx}
                            onClick={() => handleToggle(idx)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-white text-xs font-semibold">{item?.title}</p>
                                <p className="border border-gray-300 rounded-lg p-1">
                                    <IoIosArrowDown
                                        size={15}
                                        className={`text-gray-300 ${open === idx
                                            ? "open rotate-180 transition duration-300 ease-out"
                                            : "transition duration-300 ease-out"
                                            }`}
                                    />
                                </p>
                            </div>
                            {open === idx && (
                                <div>
                                    <p className="text-gray-200 text-xs">{item?.des}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
