import React, { useState } from 'react';
import RewardBox from './RewardBox';

const RewardBoxContainer = () => {
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
    const alreadySelectedBoxes = [0, 1, 2, 3, 4]; // Example: already selected boxes

    const toggleSelect = (index: number) => {
        setSelectedBoxes(prevSelected =>
            prevSelected.includes(index)
                ? prevSelected.filter(i => i !== index)
                : [...prevSelected, index]
        );
    };

    return (
        <div className='grid grid-cols-4 gap-2'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item: any, index: number) => (
                <div key={index} onClick={() => toggleSelect(index)}>
                    <RewardBox
                        coin={index}
                        isSelected={selectedBoxes.includes(index)}
                        alreadySelected={alreadySelectedBoxes.includes(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default RewardBoxContainer;
