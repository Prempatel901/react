import { useState } from "react";
import { useDispatch } from "react-redux";
import { Increment,Decrement, CustermIncreaser} from "./slicer1";

function Counting(){

    const [num,setNum] = useState("")
    console.log(num)
    const dispatch = useDispatch()

    function handleClick(){
        // console.log(typeof(num))
        dispatch(CustermIncreaser(Number(num)))
        setNum("")
    }


    return(
        <>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default Counting;