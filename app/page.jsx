import { Footer, Navbar } from "../components";
import {
    About,
    Explore,
    Feedback,
    GetStarted,
    Hero,
    Insights,
    WhatsNew,
    World,
} from "../sections";

const Page = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
            <About />
            <div className="gradient-03 -z-10" />
        </div>
        <Explore />
        <div className="relative">
            <GetStarted />
            <div className="gradient-04 -z-10" />

            <WhatsNew />
        </div>
        <World />
        <div className="relative">
            <Insights />
            <div className="gradient-04 -z-10" />
            <Feedback />
        </div>
        <Footer />
    </div>
);

export default Page;
