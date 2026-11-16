import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { Users } from "../types/users";
import { api } from "../lib/axios";
import { Child } from "../components/child";

export const HomePage = () =>{
    const {data,isLoading,isError} = useQuery({

        queryKey : ["users"],
        queryFn : async () =>{
            const res = await api.get<Users>("/users");
            return res.data;
        },
        enabled : true,
        refetchOnWindowFocus : false,
        retry : 5,
        staleTime : 1000 * 60

    });

    // const {mutate} = useMutation({
    //     mutationFn : async ()=>{
    //         const response = await api.post("/users/add",{
    //             firstName: 'Muhammad',
    //             lastName: 'Ovi',
    //             age: 250
    //         });               
    //        return response.data; 
    //     },
    //     onSuccess: () =>{
    //         const queryClient = useQueryClient();
    //         queryClient.in
    //     }
    // })



    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>Error</div>
    }

    return <div>
        <div>
            <h1>Tanstack React Query </h1>
        </div>

        {data?.users[0].firstName}
        <br />
         <Child />
    </div>
}