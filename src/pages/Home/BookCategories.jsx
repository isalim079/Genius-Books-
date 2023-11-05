import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";

const BookCategories = () => {
    const [booksCategories, setBooksCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:2500/booksCategories")
            .then((res) => {
                setBooksCategories(res.data);
            })
            .catch((error) => {
                console.log("fetching booksCategories error", error);
            });
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 600,
        });
    }, []);

    return (
        <div className="mb-20">
            <div className="flex justify-center">
            <h1 className="text-5xl md:my-16 text-center text-darkBrownShade uppercase font-bold border-4 border-coffeeColorShade py-3 w-1/2" data-aos="zoom-out">Books Category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:px-28 md:gap-24">
                {booksCategories.map((booksCategory) => (
                    <>
                        <div>
                            <div
                                className="card bg-lightCoffeeShade shadow-xl"
                            >
                                <figure>
                                    <img
                                        className="rounded-b-2xl"
                                        src={booksCategory.image}
                                        alt={booksCategory.category}
                                    />
                                </figure>
                                <div className="card-body absolute bg-gradient-to-t from-black w-full h-full rounded-b-2xl">
                                    <h2
                                        className="card-title flex items-end text-white h-full w-full"
                                        data-aos="zoom-in-down"
                                    >
                                        {booksCategory.category}
                                    </h2>
                                    <button
                                        className="px-4 py-2 bg-oliveGreenShade rounded-md text-white"
                                        data-aos="fade-up"
                                    >
                                        Visit this Category
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
