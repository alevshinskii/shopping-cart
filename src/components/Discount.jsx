import React, { useState } from "react";


const Discount=()=>{

    const [discount,setDiscount] =useState(0);

    const [current,setCurrent]=useState(discount);

    return(
        <div className="discount-block">
            <h3>Discount</h3>
            <div className="current-discount">
                <div className="text">
                    <span>Current: </span>
                    <span> {current} %</span>
                </div>
                <button className="danger-button" onClick={(e)=>{e.preventDefault(); setCurrent(0); setDiscount(0);}} >Reset</button>
            </div>
            <div className="set-discount">
                <form>
                    <input type="number" min="0" max="100"  onChange={(e)=>setDiscount(e.target.value)} value={discount}/>
                    <button className="success-button" onClick={(e)=>{e.preventDefault();setCurrent(discount);}} >Set</button>
                </form>
            </div>
        </div>
    )
}

export default Discount;