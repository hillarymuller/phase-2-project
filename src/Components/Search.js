import React, { useState } from "react";

function Search() {
const [search, setSearch] = useState("");

    return (
        <form>
            <input 
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search!</button>
        </form>
    )
}

export default Search;