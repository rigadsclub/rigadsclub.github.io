import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles({
    stepContainer: {
        width: '100%',
        maxWidth: '300px',
        paddingRight: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    stepHeader: {
        width: '100%',
        marginLeft: '3px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },
    stepHeaderTitle: {
        marginLeft: '3px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    stepTitle: {
        marginLeft: '3px',
    },
    stepCompleteIcon: {
        color: props => props.complete ? '#18ac2f' : '#dddddd',
        fontWeight: '900',
    },
});

export default function Step({children, icon, title, complete, hideCompleteIcon = false}) {
    const classes = useStyles({complete});
    return (
        <div className={classes.stepContainer}>
            <div className={classes.stepHeader}>
                <div className={classes.stepHeaderTitle}>
                    {icon}
                    <h3 className={classes.stepTitle}>{title}</h3>
                </div>
                {!hideCompleteIcon && <div className={classes.stepCompleteIcon}>
                    <CheckCircleOutlineIcon />
                </div>}
            </div>
            {children}
        </div>
    );
}