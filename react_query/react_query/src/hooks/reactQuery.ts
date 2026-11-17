import { useQuery } from "@tanstack/react-query";
import type { Users,User } from "../types/users";
import { api } from "../lib/axios";

export const useUsersQuery = () => useQuery({

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

    
export const useUserQuery = (id:number) => useQuery({

        queryKey : ["users",id],
        queryFn : async () =>{
            const res = await api.get<User>(`/users/${id}`);
            return res.data;
        },
        enabled : Boolean(id),
        refetchOnWindowFocus : false,
        retry : 5,
        staleTime : 1000 * 60

    });