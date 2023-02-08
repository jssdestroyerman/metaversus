"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="gradient-02 z-0 -z-10" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText
                    title="| About Metaverses"
                    textStyles="text-center"
                />
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="mt-2 font-normal text-3xl md:text-xl text-center text-secondary-white"
                >
                    <span className="font-extrabold text-white">
                        Metaverse{" "}
                    </span>
                    is a new thing in the future, where you can enjoy the
                    virtual world by feeling like it's really real, you can feel
                    what you feel in this metaverse world, because this is
                    really the{" "}
                    <span className="font-extrabold text-white">
                        madness of the metaverse
                    </span>{" "}
                    of today, using only{" "}
                    <span className="font-extrabold text-white">VR</span>{" "}
                    devices you can easily{" "}
                    <span className="font-extrabold text-white">explore</span>{" "}
                    the metaverse world you want, turn your dreams into reality.
                    Let's explore the madness of the metaverse by scrolling down
                </motion.p>

                <motion.img
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    src="/arrow-down.svg"
                    alt="arrow down"
                    className="w-4 h-6 object-contain mt-7"
                />
            </motion.div>
        </section>
    );
};

export default About;
