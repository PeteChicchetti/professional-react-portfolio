import React from "react";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <header>
            <div className="containerFluid" style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Pete Chicchetti</h1>
                <ul style={{ display: "flex", listStyle: "none"}}>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showAbout}>About</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showContact}>Contact</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showPortfolio}>Portfolio</li>
                    <li className="nav-list" style={{ marginLeft: "10px" }} onClick={showResume}>Resume</li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;