import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "components/home/home";
import { ProductDetails } from "./components/shop/productdetails/productdetails";
import { Products } from "./components/shop/products/products";
import { Shop } from "./components/shop/shop";
import { Checkout } from "components/checkout/checkout";
import { Faq } from "components/faq/faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      { path: "/checkout", element: <Checkout /> },
      { path: "/faq", element: <Faq /> },

      {
        path: "/shop",
        element: <Shop />,
        children: [
          { path: "/shop/:id", element: <ProductDetails /> },
          { path: "/shop/category/:id", element: <Products /> },
          { path: "/shop", element: <Products />, index: true },
        ],
      },
    ],
  },
]);
