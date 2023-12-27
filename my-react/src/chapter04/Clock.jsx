import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>Hi!, Im'm react</h1>
            <p>Now, {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;