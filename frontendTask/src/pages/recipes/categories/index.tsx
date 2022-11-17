import * as React from 'react';
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCategory, updateSelectedCategory } from '@/redux/reducers/selectedCategoryReducer';
import { selectSelectedFood, updateSelectedFood } from '@/redux/reducers/selectedFoodReducer';
import { SelectedFood } from '@/components/Data/SelectedData/SelectedFood';
import ActionAreaCard from '@/components/Card/card';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Categories() {
    const dispatch = useDispatch();
    const selectedFood = useSelector(selectSelectedFood);
    const selectedCategory = useSelector(selectSelectedCategory);

    return (
        <Container maxWidth={false}
            sx={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            {
                !selectedFood ?
                    !selectedCategory ?
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                {['bread', 'bread', 'bread'].map((c, i) => {
                                    return (
                                        <Item
                                            key={i}
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => dispatch(updateSelectedCategory(c))}
                                        >
                                            {c}
                                        </Item>
                                    )
                                })
                                }
                            </Stack>
                        </Box>
                        :
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}
                        >
                            {
                                //lets supose we have 3 products with category we selected
                                [1, 2, 3].map((c, i) => {
                                    return (
                                        <Item
                                            key={i}
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => dispatch(updateSelectedFood(c))}
                                        >
                                            <ActionAreaCard key={i} />
                                        </Item>
                                    )

                                })
                            }
                        </Box>
                    : <SelectedFood selectedFood={selectedFood} />
            }
        </Container >

    )
}
