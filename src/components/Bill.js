import React from 'react';

const Bill = ({onBillChange}) => {
    return (
        <div >
            <p>Bill</p>
            <input 
                className='input-box'
                type='text' 
                placeholder='enter bill $amount'
                onChange={onBillChange}
                >
            </input>
        </div>
    )
}

export default Bill;