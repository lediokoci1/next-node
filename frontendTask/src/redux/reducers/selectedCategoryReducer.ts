import { createSlice } from '@reduxjs/toolkit'

const selectedCategory = createSlice({
    name: "SelectedCategory",
    initialState: {
        selectedCategory: '' as string
    },

    reducers: {
        updateSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
    }
})

export const { updateSelectedCategory } = selectedCategory.actions;

export const selectSelectedCategory = (state) => state.selectedCategory.selectedCategory;

export default selectedCategory.reducer;