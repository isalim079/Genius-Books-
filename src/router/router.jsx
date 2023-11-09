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
import Read from "../pages/Read/Read";
import BooksUpdate from "../pages/BooksUpdate/BooksUpdate";

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
                path: "/booksUpdate/:id",
                element: (
                    <PrivateRoute>
                        <BooksUpdate></BooksUpdate>
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`https://assignment-11-server-e906w3nv9-isalim079.vercel.app/category/${params.id}`)
            },
            {
                path: "/allBooks",
                element: (
                    <PrivateRoute>
                        <AllBooks></AllBooks>
                    </PrivateRoute>
                ),
                loader: () => fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/allBooks")
            },
            {
                path: "/readBooks/:category",
                element: (
                    <PrivateRoute>
                        <Read></Read>
                    </PrivateRoute>
                ),
                loader: () => fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/category"),
            },
            {
                path: "/borrowedBooks",
                element: (
                    <PrivateRoute>
                        <BorrowedBooks></BorrowedBooks>
                    </PrivateRoute>
                ),
                loader: () => fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/borrowedBooks"),
            },
            {
                path: "/booksCategory/:category",
                element: (
                    <PrivateRoute>
                        <BooksCategoryRoute></BooksCategoryRoute>
                    </PrivateRoute>
                ),
                loader: () => fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/category"),
            },
            {
                path: "/bookDetails/:category",
                element: (
                    <PrivateRoute>
                        <BookDetails></BookDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch("https://assignment-11-server-e906w3nv9-isalim079.vercel.app/category"),
            },
        ],
    },
]);
export default router;
