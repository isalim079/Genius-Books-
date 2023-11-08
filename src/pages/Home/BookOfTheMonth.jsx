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
            .get("https://assignment-11-server-iota-two.vercel.app/booksOfTheMonth")
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
                        className="md:text-5xl text-center font-bold text-lightCoffeeShade pt-5 md:pt-20  underline"
                        data-aos="fade-up"
                    >
                        BOOK OF THE MONTH
                    </h1>
                    <div className="flex md:border md:border-white justify-center md:mt-8">
                        <div className="md:w-[1100px] w-60 text-sm md:text-base mt-2 mb-2 text-lightCoffeeShade">
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
                <div className="space-y-10 md:space-y-0">
                    {bookOfTheMonth.map((books) => (
                        <>
                            <div
                                className=" md:px-36 md:py-8"
                                data-aos="fade-up"
                            >
                                <div className="md:card lg:card-side bg-lightCoffeeShade md:shadow-xl text-darkBrownShade">
                                    <figure>
                                        <img
                                            className="md:p-16 p-10"
                                            data-aos="fade-right"
                                            src={books.image}
                                            alt="Album"
                                        />
                                    </figure>
                                    <div className="card-body md:text-right md:p-16">
                                        <h2
                                            className="md:text-3xl font-semibold uppercase underline"
                                            data-aos="zoom-in-down"
                                        >
                                            {books.name}
                                        </h2>
                                        <p
                                            className="text-oliveGreenShade text-sm md:text-base"
                                            data-aos="zoom-in-down"
                                        >
                                            {books.details}
                                        </p>
                                        <div className="card-actions md:items-end md:flex-col flex flex-col">
                                            <p data-aos="zoom-in-up">
                                                <span className="underline font-semibold">
                                                    Author :
                                                </span>{" "}
                                                {books.author}
                                            </p>
                                            <button
                                                data-aos="zoom-in-up"
                                                className="px-4 py-2 mt-3 md:mt-0 text-sm md:text-base bg-oliveGreenShade text-lightCoffeeShade rounded-md"
                                            >
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
