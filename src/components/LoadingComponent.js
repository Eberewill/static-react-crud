import React from 'react';
import { render } from 'react-dom';



class LoadingComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text: "loading"
        }

        
    }

    render(){
    return <p>{this.state.text}</p>

    }
}


export default  LoadingComponent;