import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="containerFluid footer">
        <div className='' style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div className="copywright">
                <h3>Designed and Developed by Pete Chicchetti</h3>
            </div>
            <div className="copywright">
            <h3>Copyright © {year} Pete Chicchetti</h3>
            </div>
        </div>
        </div>
    )
}

export default Footer;