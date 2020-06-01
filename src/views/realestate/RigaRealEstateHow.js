import React from 'react';
import SvgKaggleMark from "../../components/svg/SvgKaggleMark";
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";
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
                Original Riga real estate dataset
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-data-cleaning-riga-ds-club">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                Data cleaning step-by-step
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-dataset-cleaned">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                Cleaned Riga real estate dataset
            </Link>
            <Link className={classes.link} href="https://www.kaggle.com/dmitryyemelyanov/riga-real-estate-price-prediction-with-tensorflow">
                <div className={classes.icon}>
                    <SvgKaggleMark />
                </div>
                TensorFlow model design step-by-step
            </Link>
        </div>
    );
}