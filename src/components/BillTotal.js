import React from 'react';

const BillTotal = ({ tip, billTotal, isSplit }) => {
    if (!isSplit) {
        return (
            <div className='bill-total'>
                <p>Tip <span>${tip}</span></p>
                <p>Total <span>${billTotal}</span></p>
            </div>
        )
    } else {
        // indicates tip/total is per person if split
        return (
            <div className='bill-total'>
                <p>Tip <small>(per person)</small> <span>${tip}</span></p>
                <p>Total <small>(per person)</small> <span>${billTotal}</span></p>
            </div>
        )
    }
}

export default BillTotal;