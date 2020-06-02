import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function BottomWrapper({children}) {
    return (
        <Container>
            <Typography component='span' color='secondary'>
                {children}
            </Typography>
        </Container>
    )

}