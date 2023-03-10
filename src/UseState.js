import React, { useState } from "react";

function UseState({name}){
    const [error, setError] = useState(false);
    return (
        <div>
            <h2>
            Remove  {name}
            </h2>
            <p>
                Please enter the security code.
            </p>

            {error && (
                <p>El código es incorrecto</p>
            )}
            <input placeholder="Security Code"/>
            <button
                onClick={() => setError(!error)}
            >Verify</button>
        </div>
    );
}

export {UseState};