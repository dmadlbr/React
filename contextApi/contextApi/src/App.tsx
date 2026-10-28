import { createContext, useState } from "react";
import {createBrowserRouter,type RouteObject} from "react-router";
import {HomePage} from "./pages/home";
import {AboutPage} from "./pages/about";
import { RouterProvider } from "react-router/dom";

// const routes = createBrowserRouter([
   const routeData:RouteObject[] = [

          {
            path : "/",
            Component : HomePage
          },
          {
            path:"/about",
            Component : AboutPage
          }
// ])

 ];

 const routes = createBrowserRouter(routeData);

export type ContextValueType = {counter:number,setCounter:React.Dispatch<React.SetStateAction<number>>;}
//  type contextValueType =  {global:string} sample data's type [before buttons]
 export const CounterContext =createContext<ContextValueType | null>(null);

 export const App = () =>{

    // const data = "this is a sample  global data ";
    const [counter,setCounter]=useState(0);
    return <CounterContext.Provider value={{counter,setCounter}}>
          <RouterProvider router={routes} />
    </CounterContext.Provider>

 }

