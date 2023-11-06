// eslint-disable-next-line no-unused-vars
import { useLoaderData, useParams } from "react-router-dom";
import BooksCategoryCard from "./BooksCategoryCard";

const BooksCategoryRoute = () => {
    const booksCategories = useLoaderData();
    // console.log(booksCategories);

    const { category } = useParams();

    return (
        <div className="bg-coffeeColorShade border border-coffeeColorShade">
            <div>
                <h1 className="md:text-5xl text-center mt-10 uppercase font-semibold underline">
                    {category}
                </h1>
                <p className="text-center ">Grow your knowledge</p>
            </div>
            <div className="md:space-y-20 p-5 md:p-0 md:px-28 space-y-5 ">
                {booksCategories.map((booksCategory) => (
                    <BooksCategoryCard
                        key={booksCategory._id}
                        booksCategory={booksCategory}
                    ></BooksCategoryCard>
                ))}
            </div>
        </div>
    );
};

export default BooksCategoryRoute;
