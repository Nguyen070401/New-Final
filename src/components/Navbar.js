import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
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
          <div className="link" to="/settings">
            <img
              className="topImg"
              src="https://lh3.googleusercontent.com/a-/AOh14GiqKeEDVUBpg8Kw_zxH5Yc1AwsiQkdC187yff4sog=s360-p-rw-no"
              alt=""
            />
          </div>     
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Navbar
