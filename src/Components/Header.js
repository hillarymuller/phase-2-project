import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import NavBar from "./NavBar";

function Header() {
    return (
        <div>
        <h1>header</h1>
        <NavBar />
        <Search />
        <Filter />
        </div>
    )
}

export default Header;