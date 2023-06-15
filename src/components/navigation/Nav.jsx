import { Link } from "react-router-dom";
import './Nav.scss';
function Nav() {
    return(
        <div>
            <nav className="nav">
               <Link to="/">
                <div className="nav__home"></div>
                </Link>
                <Link to="/Activity">
                <div className="nav__activity"></div>
                </Link>
                <Link to="/AddTraining">
                <div className="nav__add"></div>
                </Link>

                <div className="nav__bell"></div>
                <Link to="/Profile">
                <div className="nav__profile"></div>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;