import React from "react";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <header>
            <div className="container" style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Pete Chicchetti</h1>
                <ul style={{ display: "flex", listStyle: "none"}}>
                    <li style={{ marginLeft: "10px" }} onClick={showAbout}>About</li>
                    <li style={{ marginLeft: "10px" }} onClick={showContact}>Contact</li>
                    <li style={{ marginLeft: "10px" }} onClick={showPortfolio}>Portfolio</li>
                    <li style={{ marginLeft: "10px" }} onClick={showResume}>Resume</li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;