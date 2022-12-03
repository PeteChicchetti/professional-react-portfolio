import React from "react";

const Nav = ({showAbout, showPortfolio, showContact, showResume}) => {
    return (
        <header>
            <div className="container">
                <h1>Pete Chicchetti</h1>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;