import { useParams } from "react-router";
import { useUserQuery } from "../hooks/reactQuery";

export const  UserPage =  () =>{
    const {id} = useParams<{id:string;}>();
    const {data,isLoading,isError} = useUserQuery(Number(id) || 0);


    if(isLoading){
        return <div>Loaing....</div>
    }

    if(isError){
        return <div>error</div>
    }


    return <div>
     {data?.university} {data?.height}
    </div>
}