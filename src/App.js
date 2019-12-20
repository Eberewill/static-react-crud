import React from 'react';

import './App.css';
import './components/profile/Profile';

import Profile from './components/profile/Profile';


function App() {
  const profile = {
    id : '001',
    name : 'Williams',
    username : 'willex',
    profilePic : 'src/components/profile/garry.jpg'
    

}
  return (
    <div className="App">
      <h1>User Details</h1>
      <Profile
      uid ={profile.id}
      personName ={profile.name}
      username ={profile.username}
      profileimgurl ={profile.profilePic}

      />
    </div>
  );
}

export default App;
