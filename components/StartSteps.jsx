import styles from "../styles";

const StartSteps = ({ number, text }) => (
    <div className={`${styles.flexCenter}`}>
        <div
            className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-[#323f5d]`}
        >
            <p className="font-bold text-xl text-white">0{number}</p>
        </div>
        <p className="flex-1 ml-7 text-[#b0b0b0] leading-8">{text}</p>
    </div>
);

export default StartSteps;
