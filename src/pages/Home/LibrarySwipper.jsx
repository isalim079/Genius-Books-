/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LibrarySwipper = ({ libraryEventAndFeature }) => {
    console.log(libraryEventAndFeature);

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {libraryEventAndFeature.map((libraryEvent) => (
                <SwiperSlide key={libraryEvent._id}>
                    <img
                        className="md:h-[720px] md:w-full"
                        src={libraryEvent.image}
                        alt={libraryEvent.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LibrarySwipper;
