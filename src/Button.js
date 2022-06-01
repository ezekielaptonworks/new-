import React from "react";

export default function Button() {
    return (
        <>
            <button onMouseLeave={() => console.log("mouse leaved")}>Mouse leave</button>
        </>
    )
}