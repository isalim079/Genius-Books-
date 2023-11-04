import Banner from "./Banner";
import BookOfTheMonth from "./BookOfTheMonth";



const Home = () => {
    return (
        <div>
            <div className="bg-[#F7F2F0]">
                <Banner></Banner>
            </div>
            <div>
                <BookOfTheMonth></BookOfTheMonth>
            </div>
            
        </div>
    );
};

export default Home;