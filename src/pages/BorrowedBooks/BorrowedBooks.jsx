import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../router/AuthProvider";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const booksDetails = useLoaderData();
    // console.log(booksDetails)

    return (
        <div className=" bg-coffeeColorShade">
            <h1 className="text-center md:text-3xl font-bold uppercase underline md:pt-16">Your personal library room</h1>
            <div className="md:grid md:grid-cols-3 md:gap-14 md:p-28 bg-coffeeColorShade">
                {booksDetails.map((books) => (
                    <>
                        {user?.email === books?.email ? (
                            <div className="card w-96 md:w-full bg-lightCoffeeShade shadow-xl mx-auto text-darkBrownShade">
                                <figure>
                                    <img
                                        className="md:h-[420px] md:w-full"
                                        src={books.image}
                                        alt={books.name}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{books.name}</h2>
                                    <p className="md:text-lg">
                                        <span className="font-semibold underline">
                                            Category:
                                        </span>{" "}
                                        {books.category}
                                    </p>
                                    <p className=" md:text-lg">
                                        <span className="font-semibold underline">
                                            Borrowed Date:
                                        </span>{" "}
                                        {books.borrowedDate}
                                    </p>
                                    <p className=" md:text-lg">
                                        <span className="font-semibold underline">
                                            Return Date:
                                        </span>{" "}
                                        {books.returnedDate}{" "}
                                    </p>
                                    <div className="card-actions justify-between">
                                        <button className="md:px-4 md:py-2 bg-oliveGreenShade text-lightCoffeeShade px-2 py-1">
                                            Read
                                        </button>
                                        <button className="md:px-4 md:py-2 bg-oliveGreenShade text-lightCoffeeShade px-2 py-1">
                                            Return
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-3xl">
                                You have not borrowed any books
                            </p>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;
