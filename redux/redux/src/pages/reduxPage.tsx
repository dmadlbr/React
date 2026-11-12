import { decrement , increment } from "../redux/slices/counterSlice";
import {useAppSelector,useAppDispatch} from "../hooks/useRedux"

export const ReduxPage = () =>{

    const {value} = useAppSelector((state)=>state.counter);
    const dispatch = useAppDispatch();

    return <div>
        <h1>Redux - State Management</h1>
        <div>
            {value}
        </div>
        <button className="bg-emerald-700 p-2 px-4 text-white rounded"  onClick={() =>(dispatch(increment({value:1})))}>+</button>
         <button className="bg-emerald-700 p-2 px-4 text-white rounded" onClick={() => {dispatch(decrement({ value: 1 }))}}>-</button>
    </div>
}