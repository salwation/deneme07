import Image from "next/image";
import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';

export default function TapButton() {
    const [isTall, setIsTall] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsTall(!isTall);
        setIsVisible(true);
        setTimeout(() => {
            setIsTall(false);
        }, 100);
        // Hide the element after a delay to let the animation play
        setTimeout(() => {
            setIsVisible(false);
        }, 500); // Adjust the timeout duration to match the duration of your animation
    };

    return (
        <div className="relative bg-image flex justify-center items-center overflow-hidden py-4 z-30 h-[500px] top-[-80px] cursor-pointer">
            <Tilt

                perspective={1000}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                tiltReverse={false}
            >
                <div onClick={handleClick} className={`relative z-30 top-[-60px] sm:top-0  transition-transform duration-300 ${isTall ? 'scale-105' : 'scale-100'}`}>
                    <Image
                        src={`/img/bull.png`}
                        alt=""
                        width={200}
                        height={200}
                        style={{
                            filter: 'drop-shadow(0px 50px 30px rgba(0, 0, 0, 0.3))'
                        }}
                    />

                </div>
            </Tilt>

            <span
                className={`absolute text-gray-200 text-xl bottom-80 left-1/2 transform -translate-x-10/12 transition-transform duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ zIndex: 40 }} // Ensure it's above other content
            >
                4+
            </span>
        </div>
    );
}
