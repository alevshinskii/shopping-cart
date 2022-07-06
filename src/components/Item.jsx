import React from "react";


const Item = ({item, remove}) => {

    function removeItem(item){
        console.log(item);
        remove(item);
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
                <a onClick={()=>removeItem(item)}>
                    <img src="./images/delete.svg" alt="Delete"/>
                </a>
            </div>
        </div>
    )
}

export default Item;