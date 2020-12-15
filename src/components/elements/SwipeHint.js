import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";

export default function SwipeHint() {
    return (
        <Box component="div" display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
            <Box display="flex" alignItems="center">
                <Typography variant='subtitle2' align='right'>Swipe to see more</Typography>
                <ChevronRightIcon/>
            </Box>
        </Box>
    )
}