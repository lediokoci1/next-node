import { updateSelectedCategory } from '@/redux/reducers/selectedCategoryReducer'
import { updateSelectedFood } from '@/redux/reducers/selectedFoodReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Recipes() {
    const dispatch = useDispatch()
    useEffect(() => {
        // setDefault selection
        dispatch(updateSelectedCategory(undefined))
        // clear selectedFood
        dispatch(updateSelectedFood(undefined))
    }, [])
    return (
        <>RECIPES / here we can display beautiful UI for best or more used recipes</>
    )
}