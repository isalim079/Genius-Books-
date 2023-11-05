
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 md:p-16 p-6">
                <div>
                    <img data-aos="fade-up" className="" src="https://i.ibb.co/X8C6twh/banner.png" alt="" />
                </div>
                <div className=" text-blackShade md:flex md:flex-col justify-center">
                    <h1 className="md:text-5xl font-bold uppercase" data-aos="fade-up">Unlocking Knowledge, One Page at a Time</h1>
                    <div className="border border-darkBrownShade md:hidden my-2"></div>
                    <p className="text-sm md:text-base" data-aos="fade-up">
                        Library is a sanctuary of knowledge, where every book is
                        a portal to new realms, and every page is a treasure
                        trove of wisdom. Discover a world of endless
                        possibilities, embark on intellectual journeys, and
                        quench your thirst for knowledge at Elysian Library.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
