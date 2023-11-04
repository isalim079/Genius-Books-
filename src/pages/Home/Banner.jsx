import banner from "/banner.png";

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 md:p-16">
                <div>
                    <img className="" src={banner} alt="" />
                </div>
                <div className=" text-blackShade flex flex-col justify-center">
                    <h1 className="text-5xl font-bold uppercase ">Unlocking Knowledge, One Page at a Time</h1>
                    <p>
                        Library is a sanctuary of knowledge, where every book is
                        a portal to new realms, and every page is a treasure
                        trove of wisdom. Discover a world of endless
                        possibilities, embark on intellectual journeys, and
                        quench your thirst for knowledge at Elysian Library.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
