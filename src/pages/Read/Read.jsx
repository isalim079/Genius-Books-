import { useLoaderData, useParams } from "react-router-dom";

const Read = () => {
    const { category } = useParams();

    const readBooksData = useLoaderData();

    const findBooks = readBooksData.find(
        (booksDetail) => booksDetail._id === category
    );
    // console.log(findBooks);

    const { name, description } = findBooks;

    return (
        <div className="md:p-32">
            <div className="card bg-lightCoffeeShade shadow-xl">
                <div className="card-body">
                    <h2 className="card-title underline">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="md:px-4 md:py-2 px-2 py-1 bg-oliveGreenShade text-lightCoffeeShade">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Read;
