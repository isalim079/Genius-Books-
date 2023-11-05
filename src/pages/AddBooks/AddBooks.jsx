import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const glassEffect = {
    
    background: "rgba( 255, 255, 255, 0.70 )",
    "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    "backdrop-filter": "blur( 4px )",
    "-webkit-backdrop-filter": "blur( 4px )",
    "border-radius": "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  }

const AddBooks = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/4ZCbZ8S/addBooks.png')] p-20">
             <div className="font-poppins overflow-hidden bg-lightCoffeeShade p-10" style={glassEffect}>
            <h2 className="text-center md:text-3xl text-2xl font-bold underline mt-10 text-blackShade ">Add Books To Shelf</h2>
            <form >
                <div className=" max-w-screen-xl drop-shadow-xl mx-auto items-center justify-center p-10 grid md:grid-cols-2 gap-x-14">
                    {/* Field -1 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                Name of the book
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Book name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -2 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                {" "}
                                Enter book cover image URL
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="image"
                                type="text"
                                placeholder="Book cover image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                {" "}
                                Quantity of the book
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="bookQuantity"
                                type="number"
                                placeholder="Quantity of the book"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -3 -------------------------------- */}
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-blackShade">
                                Select book category
                            </span>
                        </label>
                        <div className=" grid md:grid-cols-2 gap-x-52 font-semibold">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        
                                        type="radio"
                                        name="category"
                                        value="thriller"
                                        className="radio radio-sm checked:bg-darkBrownShade border-2 border-black"
                                    />
                                    <span className="label-text text-base">
                                        Thriller
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        
                                        type="radio"
                                        name="category"
                                        value="biography"
                                        className="radio radio-sm checked:bg-darkBrownShade border-2 border-black"
                                    />
                                    <span className="label-text text-base">
                                        Biography
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        
                                        type="radio"
                                        name="category"
                                        value="horror"
                                        className="radio radio-sm checked:bg-darkBrownShade border-2 border-black"
                                    />
                                    <span className="label-text text-base">
                                        Horror
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        
                                        type="radio"
                                        name="category"
                                        value="comics"
                                        className="radio radio-sm checked:bg-darkBrownShade border-2 border-black"
                                    />
                                    <span className="label-text text-base">
                                        Comics
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        
                                        type="radio"
                                        name="category"
                                        value="scienceFiction"
                                        className="radio radio-sm checked:bg-darkBrownShade border-2 border-black"
                                    />
                                    <span className="label-text text-base">
                                        Sci-Fi
                                    </span>
                                </label>
                            </div>
                           
                        </div>
                    </div>

                    {/* Field -4 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                Author Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="author"
                                type="text"
                                placeholder="Enter author name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -5 -------------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                Short description
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                name="description"
                                type="text"
                                placeholder="Short description about product"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    {/* Field -6 -------------------------------- */}
                    <div className="form-control col-span-full">
                        <label className="label">
                            <span className="label-text text-lg font-bold text-blackShade">
                                Rating
                            </span>
                        </label>
                        <div className="rating">
                            <input
                                
                                type="radio"
                                name="rating"
                                value="1 star"
                                className="mask mask-star-2 bg-blackShade"
                            />
                            <input
                                
                                type="radio"
                                name="rating"
                                value="2 star"
                                className="mask mask-star-2 bg-blackShade"
                            />
                            <input
                                
                                type="radio"
                                name="rating"
                                value="3 star"
                                className="mask mask-star-2 bg-blackShade"
                            />
                            <input
                                
                                type="radio"
                                name="rating"
                                value="4 star"
                                className="mask mask-star-2 bg-blackShade"
                            />
                            <input
                                
                                type="radio"
                                name="rating"
                                value="5 star"
                                className="mask mask-star-2 bg-blackShade"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="bg-oliveGreenShade text-white text-lg py-3  w-full mt-10">
                            Add Book
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default AddBooks;