import { Link } from 'react-router-dom';
import React from "react";


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-brand" style={{ marginLeft: "10px" }}>Plant Project</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    {/* <li class="nav-item">
                        <Link to={{ pathname: "/GroupInfo", state: { id: 1 } }} class="nav-link" > Home</Link>
                    </li> */}
                    <li class="nav-item">
                        <Link to="/Families" class="nav-link">Groepen</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
export default NavBar