import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return(
        <nav className="nav--container">
            
            <i className="nav__logo fa-brands fa-airbnb"></i>
            <h3 className="nav__text">airbnb</h3>
            <div className="nav--linkContainer">
                <li className="nav__pageLink"><NavLink to ='/home'>Home</NavLink></li>
                <li className="nav__pageLink"><NavLink to ='/travelJournal'>Travel Journal</NavLink></li>
                <li className="nav__pageLink"><NavLink to ='/memeGen'>Meme Generator</NavLink></li>
            </div>

            
        </nav>
    )
}