import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import NavBar from "./NavBar";

function Header({ onSearch, onCategoryClick }) {
    return (
        <div>
        <h1>Vacation Baby Rentals</h1>
        <NavBar />
        <Search onSearch={onSearch} />
        <Filter onCategoryClick={onCategoryClick} />
        </div>
    )
}

export default Header;