import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="first mat JSX" numOfPage={300}></Book>
            <Book name="first mat AWS" numOfPage={400}></Book>
            <Book name="first mat React" numOfPage={500}></Book>
        </div>
    );
}

export default Library;