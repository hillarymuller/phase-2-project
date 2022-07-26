import React from "react";
import { NavLink } from "react-router-dom";

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "rgb(14, 6, 174)",
    backgroundColor: "#f795be",
    fontWeight: "bold",
    verticalAlign: "center", 
    fontFamily: "Impact, fantasy"
}
function NavBar() {
    return(
        <div>
            <NavLink 
            exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#32103c"
            }}
            to="/">
                Home
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#32103c"
            }}
            to="/items">
                Items to Rent
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#32103c"
            }}
            to="/bag">
                View Diaper Bag
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "#32103c"
            }}
            to="/items/new">
                Add New Item
            </NavLink>
        </div>
    )
}

export default NavBar;