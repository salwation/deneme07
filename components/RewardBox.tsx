import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';

const colors = {
    selected: 'bg-green-500',
    alreadySelected: 'bg-purple-500',
    unselected: 'bg-black/50',
};

const RewardBox = ({ coin, isSelected, alreadySelected }: { coin: number; isSelected: boolean; alreadySelected: boolean }) => {
    return (
        <div
            className={`p-2 flex flex-col items-center justify-between gap-1 rounded border ${alreadySelected
                ? colors.alreadySelected
                : isSelected
                    ? colors.selected
                    : colors.unselected
                }`}
        >
            <div className='flex justify-center items-center gap-x-2'>
                {isSelected && (
                    <div className='bg-white rounded-md'>
                        <BiCheck size={9} color="green" />
                    </div>
                )}
                <span className='text-gray-200 font-semibold text-[9px] sm:text-lg'>
                    Day {coin + 1}
                </span>
            </div>
            <div>
                <span className='text-white font-semibold'>
                    {Number(coin) * 10}K
                </span>
            </div>
        </div>
    );
};

export default RewardBox;
