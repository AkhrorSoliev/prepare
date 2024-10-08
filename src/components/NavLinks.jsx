import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
