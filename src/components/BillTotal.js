import React from 'react';

const BillTotal = ({ tip, billTotal, numberOfPeople }) => {
    if (numberOfPeople === 1) {
        return (
            < div >
                <p>Tip: {tip}</p>
                <p>Total: {billTotal}</p>
            </div >
        )
    } else {
        return (
            < div >
                <p>Tip per person: {tip}</p>
                <p>Total per person: {billTotal}</p>
            </div >
        )
    }
}

export default BillTotal;