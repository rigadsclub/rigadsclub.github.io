import Paper from "@material-ui/core/Paper";
import React from "react";

export default function ImageFrame({children}) {
    return (
        <Paper elevation={3} style={{padding: '0.8rem'}}>
            {children}
        </Paper>
    )
}