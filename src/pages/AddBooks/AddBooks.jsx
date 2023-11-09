import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";

const glassEffect = {
    background: "rgba( 255, 255, 255, 0.70 )",
    "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    "backdrop-filter": "blur( 4px )",
    "-webkit-backdrop-filter": "blur( 4px )",
    "border-radius": "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const bookCategories = [
    { value: "thriller", label: "Thriller" },
    { value: "biography", label: "Biography" },
    { value: "horror", label: "Horror" },
    { value: "comics", label: "Comics" },
    { value: "scienceFiction", label: "Science Fiction" },
    { value: "others", label: "Others" },
];

const AddBooks = () => {
    const [ratingDetails, setRatingDetails] = useState(null);

    const handleRatingClick = (rating) => {
        setRatingDetails(rating);
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleBookCategory = (selectedOptions) => {
        setSelectedCategory(selectedOptions);
    };
    // console.log(selectedCategory.value);

    const handleAddBooks = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const bookQuantity = form.bookQuantity.value;
        const image = form.image.value;
        const author = form.author.value;
        const description = form.description.value;

        const addBookDetails = {
            name,
            bookQuantity,
            image,
            bookCategory: selectedCategory.value,
            author,
            description,
            ratingDetails,
        };
        // console.log(addBookDetails);

        fetch("https://assignment-11-server-kb88i8u8c-isalim079.vercel.app/allBooksDetails",  {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addBookDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    toast.success(
                        "You have successfully added your book to shelf",
                        {
                            position: "top-center",
                        }
                    );
                }
                form.reset();
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/4ZCbZ8S/addBooks.png')] md:p-20 p-2">
            <div
                className="font-poppins overflow-hidden bg-lightCoffeeShade md:p-10 p-2"
                style={glassEffect}
            >
                <h2 className="text-center md:text-3xl text-xl font-bold underline mt-4 mb-2 md:mb-0 md:mt-10 text-blackShade ">
                    Add Books To Shelf
                </h2>
                <form onSubmit={handleAddBooks}>
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
                                name="bookCategory"
                                onChange={handleBookCategory}
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
                                Add Book
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddBooks;
