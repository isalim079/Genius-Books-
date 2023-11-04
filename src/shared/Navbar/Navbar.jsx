import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                                padding: isActive ? "8px 20px" : "",
                                border: isActive ? "1px solid #3E3E3D" : "",
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
                                padding: isActive ? "8px 20px" : "",
                                border: isActive ? "1px solid #3E3E3D" : "",
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
                                padding: isActive ? "8px 20px" : "",
                                border: isActive ? "1px solid #3E3E3D" : "",
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
                                padding: isActive ? "8px 20px" : "",
                                border: isActive ? "1px solid #3E3E3D" : "",
                                color: isPending ? "#3E3E3D" : "#3E3E3D",
                            };
                        }}
                    >
                        Borrowed Books
                    </NavLink>
                </li>
            </div>
        </>
    );

    return (
        <div className="bg-lightCoffeeShade drop-shadow-xl">
            <div className="navbar max-w-screen-xl mx-auto md:flex md:flex-col md:h-screen md:justify-between md:items-start md:pl-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                            className="dropdown-content menu-xs mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                           {navLinks}
                           
                        </ul>
                    </div>
                    <div>
                        <img className="w-24" src="/logo96.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
