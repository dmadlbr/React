import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {Data,Greet} from "./App.tsx";
import Person from "./App.tsx";
// Person.Age();
// Person.Name();
console.log(Greet());


createRoot(document.getElementById('root')!).render(
  <StrictMode> <Greet /> <br></br>
    <Data /><p>{Person.Name()}</p>
    <p>{Person.Age()}</p>
  </StrictMode>,
)





// ------------------  BASICS ------------------

// import ReactDom from "react-dom/client";
// const container = document.getElementById("root") ;
// const root = ReactDom.createRoot(container!);

// // root.render("hi");
// // root.render(<div>GOOD NIGHT</div>);
// const App = () =>{
//   return "Go and sleep"
// }
// // root.render(<App />);
  
    // root.render seperate aayt use chydal replacing varum.. so use like below
          
              // // root.render(<div>
              // //   <h1>Good morning</h1>
              // //   <p>not interested</p>
              // //   <App />
              // // </div>)

              
              // // root.render(
                      // <>
                // //   <h1>Good morning</h1>
                // //   <p>not interested</p>
                // //   <App />
                // //    </>
                    // )