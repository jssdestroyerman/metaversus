"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
        >
            <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="flex flex-[0.5] lg:max-w-[370px] justify-end flex-col gradient-05 sm:p-8 p-4 rounded-3xl border-[1px] border-[#6a6a6a] relative "
            >
                <div className="feedback-gradient -z-10" />
                <div>
                    <h4 className="font-bold text-2xl md:text-3xl leading-10 lg:leading-9 text-white">
                        Samantha
                    </h4>
                    <p className="mt-2 md:text-lg text-sm md:leading-5 leading-4 text-white">
                        Founder | Metaversus
                    </p>
                </div>
                <p className="mt-7 md:text-2xl text-lg leading-10 text-white">
                    “With the development of today's technology, metaverse is
                    very useful for today's work, or can be called web 3.0. by
                    using metaverse you can use it as anything”
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="relative flex flex-1 justify-center items-center"
            >
                <img
                    src="/planet-09.png"
                    alt="planet-09"
                    className="w-full h-full lg:h[610px] min-h-[210px] object-cover rounded-3xl "
                />
                <motion.div
                    variants={zoomIn(0.4, 1)}
                    className="lg:block hidden absolute -left-[10%] top-[3%] "
                >
                    <img
                        src="/stamp.png"
                        alt="stmap"
                        className="w-[155px] h-[155px]"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;
