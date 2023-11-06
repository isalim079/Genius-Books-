import { Link } from "react-router-dom";
import image from './404Error.png'

const ErrorPage = () => {
    return (
        <div>
        <div className="flex flex-col justify-center items-center h-screen p-16 md:p-0">
            <img  src={image} alt="" />
            <div className="mt-10">
            <Link to="/"><button className="md:px-5 md:py-3 px-3 py-2 bg-oliveGreenShade text-white md:text-xl">Go Home</button></Link>
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;