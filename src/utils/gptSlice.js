import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
    name: "gptSearch",
    initialState: {
        ShowGpt: false,
    },
    reducers: {
        ShowGptSearch(state) {
            state.ShowGpt = !state.ShowGpt;
        }
    }
})
export default GptSearch.reducer;
export const {ShowGptSearch} = GptSearch.actions 