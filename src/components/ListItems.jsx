import React from "react";
import Item from "./Item";

const ListItems = function({items, remove}){



    return(
        <div className="list-block">
            <h3>Your Cart</h3>
            <div className="item title">
                <div className="item-id">
                    ID
                </div>
                <div className="item-name">
                    Name
                </div>
                <div className="item-price">
                    Price
                </div>
                <div className="item-actions">
                    <button>
                        <img src="./images/delete.svg" alt="Delete"/>
                    </button>
                </div>
            </div>
            {
                items.map(item => 
                    <Item item={item} key={item.id} remove={remove}></Item>
                )
            }
        </div>
    )
}
export default ListItems;