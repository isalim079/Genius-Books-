import Banner from "./Banner";
import BookCategories from "./BookCategories";
import BookOfTheMonth from "./BookOfTheMonth";
import Footer from "./Footer";
import LibraryEvents from "./LibraryEvents";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-[#F7F2F0]">
                <Banner></Banner>
            </div>
            <div>
                <BookOfTheMonth></BookOfTheMonth>
            </div>
            <div>
                <LibraryEvents></LibraryEvents>
            </div>
            <div>
                <BookCategories></BookCategories>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
