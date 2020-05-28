import React, { useState } from 'react';
import "../css/dashboard.css"
const DashBoard = (props) => {
    //  const { userName } = props.location.state
    console.log(props.location.userName)
    const userName = props.location.userName.userName
    const length = userName.length;

    return (
        <div className={length % 2 === 0 ? "even" : "odd"}>
            <h1>Welcome {userName}</h1>
        </div>
    );
};

export default DashBoard;