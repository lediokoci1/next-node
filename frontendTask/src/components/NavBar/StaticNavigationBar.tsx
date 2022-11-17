import React from 'react';
import AppBar from '@mui/material/AppBar';
import { HeaderDetail } from '@/components/Header/HeaderDetail';
import { Header } from '@/components/Header/Header';
import Head from 'next/head'

function ResponsiveAppBar() {
    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: 'inherit',
                width: '100vw',
                maxHeight: '18vh'
            }}
        >
            <Head>
                <title>NextApp</title>
                <meta name="description" content="Ledio's Next App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <HeaderDetail />
        </AppBar>
    );
}
export default ResponsiveAppBar;

