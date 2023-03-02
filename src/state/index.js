import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    appState: ""
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
        },
        setAppState: (state, action) => {
            state.appState = action.payload;
        }
    }
})

export const {setMode, setAppState} = globalSlice.actions;

export default globalSlice.reducer;
