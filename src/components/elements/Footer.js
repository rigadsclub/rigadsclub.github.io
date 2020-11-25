import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";

export default function Footer() {
    return (
        <Container>
            <Typography variant="caption" display="block" gutterBottom align="center">
                Riga Data Science Club, 2020
            </Typography>
        </Container>
    );
}