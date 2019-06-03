import React from 'react';

const InputBox = ({onBillChange}) => {
    return (
        <div>
            <input 
                type='search' 
                placeholder='enter bill $amount'
                name='search'
                onChange={onBillChange}
                >
            </input>
        </div>
    )
}

export default InputBox;