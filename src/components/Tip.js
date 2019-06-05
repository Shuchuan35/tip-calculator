import React from 'react';

const Tip = ({ tip, onTipChange, percentUpClick, percentDownClick }) => (
    <div >
        <p>Tip %</p>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={percentDownClick}
                ><i className="fa fa-minus"></i>
                </button>
            </div>
            <input
                type="text"
                className="form-control input-box"
                placeholder="Tip %"
                value={tip}
                onChange={onTipChange}
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={percentUpClick}
                ><i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
);

export default Tip;