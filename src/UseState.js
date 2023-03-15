import React, { useEffect, useState } from "react";

const SECURITY_CODE ='paradigma'

function UseState({name}){
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false
    })

    console.log(state)

    useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading){

            setTimeout(()=>{
                console.log('Empezando validación')       
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error: false,
                        loading: false})
                } else{
                    setState({
                        ...state,
                        loading: false})
                    setState({
                        ...state,
                        error: true,
                        loading:false
                    })
                }

                console.log('Terminando validación')
            }, 3000)
        }


        console.log('Terminando el efecto')
    }, [state.loading])
    return (
        <div>
            <h2>
            Remove  {name}
            </h2>
            <p>
                Please enter the security code.
            </p>

            {state.error && (
                <p>El código es incorrecto</p>
            )}
            {state.loading && (
                <p>Cargando ...</p>
            )}
            <input 
                placeholder="Security Code"
                value={state.value}
                onChange={event=>{
                    setState({
                        ...state,
                        value: event.target.value})
                }}
                />
            <button
                onClick={() => setState({
                    ...state,
                    loading: true})}
            >Verify</button>
        </div>
    );
}

export {UseState};