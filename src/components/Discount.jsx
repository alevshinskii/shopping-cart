import React from "react";


const Discount=()=>{


    return(
        <div className="discount-block">
            <h3>Discount</h3>
            <div className="current-discount">
                <span>Current: </span>
                <span>0 %</span>
            </div>
            <div className="set-discount">
                <input type="number" min="0" max="100"/>
                <button>Set</button>
            </div>
        </div>
    )
}

export default Discount;