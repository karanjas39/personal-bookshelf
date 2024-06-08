import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainOutlet from "./Components/MainOutlet/MainOutlet.jsx";
import MyBooks, { getBooksFromStorage } from "./Components/MyBooks/MyBooks.jsx";
import Home from "./Components/Home/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainOutlet />}>
      <Route path="" element={<Home />} />
      <Route
        path="mybooks"
        element={<MyBooks />}
        loader={getBooksFromStorage}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
