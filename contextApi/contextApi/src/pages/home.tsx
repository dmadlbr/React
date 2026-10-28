import { useContext } from "react"
import { CounterContext, type ContextValueType } from "../App"
import { Navs } from "../components/nav";



export const HomePage = () =>{
    
    // const value= useContext((CounterContext));
    // console.log(value);

    const {counter,setCounter} = useContext(CounterContext) as ContextValueType;
    return <h1>
        <Navs></Navs>
        <span>homeeeee  {counter}
        </span>
        <button onClick={()=>setCounter(counter+1)}>plus</button>
        <button onClick={()=>{setCounter(counter-1)}}>minus</button>
        </h1>
}