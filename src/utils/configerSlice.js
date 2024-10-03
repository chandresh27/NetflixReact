import { createSlice } from "@reduxjs/toolkit";

const Config = createSlice({
    name: "Config",
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLanguage(state, action) {
            state.lang = action.payload
        }
    }
})
export default Config.reducer;
export const {changeLanguage} = Config.actions