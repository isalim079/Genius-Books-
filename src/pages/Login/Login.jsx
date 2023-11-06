/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../router/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const glassEffect = {
    background: "rgba( 255, 255, 255, 0.20 )",
    "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    "backdrop-filter": "blur( 4px )",
    "-webkit-backdrop-filter": "blur( 4px )",
    "border-radius": "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const Login = () => {
    const { loginWithEmailPass } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        loginWithEmailPass(email, password)
            .then((result) => {
                console.log(result.user);

                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);

                if (error.code === "auth/invalid-login-credentials") {
                    toast.error("Email and password doesn't match", {
                        position: "top-center",
                    });
                }
            });
    };

    return (
        <div className="bg-[url('https://i.ibb.co/yyBvHg3/login-Back.jpg')] h-fit bg-cover py-16">
            <h2
                className="md:w-3/4 lg:w-1/2 mx-auto px-4 py-3 bg-darkBrownShade hover:drop-shadow-lg cursor-pointer text-white md:text-3xl text-center my-10 shadow-lg"
                style={glassEffect}
            >
                Please Login
            </h2>

            <form
                onSubmit={handleLogin}
                className="md:w-3/4 lg:w-1/2 mx-auto bg-coffeeColorShade px-7 py-4 drop-shadow-lg"
                style={glassEffect}
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lightCoffeeShade md:text-base">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lightCoffeeShade md:text-base">
                            Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a
                            href="#"
                            className="label-text-alt link link-hover text-lightCoffeeShade"
                        >
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button
                        className="px-4 py-3 text-lg w-full bg-darkBrownShade text-white rounded-md"
                        style={glassEffect}
                    >
                        LOGIN
                    </button>
                </div>
                <p className="text-center mt-7 text-lightCoffeeShade">
                    Don't have an account?{" "}
                    <Link
                        className="underline text-lightCoffeeShade md:text-base md:ml-5"
                        to="/register"
                    >
                        Register Now!!
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
