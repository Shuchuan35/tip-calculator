import React from 'react';

const Tip = ({ tip, onTipChange }) => (
    <div>
        <input
            className='center'
            type='number'
            min='0'
            placeholder='tip %'
            name='tip'
            value={tip}
            onChange={onTipChange}
        >
        </input>
    </div>
);

export default Tip;