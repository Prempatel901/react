
import { createSlice } from "@reduxjs/toolkit";

const FoodSlicer = createSlice({
    name: "slice2",
    initialState: {count:0},
    reducers:{
        addItem: (state)=> {state.count++},
        removeItem: (state)=> {state.count--}
    }
})

export default FoodSlicer.reducer;
export const {addItem,removeItem} = FoodSlicer.actions