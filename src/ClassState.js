import React from "react";

class ClassState extends React.Component{
    constructor(){
        super();
        
        this.state = {
            error: false,
        };
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
            <input placeholder="Security Code"/>
            <button
                onClick={() => this.setState({error: !this.state.error})}
            >Verify</button>
        </div>
        );
    }
}

export {ClassState};