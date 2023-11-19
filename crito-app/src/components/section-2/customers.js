import React from 'react';
import Paperz from '../../images/customers/paperz.svg'
import Dorfus from '../../images/customers/dorfus.svg'
import Martino from '../../images/customers/martino.svg'
import Square from '../../images/customers/square.svg'
import Gobona from '../../images/customers/gobona.svg'

function Customers() {
    return (
        <div className="customers-container">
            <img src={Paperz} alt="paperz-icon" />
            <img src={Dorfus} alt="dorfus-icon" />
            <img src={Martino} alt="martino-icon" />
            <img src={Square} alt="square" />
            <img src={Gobona} alt="gabona-icon" />
        </div>
    );
}

export default Customers;
