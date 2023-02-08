"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ world, active, handleClick, index }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={`relative ${
                active === world.id ? "lg:flex-[4] h-[600px]" : "lg:flex-1 h-20"
            } flex items-center justify-center  lg:h-[700px] transition-[all] duration-700 cursor-pointer overflow-hidden`}
            onClick={() => handleClick(world.id)}
        >
            <img
                src={world.imgUrl}
                alt="title"
                className="abosulte w-full h-full object-cover rounded-3xl"
            />
            {active !== world.id ? (
                <h3 className="font-semibold text-2xl md:text-xl text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    {world.title}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
                    <div
                        className={`${styles.flexCenter} w-16 h-16 rounded-3xl glassmorphism mb-4
                        `}
                    >
                        <img
                            src="/headset.svg"
                            alt="headset"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                    <p className="leading-[20px] text-white uppercase">
                        Enter the Metaverse
                    </p>
                    <h2 className="mt-6 font-semibold text-2xl md:text-xl text-white ">
                        {world.title}
                    </h2>
                </div>
            )}
        </motion.div>
    );
};

export default ExploreCard;
