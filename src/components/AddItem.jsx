import React, { useState } from "react";

const AddItem = function ({ add }) {
    const [item, setItem] = useState({ id: "", name: "", price: 0 });

    function addItem(e) {
        e.preventDefault();
        if (item.id && item.name && item.price) {
            add(item);

            setItem({ id: "", name: "", price: 0 });
        }
    }

    return (
        <div className="add-block">
            <form>
                <h3>Add an Item</h3>
                <label>ID</label>
                <input
                    type="text"
                    value={item.id}
                    onChange={(e) => setItem({ ...item, id: e.target.value })}
                />
                <label>Name</label>
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                />
                <label>Price</label>
                <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                        setItem({ ...item, price: e.target.value })
                    }
                    min="0"
                />
                <button className="success-button" onClick={addItem}>Add</button>
            </form>
        </div>
    );
};

export default AddItem;
