import React from 'react';
import SvgKaggleMark from "../../components/svg/SvgKaggleMark";
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BottomWrapper from "../elements/BottomWrapper";
const useStyles = makeStyles((theme) => ({
    link: {
        display: "flex",
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
    },
    icon: {
        width: 20,
        height: 20,
        margin: '0 5px 6px 3px',
    },
}));

export default function RigaRealEstateHow() {
    const classes = useStyles();
    return (
        <div>
            <Link className={classes.link} href="https://www.kaggle.com/trolukovich/riga-real-estate-dataset">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                <Typography variant='subtitle1'>
                    Original Riga real estate dataset
                </Typography>
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-data-cleaning-riga-ds-club">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                <Typography variant='subtitle1'>
                    Data cleaning step-by-step
                </Typography>
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-dataset-cleaned">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                <Typography variant='subtitle1'>
                    Cleaned Riga real estate dataset
                </Typography>
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-price-prediction-with-tensorflow">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                <Typography variant='subtitle1'>
                    TensorFlow model design step-by-step
                </Typography>
            </Link>
        </div>
    );
}