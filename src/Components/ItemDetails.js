import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ item }){
    const { itemId } = useParams();
    console.log(item);
    

    return (
    <div className="card">
       Item: {itemId}
    </div>
    )
}

export default ItemDetails;