import React from "react";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <header>
            <div className="container" style= {{ display: 'flex', justifyContent: 'Center', alignItems: 'center'}}>
                <h1>Pete Chicchetti</h1>
                <ul>
                    <li onClick={showAbout}>About</li>
                    <li onClick={showContact}>Contact</li>
                    <li onClick={showPortfolio}>Portfolio</li>
                    <li onClick={showResume}>Resume</li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;