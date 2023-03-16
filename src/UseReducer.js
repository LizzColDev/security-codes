import React, { useEffect, useReducer } from "react";

const SECURITY_CODE ='paradigma'

function UseReducer({name}){
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log('Empezando el efecto')

        if(!!state.loading){

            setTimeout(()=>{
                console.log('Empezando validación')       
                if(state.value === SECURITY_CODE){
                    dispatch({
                        type: 'CONFIRM'
                    });
                } else{
                    dispatch({
                        type: 'ERROR'
                    });
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
                onChange={(event)=>{
                    dispatch({ type: 'WRITE', payload:event.target.value})
                    // onWrite(event.target.value)
                }}
                />
            <button
                onClick={() => 
                    dispatch({type: 'CHECK'})
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
            dispatch({type: 'DELETE'})
        }}>
            Sí, eliminar</button>
        <button onClick={() =>{
            dispatch({type: 'RESET'})
        }}>
            No, me arrepentí</button>
        </>
    );
} else {
    return(
        <>
            <p>Eliminado con éxito</p>
            <button onClick={() =>{
            dispatch({type: 'RESET'})
        }}>
            Deshacer cambios</button>
        </>
    )
}

}


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducerObject = (state, payload) => ({
    'CONFIRM':{
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    'WRITE':{
        ...state,
        value: payload
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'DELETE': {
        ...state,
        deleted:true
    },
    'RESET': {
        ...state,
        deleted: false,
        confirmed:false,
        value: ''
    }

})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else{
        return state
    }
}


export {UseReducer};
