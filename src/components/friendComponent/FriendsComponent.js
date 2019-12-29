import React from 'react';
import FriendlistComponent from'../friendlistComponent/FriendlistComponent';
import inactivefriends from '../InactiveFriends'
import './Friendlist.css';
import InactiveFriends from '../InactiveFriends';
import LoadingComponent from '../LoadingComponent';




//window.API = {
  //  fetchFriends(){
       // return new Promise((res, rej)=>{
        //  const friends =  []

         // setTimeout(()=> res (friends), 2000 )

       // })
   // }
//}



class FriendsComponent extends React.Component {
    constructor(props){
        super (props)

        this.state = {
            friends :[],
            Leader : {},
            loading: true,
            
            inactiveFriends:  ["woke", 'Dumebi'],
            input : ''
        }

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        this.hanleAddFriend = this.hanleAddFriend.bind(this)
        this.onchangelistener = this.onchangelistener.bind(this)
        this.clearFriends = this.clearFriends.bind(this)
        this.hanleDeactivateFriend = this.hanleDeactivateFriend.bind(this)
        this.handleonActivateFriend = this.handleonActivateFriend.bind(this)
     
    }

    


    clearFriends(){
        this.setState((currentState)=>{
            return{
                friends: currentState.friends.filter((friends)=> friends = ''),
                inactiveFriends: currentState.inactiveFriends.filter((inactivefriends)=> inactivefriends= '')
            }
        })
    }

    hanleAddFriend (name){
        this.setState((currentState)=>{
            return{
                friends: currentState.friends.concat([currentState.input ]),
                input : ''
            }
        })


    }
    handleRemoveFriend(name){
        this.setState((currentState)=>{
            return{
                friends: currentState.friends.filter((friends)=> friends !== name)

            }
        })
    }
    onchangelistener(e){
        const value = e.target.value
       
            this.setState({
                input : value
            })
    }
    hanleDeactivateFriend(name){
        this.setState((currentState)=>{
            return{
                inactiveFriends: currentState.inactiveFriends.concat(name),
                friends: currentState.friends.filter((friends)=> friends !== name)

            }
        })
    }
    handleonActivateFriend(name){
        this.setState((currentState)=>{
            return{
                friends: currentState.friends.concat(name),
                inactiveFriends: currentState.inactiveFriends.filter((inactiveFriends)=> inactiveFriends !== name)

            }
        })
    }

    componentDidMount() {
       // fetch("https://swapi.co/api/people/1")
       fetch("http://localhost:3000/users")
          .then(res => res.json())
          .then(data => {
           const mUserNames = data.map(usernames => usernames.name)

              this.setState({
                  friends: mUserNames,
                  loading: false
              })

          })
      } 

   
    render(){

        if(this.state.loading === true){
            return <LoadingComponent/>
        }

    return(
        <div className="friends"> 
        
    <input type = "text" value={this.state.input} onChange={this.onchangelistener} placeholder="enter friend"></input>
       <button id="rmvbtn" onClick={this.hanleAddFriend}>Submit</button>

       <div>
             <h3>Leader: {this.state.Leader.title}</h3>
       </div>

       <div><button id="rmvbtn" onClick={this.clearFriends}>Clear All</button></div>
            <FriendlistComponent 
            list={this.state.friends}
            onRemoveFriend={this.handleRemoveFriend} 
            onDeactivateFriend={this.hanleDeactivateFriend}
            />
            <InactiveFriends
            list={this.state.inactiveFriends}
            onActivateFriend={this.handleonActivateFriend}
            

            />
            
            </div>
            );
    }
}



export default FriendsComponent;