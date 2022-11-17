import { createSlice } from '@reduxjs/toolkit'

const selectedPage = createSlice({
    name: "SelectedPage",
    initialState: {
        selectedPage: undefined
    },

    reducers: {
        updateSelectedPage: (state, action) => {
            state.selectedPage = action.payload
        },
    }
})

export const {
    updateSelectedPage,
} = selectedPage.actions;

export const selectSelctedPage = (state) => state.selectedPage.selectedPage;

export default selectedPage.reducer;