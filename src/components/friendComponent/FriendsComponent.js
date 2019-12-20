import React from 'react';
import FriendlistComponent from'../friendlistComponent/FriendlistComponent';
import './Friendlist.css';


class FriendsComponent extends React.Component{
    constructor(props){
        super (props)

        this.state = {
            friends : ["Tolu","Wale", "Bello", "Hammid", "Kola", "TOSin"],
            input : ''
        }

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        this.hanleAddFriend = this.hanleAddFriend.bind(this)
        this.onchangelistener = this.onchangelistener.bind(this)
     
    }

    hanleAddFriend (name){
        this.setState((currentState)=>{
            return{
                friends: currentState.friends.concat([this.state.input ]),
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
    render(){
    return(
        <div className="friends"> 
        
    <input type = "text" value={this.state.input} onChange={this.onchangelistener} placeholder="enter friend"></input>
       <button id="rmvbtn" onClick={this.hanleAddFriend}>Submit</button>
            <FriendlistComponent 
            list={this.state.friends}
            onRemoveFriend={this.handleRemoveFriend} 
            inputFriend = {this.hanleAddFriend}
            
            />
            
            </div>
            );
    }
}



export default FriendsComponent;