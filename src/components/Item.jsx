import React from "react";


const Item = ({item}) => {

    function deleteItem(){
        
    }

    return(
        <div className="item">
            <div className="item-id">
                {item.id}
            </div>
            <div className="item-name">
                {item.name}
            </div>
            <div className="item-price">
                {item.price}
            </div>
            <div className="item-actions">
                <a onClick={deleteItem(item.id)}>
                    <img src="./images/delete.svg" alt="Delete"/>
                </a>
            </div>
        </div>
    )
}

export default Item;