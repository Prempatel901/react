import { useContext } from "react";
import GlobalContext from "./global";
import Third from "./third";



export default function Second(){
    // const data  =  useContext(GlobalContext)
    const {count,setCount} = useContext(GlobalContext)

    
    

    return(
        <>
            <h2>Kaise hai aap sab log {count}</h2>
            <Third count = {count} setCount = {setCount}/>
        </>
    )
}