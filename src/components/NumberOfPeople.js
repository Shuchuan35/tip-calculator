import React from 'react';

const NumberOfPeople = ({ numberOfPeople, onNumberOfPeopleChange }) => (
    <div >
        <p>Number of People</p>
        <input
            className='input-box'
            type='number'
            min='1'
            placeholder='Number of People'
            name='numberOfPeople'
            value={numberOfPeople}
            onChange={onNumberOfPeopleChange}
        >
        </input>
    </div>
);

export default NumberOfPeople;