import { api } from "../lib/axios";
import { useEffect, useState } from "react";



export const useFetch = <T>(url:string) =>{

    const [response,setResponse] = useState<{
        data : T | null;
        loading : boolean;
        error : string | unknown;
    }>({data:null, loading:true, error:null});


    useEffect(()=>{
        (async () =>{

            try {
                const res = await api.get<T>(url);
                setResponse({data:res.data , loading:false , error:""})
                // throw error
            }catch(err){
                setResponse({data:null, loading:false, error:err})
            }
        })();

    }),[];

    return [response,setResponse] as const;

}