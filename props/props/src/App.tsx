import { Fragment } from "react/jsx-runtime";
import { ChildComponent } from "./ChildComponent";
import { useState } from "react";

export const Sum = () =>{
  const n1 = 10;
  const n2 = 20;
  return <div> {n1 + n2}</div>
      //or simply return n1 + n2;
}

 export const App = () =>{

 const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log("clicked",e);
 }

//  function handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//   console.log("clicked",e);
//  } 


  return <Fragment>
    <h1>Good Morning</h1>
    <p>Welcome to Kerala</p>
    <ChildComponent name="dma" age={22} place="kerala" >
      <span>----Iam the children</span> <br />
      <button onClick={handleClick}>Click Me</button>
    </ChildComponent>


  </Fragment>
}
// ---------------------------- useState ---------------------------------

  export const Btn = () =>{
      const stateResponse = useState(1);
      const handleUpdateBtn = () =>{
      const updateFn = stateResponse[1];
      const currentState = stateResponse[0];
      updateFn(currentState + 1);
    }
  
    return <div>
      <p>number is {stateResponse[0]} </p>
      <button onClick={handleUpdateBtn}>Increment by 1</button>
    </div>
 }

//  or
 export const Btn2 = () =>{

      const [state,setstate] = useState<number>(10);
      const handleUpdateBtn = () =>{
      setstate(state + 10);
    }

    return <div>
      <p>number is {state}</p>
      <button onClick={handleUpdateBtn}>Increment by 10</button>
      <p>----------------------------------</p>
    </div>

 }

//         ---------- Counter1 and Counter2 ------------

    type Counter = {
      counter_one : number;
      counter_two : number;
    }

    type CounterType = 1 | 2;

    export const Counters = () =>{
        const [counter,setCounter] = useState<Counter>({counter_one:1,counter_two:2});
        const handleCounter = (num:CounterType) =>{
          if(num == 1){
            setCounter({counter_one:counter.counter_one + 1,counter_two:counter.counter_two});
          }

          if(num == 2){
            setCounter({...counter,counter_two:counter.counter_two + 1});
          }
        }

        return <div>
          <button onClick={()=>handleCounter(1)}>counter 1 : {counter.counter_one}</button>
          <button onClick={()=>handleCounter(2)}>counter 2 : {counter.counter_two}</button>
        </div>
    }


   


