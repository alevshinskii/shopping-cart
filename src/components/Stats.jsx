import React from "react";


const Stats=({items})=>{

    return(
        <div className="stats-block">
            <h3>Statistics</h3>
            <div className="total-items">
                <span>Items: </span>
                <span>{items.length}</span>
            </div>
            <div className="total-price">
                <span>Price: </span>
                <span>{items.reduce((partialSum, item) => partialSum + +item.price, 0)}</span>
            </div>
        </div>
    )
}

export default Stats;