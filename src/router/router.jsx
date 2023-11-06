import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import AddBooks from "../pages/AddBooks/AddBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import BooksCategoryRoute from "../pages/BooksCategoryRoute/BooksCategoryRoute";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/addBooks",
                element: (
                    <PrivateRoute>
                        <AddBooks></AddBooks>
                    </PrivateRoute>
                ),
            },
            {
                path: "/allBooks",
                element: (
                    <PrivateRoute>
                        <AllBooks></AllBooks>
                    </PrivateRoute>
                ),
            },
            {
                path: "/borrowedBooks",
                element: (
                    <PrivateRoute>
                        <BorrowedBooks></BorrowedBooks>
                    </PrivateRoute>
                ),
            },
            {
                path: "/booksCategory/:category",
                element: (
                    <PrivateRoute>
                        <BooksCategoryRoute></BooksCategoryRoute>
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:2500/category"),
            },
            {
                path: "/bookDetails/:category",
                element: (
                    <PrivateRoute>
                        <BookDetails></BookDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:2500/category"),
            },
        ],
    },
]);
export default router;
