// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayuot from "./layout/MainLayuot";

// pages
import { Home, About, Contact, Shop } from "./pages";

// actions
import { loader as HomeLoader } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayuot />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
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
          path: "/shop/:id",
          element: <Shop />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
