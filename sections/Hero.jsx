"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
    return (
        <section className={`${styles.yPaddings} pl-16 md:pl-6`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <div className="flex flex-col items-center justify-center relative z-10">
                    <motion.h1
                        variants={textVariant(1.1)}
                        className={styles.heroHeading}
                    >
                        Metaverse
                    </motion.h1>
                    <motion.div
                        variants={textVariant(1.2)}
                        className="flex flex-row justify-center items-center"
                    >
                        <h1 className={styles.heroHeading}>Ma</h1>
                        <div className={styles.heroDText} />
                        <h1 className={styles.heroHeading}>Ness</h1>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="relative w-full md:-mt-5 -mt-3"
                >
                    <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-7" />
                    <img
                        src="cover.png"
                        alt="cover"
                        className="w-full h-[500px] md:[350px] object-cover rounded-tl-[140px] z-10 relative"
                    />
                    <a href="#explore">
                        <div className="w-full flex justify-end -mt-16 md:pr-12 relative z-10">
                            <img
                                src="/stamp.png"
                                alt="stamp"
                                className="w-40 h40
                                     md:w-24 md:h-24 object-contain"
                            />
                        </div>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
