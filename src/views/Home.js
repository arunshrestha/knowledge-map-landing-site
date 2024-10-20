import React from "react";
import Sparkles from 'react-sparkle';
import hand_holding_book_through_phone from "../assets/hand_holding_book_through_phone.png"
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (
        <div className="relative overflow-hidden bg-[#7FD0EE] pt-10 font-inria w-screen h-screen">
            <Sparkles flicker={false} />
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="flex sm:max-w-xl lg:max-w-7xl items-center space-x-4">
                    <div className="flex-grow">
                        <div className="pb-8 text-2xl font-bold font-['Inria Sans'] tracking-tight text-[#FFFFFF] sm:text-[112px]">
                            <TypeAnimation
                                sequence={['KnowledgeMap', 2000, '']}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                style={{ color: 'white' }}
                            />
                        </div>
                        <div className="pb-4">
                            <p className=" text-zinc-800 sm:text-[50px]">
                                A knowledge map of topics with relevancy scores for research papers.
                            </p>
                        </div>
                    </div>
                    <img src={hand_holding_book_through_phone} alt="hand holding book through phone" style={{ width: 'auto', height: '500px' }} />
                </div>
            </div>
        </div>
    )
}

export default Home;