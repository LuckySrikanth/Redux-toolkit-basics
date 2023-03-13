import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    timer : 0,
    hide : true
}

const basic  = createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        increment(state) {
            state.timer++
        },

        decrement(state) {
            state.timer --
        },

        zero (state) {
            state.timer = 0
        },

        toggle(state) {
            state.hide = !state.hide
        }

    }
})

const store = configureStore({
    reducer : {counter : basic.reducer} 
})

export const storeActions = basic.actions;

export default store