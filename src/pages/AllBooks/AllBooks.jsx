// import { useLoaderData } from "react-router-dom";

import AllBooksCard from "./AllBooksCard";
import {  useState } from "react";

import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const allBooksDataBase = useLoaderData();


    const [filterAllBooks, setFilterAllBooks] = useState("");


    const handleFilteredBooks = (e) => {
        setFilterAllBooks(e.target.value);
    };

  

    return (
        <div>
            <div>
                <div className="md:py-20 flex justify-center mt-10 mb-10">
                    <div className="join md:w-1/2">
                        <select
                            onChange={handleFilteredBooks}
                            value={filterAllBooks}
                            className="select select-bordered join-item border md:w-full "
                        >
                            <option selected>Filter</option>
                            <option value="thriller">Thriller</option>
                            <option value="biography">Biography</option>
                            <option value="horror">Horror</option>
                            <option value="comics">Comics</option>
                            <option value="scienceFiction">
                                Science Fiction
                            </option>
                            <option value="others">Others</option>
                        </select>
                        <div className="indicator">
                            <button className="px-10 md:py-2 bg-oliveGreenShade text-lightCoffeeShade">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:space-y-20 p-5 md:p-0 md:px-28 space-y-5 ">
                    {allBooksDataBase
                        .filter((allBooksData) => {
                            if (filterAllBooks === "") {
                                return true;
                            }
                            return allBooksData.bookCategory === filterAllBooks;
                        })
                        .map((allBookData) => (
                            <AllBooksCard
                                key={allBookData._id}
                                allBookData={allBookData}
                            ></AllBooksCard>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default AllBooks;
