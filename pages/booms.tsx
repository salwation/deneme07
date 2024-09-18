import RewardBox from '@/components/RewardBox'
import RewardBoxContainer from '@/components/RewardBoxContainer'
import React from 'react'
import { BiArrowFromRight, BiArrowToBottom, BiBitcoin, BiCoin, BiDotsHorizontal, BiDotsVertical, BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const Reward = () => {
    return (
        <div style={{
            background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
            height: '100vh',
        }} className='min-h-screen bg-transparent p-4 flex flex-col   gap-y-2'>
            <div className='flex justify-between items-center text-white gap-x-2'>
                <BiArrowFromRight size={18} />
                <div className='flex justify-start items-center w-full'>
                    <p className='text-left uppercase font-semibold text-sm sm:text-lg text-white'>Reward</p>
                </div>
                <div className='flex gap-x-2'>

                    <BiArrowToBottom size={18} />
                    <BiDotsVertical size={18} />
                </div>
            </div>
            <div className='flex justify-between items-center text-white'>
                <div className='flex gap-x-1 justify-center items-center'>
                    <BiBitcoin />
                    <span className='uppercase font-semibold text-white text-xs sm:text-lg'>0</span>
                </div>
                <div>
                    <span className='text-xs sm:text-lg'>
                        1K $Reward = 10USDT
                    </span>
                </div>
                <div className='flex gap-x-1 justify-center items-center'>
                    <span className='uppercase font-semibold text-white text-xs sm:text-lg'>3.78M</span>
                    <BiCoin />
                </div>
            </div>
            <div className="px-2 flex flex-col justify-between h-full">

                <div className='w-full flex flex-col gap-y-1 justify-center items-center'>
                    <span className='text-lg  sm:text-xl font-semibold text-white'>Rewards</span>
                    <p className='text-sm  sm:text-xl text-center font-semibold text-gray-400'>Accure game coins for logging into the game daily without skipping</p>
                </div>
                <RewardBoxContainer />
                <div className='w-full flex flex-col gap-y-1 justify-center items-center'>
                    <p className='text-lg  sm:text-xl text-center font-semibold text-gray-400 w-10/12 sm:w-full'>Come back tommorrow for more rewards</p>
                </div>
                <button className='p-3 text-white  text-lg font-semibold  rounded-xl bg-gray-700 w-full'>
                    Close
                </button>
            </div>

        </div>
    )
}

export default Reward