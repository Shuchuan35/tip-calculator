import React from 'react';

const NumberOfPeople = ({ numberOfPeople, onNumberOfPeopleChange, handleNumUpClick, handleNumDnClick }) => (
    <div>
        <p>Split / Number of People</p>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={handleNumDnClick}
                ><i className="fa fa-minus"></i>
                </button>
            </div>
            <input
                type="text"
                className="form-control input-box"
                placeholder="Number of People"
                value={numberOfPeople}
                onChange={onNumberOfPeopleChange}
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={handleNumUpClick}
                ><i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
);

export default NumberOfPeople;