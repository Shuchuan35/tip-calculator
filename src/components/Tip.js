import React from 'react';

const Tip = ({ tip, onTipChange }) => (
    <div >
        <p>Tip %</p>
        <input
            className='input-box'
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