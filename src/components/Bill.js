import React from 'react';

const Bill = ({onBillChange}) => {
    return (
        <div className="input-group mb-3">
            <p>Bill</p>
            <input 
                className='input-box form-control'
                type='text' 
                placeholder='enter bill $0.00'
                onChange={onBillChange}
                >
            </input>
        </div>
    )
}

export default Bill;