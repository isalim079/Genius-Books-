import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import AddBooks from "../pages/AddBooks/AddBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import BooksCategoryRoute from "../pages/BooksCategoryRoute/BooksCategoryRoute";

const router = createBrowserRouter([
   {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <AddBooks></AddBooks>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>
            },
            {
                path: '/booksCategory/:category',
                element: <BooksCategoryRoute></BooksCategoryRoute>,
                loader: () => fetch("http://localhost:2500/category"),
            },
        ]
   }
])
export default router;