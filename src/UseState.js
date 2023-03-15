import React, { useEffect, useState } from "react";

const SECURITY_CODE ='paradigma'

function UseState({name}){
    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading){

            setTimeout(()=>{
                console.log('Empezando validación')       
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true
                    })
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

if (!state.deleted && !state.confirmed) {
    return (
        <div>
            <h2>
            Remove  {name}
            </h2>
            <p>
                Please enter the security code.
            </p>

            {(state.error && !state.loading) && (
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
            >
                Verify
            </button>
        </div>
    );
} else if(!!state.confirmed && !state.deleted){
    return(
        <>
        <p>
            Pedimos confirmación. Estás seguro de eliminar?</p>
        <button onClick={() =>{
            setState({
                ...state,
                deleted:true
            })
        }}>
            Sí, eliminar</button>
        <button onClick={() =>{
            setState({
                ...state,
                confirmed: false,
                value: ''
            })
        }}>
            No, me arrepentí</button>
        </>
    );
} else {
    return(
        <>
            <p>Eliminado con éxito</p>
            <button onClick={() =>{
            setState({
                ...state,
                deleted: false,
                confirmed:false,
                value: ''
            })
        }}>
            Deshacer cambios</button>
        </>
    )
}

}

export {UseState};