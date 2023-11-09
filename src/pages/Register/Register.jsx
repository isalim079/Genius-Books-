/* eslint-disable no-useless-escape */
import { useContext } from "react";
import { Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SocialLogin from "../Login/SocialLogin";
import { AuthContext } from "../../router/AuthProvider";
import registerImage from "/register.png";

const Register = () => {
    const { registerWithEmailPass } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(image, name, email, password);

        const geniusBooksUsers = { image, name, email, password };

        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        if (!specialCharRegex.test(password)) {
            toast.error("Password should have one special character included", {
                position: "top-center",
            });
            return;
        }

        if (!uppercaseRegex.test(password)) {
            toast.error("Password should have one capital character included", {
                position: "top-center",
            });
            return;
        }

        if (password.length < 0) {
            toast.error("Password should be 6 character or more", {
                position: "top-center",
            });
            return;
        }

        registerWithEmailPass(email, password)
            .then((result) => {
                console.log(result.user);

                toast.success("You have successfully created your account");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image,
                });
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });

        fetch("https://assignment-11-server-2-8lefmgsza-isalim079.vercel.app/geniusBooksUsers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(geniusBooksUsers),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Successfully added user to database");
                }
                form.reset();
            });
    };

    return (
        <div>
            <div className="flex items-center justify-between md:px-28 md:py-16 space-x-10">
                <div className="  flex-1">
                    <img className="w-80 md:ml-12" src={registerImage} />
                </div>
                <div className="flex-1">
                    <form
                        onSubmit={handleRegister}
                        className=" mx-auto bg-coffeeColorShade px-7 py-4 drop-shadow-lg mb-10"
                    >
                        <h1 className="underline text-4xl text-center py-4 font-bold text-darkBrownShade">
                            GENIUS BOOKS
                        </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white md:text-base">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white md:text-base">
                                    Photo Url
                                </span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter your image url..."
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white md:text-base">
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
                                <span className="label-text text-white md:text-base">
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
                                    className="label-text-alt text-white link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control md:mt-6">
                            <button className="px-4 py-3 text-lg w-full bg-darkBrownShade text-white rounded-md">
                                REGISTER
                            </button>
                        </div>
                        <p className="text-center mt-7 text-white">
                            Already have an account?{" "}
                            <Link
                                className="ml-5 underline text-white"
                                to="/login"
                            >
                                Login Now!!
                            </Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;
