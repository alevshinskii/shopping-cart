import React from "react";


const Stats=({items,discount})=>{

    return(
        <div className="stats-block">
            <h3>Statistics</h3>
            <div className="total-items">
                <span>Items: </span>
                <span>{items.length}</span>
            </div>
            <div className="total-price">
                <span style={{marginRight:"5px"}}>Price: </span>
                {
                    discount>0 ?
                    <div>
                        <span style={{textDecoration:"line-through", color:"gray", marginRight:"5px"}}>{items.reduce((partialSum, item) => partialSum + +item.price, 0)}</span>
                        <span style={{color:"red"}}>{items.reduce((partialSum, item) => partialSum + +(item.newPrice ? item.newPrice : item.price), 0)}</span>
                    </div> 
                    :
                    <div>
                        <span>{items.reduce((partialSum, item) => partialSum + +(item.newPrice ? item.newPrice : item.price), 0)}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Stats;