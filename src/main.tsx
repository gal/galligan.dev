import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Photography from "./pages/photography/Photography";
import Album from "./pages/photography/album/Album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/photography",
    element: <Photography />,
  },
  {
    path: "/photography/:album",
    element: <Album />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://blog.galligan.dev">Blog</a>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
        </ul>
      </nav>
    </header>
    <RouterProvider router={router} />
  </React.StrictMode>
);
