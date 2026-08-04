
import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./slice2"

const stores = configureStore({
    reducer: {
        slice2:Cartreducer
    }
})

export default stores