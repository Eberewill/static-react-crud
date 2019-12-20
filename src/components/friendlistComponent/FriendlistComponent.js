import React from 'react';
import './Friends.css';


function FriendlistComponent(prop){


    return(
       <div id="myapp">
       <ul>
            {prop.list.map((name)=>(
                <li key ={name}> 
                   <span>{name}</span> 
                   <button id="rmvbtn" onClick ={ () => prop.onRemoveFriend(name)}> Remove
                   </button>
                </li>
            ))}
        </ul>
        </div>
    ); 
   


}

export default FriendlistComponent;