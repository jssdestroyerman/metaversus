"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
    const [active, setActive] = useState("world-1"); /* ex: "world-1" */

    return (
        <section className={`${styles.paddings}`} id="explore">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amout: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title={"| The World"} textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            Choose the world you want{" "}
                            <br className="hidden md:block" />
                            to explore
                        </>
                    }
                    textStyles="text-center"
                />
                <div className="mt-12 flex flex-col lg:flex-row min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            world={world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
