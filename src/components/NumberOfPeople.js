import React from 'react';

const NumberOfPeople = ({people, onNumberOfPeopleChange}) => (
    <input
        type='number'
        min='1'
        placeholder='Number of People'
        name='NumberOfPeople'
        value={people}
        onChange={onNumberOfPeopleChange}
    >
    </input>
);

export default NumberOfPeople;