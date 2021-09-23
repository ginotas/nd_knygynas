import React from "react";


function Padariau(props) {

    return (
        <div className="book">
            <button className="button" onClick={props.soldout}>Padariau :) </button>
        </div>
    )
}


export default Padariau;