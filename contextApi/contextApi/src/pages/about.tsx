import { useContext } from "react"
import { CounterContext } from "../App"
import {Navs} from "../components/nav"
import {type ContextValueType} from "../App"

export const AboutPage = () => {
    
    // const value= useContext((CounterContext));
    // console.log(value);

    const {counter,setCounter} = useContext((CounterContext)) as ContextValueType

    return <div>
        <Navs></Navs>
        <h1>aboutttt</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>click</button>
    </div>
}