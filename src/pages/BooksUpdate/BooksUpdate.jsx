import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";

const BooksUpdate = () => {
    const bookCategories = [
        { value: "thriller", label: "Thriller" },
        { value: "biography", label: "Biography" },
        { value: "horror", label: "Horror" },
        { value: "comics", label: "Comics" },
        { value: "scienceFiction", label: "Science Fiction" },
        { value: "others", label: "Others" },
    ];

    const loadSpecificBooks = useLoaderData();
    // console.log(loadSpecificBooks);

    const [ratingDetails, setRatingDetails] = useState(null);

    const handleRatingClick = (rating) => {
        setRatingDetails(rating);
    };

    const handleUpdateBookData = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const bookQuantity = form.bookQuantity.value;
        const image = form.image.value;
        const author = form.author.value;
        const description = form.description.value;

        const updateBookDetails = {
            name,
            bookQuantity,
            image,
            bookCategory: loadSpecificBooks.bookCategory,
            author,
            description,
            ratingDetails,
        };

        fetch(`https://assignment-11-server-e906w3nv9-isalim079.vercel.app/category/${loadSpecificBooks._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateBookDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(
                        "You have successfully Updated your product",
                        {
                            position: "top-center",
                        }
                    );
                }
            });
    };

    return (
        <div className="md:p-20 p-2">
            <div className="font-poppins overflow-hidden bg-lightCoffeeShade md:p-10 p-2">
                <h2 className="text-center md:text-3xl text-xl font-bold underline mt-4 mb-2 md:mb-0 md:mt-10 text-blackShade ">
                    Update Book Shelf
                </h2>
                <form onSubmit={handleUpdateBookData}>
                    <div className=" max-w-screen-xl drop-shadow-xl mx-auto items-center justify-center md:p-10 grid md:grid-cols-2 grid-cols-1 gap-x-14">
                        {/* Field -1 -------------------------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    Name of the book
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={loadSpecificBooks?.name}
                                    placeholder="Book name"
                                    className="input text-sm md:text-base input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Field -2 -------------------------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    {" "}
                                    Enter book cover image URL
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    name="image"
                                    defaultValue={loadSpecificBooks?.image}
                                    type="text"
                                    placeholder="Book cover image URL"
                                    className="input text-sm md:text-base input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    {" "}
                                    Quantity of the book
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    name="bookQuantity"
                                    defaultValue={
                                        loadSpecificBooks?.bookQuantity
                                    }
                                    type="number"
                                    placeholder="Quantity of the book"
                                    className="input text-sm md:text-base input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Field -3 -------------------------------- */}
                        <div className="">
                            <label className="label">
                                <span className="label-text md:text-lg font-semibold text-blackShade">
                                    Select book category
                                </span>
                            </label>

                            <Select
                                defaultInputValue={
                                    loadSpecificBooks?.bookCategory
                                }
                                name="bookCategory"
                                readonly
                                options={bookCategories}
                            ></Select>
                        </div>

                        {/* Field -4 -------------------------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    Author Name
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    defaultValue={loadSpecificBooks?.author}
                                    name="author"
                                    type="text"
                                    placeholder="Enter author name"
                                    className="input text-sm md:text-base input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Field -5 -------------------------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    Short description
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    defaultValue={
                                        loadSpecificBooks?.description
                                    }
                                    name="description"
                                    type="text"
                                    placeholder="Short description about this book"
                                    className="input text-sm md:text-base input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Field -6 -------------------------------- */}
                        <div className="form-control col-span-full">
                            <label className="label">
                                <span className="label-text md:text-lg font-bold text-blackShade">
                                    Rating
                                </span>
                            </label>

                            <Rating
                                initialRating={ratingDetails}
                                onClick={handleRatingClick}
                                stop={5}
                                className="space-x-3 text-2xl"
                                emptySymbol={<BsStar></BsStar>}
                                fullSymbol={
                                    <BsStarFill className="text-darkBrownShade"></BsStarFill>
                                }
                                fractions={2}
                            ></Rating>
                            <p>Rating: {ratingDetails}</p>
                        </div>
                        <div className="col-span-full">
                            <button className="bg-oliveGreenShade text-white text-sm md:text-lg py-3  w-full md:mt-10 mt-4">
                                Update Book
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default BooksUpdate;
