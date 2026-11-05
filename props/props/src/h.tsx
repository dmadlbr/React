import { useReducer } from "react"

type Action = {
   type: "inc"|"dec"|"rst";
}

const reducer = (state:number|undefined,action:Action) =>{
        if(action.type == "rst"||state==undefined){
            return 0
        }
        if(action.type == "inc"){
            return state + 1;   
        }
        if(action.type == "dec"){
            return state - 1;
        }
        return state;
    }

const darkreducer = (state:string,action:string)=>{
     return state=="dark"?"light":"dark";
     //return action;
     
}
export const App3 = ()=>{
    const [state,dispatch] = useReducer(reducer,0);
    const [darkstate,darkdispatch] = useReducer(darkreducer,"light")
    return <div>
        {state}
        <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
        <div className={`${darkstate == "light"? "bg-white text-blue-400" :"bg-black text-pink-900"}`}>
            <p>ho</p>
            <button onClick={()=>darkdispatch()} className="text-sky-900">mode</button>
        </div>
    </div>
}