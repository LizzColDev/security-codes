import React from "react";
import { Loading } from "./Loading/Loading";

class ClassState extends React.Component{
    constructor(){
        super();
        
        this.state = {
            error: false,
            loading: false,
        };
    }
    componentDidUpdate(){
        console.log('actualización')
        if(!!this.state.loading){
            setTimeout(()=>{
                console.log('Empezando validación')                
                this.setState({ loading: false})
                console.log('Terminando validación')
            }, 3000)
        }
    }


    render(){

        return(
        <div>
            <h2>
                Remove {this.props.name}
            </h2>
            <p>
                Please enter the security code.
            </p>
            {this.state.error && (
                <p>El código es incorrecto</p>
            )}
            {this.state.loading && (
               <Loading/>
            )}
            <input placeholder="Security Code"/>
            <button
                onClick={() => this.setState({loading: !this.state.loading})}
            >Verify</button>
        </div>
        );
    }
}

export {ClassState};