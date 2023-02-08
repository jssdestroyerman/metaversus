import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => {
    return (
        <div className="flex-1 flex flex-col max-w-[250px] min-w-[210px]">
            <div
                className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-[#323f5d]`}
            >
                <img
                    src={imgUrl}
                    alt="icon"
                    className="w-1/2 h-1/2 object-contain"
                />
            </div>
            <h1 className="mt-6 font-bold text-2xl leading-7 text-white">
                Title {title}
            </h1>
            <p className="flex-1 mt-4 text-lg text-[#b0b0b0] leading-8">
                {subtitle}
            </p>
        </div>
    );
};

export default NewFeatures;
