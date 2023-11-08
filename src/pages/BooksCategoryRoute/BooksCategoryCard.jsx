/* eslint-disable react/prop-types */
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

const BooksCategoryCard = ({ booksCategory }) => {
    // console.log(booksCategory);

    const {
        name,
        ratingDetails,
        _id,
        image,
        author,
        bookCategory,
        description,
    } = booksCategory;

    const { category } = useParams();

    // console.log(category);
    // console.log(bookCategory, "database");

    return (
        <div>
            <div>
                {bookCategory === category ? (
                    <>
                        <div className="">
                            <div className="card md:card-side bg-lightCoffeeShade md:shadow-xl md:grid md:grid-cols-12">
                                <figure className="md:col-span-3">
                                    <img src={image} alt={name} />
                                </figure>
                                <div></div>
                                <div className="card-body md:col-span-8 md:flex md:items-end md:text-justify text-darkBrownShade">
                                    <h2 className="card-title">{name}</h2>
                                    <p className="text-sm md:text-right">
                                        {description.length > 300
                                            ? description.slice(0, 300) + "..."
                                            : description}
                                    </p>

                                    <div className="card-actions md:space-x-20 md:items-center">
                                        <div className="space-y-2">
                                            <p>
                                                <span className="font-semibold mr-2 underline">
                                                    Author:{" "}
                                                </span>
                                                {author}
                                            </p>
                                            <p>
                                                <span className="font-semibold mr-2 underline">
                                                    Category:{" "}
                                                </span>
                                                {bookCategory}
                                            </p>
                                            <p>
                                                <span className="font-semibold mr-2 underline">
                                                    Rating:
                                                </span>{" "}
                                                <Rating
                                                    initialRating={
                                                        ratingDetails
                                                    }
                                                    className="space-x-1 "
                                                    emptySymbol={
                                                        <BsStar></BsStar>
                                                    }
                                                    fullSymbol={
                                                        <BsStarFill className="text-darkBrownShade"></BsStarFill>
                                                    }
                                                    readonly
                                                ></Rating>
                                            </p>
                                        </div>
                                        <div>
                                            <Link to={`/bookDetails/${_id}`}>
                                                <button className="md:px-4 md:py-2 px-2 py-1 text-sm md:text-base bg-oliveGreenShade text-lightCoffeeShade">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default BooksCategoryCard;
