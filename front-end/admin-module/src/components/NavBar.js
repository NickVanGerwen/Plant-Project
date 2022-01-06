import { Link } from 'react-router-dom';
import React from "react";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand" style={{ marginLeft: "10px" }}>Plant Project</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/AllFamilies" className="nav-link">Groepen</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AllUsers" className="nav-link">Gebruikers</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
export default NavBar