import { useDispatch, useSelector } from "react-redux";
import { Increment,Decrement,Reset } from "./slicer1";

function Counter(){

    const count = useSelector((state)=>state.slice1.count)
    // subscribing to the event
    const dispatch = useDispatch()
    

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Incrrement</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}

export default Counter;