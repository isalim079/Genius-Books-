import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../router/AuthProvider";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const booksDetails = useLoaderData();
    // console.log(booksDetails)

    const [newBorrowBooks, setNewBorrowBooks] = useState(booksDetails);

    const [borrowBooksQuantity, setBorrowBooksQuantity] = useState();

    useEffect(() => {
        fetch("https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/category")
            .then((res) => res.json())
            .then((data) => {
                setBorrowBooksQuantity(data);
            });
    }, []);

    // console.log(borrowBooksQuantity);

    const handleReturn = (id) => {
        // console.log(id);

        Swal.fire({
            title: "You want to return?",
            text: "You can borrow this book any time",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!",
        }).then((res) => {
            if (res.isConfirmed) {
                fetch(`https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/borrowedBooks/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const findBooks = borrowBooksQuantity.find(
                                (borrowBookQuantity) =>
                                    borrowBookQuantity._id === id
                            );

                            const { bookQuantity } = findBooks;

                            // console.log(_id, bookQuantity);

                            fetch(`https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/category/${id}`, {
                                method: "PATCH",
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    bookQuantity: bookQuantity + 1,
                                }),
                            })
                                .then((res) => res.json())
                                .then((updatedData) => {
                                    console.log(updatedData);
                                });

                            Swal.fire(
                                "Returned!",
                                "Your book has been returned from your library.",
                                "success"
                            );

                            const remaining = booksDetails.filter(
                                (books) => books.id !== id
                            );
                            setNewBorrowBooks(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className=" md:bg-coffeeColorShade">
            <h1 className="text-center md:text-3xl font-bold uppercase underline md:pt-16 py-10 mt-10">
                Your personal library room
            </h1>
            <div className="md:grid md:grid-cols-3 md:gap-14 md:p-28 space-y-10 md:bg-coffeeColorShade">
                {newBorrowBooks.map((books) => (
                    <>
                        {user?.email === books?.email ? (
                            <div className="card w-72 md:w-full bg-lightCoffeeShade md:shadow-xl mx-auto text-darkBrownShade">
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
                                        <button
                                            onClick={() =>
                                                handleReturn(books.id)
                                            }
                                            className="md:px-4 md:py-2 bg-oliveGreenShade text-lightCoffeeShade px-2 py-1"
                                        >
                                            Return
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                           ""
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;
