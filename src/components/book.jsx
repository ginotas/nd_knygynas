import React from "react";


function Book(props) {

    return (
        <div className="book">
            <img className="img" src={props.data.img} alt="#"/>
            <div className="title">{props.data.title}</div>
            <div className="author">Author: {props.data.author}</div>
            <div className="price">{props.data.price} eur</div>
            <button className="button" onClick={props.soldout}>Buy It!</button>
        </div>
    )
}







export default Book;