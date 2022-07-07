import React, { useState } from "react";


const Item = ({item, remove}) => {

    function removeItem(item){
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
                {
                    item.newPrice < item.price ? 
                    <div>
                        <div>
                            <span style={{textDecoration:"line-through", color:"gray", marginRight:"5px"}}>{item.price}</span>
                        </div>
                        <div>
                            <span style={{color:"red"}}>{item.newPrice}</span>
                        </div>
                    </div>
                          : 
                    <span>{item.price}</span>
                }
            </div>
            <div className="item-actions">
                <button onClick={(e)=>removeItem(item)}>
                    <img src="./images/delete.svg" alt="Delete"/>
                </button>
            </div>
        </div>
    )
}

export default Item;