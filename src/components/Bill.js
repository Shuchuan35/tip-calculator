import React from 'react';

const Bill = ({onBillChange}) => {
    return (
        <div>
            <p><small>Bill:</small></p>
            <input 
                className='center'
                type='search' 
                placeholder='enter bill $amount'
                name='search'
                onChange={onBillChange}
                >
            </input>
        </div>
    )
}

export default Bill;