import React from 'react';
import './total.css'

const Total = (props) => {
    console.log(props.currentTotal,props.currentCharity);
    return (
        <div className="totalViewer">
            <div className="currentTotal">
                <h3>Current Total:<br/> {props.currentTotal}</h3>
            </div>
            <div className="currentCharity">
                <h3>Current Charity:<br/> {props.currentCharity}</h3>
            </div>           
        </div>
    );
};

export default Total;