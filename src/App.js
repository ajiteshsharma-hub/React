import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Default");

  useEffect(() => {
    const data = {
      name: "Ajitesh Sharma",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-layout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
