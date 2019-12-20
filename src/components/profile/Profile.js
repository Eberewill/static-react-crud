import React from 'react';
import './Profile.css';

function Profile(props) {
    
  return (
    <div className="Profile">
    <div id="pname">
     <h4>{props.uid}</h4> 

     <h2>{props.personName}</h2> 
    </div>
    <div id="uname">
     <h3>{props.username}</h3> 
    </div>
    <div>
      <img src={props.profileimgurl} alt="Image"/>
    </div>
    </div>
  );
}

export default Profile;
