import { useFetch } from "../hook/customHook"
import type { ApiResponse } from "../types/comments"

export const CustomHookPage = () =>{
    const [response] = useFetch<ApiResponse>("/comments");


    if(response.loading){
        return <div>Loading..........</div>
    }

    if(response.error){
        return <div>{JSON.stringify(response.error)}</div>
    }


    return <div>
        <p>{response.data?.comments[5].body}</p>
    </div>
}