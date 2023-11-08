/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../router/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "/login.png";
import axios from "axios";

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



                // jwt
                // const jwtUser = result.user
                const jwtMail = {email}
                axios.post("http://localhost:2500/jwt", jwtMail, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    if(res.data.success) {
                        navigate(location?.state ? location.state : "/");
                    }
                })



                // navigate(location?.state ? location.state : "/");
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
        <div >
            <div className="flex items-center justify-around md:p-20 md:px-28 px-32">
                <div>
                    <img className="" src={loginImage} />
                </div>

                <div className="md:mr-16 w-80 md:w-auto">
                    <form
                        onSubmit={handleLogin}
                        className="  md:mx-auto bg-coffeeColorShade px-7 py-6 drop-shadow-lg"
                    >
                        <h2 className="text-center text-xl md:text-2xl font-semibold uppercase text-darkBrownShade">
                            Please Login
                        </h2>
                        <div className="border border-lightCoffeeShade my-3"></div>
                        <div className="form-control px-5 md:px-0">
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
                        <div className="form-control  px-5 md:px-0">
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
                        <div className="form-control mt-6  px-5 md:px-0">
                            <button
                                className="px-4 py-3 text-lg w-full bg-darkBrownShade text-white rounded-md"
                                // style={glassEffect}
                            >
                                LOGIN
                            </button>
                        </div>
                        <p className="text-center mt-7 text-lightCoffeeShade  px-5 md:px-0 text-sm md:text-base">
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
            </div>
        </div>
    );
};

export default Login;
