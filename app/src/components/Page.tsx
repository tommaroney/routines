import Paper from '@mui/material/Paper';
import type React from 'react';

type Props = {
    children: React.ReactNode
}

export default function Page({children}: Props) {

    return (
        <Paper sx={{ minHeight: "66vh" }}>
            {children}
        </Paper>
    );
}