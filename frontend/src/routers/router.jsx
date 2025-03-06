import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/Home/shop/ShopPage";
import SingleProduct from "../pages/Home/shop/productDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/categories/:categoryName",
                element: (
                    <>
                        <CategoryPage />
                        <div>Category Page</div>
                    </>
                ),
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/shop",
                element: <ShopPage/>
            },
            {
                path: "/shop/:id",
                element: <SingleProduct/>
            }
        ],
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
]);

export default router;
