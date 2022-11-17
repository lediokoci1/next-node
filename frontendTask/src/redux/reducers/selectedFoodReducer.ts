import { createSlice } from '@reduxjs/toolkit'

const selectedFood = createSlice({
    name: "SelectedCategory",
    initialState: {
        selectedFood: '' as string
    },

    reducers: {
        updateSelectedFood: (state, action) => {
            state.selectedFood = action.payload
        },
    }
})

export const { updateSelectedFood } = selectedFood.actions;

export const selectSelectedFood = (state) => state.selectedFood.selectedFood;

export default selectedFood.reducer; 