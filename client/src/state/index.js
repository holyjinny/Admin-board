import { createSlice } from "@reduxjs/toolkit";;

const initialState = {
    mode: "dark",
    userId: "63a2c896d259667480f37539",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;