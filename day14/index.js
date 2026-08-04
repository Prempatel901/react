import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./scr/stores"
import Counting from "./scr/counter";




function App(){
    console.log(stores)
    return(
        <>
        <Provider store ={stores}>
            <Counting></Counting>
        </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)