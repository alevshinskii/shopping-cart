import React, { useState } from "react";


const Discount=({current,set})=>{

    const [discount,setDiscount] =useState(0);


    return(
        <div className="discount-block">
            <h3>Discount</h3>
            <div className="current-discount">
                <div className="text">
                    <span style={{marginRight:"5px"}}>Current:</span>
                    <span> {current} %</span>
                </div>
                <button className="danger-button" onClick={(e)=>{e.preventDefault(); set(0); setDiscount(0);}} >Reset</button>
            </div>
            <div className="set-discount">
                <form>
                    <input type="number" min="0" max="100"  onChange={(e)=>setDiscount(e.target.value)} value={discount}/>
                    <button className="success-button" onClick={(e)=>{e.preventDefault();set(discount);}} >Set</button>
                </form>
            </div>
        </div>
    )
}

export default Discount;