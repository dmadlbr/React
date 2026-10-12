import { Fragment } from "react/jsx-runtime";
import { ChildComponent } from "./ChildComponent";
import { use, useState } from "react";

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


    //      ---------- Dark and Light --------

    type Mode = "light" | "dark";

    export const DarkLight = () =>{
      const [value,setValue] = useState<Mode>("light");
      const handleDarkLightBtn = () =>{
            if(value == "light"){
              setValue("dark")
            }
            if(value == "dark"){
              setValue("light")
            }
      }

      return <div>
        <p>{value}</p>
        <button onClick={handleDarkLightBtn}>{value == "light" ? "dark" : "light"}</button>
      </div>
    }



    // ---------- Name change ---------
    type Name = "dheema" | "alex";
  
    export const Fname = () =>{
      const [name,setName] = useState<Name>("dheema");
      const handleName = () =>{
        if(name == "dheema"){
           setName("alex")
        }
        if(name=="alex"){
          setName("dheema")
        }
       
      }

      return <div>
        <p>{name}</p>
        <button onClick={handleName}>change name</button>
      </div>
    }



// ---------------Login Logout---------
    type Log = "login" | "logout";

    export const InOut = ( ) =>{
      const [value, setValue] = useState<Log>("login");
      const handleValue = () =>{
        if(value == "login"){
          setValue("logout")
        }
        if(value == "logout"){
          setValue("login")
        }
      }

      return <div>
        <p>status - {value}
          <button className="bg-blue-400 ms-5 w-25 p-2 text-white" onClick={handleValue}>{value == "login" ? "logout" : "login"}</button>
        </p>
      </div>
    }


    // map
    export const MappedNumbers =() =>{
    const [numbers] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13]);

    return <div>
      <p>---------------</p>
      <p>--------------day 3 of react--------------</p>
      {
      numbers.map((number)=>{
        return <div key ={number}>{number}</div>
      })
    }
    </div>
    }

      //OR
    export const MappingNumbers = () =>{
      const [numbers] = useState<number[]>([1,2,3,4,5,6,7,8,9,10]);
      const MappingDisplay = numbers.map((number)=>{
        return <div key={number}>{number}</div>
      })

      return <div>
        <p>-----------OR----------</p>
        <div>{MappingDisplay} </div>
           <p>----------</p>
      </div>
    }
    
  //Dark and Light Theme
  export const Theme = () =>{
    const [theme,setTheme] =useState<"light" | "dark">("dark");
      if(theme == "light"){
        return <div>
          light theme
        </div>
      }

    return <div>
      dark theme
    </div>
  }

          //&&
  export const ThemeTwo =  () =>{
    const [theme,setTheme] = useState<"light" | "dark">("light");
    return <div>
      <p>-------OR--------</p>
      {theme} <br />
      {theme === "light" && "this is light theme"}
      {theme === "dark" && "this is dark theme"}
      <p>--------------</p>
    </div>
  }
         //ternary operator
  export const ThemeThree = () =>{
    const [theme,setTheme] = useState<"light" | "dark">("light");
    return <div>
      {theme}
      {theme==="light"?<div>this is light mode</div>:<div>this is dark mode</div>}
      <button className="p-3 w-30 bg-amber-900 text-amber-50 rounded-xl" onClick={()=>{
        if(theme === "dark"){
          setTheme("light")
        }else{
          setTheme("dark")
        }
      }}>TOGGLE</button>
      <p>-----------------------------------------------------------------------------------------------------</p>
    </div>
  }

  //bg change
  export const Bg = ()=>{
     const [theme, setTheme] = useState<"light" | "dark">("light");
     const [className,setClassName] = useState<string>("font-mono uppercase bg-white text-black flex flex-col items-center justify-center h-screen");
    return (<div className={className}>
    <button className="p-2 w-40 bg-red-500 text-amber-100 rounded-lg" onClick={()=>{
     
      if(theme === "light"){
        setTheme("dark");
         setClassName(className.replace("bg-white text-black", "bg-black text-white"));
      }else{
         setTheme("light")
          setClassName(className.replace("bg-black text-white", "bg-white text-black"));
      }
    }}>Change BG</button>
    </div>
  )
  }
