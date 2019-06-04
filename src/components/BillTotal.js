import React from 'react';

const BillTotal = ({ tip, billTotal, isSplit }) => {
    if (!isSplit) {
        return (
            <div>
                <p>Tip <span>${tip}</span></p>
                <p>Total <span>${billTotal}</span></p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Tip <small>(per person)</small> <span>${tip}</span></p>
                <p>Total <small>(per person)</small> <span>${billTotal}</span></p>
            </div>
        )
    }
}

export default BillTotal;