/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BookOfTheMonth = () => {
    const [bookOfTheMonth, setBookOfTheMonth] = useState([]);

    useEffect(() => {
        Aos.init({
            duration: 600,
        });
    }, []);
    useEffect(() => {
        axios
            .get("http://localhost:2500/booksOfTheMonth")
            .then((res) => {
                setBookOfTheMonth(res.data);
            })
            .catch((error) => {
                console.log("fetching bookOfTheMonth error", error);
            });
    }, []);

    // console.log(bookOfTheMonth);

    return (
        <div className="bg-darkBrownShade h-content">
            <div>
                <div>
                    <h1
                        className="text-5xl text-center font-bold text-lightCoffeeShade md:pt-20  underline"
                        data-aos="fade-up"
                    >
                        BOOK OF THE MONTH
                    </h1>
                    <div className="flex border border-white justify-center mt-8">
                        <div className="w-[1100px] mt-2 mb-2 text-lightCoffeeShade">
                            <Marquee speed={70}>
                                <p>
                                    Every month, we carefully select a literary
                                    masterpiece to be our 'Book of the Month.'
                                    These exceptional reads represent the best
                                    in contemporary and classic literature,
                                    promising a captivating journey through
                                    captivating stories and profound ideas.
                                </p>
                            </Marquee>
                        </div>
                    </div>
                </div>
                <div>
                    {bookOfTheMonth.map((books) => (
                        <>
                            <div className=" md:px-36 md:py-8" data-aos="fade-up">
                                <div className="card lg:card-side bg-lightCoffeeShade shadow-xl text-darkBrownShade">
                                    <figure>
                                        <img
                                        className="p-16"
                                        data-aos="fade-right"
                                            src={books.image}
                                            alt="Album"
                                        />
                                    </figure>
                                    <div className="card-body text-right p-16">
                                        <h2 className="text-3xl font-semibold uppercase underline"  data-aos="zoom-in-down">
                                            {books.name}
                                        </h2>
                                        <p className="text-oliveGreenShade" data-aos="zoom-in-down">
                                            {books.details}
                                        </p>
                                        <div className="card-actions items-end md:flex-col">
                                            <p  data-aos="zoom-in-up"><span className="underline font-semibold">Author :</span>  {books.author}</p>
                                            <button  data-aos="zoom-in-up" className="px-4 py-2 bg-oliveGreenShade text-lightCoffeeShade rounded-md">
                                                Genre
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookOfTheMonth;
