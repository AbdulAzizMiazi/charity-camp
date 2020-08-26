import React from 'react';

const Total = (props) => {
    console.log(props.currentTotal,props.currentCharity);
    return (
        <div>
           <h3>Current Total: {props.currentTotal}</h3>
            <h3>Current Charity: {props.currentCharity}</h3>
        </div>
    );
};

export default Total;