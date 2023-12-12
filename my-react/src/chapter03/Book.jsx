import React from "react";

const Book = props => {
    return (
        <div>
            <h1>{`This book's name is ${props.name}`}</h1>
            <h2>{`This book is total ${props.numOfPage}`}</h2>
        </div>
    );
}

export default Book;