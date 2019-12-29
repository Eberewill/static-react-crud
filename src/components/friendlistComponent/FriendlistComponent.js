import React from 'react';
import './Friends.css';


function FriendlistComponent(prop){


    return(
       <div id="myapp">
           <h1>Active Friends</h1>
       <ul>
            {prop.list.map((name)=>(
                <li key ={name}> 
                   <span>{name}</span> 
                   <button id="rmvbtn" onClick ={ () => prop.onRemoveFriend(name)}> Remove
                   </button>
                   <button id="rmvbtn" onClick ={ () => prop.onDeactivateFriend(name)}> Deactivate
                   </button>
                </li>
            ))}
        </ul>
        </div>
    ); 
   


}

export default FriendlistComponent;