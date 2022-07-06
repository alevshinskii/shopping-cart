import React from "react";
import Item from "./Item";

const ListItems = function({items, remove}){



    return(
        <div className="list-block">
            <h3>Your Cart</h3>
            {
                items.map(item => 
                    <Item item={item} key={item.id} remove={remove}></Item>
                )
            }
        </div>
    )
}
export default ListItems;