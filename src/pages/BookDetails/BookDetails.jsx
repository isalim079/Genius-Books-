import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const booksDetails = useLoaderData();
    const { category } = useParams();

    const findBooks = booksDetails.find(
        (booksDetail) => booksDetail._id === category
    );

    const {
        name,


        image,
        bookQuantity,
     
        description,
    } = findBooks;

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
                            Book Quantity: {bookQuantity}
                        </p>
                            <button className="md:px-4 md:py-2 rounded-md md:bg-oliveGreenShade md:text-lightCoffeeShade underline md:no-underline">
                                Borrow
                            </button>
                            <button className="md:px-4 md:py-2 rounded-md md:bg-oliveGreenShade md:text-lightCoffeeShade underline md:no-underline">
                                Read
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
