import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RigaRealEstateApi from "./realestate/RigaRealEstateApi";
import RigaRealEstateHow from "./realestate/RigaRealEstateHow";
import TopWrapper from "./elements/TopWrapper";
import BottomWrapper from "./elements/BottomWrapper";

const useStyles = makeStyles({
    projectContainer: {
        maxWidth: '1320px',
    },
    header: {
        width: '100%',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'no-wrap'
    },
    title: {
        textAlign: 'left',
    },
    titleHeader: {
        margin: '8px 0 4px 0',
    },
    project: {
    },
    riga: {
        margin: '8px',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo/riga-horizontal.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    ai: {
        margin: '8px',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/avatar/ai.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function RigaRealEstate() {
    return (
        <>
            <TopWrapper>
                <Typography variant="h5" gutterBottom>
                    Machine learning solution that suggests real estate sale and rent price
                </Typography>
            </TopWrapper>
            <BottomWrapper>
                {/*
                <Typography variant='h5'>
                    How it is made
                </Typography>
                <RigaRealEstateHow />
                <Typography variant='h5'>
                    Public API
                </Typography>
                <RigaRealEstateApi />
                */
                }
            </BottomWrapper>
        </>
    );
}