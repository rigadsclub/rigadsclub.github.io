import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14)
    },
}));

export default function EventSpeaker({name, titles, imagePath, children}) {
    const classes = useStyles();
    return (
        <Box display="flex" width="100%" justifyContent="flex-start" mb={3}>
            <Avatar className={classes.avatar} src={`${process.env.PUBLIC_URL}${imagePath}`} />
            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                <Typography variant="h4">{name}</Typography>
                {
                    titles.map(t => <Typography variant="subtitle1">{t}</Typography>)
                }
                <Box display="flex">
                    {children}
                </Box>
            </Box>
        </Box>
    )
}