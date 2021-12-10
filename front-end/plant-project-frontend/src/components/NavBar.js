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
                        <Link to="/Families" className="nav-link">Groepen</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
export default NavBar