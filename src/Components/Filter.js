import React from "react";

function Filter({ onCategoryClick }) {
    return (
        <div>
           <label>Category:  </label>
            <select name="category" onChange={(e) => onCategoryClick(e.target.value)}>
                <option value="all">All</option>
                <option value="beach">Beach</option>
                <option value="bedtime">Bedtime</option>
                <option value="mealtime">Mealtime</option>
                <option value="Travel">Travel</option>
            </select>
        </div>
    )
}

export default Filter;