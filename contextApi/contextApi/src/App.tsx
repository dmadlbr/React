import { createContext } from "react";
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

 type contextValueType =  {global:string}
 export const CounterContext =createContext<contextValueType | null>(null);

 export const App = () =>{

    const data = "this is a sample  global data ";
    return <CounterContext.Provider value={{global:data}}>
          <RouterProvider router={routes} />
    </CounterContext.Provider>

 }

