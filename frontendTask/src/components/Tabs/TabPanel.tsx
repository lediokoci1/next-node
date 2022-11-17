import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { selectSelctedPage, updateSelectedPage } from '@/redux/reducers/selectedPageReducer';
import { useEffect } from 'react';
import monkeyImage from '@/images/monkey.jpg';
import Image from "next/image";
import { updateSelectedCategory } from '@/redux/reducers/selectedCategoryReducer';
import { updateSelectedFood } from '@/redux/reducers/selectedFoodReducer';

interface TabPanelProps {
    pages: any
}

const TabPanel = (props: TabPanelProps) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: unknown, newValue: number) => {
        setValue(newValue);
    };
    const selectedPage = useSelector(selectSelctedPage)

    useEffect(() => {
        props.pages?.forEach((p, i) => p.id === selectedPage?.id && setValue(i))
    }, [selectedPage])

    return (
        <>
            <Image
                src={monkeyImage}
                alt={"monkey"}
                width={90}
                height={75}
            />
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    width: '100%',
                    maxHeight: '100%',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        sx: {

                            backgroundColor: '#b5494d',
                            height: 4,
                        }
                    }}
                    sx={{
                        "& button:active": {
                            backgroundColor: 'white'
                        },
                        "& button:focus": {
                            backgroundColor: 'white'
                        },
                        "& button.Mui-selected": {
                            backgroundColor: 'white',
                            color: 'black',
                        }
                    }}
                >
                    {
                        props.pages?.map((page, index) => {
                            return (
                                <Tab
                                    key={index}
                                    label={page.name}
                                    onClick={() => {
                                        dispatch(updateSelectedPage(page))
                                        dispatch(updateSelectedCategory(undefined))
                                        dispatch(updateSelectedFood(undefined))
                                        router.replace(`/${page.name.toLowerCase()}`)
                                    }}
                                    sx={{
                                        fontSize: 20,
                                        marginLeft: 5,
                                    }}
                                />
                            )
                        }
                        )}
                </Tabs>
            </Box>
        </>

    );
}

export default TabPanel;