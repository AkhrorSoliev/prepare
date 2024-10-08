import { Outlet } from "react-router-dom";

// components
import { Navbar } from "../components";

function MainLayuot() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayuot;
