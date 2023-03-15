import React from "react";
import { Loading } from "./Loading/Loading";

const SECURITY_CODE ='paradigma'

class ClassState extends React.Component{
    constructor(){
        super();
        
        this.state = {
            value: '',
            error: false,
            loading: false,
        };
    }
    componentDidUpdate(){
        console.log('actualización')
        if(!!this.state.loading){
            setTimeout(()=>{
                console.log('Empezando validación')    
                if(SECURITY_CODE === this.state.value){
                    this.setState({error: false, loading: false});
                } else{
                    this.setState({error: true, loading: false});

                }            
                this.setState({ loading: false})
                console.log('Terminando validación')
            }, 3000)
        }
    }


    render(){
const {error, loading} = this.state
        return(
        <div>
            <h2>
                Remove {this.props.name}
            </h2>
            <p>
                Please enter the security code.
            </p>
            {error && (
                <p>El código es incorrecto</p>
            )}
            {loading && (
               <Loading/>
            )}
            <input 
                placeholder="Security Code"
                onChange={(event) => {
                    this.setState({value: event.target.value})
                    }}
                />
                
            <button
                onClick={() => this.setState({loading: true})}
            >Verify</button>
        </div>
        );
    }
}

export {ClassState};