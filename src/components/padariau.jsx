import React from "react";


function Padariau(props) {

    return (
        <div className="book">
            <button className="buttonX" onClick={props.soldout}>Padariau :) </button>
        </div>
    )
}


export default Padariau;