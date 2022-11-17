import { Grid } from '@mui/material'
import Image from "next/image";
import bread from '@/images/bread.png';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { selectSelctedPage } from '@/redux/reducers/selectedPageReducer';
import { selectSelectedCategory, updateSelectedCategory } from '@/redux/reducers/selectedCategoryReducer';
import { useRouter } from 'next/router';
import { selectSelectedFood, updateSelectedFood } from '@/redux/reducers/selectedFoodReducer';
import { useDispatch, useSelector } from "react-redux";

export const SelectedFood = ({ selectedFood }) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const selectedPage = useSelector(selectSelctedPage)
    const selectedCategory = useSelector(selectSelectedCategory);
    // below showld be used selected food prop instead of static data
    return (
        <Grid container spacing={2} sx={{
            width: '75vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Grid item xs={5}>
                <Grid
                    container
                    spacing={0}
                    sx={{
                        display: 'flex',
                        paddingTop: '15px',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={3}
                        style={{ maxWidth: "max-content" }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            onClick={() => router.replace(`/${selectedPage.name.toLowerCase()}`)}
                            gutterBottom
                            sx={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 650,
                                display: 'flex',
                                paddingTop: '7px',
                                cursor: 'pointer',
                            }}
                        >
                            {selectedPage.name?.toUpperCase()}
                        </Typography>
                        <ArrowForwardIosIcon fontSize='small' sx={{ color: '#b5494d' }} />
                    </Grid>
                    <Grid
                        item xs={4}
                        style={{ maxWidth: "max-content" }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            maxWidth: 'max-content'
                        }}
                        onClick={() => (dispatch(updateSelectedFood(undefined)), dispatch(updateSelectedCategory(undefined)))}
                    >
                        <Typography gutterBottom sx={{
                            fontSize: 20,
                            color: 'black',
                            fontWeight: 650,
                            display: 'flex',
                            paddingTop: '7px',
                            cursor: 'pointer',
                            maxWidth: 'max-content'

                        }} >
                            {/* this in normal conditon is going to be like a const */}
                            {window.location.pathname.split('/').filter((c, i, arr) => i === arr.length - 1)[0]?.toUpperCase()}
                        </Typography>
                        <ArrowForwardIosIcon fontSize='small' sx={{ color: '#b5494d' }} />
                    </Grid>
                    <Grid item
                        xs={3}
                        onClick={() => (dispatch(updateSelectedFood(undefined)))}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            maxWidth: 'max-content'

                        }}>
                        <Typography
                            gutterBottom
                            sx={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 650,
                                display: 'flex',
                                paddingTop: '7px',
                                cursor: 'pointer',
                            }}
                        >
                            {selectedCategory?.toUpperCase()}
                        </Typography>
                    </Grid>
                </Grid>

                <Typography gutterBottom variant="h2" component="div">
                    Whole-Grain Banana Bread
                </Typography>
                <br />
                <br />
                <br />

                <Typography sx={{ fontSize: 18 }} color="text.secondary">
                    This one-bowl banana bread -- our 2018 Recipe of the Year -- uses the simplest ingredients, but ...
                </Typography>

                <Grid
                    container
                    spacing={5}
                    sx={{
                        display: 'flex',
                        paddingTop: '15px',
                        flexDirection: 'row',
                    }}
                >
                    <Grid item xs={1}>
                        <AccessTimeIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom sx={{ fontSize: 14, color: 'black', fontWeight: 750 }} component="div">
                            PREP
                        </Typography>
                        <Typography gutterBottom sx={{ fontSize: 18, color: 'black', fontWeight: 750 }} component="div">
                            10 mins
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom sx={{ fontSize: 14, color: 'black', fontWeight: 750 }} component="div">
                            BRAKE
                        </Typography>
                        <Typography gutterBottom sx={{ fontSize: 18, color: 'black', fontWeight: 750 }} component="div">
                            1hr to 1hr 15mins
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography gutterBottom sx={{ fontSize: 14, color: 'black', fontWeight: 750 }} component="div">
                            TOTAL
                        </Typography>
                        <Typography gutterBottom sx={{ fontSize: 18, color: 'black', fontWeight: 750 }} component="div">
                            1hr 10 mins
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={14}>
                <Image
                    src={bread}
                    alt={"bread"}
                    height={350}
                    width={650}
                />
            </Grid>


        </Grid >
    )
}