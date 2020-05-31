import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function BottomWrapper({children}) {
    return (
        <Container>
            <Typography color='secondary'>
                {children}
            </Typography>
        </Container>
    )

}