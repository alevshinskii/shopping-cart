import React from "react";
import Item from "./Item";

const ListItems = function({items}){

    return(
        <div className="list-block">
            <h3>Your Cart</h3>
            {
                items.map(item => 
                    <Item item={item} key={item.id}></Item>
                )
            }
        </div>
    )
}
export default ListItems;