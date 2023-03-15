import React, { useEffect, useState } from "react";

const SECURITY_CODE ='paradigma'

function UseState({name}){
    const [value, setValue] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(value)

    useEffect(() => {
        console.log('Empezando el efecto')

        if(!!loading){
            setError(false)                    

            setTimeout(()=>{
                console.log('Empezando validación')       
                if(value === SECURITY_CODE){
                    setLoading(false);
                } else{
                    setLoading(false)
                    setError(true)
                }
                setLoading(false)
                console.log('Terminando validación')
            }, 3000)
        }


        console.log('Terminando el efecto')
    }, [loading])
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
            {loading && (
                <p>Cargando ...</p>
            )}
            <input 
                placeholder="Security Code"
                value={value}
                onChange={event=>{
                    setValue(event.target.value)    
                }}
                />
            <button
                onClick={() => setLoading(!loading)}
            >Verify</button>
        </div>
    );
}

export {UseState};