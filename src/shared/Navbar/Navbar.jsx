import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../router/AuthProvider";

import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("you have logged out successfully");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        const clickedItem = e.target;
        console.log(clickedItem.innerText);
        if (clickedItem.innerText === "Light") {
            setTheme("light");
        }
        if (clickedItem.innerText === "Dark") {
            setTheme("dark");
        }
        if (clickedItem.innerText === "Retro") {
            setTheme("retro");
        }
        if (clickedItem.innerText === "CupCake") {
            setTheme("cupcake");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const navLinks = (
        <>
            <div className="text-base font-normal flex-col md:flex-col flex gap-1 text-center md:text-left md:space-y-8 list-none">
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                transition: "all 0.2s",
                                textDecoration: isActive ? "underline" : "",
                                color: isPending ? "#3E3E3D" : "#3E3E3D",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/addBooks"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                transition: "all 0.2s",
                                textDecoration: isActive ? "underline" : "",
                                color: isPending ? "#3E3E3D" : "#3E3E3D",
                            };
                        }}
                    >
                        Add Book
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/allBooks"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                transition: "all 0.2s",
                                textDecoration: isActive ? "underline" : "",
                                color: isPending ? "#3E3E3D" : "#3E3E3D",
                            };
                        }}
                    >
                        All Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/borrowedBooks"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                transition: "all 0.2s",
                                textDecoration: isActive ? "underline" : "",
                                color: isPending ? "#3E3E3D" : "#3E3E3D",
                            };
                        }}
                    >
                        Borrowed Books
                    </NavLink>
                </li>
                <li className="">
                    <details className="dropdown">
                        <summary className="m-1">Themes</summary>
                        <ul
                            className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
                            onClick={handleToggle}
                        >
                            <li name="item1">
                                <a>Light</a>
                            </li>
                            <li name="item2">
                                <a>Dark</a>
                            </li>
                            <li name="item3">
                                <a>Retro</a>
                            </li>
                            <li name="item4">
                                <a>CupCake</a>
                            </li>
                        </ul>
                    </details>
                </li>
            </div>
        </>
    );

    return (
        <div className="bg-lightCoffeeShade md:drop-shadow-xl pb-36 mb:pb-0">
            <div className="navbar max-w-screen-xl mx-auto md:flex md:flex-col md:h-screen md:justify-around md:items-start md:mr-14 md:ml-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu-xs mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img src="/logo96.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1">{navLinks}</ul>
                </div>
                <div className="">
                    {user ? (
                        <div className="flex-col ml-6">
                            <div className="flex-col">
                                <div>
                                    {user?.photoURL ? (
                                        <img
                                            className="md:w-10 md:h-10 w-8 h-8 md:mb-2 rounded-full"
                                            src={user?.photoURL}
                                        />
                                    ) : (
                                        <BiSolidUserCircle className="md:text-5xl text-black"></BiSolidUserCircle>
                                    )}
                                </div>
                                <div className=" md:mr-4">
                                    {user?.displayName ? (
                                        <p className=" md:text-black text-xs md:text-base underline">
                                            {user?.displayName}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="md:px-4 md:py-2 md:bg-oliveGreenShade text-sm md:mt-3 md:text-white  text-black underline md:no-underline"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="md:ml-4 md:px-10 md:py-2 md:bg-oliveGreenShade text-darkBrownShade  md:text-white text-base font-semibold ml-16">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
