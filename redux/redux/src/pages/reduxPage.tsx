import { decrement , increment } from "../redux/slices/counterSlice";
import {useAppSelector} from "../"

export const ReduxPage = () =>{

    const {value} = useAppSelector((state)=>state.counter)

    return <div>
        <h1>Redux - State Management</h1>
        <div>
            {value}
        </div>
    </div>
}