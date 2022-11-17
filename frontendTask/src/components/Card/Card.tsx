import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bread from '@/images/bread.png';
import Image from "next/image";

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Image
                    src={bread}
                    alt={"bread"}
                    height={180}
                    style={{ width: '100%' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Whole-Grain Banana Bread
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This one-bowl banana bread -- our 2018 Recipe of the Year -- uses the simplest ingredients, but ...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
