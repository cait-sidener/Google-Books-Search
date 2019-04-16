import React from "react";

const headerStyle= {
    "maxWidth": "100vw",
    "height": "calc(100vw * .5)",
    "backgroundSize": "cover",
    "position": "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Book Search</h1>
            <p> Search for and Save Books of Interest</p>
        </header>
    )
}

export default Header;