import { useMutation,useQueryClient } from "@tanstack/react-query"
import { api } from "../lib/axios";
import { Child } from "../components/child";
import { useUsersQuery } from "../hooks/reactQuery";
import { useNavigate } from "react-router";

export const HomePage = () =>{
    const {data,isLoading,isError,error} = useUsersQuery();

    const queryClient = useQueryClient();
    const navigate = useNavigate();

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
            return <div onClick={()=>navigate(`/users/${user.id}`)} key={user.id}>{user.firstName} {user.university}</div>
        })}
         <Child />
    </div>
}