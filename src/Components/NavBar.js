import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return(
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/bag">
                View Diaper Bag
            </NavLink>
            <NavLink to="/items/new">
                Add New Item
            </NavLink>
        </div>
    )
}

export default NavBar;