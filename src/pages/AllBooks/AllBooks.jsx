import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";


const AllBooks = () => {

    const allBooksDataBase = useLoaderData()

    return (
        <div>
            <div className="md:space-y-20 p-5 md:p-0 md:px-28 space-y-5 ">
                {allBooksDataBase.map((allBookData) => (
                    <AllBooksCard
                        key={allBookData._id}
                        allBookData={allBookData}
                    ></AllBooksCard>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;