import React from 'react';

const NumberOfPeople = ({ numberOfPeople, onNumberOfPeopleChange }) => (
    <input
        className='center'
        type='number'
        min='1'
        placeholder='Number of People'
        name='numberOfPeople'
        value={numberOfPeople}
        onChange={onNumberOfPeopleChange}
    >
    </input>
);

export default NumberOfPeople;