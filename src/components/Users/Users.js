import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import EachUser from '../EachUser/EachUser';
import salaryArray from '../../Salary/Salary';
import Total from '../Total/Total';

const Users = () => {

    const[users, setUsers]= useState([]);
    const[addMember, setAddMember] = useState([]);


    function addMembers(memberInfo) {
        const newAdd = [...addMember, memberInfo]
        setAddMember(newAdd);
    }

    let currentTotal = 0;
    let currentCharity = 0;
    
    for (let i = 0; i < addMember.length; i++) {
        currentTotal = addMember[i].salary + currentTotal;
        currentCharity = currentTotal*(5/100);
    }
    currentTotal = currentTotal.toFixed(2);
    currentCharity = currentCharity.toFixed(2);
    // console.log(currentTotal, currentCharity);
        

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data =>{
            // const userArray = data.results;
            // console.log(userArray);
            // userArray.map(eachUserInfo => );
            setUsers(data.results);
        });
    },[])

    for (let i = 0; i < users.length; i++) {
        users[i]['salary'] = salaryArray[i];   
    }
    
    return (
        <div>
            <div className="totalShower">
                <Total currentTotal={currentTotal} currentCharity={currentCharity}></Total>
            </div>
            {/* <div className="usersShower">

            </div> */}
            <h1>User Is Here</h1>
            <p>Total Available Users: {users.length}</p>
            <h3>Total Added: {addMember.length}</h3>
            <ul>
                {
                    users.map(userDetails => 
                        <EachUser userDetails={userDetails} addMembers={addMembers}></EachUser>
                    )
                }
            </ul>
        </div>
    );
};

export default Users;