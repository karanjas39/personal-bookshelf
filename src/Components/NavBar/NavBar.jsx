import { NavLink } from "react-router-dom";
import "../../Styles/navbar.scss";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <p>Bookworm</p>
      <p className="menuBar" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </p>
      {open && <div className="blur" onClick={() => setOpen(false)}></div>}
      <div className={open ? "open" : ""}>
        <p onClick={() => setOpen(false)}>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </p>
        <p onClick={() => setOpen(false)}>
          <NavLink
            to="/mybooks"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            My Books
          </NavLink>
        </p>
      </div>
    </div>
  );
}
