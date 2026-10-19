
import { useReducer } from "react";

type Action = {
    type: 'INCREMENT-1'|'DECREMENT-1'|'RESET-1'|'INCREMENT-2'|'DECREMENT-2'|'RESET-2'
}

type Numbers = {
    c1 : number;
    c2 : number;
}

const reducer = (state:Numbers,action:Action):Numbers=>{
    if(action.type == 'RESET-1'){
        return {...state,c1:0};
    }
    if(action.type == 'RESET-2'){
        return {...state,c2:0};
    }

    if(action.type=='INCREMENT-1'){
        return {...state,c1:state.c1 + 1};
    }
     if(action.type=='INCREMENT-2'){
        return {...state,c2:state.c2 + 1};
    }

    if(action.type == "DECREMENT-1"){
        return {...state,c1:state.c1 - 1}
    }
    if(action.type == "DECREMENT-2"){
        return {...state,c2:state.c2 - 1}
    }
    return state;

    //ternary operator
    // return{
    //     ...state,
    //     c1:state.c1 + (action.type == 'RESET-1'? -state.c1 :action.type == 'INCREMENT-1'? +1 : action.type == 'DECREMENT-1'? -1:0),
    //     c2:state.c2 + (action.type == 'RESET-2'? -state.c2 :action.type == 'INCREMENT-2'? +1 : action.type == 'DECREMENT-2'? -1:0)
    // }
}

const handleDarkMode = (_state:string,action:string):string=>{
    return action;
}

export const App2 = () =>{
    const [state,dispatch] = useReducer<Numbers, [action: Action]>(reducer,{c1:0,c2:0});
    const [darkMode,dispatchDarkMode] = useReducer(handleDarkMode,"light");


    return <div>
    <p>num1 is {state.c1}</p> <p>num2 is {state.c2} </p> <br />
        <div className=" flex gap-2 justify-center mt-3">
            <button onClick={()=>dispatch({type:"INCREMENT-1"})} className="bg-green-500 text-white p-2 rounded-lg w-30">Increment num1</button>
            <button onClick={()=>dispatch({type:"DECREMENT-1"})} className="bg-yellow-500 text-white p-2 rounded-lg w-30">Decrement num1</button>
            <button onClick={()=>dispatch({type:"RESET-1"})} className="bg-red-500 text-white p-2 rounded-lg w-30">Reset num1</button>
        </div>
        <div className=" flex gap-2 justify-center mt-3">
            <button onClick={()=>dispatch({type:"INCREMENT-2"})} className="bg-green-500 text-white p-2 rounded-lg w-30">Increment num2</button>
            <button onClick={()=>dispatch({type:"DECREMENT-2"})} className="bg-yellow-500 text-white p-2 rounded-lg w-30">Decrement num2</button>
            <button onClick={()=>dispatch({type:"RESET-2"})} className="bg-red-500 text-white p-2 rounded-lg w-30">Reset num2</button>
        </div>
        <div className={`bg-${darkMode == "light"? "white":"black"}`} >
            <button className="bg-blue-400 text-white p-2 mt-2 w-30 rounded-lg" onClick={()=>dispatchDarkMode(darkMode == "dark"? "light":"dark")}>{darkMode}</button>
        </div>
    </div>


}
