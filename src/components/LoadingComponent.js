import React from 'react';
import { render } from 'react-dom';



class LoadingComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text: "loading"
        }

        
    }
    componentDidMount(){
        const stopper = this.state.text +'...'
         this.interval = window.setInterval(()=> {
            if (this.state.text === stopper){
                this.setState({text: 'Loading'})
            
            }
                this.setState((currentState)=>{
                return{
                    text: currentState.text + '.'
                }

            })
        }, 200)

    }
    componentWillUnmount(){
        window.clearInterval(this.interval)
    }

    render(){
    return <p>{this.state.text}</p>

    }
}


export default  LoadingComponent;