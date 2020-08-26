import React from 'react';
import './eachUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const EachUser = (props) => {
    // console.log(props);
    const {first, last} = props.userDetails.name;
    const {email, phone, salary} = props.userDetails;
    const img = props.userDetails.picture.large;
    const fullName = `${first} ${last}`;
    return (
        <div className="userInfo">
            <div className="details">
                <h3>{fullName}</h3>
                <p>Phone: {phone}
                <br/>
                Email: {email}
                <br/>
                Annual Salary: ${salary}
                </p>
                <button onClick={()=>props.addMembers(props.userDetails)}><FontAwesomeIcon icon={faPlusSquare}/> add me</button>
            </div>
            <div className="profile-pic">
                <img src={img} alt=""/>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default EachUser;