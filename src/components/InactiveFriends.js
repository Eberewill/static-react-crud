import React from 'react';



function InactiveFriends(prop){


    return(
       <div id="Inactive friends">
           <h1>Inactive friends</h1>
       <ul>
            {prop.list.map((name)=>(
                <li key ={name}> 
                   <span>{name}</span> 
                   <button id="rmvbtn" onClick ={ () => prop.onActivateFriend(name)}> Activate
                   </button>
                </li>
            ))}
        </ul>
        </div>
    ); 
   


}

export default  InactiveFriends;