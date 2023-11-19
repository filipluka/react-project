import React from 'react';
import '../../style/section2.css'
import Customers from './customers';
import AccountingBox from './accounting-box';

function Section2() {
    return (
        <div className="section-2">
            <Customers />
            <AccountingBox />
        </div>
    );
}

export default Section2;