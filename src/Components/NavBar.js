import React from "react";
import { NavLink } from "react-router-dom";

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "#20B2AA",
    fontWeight: "bold",
    verticalAlign: "center"
}
function NavBar() {
    return(
        <div>
            <NavLink 
            exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "magenta"
            }}
            to="/">
                Home
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
            to="/bag">
                View Diaper Bag
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
            to="/items/new">
                Add New Item
            </NavLink>
        </div>
    )
}

export default NavBar;