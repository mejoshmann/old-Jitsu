import './Nav.scss';
function Nav() {
    return(
        <div>
            <nav className="nav">
                <div className="nav__home"></div>
                <div className="nav__activity"></div>
                <div className="nav__add"></div>
                <div className="nav__bell"></div>
                <div className="nav__profile"></div>
            </nav>
        </div>
    )
}

export default Nav;