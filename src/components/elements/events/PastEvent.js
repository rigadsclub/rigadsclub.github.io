import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ButtonBase from '@material-ui/core/ButtonBase'
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: "none",
        textAlign: "left",
        'a': {
            textDecoration: "none",
        },
        'a:hover': {
            textDecoration: "none",
        }
    },
    button: {
        marginRight: 15,
        marginBottom: 15,
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
    },
    image: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        backgroundImage: props => `url(${process.env.PUBLIC_URL}${props.imageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    icon: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: "bold",
        textDecoration: "none",
        backgroundColor: "#3B5998",
        width: theme.spacing(5),
        height: theme.spacing(5),
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        marginLeft: theme.spacing(1),
    }
}));

export default function PastEvent({id, title, imageURL}) {
    const classes = useStyles({imageURL});
    return (
        <ButtonBase className={classes.button}>
            <Box className={classes.root} display="flex" flexDirection="row" alignItems="center" alignContent="flex-start">
                <div className={classes.icon}>
                    {`#${id}`}
                </div>
                <span className={classes.title}>{title}</span>
            </Box>
        </ButtonBase>
    );
}