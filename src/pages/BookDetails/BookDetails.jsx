// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../router/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = year + "-" + month + "-" + date;

    const booksDetails = useLoaderData();
    const { category } = useParams();
    // console.log(category);
    const { user } = useContext(AuthContext);

    const findBooks = booksDetails.find(
        (booksDetail) => booksDetail._id === category
    );
    // console.log(findBooks);

    const { name, image, bookQuantity, description, _id } = findBooks;

    const [newBookQuantity, setNewBookQuantity] = useState(bookQuantity);

    const handleBorrowBooks = (e) => {
        e.preventDefault();
        const form = e.target;
        const returnedDate = form.returnedDate.value;

        const borrowBooksData = {
            category: findBooks.bookCategory,
            name: findBooks.name,
            email: user.email,
            id: findBooks._id,
            image: findBooks.image,
            borrowedDate: currentDate,
            bookQuantity: bookQuantity - 1,
            returnedDate: returnedDate,
        };

        fetch("https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/borrowedBooks", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const bookExist = data.some(
                    (books) => books.name === findBooks.name
                );
                if (bookExist) {
                    toast.error("You have already borrowed this book", {
                        position: "top-center",
                    });
                } else {
                    fetch("https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/borrowedBooks", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(borrowBooksData),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.insertedId) {
                                const booksQuantity = bookQuantity - 1;
                                setNewBookQuantity(booksQuantity);

                                toast.success(
                                    "You have successfully added your book to shelf",
                                    {
                                        position: "top-center",
                                    }
                                );
                            }
                        });
                }
            });
    };

    const handleUpdateQuantity = (id) => {
        fetch("https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/borrowedBooks", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const bookExist = data.some(
                    (books) => books.name === findBooks.name
                );

                if (!bookExist) {
                    fetch(`https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/category/${id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            bookQuantity: bookQuantity - 1,
                        }),
                    })
                        .then((res) => res.json())
                        .then((updatedData) => {
                            console.log(updatedData);
                        });
                }
            });
    };

    return (
        <div>
            <div className=" md:h-screen md:flex items-center bg-darkBrownShade">
                <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-xl mx-auto font-poppins text-blackShade p-4 md:p-0">
                    <figure>
                        <img className="md:h-[420px]" src={image} alt="" />
                    </figure>
                    <div className="card-body md:w-[720px]">
                        <h2 className="card-title underline">{name}</h2>
                        <p className="text-sm md:text-base">{description}</p>
                        <div className="card-actions justify-between">
                            <p className="md:text-base underline md:no-underline md:text-darkBrownShade md:border-2 md:max-w-[190px] md:py-3 text-center rounded-md md:font-semibold">
                                Book Quantity: {newBookQuantity}
                            </p>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {newBookQuantity < 1 ? (
                                <div>
                                    <button
                                        className="md:px-4 md:py-2 rounded-md md:bg-oliveGreenShade md:text-lightCoffeeShade underline md:no-underline"
                                        disabled
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_5")
                                                .showModal()
                                        }
                                    >
                                        Borrow
                                    </button>
                                    <dialog
                                        id="my_modal_5"
                                        className="modal modal-bottom sm:modal-middle"
                                    >
                                        <div className="modal-box">
                                            <h3 className="text-center underline mb-4">
                                                Please fill-up the form bellow
                                            </h3>
                                            <div>
                                                <form
                                                    onSubmit={handleBorrowBooks}
                                                >
                                                    <div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Name
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder={
                                                                    user?.displayName ||
                                                                    user?.name
                                                                }
                                                                className="input input-bordered"
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Email
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder={
                                                                    user?.email
                                                                }
                                                                className="input input-bordered"
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Return Date
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="date"
                                                                name="returnedDate"
                                                                placeholder="Enter return date"
                                                                className="input input-bordered"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    handleUpdateQuantity(
                                                                        _id
                                                                    )
                                                                }
                                                                className="md:px-4 md:py-2 px-2 py-1 bg-oliveGreenShade text-white text-sm mt-6"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="md:px-4 md:py-2 px-2 py-1 bg-oliveGreenShade text-white text-sm">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            ) : (
                                <div>
                                    <button
                                        className="md:px-4 md:py-2 rounded-md md:bg-oliveGreenShade md:text-lightCoffeeShade underline md:no-underline"
                                        onClick={() =>
                                            document
                                                .getElementById("my_modal_5")
                                                .showModal()
                                        }
                                    >
                                        Borrow
                                    </button>
                                    <dialog
                                        id="my_modal_5"
                                        className="modal modal-bottom sm:modal-middle"
                                    >
                                        <div className="modal-box">
                                            <h3 className="text-center underline mb-4">
                                                Please fill-up the form bellow
                                            </h3>
                                            <div>
                                                <form
                                                    onSubmit={handleBorrowBooks}
                                                >
                                                    <div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Name
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder={
                                                                    user?.displayName ||
                                                                    user?.name
                                                                }
                                                                className="input input-bordered"
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Email
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder={
                                                                    user?.email
                                                                }
                                                                className="input input-bordered"
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text md:text-base">
                                                                    Return Date
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="date"
                                                                name="returnedDate"
                                                                placeholder="Enter return date"
                                                                className="input input-bordered"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    handleUpdateQuantity(
                                                                        _id
                                                                    )
                                                                }
                                                                className="md:px-4 md:py-2 px-2 py-1 bg-oliveGreenShade text-white text-sm mt-6"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="md:px-4 md:py-2 px-2 py-1 bg-oliveGreenShade text-white text-sm">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            )}
                            <Link to={`/readBooks/${_id}`}>
                            <button className="md:px-4 md:py-2 rounded-md md:bg-oliveGreenShade md:text-lightCoffeeShade underline md:no-underline">
                                Read
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
