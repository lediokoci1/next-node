import { updateSelectedPage } from '@/redux/reducers/selectedPageReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            updateSelectedPage(
                {
                    id: 1,
                    name: 'Shop',
                    isSelected: false,
                    details: [
                        'New',
                        'Sale',
                        'Categories',
                    ]
                }
            )
        )

    }, [])
    return (
        <>Shop</>
    )
}
export default Shop