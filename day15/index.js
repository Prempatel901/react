import React,{useState} from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./scr/stores"
import Counter from "./scr/counter";
import { reactslicer } from "./scr/slicer1";
import Counting from "./scr/counting";




function App(){
    // console.log(stores)
    return(
        <>
        <Provider store ={stores}>
            <Counter></Counter>
            <br></br>
            <br></br>
            <br></br>
            <Counting></Counting>

        </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)