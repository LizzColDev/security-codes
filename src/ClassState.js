import React from "react";

class ClassState extends React.Component{
    render(){
        return(
        <div>
            <h2>
                Remove ClassState
            </h2>
            <p>
                Please enter the security code.
            </p>
            <input placeholder="Security Code"/>
            <button>Verify</button>
        </div>
        );
    }
}

export {ClassState};