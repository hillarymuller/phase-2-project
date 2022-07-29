import React, { useState } from "react";


function Search({ search, onSearch }) {

    

const updateSearch = (e) => {
    e.preventDefault();
    onSearch(e);   
}


    return (
    
    <div>     
        <label>Search:  </label> 
            <input 
            type="text"
            placeholder="Search for an item"
            value={search}
            onChange={updateSearch}
            />
          
    </div> 
        
    );
}

export default Search;