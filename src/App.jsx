// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayuot from "./layout/MainLayuot";

// pages
import { Home, About, Contact, Shop, Club } from "./pages";

// actions
import { loader as HomeLoader } from "./pages/Home";
import { loader as ClubLoader } from "./pages/Club";

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
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/club/:id",
          element: <Club />,
          loader: ClubLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
