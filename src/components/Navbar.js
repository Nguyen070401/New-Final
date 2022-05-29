import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fas fa-light fa-keyboard"></i>
        10KeyCery
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/login">
             KEYCAPS
          </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">
            ACCESSORY
          </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">      
        <i className="topSearchIcon fas fa-search"></i>
        <i className="topSearchIcon fas fa-shopping-cart"></i>
        <i className="topSearchIcon fas  fa-user"></i>
      </div>
    </div>
  )
}

export default Navbar
