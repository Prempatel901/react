import { useContext } from "react";
import GlobalContext from "./global";


export default function Third(){
    // const data = useContext(GlobalContext)
    const {count,setCount} = useContext(GlobalContext)


    return(
        <>
        <h2>I am printing {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}