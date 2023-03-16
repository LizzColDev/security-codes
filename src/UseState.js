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

    const onConfirm = ()=>{
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true
        })
    }

    const onError = () =>{
        setState({
            ...state,
            error: true,
            loading: false
        });
    }

    const onWrite = (newValue) =>{
        setState({
            ...state,
            value: newValue})
    }

    const onCheck = () =>{
        setState({
            ...state,
            loading: true})
    }

    const onDelete=()=>{
        setState({
            ...state,
            deleted:true
        })
    }

    const onReset=()=>{
        setState({
            ...state,
            deleted: false,
            confirmed:false,
            value: ''
        })
    }
    useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading){

            setTimeout(()=>{
                console.log('Empezando validación')       
                if(state.value === SECURITY_CODE){
                    onConfirm();
                } else{
                    onError();
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
                    onWrite(event.target.value)
                }}
                />
            <button
                onClick={() => 
                    onCheck()
                }
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
            onDelete()
        }}>
            Sí, eliminar</button>
        <button onClick={() =>{
            onReset()
        }}>
            No, me arrepentí</button>
        </>
    );
} else {
    return(
        <>
            <p>Eliminado con éxito</p>
            <button onClick={() =>{
            onReset()
        }}>
            Deshacer cambios</button>
        </>
    )
}

}

export {UseState};