import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { selectSelctedPage } from '@/redux/reducers/selectedPageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedFood } from '@/redux/reducers/selectedFoodReducer';
import { updateSelectedCategory } from '@/redux/reducers/selectedCategoryReducer';

export const HeaderDetail = (props) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const selectedpage = useSelector(selectSelctedPage)
    return (<>
        {
            selectedpage &&
            <Container maxWidth={false}
                sx={{
                    backgroundColor: '#f8f5f0',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '9vh'
                }} >
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                        {selectedpage?.details?.map((detail, index: number) => (
                            <Button
                                key={index}
                                onClick={
                                    () => {
                                        dispatch(updateSelectedFood(undefined));
                                        dispatch(updateSelectedCategory(undefined));
                                        router.replace(
                                            `/${selectedpage.name.toLowerCase()}/${detail.toLowerCase()}`
                                        )
                                    }
                                }
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    fontSize: 20,
                                }}
                            >
                                {detail}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container >
        }
    </>
    );
}
