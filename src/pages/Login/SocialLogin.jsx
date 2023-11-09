import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../router/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
    const { handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);
    const [geniusUsers, setGeniusUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/geniusBooksUsers")
            .then((res) => {
                setGeniusUsers(res.data);
            })
            .catch((error) => {
                console.log(error, "social login user fetching error");
            });
    }, []);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                if (res?.user) {
                    const userData = {
                        image: res?.user?.photoURL,
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                    };

                    const userExists = geniusUsers.some(
                        (geniusUser) => geniusUser.email !== userData.email
                    );

                    if (!userExists) {
                        fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/geniusBooksUsers", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(userData),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.insertedId) {
                                    console.log(
                                        "Successfully added user to database"
                                    );
                                }
                            });
                    }
                }

                console.log(res);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return (
        <div >
            <div className="divider text-white text-sm md:text-base">continue with</div>
            <div className="flex justify-center -mt-4">
                <div>
                    <button
                        onClick={() => handleSocialLogin(handleGoogleLogin)}
                        className=" rounded-md mt-5 px-5 justify-center py-2 text-sm md:text-base bg-darkBrownShade  text-white flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <FcGoogle className="text-xl"></FcGoogle>
                        Google
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => handleSocialLogin(handleGithubLogin)}
                        className=" rounded-md mt-5 px-5 justify-center py-2 text-sm md:text-base  bg-darkBrownShade text-white  flex items-center gap-2 ml-16 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        {" "}
                        <AiFillGithub className="text-xl"></AiFillGithub>
                        Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
