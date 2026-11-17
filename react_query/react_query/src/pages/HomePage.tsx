import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { Users } from "../types/users";
import { api } from "../lib/axios";
import { Child } from "../components/child";

export const HomePage = () =>{
    const {data,isLoading,isError,error} = useQuery({

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

    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn : async ()=>{
            const response = await api.post("/users/add",{
                firstName: 'Muhammad',
                lastName: 'Ovi',
                age: 20
            });               
           return response.data; 
        },
        onSuccess: (newUser) =>{
            console.log(newUser);
            return queryClient.invalidateQueries({
                queryKey : ["users"]
            })
        }
    })



    if(isLoading){
        return <div>Loading....</div>
    }

    if(isError){
        return <div>{error.message}</div>
    }

    return <div>
        <div>
            <h1>Tanstack React Query </h1>
        </div>

        {data?.users[0].firstName}
        <br />
        <button onClick={()=>mutate()}>ADD NEW USER</button>
        {data?.users.map(user => {
            return <div key={user.id}>{user.firstName} {user.university}</div>
        })}
         <Child />
    </div>
}