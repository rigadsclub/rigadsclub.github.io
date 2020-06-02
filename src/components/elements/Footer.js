import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Footer() {
    return (
        <Box component='div' m={2}>
            <Typography variant="caption" display="block" gutterBottom align="center">
                Riga Data Science Club, 2020
            </Typography>
        </Box>
    );
}