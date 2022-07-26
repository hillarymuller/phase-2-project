import React from "react";
import { NavLink } from "react-router-dom";

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "#011af7",
    backgroundColor: "#f795be",
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
                color: "navy"
            }}
            to="/">
                Home
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "navy"
            }}
            to="/items">
                Items to Rent
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "navy"
            }}
            to="/bag">
                View Diaper Bag
            </NavLink>
            <NavLink      exact
            style={style}
            activeStyle={{
                fontWeight: "bolder",
                color: "navy"
            }}
            to="/items/new">
                Add New Item
            </NavLink>
        </div>
    )
}

export default NavBar;