import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchStatus: false
    },
    reducers: {
        toggleSearchStatus: (state, action) => {
            state.gptSearchStatus = !state.gptSearchStatus
        }
    }
})

export const { toggleSearchStatus } = gptSlice.actions;

export default gptSlice.reducer;