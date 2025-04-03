import { createContext, useReducer } from "react";

export const NotesContext=createContext([]);

export function NotesProvider(props){
    const value=[]
    function reducer(state, action){
        if(action.type=="INSERT"){
             return [...state,action.payload]
        }
        if(action.type=="DELETE"){
            return state.filter((ele)=>{
                return ele.id!=action.payload.id;
            })
        }
        return state

    }
    const[data,dispatch]=useReducer(reducer,value)


    return <NotesContext.Provider value={{data,dispatch}}>{props.children}</NotesContext.Provider>
}

