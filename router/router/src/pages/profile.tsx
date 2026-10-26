import { useSearchParams,useParams } from "react-router";

export const profile = () =>{
    const {id} = useParams<{id:string}>();
    // const [query,_setQuery] = useSearchParams();
    const [query] = useSearchParams();
    console.log(query.get("search"));
    console.log(query.get("time"));

    return <div>
            <h1>PROFILE - {id} </h1>
            <h1>Search - {query.get("search")}</h1>
            <h2>Time - {query.get("time")}</h2>
            </div>
};

// export const Profile = () =>{
//     return <h1>PROFILE</h1>
// } day 1 react with ts