/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LibrarySwipper = ({ libraryEventAndFeature }) => {
    // console.log(libraryEventAndFeature);

    useEffect(() => {
        Aos.init({
            duration: 600,
        });
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {libraryEventAndFeature.map((libraryEvent) => (
                <SwiperSlide key={libraryEvent._id}>
                    <div>
                        <div className="absolute bg-gradient-to-r from-black h-full w-full p-5 md:p-0">
                            <div className=" text-lightCoffeeShade flex flex-col justify-center items-start md:pl-40 h-full space-y-2">
                            <h1 className="uppercase md:text-6xl font-semibold" data-aos="zoom-out">
                                {libraryEvent.title}
                            </h1>
                            <div className=" border-2 border-lightCoffeeShade w-[720px]"  data-aos="fade-right"></div>
                            <p className="pt-1 text-sm md:text-base" data-aos="fade-right">
                                {libraryEvent.subtitle}
                            </p>

                            <div>
                            <button className="md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-oliveGreenShade md:rounded-md"  data-aos="fade-right">
                                More Details
                            </button>
                        </div>

                            </div>
                        </div>
                        <div>
                            <img
                                className="md:h-[720px] md:w-full"
                                src={libraryEvent.image}
                                alt={libraryEvent.title}
                            />
                        </div>
                       
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LibrarySwipper;
