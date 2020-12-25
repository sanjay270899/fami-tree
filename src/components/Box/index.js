import React from 'react';
import '../../assets/style/Box.css';
import defaultProfile from '../../assets/img/default.jpg';

function Box(props) {

    return (
        <div id="Box">
            <img src={defaultProfile} alt="Profile Photo" />
            <div className="Box-name">{props.name}</div>
        </div>
    )
}

export default Box
