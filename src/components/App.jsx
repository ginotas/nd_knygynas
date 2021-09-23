
import React, {useEffect, useState} from "react";
import axios from "axios";
import Book from "./book";


function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then(function (response) {
            setBooks(response.data)
        })
    }, []);

    const soldout = () => {
        alert("Damn, this item is soldout, sorry!")
    }

    return (
        <div>
            <div className="header">Knygynas "Iš po skverno"!</div>
            <div className="books-container">
                 {books.map((book) => (<Book key={book.id} data={book} soldout={soldout}></Book>))}
             </div>
        </div>
    )


}



export default App;