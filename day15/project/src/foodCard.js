import react from "react"
import { useState } from "react"
import { addItem,removeItem } from "./slice2"
import { useDispatch } from "react-redux"

export default function Foodcard({value}){

    const[inCard,setInCard] = useState(false)
    const dispatch = useDispatch()
    
    function handleClick(){
        if(inCard)
        {
            dispatch(removeItem())
            setInCard(false)
        }
            
        else
        {
            dispatch(addItem())
            setInCard(true)
        }
    }

    return(
        <>
             <h1>{value.food}</h1>
            <h2>{value.Price}</h2>
            <button onClick={handleClick}>{inCard?"Remove":"Add"}</button>
        </>
    )

}