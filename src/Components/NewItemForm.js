import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewItemForm({ onFormSubmit }) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        details: "",
        location: "",
        isFavorite: false,
        price: 0,
        category: "",
        rented: false,
    });


    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }

    function redirect() {
        history.push("/items");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formData.name,
                "image": formData.image,
                "isFavorite": formData.isFavorite,
                "details": formData.details,
                "location": formData.location,
                "price": formData.price,
                "category": formData.category,
                "rented": formData.rented
            })
        })
        .then(r => r.json())
        .then(data => onFormSubmit(data))
        .then(redirect())
    }

    return (
        <section>
         <h3>Add New Item</h3>
         <form onSubmit={handleSubmit}>
             <label>
                 Item Name:
                 <input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 />
             </label>
             <br></br><br></br>
             <label>
                 Image Link:
                 <input
                 type="text"
                 name="image"
                 value={formData.image}
                 onChange={handleChange}
                 />
             </label>
             <br></br><br></br>
             <label>
                 Item Details:
                 <input
                 type="text"
                 name="details"
                 value={formData.details}
                 onChange={handleChange}
                 />
             </label>
             <br></br><br></br>
             <label>
                 $ per Week:
                 <input
                 type="number"
                 name="price"
                 value={formData.price}
                 onChange={handleChange}
                 />
             </label>
             <br></br><br></br>
             <label>
                 Location:
                 <input
                 type="text"
                 name="location"
                 value={formData.location}
                 onChange={handleChange}
                 />
             </label>
             <br></br><br></br>
             <label>
                 Category:
                 <select name="category" value={formData.category} onChange={handleChange}>
                <option value="all">All</option>
                <option value="beach">Beach</option>
                <option value="bedtime">Bedtime</option>
                <option value="mealtime">Mealtime</option>
                <option value="travel">Travel</option>
            </select>
             </label>
             <br></br><br></br>
             <button type="submit">Add Item</button>
         </form>
        </section>
    )
}

export default NewItemForm;