import { useState } from "react";
import { api } from "./assets/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { WeatherType } from "./types/weatherType";
import "./App.css";

export const App = () =>{
   const [city,setCity] = useState("Mexico");
   const {data,isLoading,isError,error} = useQuery<WeatherType>({

        queryKey : ['weather',city],
        queryFn : async () =>{

          const res = await api.get<WeatherType>("/current.json", {params:{
            key : import.meta.env.VITE_API_KEY,
            q : city
          },
          });

          return res.data;

        },
        enabled : true,
        refetchOnWindowFocus : false,
        retry : 5,
        staleTime : 1000 * 60



    });

    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>{error.message}</div>
    }


   return <div className="app">
  <div className="weather-container">
    <input value={city}
    placeholder="Enter your City"
    onChange={(e)=>setCity(e.target.value)} />


    <h3>{data?.location.name}</h3>
    <h3>{data?.location.country}</h3>
    <h3>{data?.current.last_updated}</h3>
    <h3>{data?.current.condition.text}</h3>
    <img
    src={`https:${data?.current.condition.icon}`}
    alt="Weather"
    width="64"
    height="64"
/>
    <h3>{data?.current.condition.code}</h3>
    


   </div>
   </div>
}