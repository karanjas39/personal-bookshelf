import { NavLink } from "react-router-dom";
import "../../Styles/navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <p>Bookworm</p>
      <div>
        <p>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </p>
        <p>
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
