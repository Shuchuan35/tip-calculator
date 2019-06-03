import React from 'react';

const Tip = ({tip, onTipChange}) => (
    <div>
        <input 
                type='text' 
                placeholder='tip %'
                name='tip'
                value={tip}
                onChange={onTipChange}
                >
            </input>
    </div>
);

export default Tip;