"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 1)}
            className="flex md:flex-row flex-col gap-4 items-center"
        >
            <img
                src={imgUrl}
                alt="planet"
                className="md:w-[270px] w-full h-[250px] rounded-3xl object-cover"
            />
            <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-16 flex flex-col max-w-[650px]">
                    <h4 className="text-2xl lg:text-5xl text-white">{title}</h4>
                    <p className="mt-4 text-sm lg:text-xl text-secondary-white">
                        {subtitle}
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-transparent border-[1px] border-white ">
                <img
                    src="arrow.svg"
                    alt="arrow"
                    className="w-7 h-7 object-contain"
                />
            </div>
        </motion.div>
    );
};

export default InsightCard;
