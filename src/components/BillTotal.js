import React from 'react';

const BillTotal = ({ tip, billTotal, isSplit }) => {
    if (!isSplit) {
        return (
            < div >
                <p>Tip: ${tip}</p>
                <p>Total: ${billTotal}</p>
            </div >
        )
    } else {
        return (
            < div >
                <p>Tip <small>per person</small>: ${tip}</p>
                <p>Total <small>per person</small>: ${billTotal}</p>
            </div >
        )
    }
}

export default BillTotal;