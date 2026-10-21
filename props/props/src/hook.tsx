// --------useReducer()-------------
import { useReducer, useState } from "react";

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
        <div className={`${darkMode == "light"? "bg-white text-red-500":"bg-black text-green-600"}`} >
            <p>hiiii</p>
            <button className="bg-blue-400 text-white p-2 mt-2 w-30 rounded-lg" onClick={()=>dispatchDarkMode(darkMode == "dark"? "light":"dark")}>{darkMode}</button>
        </div>
    </div>


}


// -------useEffect()---------

import { useEffect } from "react";

type Product = {
    title : string;
    images : string[];
}

export const App4 = () => {

    const [counter1,setCounter1] = useState<number>(0);
    const [counter2,setCounter2] = useState<number>(0);
    const [timer,setTimer] = useState<number>(0);
    const [product,setProduct] = useState<Product | null>(null);
    const [productId,setProductId] = useState<number>(1);
    const [fetching,setFetching] = useState<boolean>(true);

    useEffect(()=>{
        const interval = setInterval(()=>{
           setTimer((timer) => timer + 1)
        },1000)
        return ()=>{
            clearInterval(interval);
        }
    },[counter1]);
// whenever COUNTER 1 changes,speed increases by how many times you clicked the counter1 in 1sec


    const handleFetch = async() =>{
        try{
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        }catch(err){
            return console.log(err);
        }finally{
            setFetching(false);
        }

    }

    useEffect(()=>{
        handleFetch();
    },[productId]);

    const randomId = () => Math.floor(Math.random()*194) + 1;

    return <div className=" flex flex-col gap-3 bg-sky-50 p-5 rounded-3xl">
        <div>
            <p className="text-pink-500"> Counter 1 : {counter1}</p> 
            <p className="text-purple-500"> Counter 2 : {counter2}</p>
        </div>
         
        <div>Timer : {timer} </div>
        <div className="flex justify-center gap-5">
            <button onClick={()=>setCounter1(counter1 + 1) } className="bg-pink-500 text-white p-3 rounded-lg min-w-20">Counter 1</button>
            <button onClick={()=>setCounter2(counter2 + 1)} className="bg-purple-500 text-white p-3 rounded-lg min-w-20">Counter 2</button>
        </div>

        <div className="flex items-center flex-col">
            <img src={product?.images[0]} alt={product?.title} className="h-50 w-50" />
            <h2 className="text-35px">{product?.title}</h2>
            <button onClick={()=>setProductId(randomId())} className="text-[15px] bg-lime-200 text-orange-800 p-2 w-30 rounded-lg">Random Product</button>
        </div>

    </div>
}